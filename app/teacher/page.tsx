'use client';

import TeacherDashboard from '@/components/TeacherDashboard';
import { useRouter } from 'next/navigation';

export default function TeacherPage() {
  const router = useRouter();
  
  return <TeacherDashboard onBack={() => router.push('/')} />;
}
