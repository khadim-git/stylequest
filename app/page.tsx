'use client';

import { useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Quiz from '@/components/Quiz';
import TeacherDashboard from '@/components/TeacherDashboard';

export default function Home() {
  const [view, setView] = useState<'onboarding' | 'quiz' | 'teacher'>('onboarding');
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  const startQuiz = async () => {
    if (!name.trim()) return;
    const { user } = await signInAnonymously(auth);
    setUserId(user.uid);
    setView('quiz');
  };

  if (view === 'teacher') return <TeacherDashboard onBack={() => setView('onboarding')} />;
  if (view === 'quiz') return <Quiz name={name} userId={userId} />;

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-deep p-10">
        <h1 className="text-5xl font-bold text-navy mb-3 tracking-tight">StyleQuest</h1>
        <p className="text-gray-600 mb-8 text-lg">Elite CSS Assessment Platform</p>
        
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-4 border-2 border-gray-300 rounded-2xl mb-5 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-lg"
          onKeyDown={(e) => e.key === 'Enter' && startQuiz()}
        />
        
        <button
          onClick={startQuiz}
          className="w-full bg-navy text-white py-4 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition mb-4 tracking-tight"
        >
          Start 50-Question Assessment
        </button>
      </div>
    </div>
  );
}
