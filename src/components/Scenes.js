// Vector IT illustrations (no external images, no licences, always crisp).
const Defs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-g`} x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stopColor="#FFB020" /><stop offset=".55" stopColor="#FF7A1A" /><stop offset="1" stopColor="#E8402A" />
    </linearGradient>
    <linearGradient id={`${id}-s`} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stopColor="#EAF1FF" /><stop offset="1" stopColor="#FFF1E3" />
    </linearGradient>
    <linearGradient id={`${id}-b`} x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stopColor="#4C7DFF" /><stop offset="1" stopColor="#2B59FF" />
    </linearGradient>
  </defs>
);

export function WebScene() {
  const id = 'web';
  return (
    <svg className="scene" viewBox="0 0 560 420" role="img" aria-label="Website on a browser window with code">
      <Defs id={id} />
      <g className="float-a">
        <rect x="40" y="50" width="400" height="270" rx="18" fill="#fff" stroke="#E3E8F4" />
        <path d="M40 68a18 18 0 0 1 18-18h364a18 18 0 0 1 18 18v20H40z" fill="#F3F5FB" />
        <circle cx="64" cy="69" r="5" fill="#FF6B5E" /><circle cx="82" cy="69" r="5" fill="#FFC53D" /><circle cx="100" cy="69" r="5" fill="#2ED47A" />
        <rect x="130" y="60" width="220" height="18" rx="9" fill="#fff" stroke="#E3E8F4" />
        <rect x="62" y="106" width="356" height="98" rx="12" fill={`url(#${id}-g)`} />
        <rect x="82" y="126" width="150" height="12" rx="6" fill="#fff" />
        <rect x="82" y="148" width="214" height="8" rx="4" fill="#fff" opacity=".7" />
        <rect x="82" y="164" width="170" height="8" rx="4" fill="#fff" opacity=".7" />
        <rect x="82" y="182" width="72" height="14" rx="7" fill="#fff" />
        <circle cx="366" cy="156" r="36" fill="#fff" opacity=".22" /><circle cx="366" cy="156" r="20" fill="#fff" opacity=".4" />
        {[62, 184, 306].map((x) => (
          <g key={x}>
            <rect x={x} y="220" width="112" height="84" rx="12" fill={`url(#${id}-s)`} stroke="#E3E8F4" />
            <circle cx={x + 24} cy="244" r="11" fill="#FF7A1A" opacity=".85" />
            <rect x={x + 14} y="266" width="74" height="7" rx="3.5" fill="#B9C3DC" />
            <rect x={x + 14} y="280" width="52" height="7" rx="3.5" fill="#D5DCEC" />
          </g>
        ))}
      </g>
      <g className="float-b">
        <rect x="300" y="258" width="232" height="132" rx="14" fill="#14183A" />
        <circle cx="322" cy="276" r="4" fill="#FF6B5E" /><circle cx="336" cy="276" r="4" fill="#FFC53D" /><circle cx="350" cy="276" r="4" fill="#2ED47A" />
        <rect x="320" y="298" width="60" height="8" rx="4" fill="#FFB020" /><rect x="388" y="298" width="92" height="8" rx="4" fill="#7FB4FF" />
        <rect x="338" y="316" width="124" height="8" rx="4" fill="#fff" opacity=".85" />
        <rect x="338" y="334" width="82" height="8" rx="4" fill="#FF7A1A" /><rect x="428" y="334" width="64" height="8" rx="4" fill="#5EE0A0" />
        <rect x="320" y="352" width="140" height="8" rx="4" fill="#7FB4FF" opacity=".8" />
      </g>
      <g className="float-c">
        <rect x="14" y="14" width="140" height="42" rx="21" fill="#fff" stroke="#E3E8F4" />
        <circle cx="38" cy="35" r="9" fill="#2ED47A" /><path d="M33.5 35l3 3 5-6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="56" y="40" fontSize="14" fontWeight="700" fill="#14183A">SEO ready</text>
        <g transform="translate(468 112)">
          <circle r="40" fill="#fff" stroke="#E3E8F4" /><circle r="30" fill="none" stroke="#FFE3C9" strokeWidth="8" />
          <circle r="30" fill="none" stroke="#FF7A1A" strokeWidth="8" strokeLinecap="round" strokeDasharray="180 189" transform="rotate(-90)" />
          <text y="7" textAnchor="middle" fontSize="20" fontWeight="800" fill="#14183A">98</text>
        </g>
      </g>
    </svg>
  );
}

