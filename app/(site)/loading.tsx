export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-white flex items-center justify-center animate-pulse">
            <span className="text-2xl font-bold text-black tracking-tighter">M</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
            Loading
          </span>
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
} 