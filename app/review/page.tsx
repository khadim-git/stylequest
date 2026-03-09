'use client';

import { useEffect, useState } from 'react';

export default function ReviewPage() {
  const [reviewData, setReviewData] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('quizReview');
    if (data) {
      setReviewData(JSON.parse(data));
    }
  }, []);

  if (!reviewData.length) {
    return (
      <div className="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const correctCount = reviewData.filter(q => q.isCorrect).length;
  const wrongCount = reviewData.filter(q => !q.isCorrect).length;

  return (
    <div className="min-h-screen bg-[#9ca3af] p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold tracking-tight">Learning Review</h1>
            <div className="flex gap-3">
              <button
                onClick={() => window.location.href = '/summary'}
                className="bg-gray-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-gray-700 transition"
              >
                Back to Summary
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-navy text-white px-6 py-3 rounded-2xl font-bold hover:bg-opacity-90 transition"
              >
                Back to Home
              </button>
            </div>
          </div>
          <div className="flex gap-8 text-center">
            <div className="flex-1 bg-green-50 p-6 rounded-2xl">
              <p className="text-5xl font-bold text-green-600 mb-2">{correctCount}</p>
              <p className="text-gray-600 font-medium">Correct Answers</p>
            </div>
            <div className="flex-1 bg-red-50 p-6 rounded-2xl">
              <p className="text-5xl font-bold text-red-600 mb-2">{wrongCount}</p>
              <p className="text-gray-600 font-medium">Wrong Answers</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {reviewData.map((q, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden border-l-8 ${
                q.isCorrect ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold flex-1">{i + 1}. {q.question}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    q.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {q.isCorrect ? '✓ Correct' : '✗ Wrong'}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  {q.options.map((opt: string, idx: number) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border-2 ${
                        idx === q.correct
                          ? 'bg-green-50 border-green-500'
                          : idx === q.userAnswer && !q.isCorrect
                          ? 'bg-red-50 border-red-500'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{['A', 'B', 'C', 'D'][idx]}.</span>
                        <span className="flex-1">{opt}</span>
                        {idx === q.correct && <span className="text-green-600 font-bold">✓ Correct Answer</span>}
                        {idx === q.userAnswer && !q.isCorrect && <span className="text-red-600 font-bold">✗ Your Answer</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-4 rounded-2xl">
                  <p className="text-sm font-semibold text-blue-900 mb-1">Explanation:</p>
                  <p className="text-blue-800">{q.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
