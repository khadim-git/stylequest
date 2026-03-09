'use client';

import { useState, useEffect, useRef } from 'react';
import { fallbackQuestions } from '@/lib/questions';
import { saveQuizAttempt } from '@/lib/firestore';

export default function Quiz({ name, userId }: { name: string; userId: string }) {
  const [questions, setQuestions] = useState(fallbackQuestions.slice(0, 50));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(50).fill(-1));
  const [timeLeft, setTimeLeft] = useState(3000);
  const [finished, setFinished] = useState(false);
  const [startTime] = useState(new Date());
  const [fadeIn, setFadeIn] = useState(true);
  const isTransitioningRef = useRef(false);
  const answersRef = useRef(answers);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isTransitioningRef.current || finished) return;
      
      const key = e.key.toUpperCase();
      const keyMap: Record<string, number> = { '1': 0, '2': 1, '3': 2, '4': 3, A: 0, B: 1, C: 2, D: 3 };
      
      if (key in keyMap) {
        e.preventDefault();
        selectAnswer(keyMap[key]);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [finished]);

  const selectAnswer = (optionIndex: number) => {
    if (isTransitioningRef.current || finished) return;
    
    isTransitioningRef.current = true;
    setFadeIn(false);
    
    setAnswers(prev => {
      const updated = [...prev];
      updated[currentIndex] = optionIndex;
      return updated;
    });

    setTimeout(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next >= 50) {
          finishQuiz();
          return prev;
        }
        setFadeIn(true);
        isTransitioningRef.current = false;
        return next;
      });
    }, 450);
  };

  const finishQuiz = async () => {
    setFinished(true);
    const duration = Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
    await saveQuizAttempt(userId, name, questions, answersRef.current, startTime, duration);
  };

  if (finished) {
    const score = answers.filter((a, i) => a === questions[i].correct).length;
    const percentage = Math.round((score / 50) * 100);
    const endTime = new Date();
    const duration = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;

    const topicStats: Record<string, { correct: number; total: number }> = {};
    questions.forEach((q, i) => {
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = { correct: 0, total: 0 };
      }
      topicStats[q.topic].total++;
      if (answers[i] === q.correct) topicStats[q.topic].correct++;
    });

    const summaryData = {
      name,
      score,
      percentage,
      time: `${minutes}:${seconds.toString().padStart(2, '0')}`,
      endTime: endTime.toLocaleTimeString()
    };

    const reviewData = questions.map((q, i) => ({
      ...q,
      userAnswer: answers[i],
      isCorrect: answers[i] === q.correct
    }));

    localStorage.setItem('quizSummary', JSON.stringify(summaryData));
    localStorage.setItem('quizTopics', JSON.stringify(topicStats));
    localStorage.setItem('quizReview', JSON.stringify(reviewData));
    window.location.href = '/summary';

    return null;
  }

  const q = questions[currentIndex];
  const progress = ((currentIndex + 1) / 50) * 100;

  return (
    <div className="min-h-screen bg-[#9ca3af] flex items-center justify-center p-8">
      <div className="max-w-7xl w-full flex gap-8 items-center">
        {/* Left Timer */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Quest Progress</p>
                <p className="text-white font-bold text-lg">Question {currentIndex + 1} / 50</p>
              </div>
              <div className="text-5xl font-bold text-white">{Math.round(progress)}%</div>
            </div>
            <div className="bg-white/30 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Question Card */}
          <div className={`bg-navy rounded-3xl shadow-2xl overflow-hidden transition-all duration-450 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-navy text-white p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs uppercase tracking-wider text-white/60">Module Assessment</span>
                <span className="text-xs uppercase tracking-wider text-white/60">Step {currentIndex + 1} / 50</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight">{q.question}</h3>
            </div>

            <div className="bg-white p-8 space-y-4">
              {q.options.map((opt: string, i: number) => (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  className="w-full flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {['A', 'B', 'C', 'D'][i]}
                  </div>
                  <span className="text-xl font-medium text-left text-gray-800">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-between items-center text-white/60 text-sm">
            <p>© 2025 StyleQuest. Engineering the future of web design.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition">Instructor Portal</button>
              <button className="hover:text-white transition">Protocols</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar Progress */}
        <div className="flex flex-col items-center gap-3">
          {Array.from({ length: 10 }).map((_, i) => {
            const questionNum = Math.floor(currentIndex / 10) * 10 + i;
            if (questionNum >= 50) return null;
            return (
              <div key={i} className="relative flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    questionNum < currentIndex
                      ? 'bg-navy text-white border-2 border-white'
                      : questionNum === currentIndex
                      ? 'bg-navy text-white border-4 border-white scale-125'
                      : 'bg-white/40 text-white/60 border-2 border-white/40'
                  }`}
                >
                  {questionNum < 9 ? `0${questionNum + 1}` : questionNum + 1}
                </div>
                {i < 9 && questionNum < 49 && <div className="w-0.5 h-6 bg-white/30 my-1" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