export function CrmScene() {
  const id = 'crm';
  const bars = [52, 78, 60, 96, 74, 112, 90];
  return (
    <svg className="scene" viewBox="0 0 560 420" role="img" aria-label="CRM dashboard with charts">
      <Defs id={id} />
      <g className="float-a">
        <rect x="30" y="40" width="440" height="300" rx="18" fill="#fff" stroke="#E3E8F4" />
        <path d="M30 58a18 18 0 0 1 18-18h86v300H48a18 18 0 0 1-18-18z" fill="#F3F5FB" />
        <circle cx="82" cy="72" r="14" fill={`url(#${id}-g)`} />
        {[110, 138, 166, 194].map((y, i) => (<rect key={y} x="52" y={y} width={i === 0 ? 64 : 52} height="12" rx="6" fill={i === 0 ? '#FF7A1A' : '#C9D2E6'} opacity={i === 0 ? 0.9 : 1} />))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={152 + i * 104} y="62" width="94" height="58" rx="12" fill={`url(#${id}-s)`} stroke="#E3E8F4" />
            <rect x={164 + i * 104} y="76" width="40" height="7" rx="3.5" fill="#B9C3DC" />
            <rect x={164 + i * 104} y="92" width="60" height="14" rx="5" fill={['#FF7A1A', '#2B59FF', '#2ED47A'][i]} />
          </g>
        ))}
        <rect x="152" y="136" width="200" height="184" rx="14" fill="#fff" stroke="#E3E8F4" />
        {bars.map((h, i) => (<rect key={i} x={168 + i * 26} y={300 - h} width="16" height={h} rx="5" fill={i === 5 ? `url(#${id}-g)` : '#FFD9B8'} />))}
        <rect x="364" y="136" width="90" height="88" rx="14" fill="#fff" stroke="#E3E8F4" />
        <g transform="translate(409 180)">
          <circle r="26" fill="none" stroke="#E7ECF8" strokeWidth="12" />
          <circle r="26" fill="none" stroke="#2B59FF" strokeWidth="12" strokeDasharray="100 164" transform="rotate(-90)" />
          <circle r="26" fill="none" stroke="#FF7A1A" strokeWidth="12" strokeDasharray="40 164" strokeDashoffset="-100" transform="rotate(-90)" />
        </g>
        <rect x="364" y="236" width="90" height="84" rx="14" fill="#fff" stroke="#E3E8F4" />
        <path d="M376 304l18-22 14 12 20-30 16 10" fill="none" stroke="#FF7A1A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="float-b">
        <rect x="330" y="300" width="214" height="82" rx="16" fill="#fff" stroke="#E3E8F4" />
        <circle cx="366" cy="341" r="20" fill={`url(#${id}-g)`} />
        <circle cx="366" cy="335" r="6" fill="#fff" /><path d="M354 351a12 10 0 0 1 24 0z" fill="#fff" />
        <rect x="396" y="322" width="110" height="9" rx="4.5" fill="#14183A" /><rect x="396" y="340" width="84" height="7" rx="3.5" fill="#B9C3DC" />
        <rect x="396" y="356" width="64" height="14" rx="7" fill="#E6F9EF" /><text x="408" y="367" fontSize="10" fontWeight="700" fill="#12A150">New lead</text>
      </g>
      <g className="float-c">
        <rect x="396" y="14" width="150" height="42" rx="21" fill="#fff" stroke="#E3E8F4" />
        <circle cx="420" cy="35" r="9" fill="#FF7A1A" /><text x="438" y="40" fontSize="14" fontWeight="700" fill="#14183A">+24 leads</text>
      </g>
    </svg>
  );
}

