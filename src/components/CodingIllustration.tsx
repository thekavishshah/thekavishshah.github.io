import React from "react";

type Props = {
  width?: number;
  className?: string;
};

// Lightweight original SVG illustration with a blue, modern palette.
// Animated elements: screen glow and subtle bob on the mascot.
export default function CodingIllustration({ width = 540, className }: Props) {
  const w = width;
  const h = Math.round((width * 3) / 4);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 1080 810"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="desk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#0b1220" stopOpacity="0" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="chairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f6feb" />
          <stop offset="100%" stopColor="#0b3ea8" />
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd6a8" />
          <stop offset="100%" stopColor="#ffb97a" />
        </linearGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="pant" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Soft oval base shadow */}
      <ellipse cx="540" cy="700" rx="380" ry="80" fill="#000" opacity="0.35" />

      {/* Desk with slight perspective */}
      <g filter="url(#softShadow)">
        <path d="M220 520 L860 520 L840 560 L240 560 Z" fill="url(#desk)" />
        <path d="M240 560 L840 560 L820 582 L260 582 Z" fill="#0ea5e9" opacity="0.3" />
      </g>

      {/* Monitor with thicker frame and light 3D */}
      <g filter="url(#softShadow)">
        <rect x="370" y="200" width="380" height="240" rx="18" fill="#0f172a" stroke="#1e3a8a" strokeWidth="6" />
        <rect x="388" y="220" width="344" height="200" rx="12" fill="#0b1220" />
      </g>

      {/* Editor UI layout */}
      {/* Sidebar (files) */}
      <rect x="392" y="224" width="70" height="192" rx="8" fill="#0f1e40" />
      {[...Array(8)].map((_, i) => (
        <rect key={i} x={402} y={236 + i * 20} width={48} height="10" rx="4" fill="#93c5fd" opacity={0.7} />
      ))}
      {/* Code area */}
      <rect x="468" y="224" width="196" height="140" rx="8" fill="#0e1730" />
      {[...Array(7)].map((_, i) => (
        <rect key={i} x={478} y={236 + i * 18} width={170 - (i % 3) * 30} height="10" rx="4" fill="#38bdf8" opacity="0.85" />
      ))}
      {/* Terminal bottom */}
      <rect x="468" y="368" width="196" height="48" rx="8" fill="#0a1428" />
      {[...Array(3)].map((_, i) => (
        <rect key={i} x={478} y={380 + i * 12} width={170 - i * 40} height="8" rx="4" fill="#22d3ee" opacity="0.9" />
      ))}
      {/* Chat right */}
      <rect x="668" y="224" width="60" height="192" rx="8" fill="#0f1e40" />
      {[...Array(5)].map((_, i) => (
        <rect key={i} x={676} y={236 + i * 34} width={44} height="24" rx="6" fill="#60a5fa" opacity="0.6" />
      ))}
      {/* Mouse cursor */}
      <g>
        <path d="M540 268 L548 304 L556 296 L568 312 L574 308 L562 292 L570 284 Z" fill="#f8fafc" />
        <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 6 -4; 0 0" dur="2.5s" repeatCount="indefinite" />
      </g>
      {/* Screen glow */}
      <rect x="388" y="220" width="344" height="200" rx="12" fill="#38bdf8" opacity="0.08" filter="url(#glow)">
        <animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Monitor stand */}
      <rect x="545" y="440" width="20" height="40" rx="6" fill="#1e3a8a" />
      <rect x="500" y="480" width="110" height="20" rx="8" fill="#1f5dc1" />

      {/* Keyboard */}
      <rect x="430" y="500" width="260" height="16" rx="6" fill="#1e40af" />
      {[...Array(12)].map((_, i) => (
        <rect key={i} x={440 + i * 20} y="503" width="14" height="10" rx="3" fill="#93c5fd" opacity="0.9" />
      ))}

      {/* Chair with more 3D look */}
      <g filter="url(#softShadow)">
        <rect x="300" y="470" width="110" height="80" rx="22" fill="url(#chairGrad)" />
        <rect x="340" y="540" width="50" height="14" rx="7" fill="#0b3ea8" />
        <rect x="355" y="554" width="20" height="48" rx="10" fill="#1f6feb" />
      </g>

      {/* Coder with simple 3D shading */}
      <g filter="url(#softShadow)">
        {/* Head */}
        <circle cx="365" cy="425" r="30" fill="url(#skin)" />
        {/* Hair cap */}
        <path d="M332 428 C340 394 372 396 398 422 C390 410 368 402 348 408 Z" fill="#0f172a" />
        {/* Body */}
        <rect x="328" y="450" width="74" height="66" rx="16" fill="url(#shirt)" />
        {/* Arms */}
        <rect x="318" y="468" width="22" height="18" rx="9" fill="url(#skin)" />
        <rect x="398" y="468" width="22" height="18" rx="9" fill="url(#skin)" />
        {/* Legs */}
        <rect x="334" y="520" width="22" height="46" rx="10" fill="url(#pant)" />
        <rect x="368" y="520" width="22" height="46" rx="10" fill="url(#pant)" />
      </g>

      {/* Desk accessories */}
      <rect x="690" y="492" width="80" height="12" rx="6" fill="#1e3a8a" />
      <rect x="700" y="468" width="14" height="24" rx="4" fill="#60a5fa" />
      <rect x="718" y="468" width="14" height="24" rx="4" fill="#38bdf8" />
      <rect x="736" y="468" width="14" height="24" rx="4" fill="#0284c7" />

      {/* Window background hint */}
      <rect x="180" y="120" width="720" height="360" rx="24" fill="url(#bg)" />

      {/* Mascot bobbing */}
      <g>
        <circle cx="780" cy="520" r="14" fill="#38bdf8">
          <animate attributeName="cy" values="520;516;520" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}


