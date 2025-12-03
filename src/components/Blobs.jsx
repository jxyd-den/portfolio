import React from 'react'

// Night-sky background: SVG starfield with subtle constellation lines
export default function Blobs() {
  return (
    <div className="bg-grad" aria-hidden="true">
      <svg className="starfield" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="#030417" />

        {/* random stars */}
        <g className="stars" fill="#fff" opacity="0.9">
          {/* a collection of small stars, some with different classes for twinkle timing */}
          <circle className="star s1" cx="80" cy="60" r="1.6" />
          <circle className="star s2" cx="140" cy="120" r="1.2" />
          <circle className="star s3" cx="220" cy="80" r="0.9" />
          <circle className="star s1" cx="320" cy="180" r="1.8" />
          <circle className="star s2" cx="420" cy="90" r="1.1" />
          <circle className="star s3" cx="540" cy="140" r="1.3" />
          <circle className="star s1" cx="640" cy="60" r="1.5" />
          <circle className="star s2" cx="740" cy="200" r="1.0" />
          <circle className="star s3" cx="840" cy="120" r="1.4" />
          <circle className="star s1" cx="960" cy="40" r="1.7" />
          <circle className="star s2" cx="1100" cy="160" r="1.2" />
          <circle className="star s3" cx="1220" cy="70" r="1.0" />
          <circle className="star s1" cx="1360" cy="200" r="1.6" />
          <circle className="star s2" cx="1480" cy="80" r="1.1" />
          {/* additional stars to enrich the field */}
          <circle className="star s2" cx="200" cy="260" r="1.4" />
          <circle className="star s3" cx="260" cy="340" r="0.8" />
          <circle className="star s1" cx="480" cy="300" r="1.9" />
          <circle className="star s2" cx="720" cy="320" r="1.2" />
          <circle className="star s3" cx="980" cy="300" r="1.0" />
          <circle className="star s1" cx="1300" cy="340" r="1.6" />
          <circle className="star s2" cx="1460" cy="320" r="1.2" />

          {/* a few larger, slightly glowing stars */}
          <circle className="star star-lg" cx="520" cy="60" r="2.8" />
          <circle className="star star-lg" cx="900" cy="180" r="2.6" />
          <circle className="star star-lg" cx="300" cy="120" r="2.4" />
          {/* more stars in a faint group */}
          <g opacity="0.7">
            <circle className="star s3" cx="300" cy="40" r="0.7" />
            <circle className="star s3" cx="340" cy="70" r="0.6" />
            <circle className="star s2" cx="380" cy="30" r="0.9" />
            <circle className="star s1" cx="420" cy="50" r="0.8" />
          </g>
        </g>

        {/* constellation lines (subtle) */}
        <g className="constellations" stroke="#9fb8ff" strokeWidth="0.9" strokeOpacity="0.18" fill="none">
          <line x1="80" y1="60" x2="220" y2="80" />
          <line x1="220" y1="80" x2="320" y2="180" />
          <line x1="640" y1="60" x2="740" y2="200" />
          <line x1="840" y1="120" x2="960" y2="40" />
          <line x1="1100" y1="160" x2="1220" y2="70" />
          <line x1="1220" y1="70" x2="1360" y2="200" />
          {/* new constellation connections */}
          <line x1="480" y1="300" x2="520" y2="60" />
          <line x1="520" y1="60" x2="300" y2="120" />
          <line x1="900" y1="180" x2="980" y2="300" />
          <line x1="720" y1="320" x2="900" y2="180" />
          <line x1="1300" y1="340" x2="1460" y2="320" />
          <line x1="1360" y1="200" x2="1300" y2="340" />
        </g>

        {/* subtle moving nebula gradient using radial gradients as soft layers */}
        <g className="nebula" opacity="0.08">
          <circle cx="300" cy="320" r="260" fill="#6f49ff" filter="url(#soft)" />
          <circle cx="1100" cy="200" r="200" fill="#55d0ff" filter="url(#soft)" />
        </g>
      </svg>
    </div>
  )
}