export function CloudScene() {
  const id = 'cld';
  const nodes = [[90, 290], [190, 340], [370, 340], [470, 290], [80, 150], [480, 150]];
  return (
    <svg className="scene" viewBox="0 0 560 420" role="img" aria-label="Cloud infrastructure with security shield">
      <Defs id={id} />
      <g className="float-a">
        {nodes.map(([x, y], i) => (<line key={i} x1="280" y1="190" x2={x} y2={y} stroke="#FFB27A" strokeWidth="2" strokeDasharray="6 6" className="dash" />))}
        <path d="M200 240a56 56 0 0 1 8-110 78 78 0 0 1 148-6 60 60 0 0 1 8 116z" fill={`url(#${id}-g)`} />
        <path d="M200 240a56 56 0 0 1 8-110 78 78 0 0 1 148-6 60 60 0 0 1 8 116z" fill="#fff" opacity=".14" transform="translate(0 -8) scale(1)" />
        <path d="M280 150l36 14v28c0 22-15 38-36 46-21-8-36-24-36-46v-28z" fill="#fff" />
        <path d="M264 194l12 12 22-26" fill="none" stroke="#FF7A1A" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        {nodes.map(([x, y], i) => (
          <g key={i} transform={`translate(${x - 28} ${y - 28})`}>
            <rect width="56" height="56" rx="14" fill="#fff" stroke="#E3E8F4" />
            <rect x="12" y="14" width="32" height="10" rx="3" fill={i % 2 ? '#2B59FF' : '#FF7A1A'} />
            <rect x="12" y="29" width="32" height="10" rx="3" fill="#C9D2E6" />
            <circle cx="39" cy="19" r="2" fill="#fff" /><circle cx="39" cy="34" r="2" fill="#fff" />
          </g>
        ))}
      </g>
      <g className="float-c">
        <rect x="190" y="16" width="180" height="42" rx="21" fill="#fff" stroke="#E3E8F4" />
        <circle cx="214" cy="37" r="9" fill="#2ED47A" /><text x="232" y="42" fontSize="14" fontWeight="700" fill="#14183A">99.9% uptime</text>
      </g>
    </svg>
  );
}

export function GovScene() {
  const id = 'gov';
  return (
    <svg className="scene" viewBox="0 0 560 420" role="img" aria-label="Government portal building with secure shield">
      <Defs id={id} />
      <g className="float-a">
        <rect x="70" y="330" width="360" height="16" rx="8" fill="#DDE5F6" />
        <path d="M80 150L250 70l170 80z" fill={`url(#${id}-g)`} />
        <rect x="96" y="158" width="308" height="14" rx="4" fill="#fff" stroke="#E3E8F4" />
        {[116, 168, 220, 272, 324, 368].map((x) => (<rect key={x} x={x} y="178" width="20" height="124" rx="5" fill="#fff" stroke="#E3E8F4" />))}
        <rect x="90" y="302" width="320" height="14" rx="4" fill="#fff" stroke="#E3E8F4" />
        <rect x="82" y="316" width="336" height="14" rx="4" fill="#F3F5FB" stroke="#E3E8F4" />
        <circle cx="250" cy="122" r="14" fill="#fff" /><path d="M250 112v20M240 122h20" stroke="#FF7A1A" strokeWidth="3" />
      </g>
      <g className="float-b">
        <path d="M430 90l60 22v48c0 36-26 62-60 76-34-14-60-40-60-76v-48z" fill="#2B59FF" />
        <path d="M430 108l44 16v36c0 26-18 46-44 58-26-12-44-32-44-58v-36z" fill="#fff" opacity=".18" />
        <path d="M410 164l16 16 30-34" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="float-c">
        <rect x="20" y="40" width="150" height="104" rx="14" fill="#fff" stroke="#E3E8F4" />
        <rect x="36" y="58" width="80" height="10" rx="5" fill="#14183A" />
        {[82, 100, 118].map((y) => (<rect key={y} x="36" y={y} width={y === 118 ? 70 : 118} height="7" rx="3.5" fill="#C9D2E6" />))}
        <circle cx="140" cy="58" r="9" fill="#2ED47A" /><path d="M135.5 58l3 3 5-6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="360" y="340" width="170" height="44" rx="22" fill="#fff" stroke="#E3E8F4" />
        <text x="384" y="367" fontSize="14" fontWeight="700" fill="#14183A">ISO 9001:2015</text>
      </g>
    </svg>
  );
}

