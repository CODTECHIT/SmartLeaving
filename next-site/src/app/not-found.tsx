export default function NotFound() {
  return (
    <main className="bg-steel-900 min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-300 mb-6">Page Not Found</h2>
        <p className="text-slate-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn-premium inline-block">
          Go Home
        </a>
      </div>
    </main>
  );
}