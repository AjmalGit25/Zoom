import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsMicFill, BsMicMuteFill,
  BsCameraVideoFill, BsCameraVideoOffFill,
  BsDisplayFill, BsChatDotsFill,
  BsClipboard, BsCheckLg,
} from 'react-icons/bs';
import { MdCallEnd } from 'react-icons/md';
import Navbar from '../components/Navbar.tsx';

const MEETING_ID = 'ABC-1234-XYZ';

export default function Meeting() {
  const navigate = useNavigate();

  // 1. First, create a local video reference
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(true);
  const [screen, setScreen] = useState(false);
  const [chat, setChat] = useState(false);
  const [copied, setCopied] = useState(false);

  // 2. Ask the browser for Camera + Microphone
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Failed to access camera/microphone:", error);
      }
    };

    startCamera();
  }, []);

  const copyId = () => {
    navigator.clipboard.writeText(MEETING_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMic = () => {
    const stream = streamRef.current;

    if (!stream) return;

    const audioTrack = stream.getAudioTracks()[0];

    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setMic(audioTrack.enabled);
    }
  };

  const toggleCamera = () => {
    const stream = streamRef.current;

    if (!stream) return;

    const videoTrack = stream.getVideoTracks()[0];

    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setCamera(videoTrack.enabled);
    }
  };

  // Leave the Meeting
  const handleLeave = () => {
    // 1. Stop camera + microphone
    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    // 2. Disconnect Socket.IO
    // socket.disconnect();

    // 3. Navigate away
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen bg-linear-to-br from-orange-950 via-orange-900 to-amber-900 text-white pt-20">

      {/* ============================ Navbar ============================ */}
      <Navbar />

      {/* Meeting ID pill */}
      <button
        onClick={copyId}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-1.5 rounded-full text-sm text-orange-200 transition-colors cursor-pointer"
      >
        {copied ? <BsCheckLg className="text-green-400" /> : <BsClipboard className="text-orange-400" />}
        <span className="font-mono tracking-widest">{MEETING_ID}</span>
        <span className="text-orange-300/50 text-xs">{copied ? 'Copied!' : 'Copy'}</span>
      </button>

      {/* Video area */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-black/40 bg-black/40">

          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Camera off overlay */}
          {!camera && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-950/80 gap-3">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                <BsCameraVideoOffFill size={28} className="text-orange-400" />
              </div>
              <span className="text-orange-300 text-sm">Camera is off</span>
            </div>
          )}

          {/* Name tag */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-orange-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            You
          </div>

          {/* Mic indicator */}
          {!mic && (
            <div className="absolute top-3 right-3 bg-red-500/80 backdrop-blur-sm p-1.5 rounded-full">
              <BsMicMuteFill size={12} />
            </div>
          )}
        </div>
      </main>

      {/* Bottom controls */}
      <footer className="flex items-center justify-center gap-3 px-6 py-4 bg-black/20 border-t border-white/10 backdrop-blur-sm">

        <CtrlBtn
          icon={mic ? <BsMicFill size={20} /> : <BsMicMuteFill size={20} />}
          label={mic ? 'Mute' : 'Unmute'}
          active={mic}
          onClick={toggleMic}
        />
        <CtrlBtn
          icon={camera ? <BsCameraVideoFill size={20} /> : <BsCameraVideoOffFill size={20} />}
          label={camera ? 'Stop Video' : 'Start Video'}
          active={camera}
          onClick={toggleCamera}
        />
        <CtrlBtn
          icon={<BsDisplayFill size={20} />}
          label="Share Screen"
          active={screen}
          onClick={() => setScreen((p) => !p)}
        />
        <CtrlBtn
          icon={<BsChatDotsFill size={20} />}
          label="Chat"
          active={chat}
          onClick={() => setChat((p) => !p)}
        />

        {/* End call — separate prominent button */}
        <button
          onClick={() => handleLeave()}
          className="flex flex-col items-center gap-1 bg-red-500 hover:bg-red-400 text-white px-5 py-3 rounded-2xl transition-colors cursor-pointer ml-4"
        >
          <MdCallEnd size={22} />
          <span className="text-[10px] font-medium">End</span>
        </button>
      </footer>
    </div>
  );
}

function CtrlBtn({
  icon, label, active, onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-5 py-3 rounded-2xl transition-all cursor-pointer min-w-18
        ${active
          ? 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
          : 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/30'
        }`}
    >
      {icon}
      <span className="text-[10px] font-medium text-orange-200/70">{label}</span>
    </button>
  );
}
