import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState('');
  const [name, setName] = useState('');

  const handleJoin = () => {
    if (meetingId.trim()) navigate('/meeting');
  };

  const handleCreate = () => navigate('/meeting');

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-950 via-orange-900 to-amber-900 flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="text-white font-bold text-xl tracking-tight">ZoomFire</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-orange-200 hover:text-white text-sm font-medium transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer">
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-6 -mt-10">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          HD Video Meetings — Free Forever
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight max-w-2xl tracking-tight">
          Connect with anyone,{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300">
            anywhere.
          </span>
        </h1>

        <p className="text-orange-200/80 text-lg max-w-md leading-relaxed">
          Crystal-clear video calls, screen sharing, and real-time chat — all in one place.
        </p>

        {/* Card */}
        <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 mt-2 shadow-2xl shadow-black/30">

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/10 border border-white/15 text-white placeholder-orange-300/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition mb-3"
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter meeting ID"
              value={meetingId}
              onChange={(e) => setMeetingId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
              className="flex-1 bg-white/10 border border-white/15 text-white placeholder-orange-300/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition"
            />
            <button
              onClick={handleJoin}
              disabled={!meetingId.trim()}
              className="bg-orange-500 hover:bg-orange-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl transition-colors cursor-pointer text-sm"
            >
              Join
            </button>
          </div>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-orange-300/50 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <button
            onClick={handleCreate}
            className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-900/50 cursor-pointer text-sm tracking-wide"
          >
            🚀 Start a New Meeting
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 mt-4">
          {[['10M+', 'Users'], ['99.9%', 'Uptime'], ['150+', 'Countries']].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-white font-bold text-xl">{val}</div>
              <div className="text-orange-300/60 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 text-orange-300/40 text-xs">
        &copy; {new Date().getFullYear()} ZoomFire. Built with ❤️ and 🔥
      </footer>
    </div>
  );
}
