import './globals.css';

export const metadata = {
  title: 'StyleQuest - CSS Academy',
  description: 'Elite CSS Assessment Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-softgray">{children}</body>
    </html>
  );
}
