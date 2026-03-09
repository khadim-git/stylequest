'use client';

import { useState, useEffect } from 'react';
import { getAllAttempts, deleteAttempt, clearAllAttempts, getAttemptQuestions } from '@/lib/firestore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CSS_TOPICS } from '@/lib/quiz-topics';

export default function TeacherDashboard({ onBack }: { onBack: () => void }) {
  const [attempts, setAttempts] = useState<any[]>([]);
  const [selectedAttempt, setSelectedAttempt] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [showTopicList, setShowTopicList] = useState<'weak' | 'medium' | 'strong' | null>(null);

  useEffect(() => {
    loadAttempts();
  }, []);

  const loadAttempts = async () => {
    const data = await getAllAttempts();
    setAttempts(data);
  };

  const handleDelete = async (id: string) => {
    await deleteAttempt(id);
    loadAttempts();
  };

  const handleClearAll = async () => {
    if (confirm('Delete all student records?')) {
      await clearAllAttempts();
      loadAttempts();
    }
  };

  const viewDetails = async (attempt: any) => {
    const qs = await getAttemptQuestions(attempt.id);
    setQuestions(qs);
    setSelectedAttempt(attempt);
  };

  if (selectedAttempt) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => setSelectedAttempt(null)} className="mb-4 text-blue-600 hover:underline">
            ← Back to Dashboard
          </button>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold mb-2">{selectedAttempt.participantName}</h2>
            <p className="text-gray-600">Score: {selectedAttempt.score}/{selectedAttempt.totalQuestions} ({selectedAttempt.percentageScore}%)</p>
            <p className="text-gray-600">Duration: {Math.floor(selectedAttempt.durationTakenSeconds / 60)}m {selectedAttempt.durationTakenSeconds % 60}s</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Incorrect Answers</h3>
            {questions.filter(q => !q.isCorrect).map((q, i) => (
              <div key={i} className="mb-6 p-4 border-l-4 border-red-500 bg-red-50">
                <p className="font-semibold mb-2">{q.questionText}</p>
                <p className="text-sm text-red-700">Selected: {q.options[q.selectedOptionIndex]}</p>
                <p className="text-sm text-green-700">Correct: {q.options[q.correctOptionIndex]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const aggregateTopicStats = () => {
    const stats: Record<string, { correct: number; total: number }> = {};
    CSS_TOPICS.forEach(topic => {
      stats[topic] = { correct: 0, total: 0 };
    });

    attempts.forEach(attempt => {
      Object.entries(attempt.topicStats || {}).forEach(([topic, data]: [string, any]) => {
        if (stats[topic]) {
          stats[topic].correct += data.correct;
          stats[topic].total += data.total;
        }
      });
    });

    return Object.entries(stats)
      .map(([topic, data]) => {
        const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        return {
          topic,
          accuracy,
          attempts: data.total,
          status: accuracy < 50 ? 'weak' : accuracy < 75 ? 'medium' : 'strong',
        };
      })
      .sort((a, b) => a.accuracy - b.accuracy);
  };

  const chartData = aggregateTopicStats();

  if (showTopicList) {
    const topics = chartData.filter(d => d.status === showTopicList);
    const statusLabel = showTopicList === 'weak' ? 'Weak' : showTopicList === 'medium' ? 'Medium' : 'Strong';
    const statusColor = showTopicList === 'weak' ? 'red' : showTopicList === 'medium' ? 'yellow' : 'green';
    
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => setShowTopicList(null)} className="mb-4 text-blue-600 hover:underline">
            ← Back to Dashboard
          </button>
          
          <div className={`bg-${statusColor}-50 rounded-lg shadow p-6 border-l-4 border-${statusColor}-500`}>
            <h2 className={`text-2xl font-bold text-${statusColor}-700 mb-4`}>{statusLabel} Topics ({topics.length})</h2>
            <div className="space-y-3">
              {topics.map((topic, i) => (
                <div key={i} className="bg-white p-4 rounded border-l-4 border-gray-300">
                  <p className="font-semibold">{topic.topic}</p>
                  <p className="text-sm text-gray-600">Accuracy: {topic.accuracy}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <div className="space-x-3">
            <button onClick={handleClearAll} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Clear All Records
            </button>
            <button onClick={onBack} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
              Back
            </button>
          </div>
        </div>

        {chartData.length > 0 && (
          <>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Overall CSS Performance</h2>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {(() => {
                  const weakTopics = chartData.filter(d => d.status === 'weak');
                  const mediumTopics = chartData.filter(d => d.status === 'medium');
                  const strongTopics = chartData.filter(d => d.status === 'strong');
                  return (
                    <>
                      <div className="bg-red-50 p-4 rounded border-l-4 border-red-500 cursor-pointer hover:bg-red-100" onClick={() => setShowTopicList('weak')}>
                        <p className="text-red-700 font-semibold">Weak Topics</p>
                        <p className="text-2xl font-bold text-red-600">{weakTopics.length}</p>
                        <p className="text-xs text-gray-600 mt-2">Click to view</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 cursor-pointer hover:bg-yellow-100" onClick={() => setShowTopicList('medium')}>
                        <p className="text-yellow-700 font-semibold">Medium Topics</p>
                        <p className="text-2xl font-bold text-yellow-600">{mediumTopics.length}</p>
                        <p className="text-xs text-gray-600 mt-2">Click to view</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded border-l-4 border-green-500 cursor-pointer hover:bg-green-100" onClick={() => setShowTopicList('strong')}>
                        <p className="text-green-700 font-semibold">Strong Topics</p>
                        <p className="text-2xl font-bold text-green-600">{strongTopics.length}</p>
                        <p className="text-xs text-gray-600 mt-2">Click to view</p>
                      </div>
                    </>
                  );
                })()}
              </div>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="text-blue-700 font-semibold">Average Accuracy</p>
                <p className="text-3xl font-bold text-blue-600">{Math.round(chartData.reduce((sum, d) => sum + d.accuracy, 0) / chartData.length)}%</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Topic Proficiency (All Students)</h2>
              <div className="overflow-x-auto">
                <ResponsiveContainer width="100%" height={Math.max(400, chartData.length * 25)}>
                  <BarChart data={chartData} layout="vertical" margin={{ left: 200, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="topic" type="category" width={190} tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="accuracy" radius={[0, 8, 8, 0]}>
                      {chartData.map((entry, index) => {
                        let color = '#ef4444';
                        if (entry.status === 'medium') color = '#eab308';
                        if (entry.status === 'strong') color = '#22c55e';
                        return <Cell key={`cell-${index}`} fill={color} />;
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>Weak (&lt;50%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span>Medium (50-75%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Strong (≥75%)</span>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Performance Index</th>
                <th className="px-6 py-3 text-left">Points Secured</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map(attempt => (
                <tr key={attempt.id} className="border-t">
                  <td className="px-6 py-4">{attempt.participantName}</td>
                  <td className="px-6 py-4">{attempt.percentageScore}%</td>
                  <td className="px-6 py-4">{attempt.score}/{attempt.totalQuestions}</td>
                  <td className="px-6 py-4">{attempt.endTime ? new Date(attempt.endTime.toDate()).toLocaleDateString() : 'N/A'}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button onClick={() => viewDetails(attempt)} className="text-blue-600 hover:underline">
                      View
                    </button>
                    <button onClick={() => handleDelete(attempt.id)} className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
