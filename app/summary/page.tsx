'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SummaryPage() {
  const [summaryData, setSummaryData] = useState<any>(null);
  const [topicData, setTopicData] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('quizSummary');
    const topics = localStorage.getItem('quizTopics');
    if (data) {
      setSummaryData(JSON.parse(data));
    }
    if (topics) {
      const parsed = JSON.parse(topics);
      const chartData = Object.entries(parsed)
        .filter(([_, data]: [string, any]) => data.total > 0)
        .map(([topic, data]: [string, any]) => ({
          topic,
          accuracy: Math.round((data.correct / data.total) * 100)
        }))
        .sort((a, b) => a.accuracy - b.accuracy);
      setTopicData(chartData);
    }
  }, []);

  if (!summaryData) {
    return (
      <div className="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#9ca3af] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-6">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">Assessment Complete!</h2>
            <p className="text-gray-600 text-lg">Session Finalized at {summaryData.endTime}</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <p className="text-sm text-blue-600 font-semibold mb-2">Performance Index</p>
              <p className="text-5xl font-bold text-blue-700">{summaryData.percentage}%</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <p className="text-sm text-green-600 font-semibold mb-2">Points Secured</p>
              <p className="text-5xl font-bold text-green-700">{summaryData.score}/119</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <p className="text-sm text-purple-600 font-semibold mb-2">Time Taken</p>
              <p className="text-5xl font-bold text-purple-700">{summaryData.time}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl mb-8">
            <h3 className="text-xl font-bold mb-4">Session Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Student:</span>
                <span className="font-semibold">{summaryData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Questions:</span>
                <span className="font-semibold">199</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Correct:</span>
                <span className="font-semibold text-green-600">{summaryData.score}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wrong:</span>
                <span className="font-semibold text-red-600">{summaryData.total - summaryData.score}</span>
              </div>
            </div>
          </div>

          {topicData.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold mb-4">Topic Proficiency</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topicData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="topic" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="accuracy" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => window.location.href = '/review'}
              className="flex-1 bg-navy text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition"
            >
              Review Modules - Learning Review
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="flex-1 bg-gray-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-700 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
