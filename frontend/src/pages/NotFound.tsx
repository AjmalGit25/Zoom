import { useNavigate } from 'react-router-dom';
import { BsCameraVideoOffFill } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-orange-900 to-amber-900 flex flex-col items-center justify-center text-white px-6">

      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mb-6">
        <BsCameraVideoOffFill size={40} className="text-orange-400" />
      </div>

      {/* 404 */}
      <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 leading-none mb-4">
        404
      </span>

      {/* Message */}
      <h1 className="text-2xl font-bold text-white mb-2">Meeting room not found</h1>
      <p className="text-orange-200/70 text-sm text-center max-w-sm mb-8">
        The page you're looking for doesn't exist, was removed, or the meeting link has expired.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-orange-900/50 cursor-pointer text-sm"
        >
          <MdHome size={18} />
          Back to Home
        </button>
        <button
          onClick={() => navigate('/meeting')}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-orange-200 font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer text-sm"
        >
          🚀 Start a Meeting
        </button>
      </div>

      {/* Brand */}
      <div className="absolute bottom-5 flex items-center gap-1.5 text-orange-300/40 text-xs">
        <span>🔥</span>
        <span>ZoomFire</span>
      </div>
    </div>
  );
}
