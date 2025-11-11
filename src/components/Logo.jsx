export function Logo() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF9800', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF5722', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2196F3', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1976D2', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4CAF50', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#388E3C', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#9E9E9E', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#616161', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Orange Arc - Top Right */}
      <path
        d="M 60 20 A 40 40 0 0 1 95 30"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Blue Arc - Right */}
      <path
        d="M 95 30 A 40 40 0 0 1 100 70"
        fill="none"
        stroke="url(#grad2)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Green Arc - Bottom Right */}
      <path
        d="M 100 70 A 40 40 0 0 1 60 100"
        fill="none"
        stroke="url(#grad3)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Gray Arc - Left */}
      <path
        d="M 60 100 A 40 40 0 0 1 25 45"
        fill="none"
        stroke="url(#grad4)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Center Circle */}
      <circle cx="60" cy="60" r="6" fill="#FF9800" />
    </svg>
  )
}

export default Logo
