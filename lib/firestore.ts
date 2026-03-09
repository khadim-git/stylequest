import { collection, addDoc, getDocs, doc, writeBatch, deleteDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { CSS_TOPICS } from './quiz-topics';

export async function saveQuizAttempt(participantId: string, name: string, questions: any[], answers: (number | number[])[], startTime: Date, duration: number) {
  const topicStats: Record<string, { correct: number; total: number }> = {};
  
  CSS_TOPICS.forEach(topic => {
    topicStats[topic] = { correct: 0, total: 0 };
  });

  let score = 0;
  questions.forEach((q, i) => {
    if (topicStats[q.topic]) {
      topicStats[q.topic].total++;
      const a = answers[i];
      const isCorrect = Array.isArray(q.correct)
        ? Array.isArray(a) && a.length === q.correct.length && q.correct.every((c: number) => (a as number[]).includes(c))
        : a === q.correct;
      
      if (isCorrect) {
        topicStats[q.topic].correct++;
        score++;
      }
    }
  });
  
  await setDoc(doc(db, 'participants', participantId), {
    id: participantId,
    name
  });
  
  const attemptRef = await addDoc(collection(db, 'quizAttempts'), {
    participantId,
    participantName: name,
    score,
    totalQuestions: questions.length,
    percentageScore: Math.round((score / questions.length) * 100),
    durationTakenSeconds: duration,
    status: 'completed',
    startTime,
    endTime: serverTimestamp(),
    topicStats,
  });

  const batch = writeBatch(db);
  questions.forEach((q, i) => {
    const qRef = doc(db, `quizAttempts/${attemptRef.id}/questions`, `q${i}`);
    const a = answers[i];
    const isCorrect = Array.isArray(q.correct)
      ? Array.isArray(a) && a.length === q.correct.length && q.correct.every((c: number) => (a as number[]).includes(c))
      : a === q.correct;
    
    batch.set(qRef, {
      questionText: q.question,
      options: q.options,
      correctOptionIndex: q.correct,
      selectedOptionIndex: answers[i],
      isCorrect,
      topic: q.topic,
      order: i
    });
  });
  await batch.commit();
}

export async function getAllAttempts() {
  const snapshot = await getDocs(collection(db, 'quizAttempts'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function deleteAttempt(id: string) {
  await deleteDoc(doc(db, 'quizAttempts', id));
}

export async function clearAllAttempts() {
  const snapshot = await getDocs(collection(db, 'quizAttempts'));
  const batch = writeBatch(db);
  snapshot.docs.forEach(d => batch.delete(d.ref));
  await batch.commit();
}

export async function getAttemptQuestions(attemptId: string) {
  const snapshot = await getDocs(collection(db, `quizAttempts/${attemptId}/questions`));
  return snapshot.docs.map(doc => doc.data());
}