const ART = {
  temple: (<><g fill="#F26B1D"><rect x="26" y="98" width="148" height="10" /><rect x="38" y="86" width="124" height="12" /><path d="M100 18l8 16 6 16 4 16 2 20H80l2-20 4-16 6-16z" /><path d="M42 86q12-26 26 0z" /><path d="M132 86q12-26 26 0z" /><rect x="99" y="8" width="2" height="12" /><circle cx="100" cy="8" r="3" /></g><g fill="#fff" opacity=".6"><rect x="92" y="62" width="16" height="24" rx="8" /></g></>),
  gate: (<><g fill="#F26B1D"><rect x="40" y="100" width="120" height="8" /><rect x="52" y="92" width="96" height="8" /><path d="M62 92V34h76v58h-16V66a22 22 0 0 0-44 0v26z" /><rect x="56" y="26" width="88" height="8" /><rect x="66" y="18" width="68" height="8" /><path d="M100 4q10 6 0 14q-10-8 0-14z" /></g><g fill="#fff" opacity=".6"><rect x="70" y="44" width="60" height="4" /></g></>),
  skyline: (<><g fill="#F26B1D"><rect x="16" y="64" width="26" height="46" /><rect x="46" y="38" width="22" height="72" /><rect x="72" y="14" width="28" height="96" /><rect x="104" y="52" width="24" height="58" /><rect x="132" y="30" width="24" height="80" /><rect x="160" y="62" width="24" height="48" /><rect x="84" y="6" width="3" height="10" /></g><g fill="#fff" opacity=".55">{[24, 38, 52, 66, 80, 94].map((y) => (<g key={y}><rect x="78" y={y} width="5" height="5" /><rect x="90" y={y} width="5" height="5" /><rect x="52" y={y + 10} width="5" height="5" /><rect x="60" y={y + 10} width="5" height="5" /><rect x="138" y={y + 4} width="5" height="5" /><rect x="146" y={y + 4} width="5" height="5" /></g>))}</g></>),
  mall: (<><g fill="#F26B1D"><rect x="16" y="58" width="168" height="52" /><rect x="14" y="50" width="172" height="8" /><rect x="84" y="28" width="32" height="30" /><path d="M84 28l16-14 16 14z" /></g><g fill="#fff" opacity=".7"><rect x="58" y="68" width="84" height="12" rx="3" />{[26, 44, 150, 164].map((x) => (<rect key={x} x={x} y="68" width="10" height="14" />))}{[26, 44, 150, 164].map((x) => (<rect key={`b${x}`} x={x} y="90" width="10" height="14" />))}<rect x="90" y="36" width="20" height="8" rx="2" /></g></>),
  garden: (<><g fill="#F26B1D"><rect x="56" y="76" width="88" height="22" /><path d="M56 76q44-30 88 0z" /><path d="M92 50q8-20 16 0z" /><rect x="99" y="32" width="2" height="12" /></g><g fill="#fff" opacity=".65">{[68, 92, 116].map((x) => (<path key={x} d={`M${x} 98v-12a8 8 0 0 1 16 0v12z`} />))}</g><g fill="#F9A66C"><circle cx="28" cy="74" r="18" /><circle cx="172" cy="74" r="18" /><rect x="26" y="88" width="4" height="14" /><rect x="170" y="88" width="4" height="14" /></g><rect x="20" y="104" width="160" height="6" rx="3" fill="#FFC9A3" /></>),
};
export function LandmarkArt({ type }) {
  return (<svg className="landmark" viewBox="0 0 200 116" role="img" aria-hidden="true">{ART[type]}</svg>);
}
