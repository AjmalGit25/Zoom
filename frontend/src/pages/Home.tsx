import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import { BiSolidVideoPlus } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState('');
  const [name, setName] = useState('');
  const [cardOpen, setCardOpen] = useState(false);

  const handleJoin = () => {
    if (meetingId.trim()) navigate('/meeting');
  };

  const handleCreate = () => navigate('/meeting');

  return (
    <div className="min-h-screen bg-white">

      {/* ============================ Navbar ============================ */}
      <Navbar />

      {/* ==================== Hero Section ==================== */}
      <div className='relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden min-h-screen lg:min-h-screen flex items-center'>
        <div className='absolute inset-0 overflow-hidden px-4 md:px-6 pointer-events-none z-0'>
          <div
            className='absolute -top-40 -left-40 w-96 h-96 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse'
            style={{ transform: "translate(-1.48942px, 6.10778px) translateY(0px)", transition: "transform 0.3s ease-out", animationDelay: "0s" }}
          ></div>
          <div
            className='absolute top-1/2 -right-40 w-96 h-96 bg-linear-to-bl from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse'
            style={{ transform: "translate(0.893649px, -3.66467px) translateY(0px)", transition: "transform 0.3s ease-out", animationDelay: "1s" }}
          ></div>
          <div
            className='absolute bottom-0 left-1/2 w-96 h-96 bg-linear-to-t from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'
            style={{ animationDelay: "2s" }}
          ></div>
          <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]'></div>
        </div>

        <div className='relative z-10 grid lg:grid-cols-2 gap-8 w-full h-full container mx-auto pt-20 sm:pt-32'>
          {/* Left */}
          <div className='w-full h-full space-y-4 md:space-y-8'>
            <div className='inline-flex items-center gap-2 border border-cyan-500/50 bg-cyan-500/20 rounded-full w-fit px-4 py-1.5'>
              <span className='h-2 w-2 bg-cyan-500 rounded-full'></span>
              <span className='text-white/80 font-medium'>Next-Gen Real-time Communication</span>
            </div>
            <h1 className='text-5xl sm:text-6xl font-extrabold text-white leading-tight max-w-2xl tracking-tight'>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300">Zevia</span> for Everyone
            </h1>
            <p className='text-white/80 text-lg max-w-md leading-relaxed'>
              Experience seamless video conferencing with crystal clear audio, screen sharing, real-time chat and HD video —
              <span className='text-violet-400'> all in one place</span> — <span className='text-cyan-400'>all for free</span>.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleCreate}
                className="flex items-center gap-2 bg-linear-to-l from-indigo-500 via-blue-600 to-sky-700 hover:bg-orange-400 text-white font-medium px-6 py-4 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <span>Start a New Meeting</span>
                <FaArrowRight />
              </button>
              <button
                onClick={() => setCardOpen(true)}
                className="flex items-center gap-2 border-2 border-white/10 text-white font-medium px-6 py-4 rounded-2xl cursor-pointer hover:border-cyan-500 transition-colors duration-300 group"
              >
                <BiSolidVideoPlus className='group-hover:text-cyan-400 transition-colors duration-300' />
                <span className='group-hover:text-cyan-400 transition-colors duration-300'>Join a Meeting</span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className='w-full h-full'>
            <img src='./hero-part.png' className='w-full h-auto object-contain object-bottom max-h-full lg:max-h-[90vh] xl:max-h-[95vh] 2xl:max-h-[100vh]' />
          </div>
        </div>
      </div>

      {/* ============================ Join Card Modal ============================ */}
      {cardOpen &&
        <div
          onClick={() => setCardOpen(false)}
          className='absolute inset-0 z-50 bg-black/50 backdrop-blur-sm min-h-screen flex items-center justify-center'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white border-2 border-gray-800 rounded-2xl p-6 mt-2 shadow-2xl shadow-black/30">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border border-gray-300 text-slate-900 font-medium placeholder-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-400/20 transition mb-3"
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter meeting ID"
                value={meetingId}
                onChange={(e) => setMeetingId(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
                className="flex-1 bg-white/20 border border-gray-300 text-slate-900 font-medium placeholder-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-400/20"
              />
            </div>

            <button
              onClick={handleJoin}
              disabled={!meetingId.trim()}
              className="w-full bg-indigo-800 border-t-2 border-t-indigo-400 hover:-translate-y-0.5 hover:bg-indiobgp hover:bg-indigo-900 hover:shadow-md hover:shadow-indigo-500/50 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 mt-4 rounded-xl cursor-pointer transition"
            >
              Join Meeting
            </button>
          </div>
        </div>
      }

      {/* Footer */}
      < footer className="text-center py-5 text-orange-300/40 text-xs" >
        & copy; {new Date().getFullYear()} ZoomFire.Built with ❤️ and 🔥
      </footer >
    </div >
  );
}
