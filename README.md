# StyleQuest - Elite CSS Assessment Platform

A premium, AI-powered 50-question CSS examination platform with real-time teacher analytics.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Create a Firebase project
   - Enable Firestore and Anonymous Authentication
   - Copy `.env.local.example` to `.env.local` and add your credentials

3. Add Firestore Security Rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /quizAttempts/{attemptId} {
      allow read, write: if true;
      match /questions/{questionId} {
        allow read, write: if true;
      }
    }
  }
}
```

4. Run development server:
```bash
npm run dev
```

## Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `GOOGLE_GENAI_API_KEY`
4. Deploy

**Firebase Free Tier Limits:**
- Firestore: 50K reads/day, 20K writes/day
- Auth: Unlimited anonymous users
- Storage: 1GB

For production, monitor usage in Firebase Console to avoid quota exhaustion.

## Features

- 50-question CSS assessment with AI generation fallback
- Keyboard navigation (1-4 or A-D keys)
- Real-time analytics dashboard
- Topic-based proficiency tracking across 42 CSS topics
- Anti-skipping transition lock system
- Anonymous authentication for instant access

## Tech Stack

- Next.js 15 (App Router)
- Firebase (Firestore + Auth)
- Genkit + Gemini 2.5 Flash
- Recharts
- Tailwind CSS
