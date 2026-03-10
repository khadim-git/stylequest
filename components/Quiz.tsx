'use client';

import { useState, useEffect, useRef } from 'react';
import { fallbackQuestions } from '@/lib/questions';
import { saveQuizAttempt } from '@/lib/firestore';

export default function Quiz({ name, userId }: { name: string; userId: string }) {
  const [questions, setQuestions] = useState(fallbackQuestions.slice(0, 10));
  console.log('📚 Total questions:', fallbackQuestions.slice(0, 10).length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | number[])[]>(Array(questions.length).fill(-1));
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
      
      const q = questions[currentIndex];
      const isMulti = Array.isArray(q.correct);
      if (isMulti) return;
      
      const key = e.key.toUpperCase();
      const keyMap: Record<string, number> = { '1': 0, '2': 1, '3': 2, '4': 3, A: 0, B: 1, C: 2, D: 3 };
      
      if (key in keyMap) {
        e.preventDefault();
        selectAnswer(keyMap[key]);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [finished, currentIndex, questions]);

  const selectAnswer = (optionIndex: number) => {
    if (isTransitioningRef.current || finished) return;
    
    const q = questions[currentIndex];
    const isMulti = Array.isArray(q.correct);
    
    if (isMulti) {
      const current = Array.isArray(answers[currentIndex]) ? answers[currentIndex] : [];
      const updated = current.includes(optionIndex)
        ? current.filter(i => i !== optionIndex)
        : [...current, optionIndex];
      
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentIndex] = updated;
        return newAnswers;
      });

      if (updated.length === 3) {
        isTransitioningRef.current = true;
        setFadeIn(false);

        setTimeout(() => {
          setCurrentIndex(prev => {
            const next = prev + 1;
            if (next >= questions.length) {
              finishQuiz();
              return prev;
            }
            setFadeIn(true);
            isTransitioningRef.current = false;
            return next;
          });
        }, 450);
      }
    } else {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentIndex] = optionIndex;
        return newAnswers;
      });

      isTransitioningRef.current = true;
      setFadeIn(false);

      setTimeout(() => {
        setCurrentIndex(prev => {
          const next = prev + 1;
          if (next >= questions.length) {
            finishQuiz();
            return prev;
          }
          setFadeIn(true);
          isTransitioningRef.current = false;
          return next;
        });
      }, 450);
    }
  };

  const nextQuestion = () => {
    if (isTransitioningRef.current || finished) return;
    isTransitioningRef.current = true;
    setFadeIn(false);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next >= questions.length) {
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
    console.log('🌟 Quiz finished!');
    setFinished(true);
    const duration = Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
    console.log('💾 Calling saveQuizAttempt...');
    try {
      await saveQuizAttempt(userId, name, questions, answersRef.current as number[], startTime, duration);
      console.log('✅ saveQuizAttempt completed');
    } catch (error: any) {
      console.error('❌ saveQuizAttempt error:', error.message);
    }
  };

  if (finished) {
    const score = answers.filter((a, i) => {
      const q = questions[i];
      if (Array.isArray(q.correct)) {
        return Array.isArray(a) && a.length === q.correct.length && q.correct.every(c => a.includes(c));
      }
      return a === q.correct;
    }).length;
    
    const percentage = Math.round((score / questions.length) * 100);
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
      
      const a = answers[i];
      if (Array.isArray(q.correct)) {
        if (Array.isArray(a) && a.length === q.correct.length && q.correct.every(c => a.includes(c))) {
          topicStats[q.topic].correct++;
        }
      } else if (a === q.correct) {
        topicStats[q.topic].correct++;
      }
    });

    const summaryData = {
      name,
      score,
      percentage,
      total: questions.length,
      time: `${minutes}:${seconds.toString().padStart(2, '0')}`,
      endTime: endTime.toLocaleTimeString()
    };

    const reviewData = questions.map((q, i) => ({
      ...q,
      userAnswer: answers[i],
      isCorrect: Array.isArray(q.correct) 
        ? Array.isArray(answers[i]) && answers[i].length === q.correct.length && q.correct.every(c => (answers[i] as number[]).includes(c))
        : answers[i] === q.correct
    }));

    localStorage.setItem('quizSummary', JSON.stringify(summaryData));
    localStorage.setItem('quizTopics', JSON.stringify(topicStats));
    localStorage.setItem('quizReview', JSON.stringify(reviewData));
    console.log('✅ Data saved to localStorage');
    // Redirect after a delay to allow logs to show
    setTimeout(() => {
      window.location.href = '/summary';
    }, 1000);

    return null;
  }

  const q = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isMulti = Array.isArray(q.correct);
  const currentAnswer = answers[currentIndex];

  return (
    <div className="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4">
      <div className="max-w-[1400px] w-full flex gap-6 items-start pt-8">
        {/* Left Timer */}
        <div className="flex flex-col items-center pt-16">
          <div className="w-36 h-36 rounded-full border-[6px] border-white flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-[900px]">
          {/* Top Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-3 gap-8">
              <div className="flex-1">
                <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Quest Progress</p>
                <p className="text-white font-bold text-lg">Question {currentIndex + 1} / {questions.length}</p>
              </div>
              <div className="text-6xl font-bold text-white leading-none pt-1">{Math.round(progress)}%</div>
            </div>
            <div className="bg-white/30 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Question Card */}
          <div className={`bg-navy rounded-2xl shadow-2xl overflow-hidden transition-all duration-450 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-navy text-white p-6 pb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-wider text-white/60">Step {currentIndex + 1} / {questions.length}</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight">{q.question}</h3>
            </div>

            <div className="bg-white p-6 space-y-3">
              {q.options.map((opt: string, i: number) => {
                const isSelected = isMulti 
                  ? Array.isArray(currentAnswer) && currentAnswer.includes(i)
                  : currentAnswer === i;

                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`w-full flex items-center gap-4 p-5 rounded-xl transition-all ${
                      isSelected
                        ? 'bg-blue-100 border-2 border-blue-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 ${
                      isSelected
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {isMulti ? (isSelected ? '✓' : '') : ['A', 'B', 'C', 'D'][i]}
                    </div>
                    <span className="text-lg font-medium text-left text-gray-800">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between items-center text-white/60 text-xs">
            <p>© 2025 StyleQuest. Engineering the future of web design.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition">Instructor Portal</button>
              <button className="hover:text-white transition">Protocols</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar Progress */}
        <div className="flex flex-col items-center gap-2 pt-16">
          {Array.from({ length: Math.min(10, questions.length) }).map((_, i) => {
            const questionNum = Math.floor(currentIndex / 10) * 10 + i;
            if (questionNum >= questions.length) return null;
            return (
              <div key={i} className="relative flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    questionNum < currentIndex
                      ? 'bg-navy text-white border-2 border-white'
                      : questionNum === currentIndex
                      ? 'bg-navy text-white border-[3px] border-white ring-2 ring-white/50 scale-110'
                      : 'bg-white/30 text-white/70 border-2 border-white/30'
                  }`}
                >
                  {questionNum + 1}
                </div>
                {i < 9 && questionNum < questions.length - 1 && <div className="w-[2px] h-4 bg-white/30 my-0.5" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
