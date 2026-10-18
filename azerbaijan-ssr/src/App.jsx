import { useState, useEffect, useRef } from "react";

const BLUE = "#0092BC";
const LIGHT_BLUE = "#00B4D8";
const RED = "#EF3340";
const GREEN = "#00AF66";
const DARK = "#08090c";
const MID = "#0d0e14";
const CARD = "#111218";
const GOLD = "#8A7240";
const LIGHT_GOLD = "#B09050";
const FLAME = "#FF6B00";
const LIGHT_FLAME = "#FF8C38";

const sections = [
  {
    id: "oil",
    title: "Black Gold — The World's First Oil Industry",
    subtitle: "Baku Lit the Lamps of the 19th Century",
    icon: "🛢",
    color: "#1a1a1a",
    year: "1846–present",
    content: `The world's first industrially drilled oil well was sunk near Baku in 1846 — more than a decade before the famous Drake Well in Pennsylvania that Americans call the birthplace of the oil industry. By the 1870s and 80s, Baku was the oil capital of the world, producing over half of the Earth's total oil supply. The Nobel brothers — yes, the family behind the Nobel Prize — built their fortune here. The Rothschilds invested here. The city was transformed overnight from a medieval fortress town into one of the wealthiest cities on the planet. Ornate oil baron mansions still line Baku's Old City streets. When the Soviets nationalised the oil industry in 1920, Baku's petroleum became the lifeblood of the entire Soviet economy — and during WWII, of the Soviet war machine itself.`,
    facts: [
      "World's first industrially drilled oil well — Baku, 1846",
      "By 1900, Baku produced over 50% of the world's total oil supply",
      "The Nobel brothers built their family fortune in Baku's oil fields",
      "Soviet Baku oil fuelled the Red Army through WWII — Hitler targeted it directly",
    ],
  },
  {
    id: "land-of-fire",
    title: "The Land of Fire",
    subtitle: "Ateshgah — Where Fire Worshippers Prayed",
    icon: "🔥",
    color: "#FF6B00",
    year: "Ancient–present",
    content: `Azerbaijan means "Land of Fire" — a name earned from the natural gas seeps that have burned from the ground since antiquity. The Zoroastrian fire temple of Ateshgah, on the Absheron Peninsula near Baku, was a pilgrimage site for Zoroastrians, Hindus, and Sikhs for centuries, fed by natural gas venting from the earth and burning perpetually. The Yanar Dag ("burning mountain") on the Absheron Peninsula has burned continuously for centuries — a hillside where natural gas constantly seeps and ignites. Marco Polo mentioned the fires of the Absheron Peninsula in his 13th century travels. Fire is not merely a symbol for Azerbaijan — it is a geological reality that shaped the country's entire history, identity, and economy.`,
    facts: [
      "Azerbaijan literally means 'Land of Fire' in Persian",
      "Ateshgah fire temple burned for centuries on natural gas — a Zoroastrian pilgrimage site",
      "Marco Polo mentioned the fires of Absheron in the 13th century",
      "Yanar Dag has burned continuously for centuries without any fuel other than earth",
    ],
  },
  {
    id: "first-republic",
    title: "The First Muslim Democracy",
    subtitle: "The Azerbaijan Democratic Republic, 1918",
    icon: "🏛",
    color: "#0092BC",
    year: "1918–1920",
    content: `On 28 May 1918, Azerbaijan declared the Azerbaijan Democratic Republic — the first secular, democratic republic in the Muslim world. In just 23 months of existence, it was the first Muslim-majority country to give women the right to vote (before the United States and most of Europe), established a parliament with multiple parties including socialist and liberal factions, founded Baku State University, and created a national army. It was an extraordinary experiment — cosmopolitan, modern, ambitious — crushed by the Red Army on 28 April 1920. The date of its founding, 28 May, is now Azerbaijan's Republic Day. Its legacy — a secular, modern state in a Muslim context — shaped Azerbaijan's identity through the Soviet period and beyond.`,
    facts: [
      "First secular democratic republic in the Muslim world — 1918",
      "First Muslim-majority country to grant women the right to vote",
      "Parliament included multiple parties across the political spectrum",
      "Crushed by Red Army invasion after just 23 months of existence",
    ],
  },
  {
    id: "soviet",
    title: "The Azerbaijani SSR",
    subtitle: "Baku's Oil Fuels an Empire",
    icon: "⚙",
    color: "#1565C0",
    year: "1920–1991",
    content: `Under Soviet rule, Azerbaijan was transformed from an oil-boom frontier city-state into a major Soviet republic. Baku became a fully industrialised city, its oil fields operating at massive scale under Soviet direction. The republic developed significant engineering, medical, and cultural institutions. During WWII, Baku's oil was so strategically critical that Hitler's Case Blue offensive — the drive toward Stalingrad — was largely designed to cut off Soviet access to Caucasian oil. Had Germany reached Baku, the Soviet war effort might have collapsed. The Soviets destroyed the Baku oil infrastructure rather than let it fall — and rebuilt it afterward. Azerbaijan also produced a rich Soviet-era cultural scene, with figures like composer Uzeyir Hajibeyov (creator of the first opera in the Muslim world) and filmmaker Rustam Ibragimbekov.`,
    facts: [
      "Hitler's Case Blue offensive was designed partly to capture Baku's oil",
      "Baku's oil was critical to Soviet WWII survival — Soviets demolished it before retreating",
      "Uzeyir Hajibeyov composed the Muslim world's first opera in Baku in 1908",
      "Azerbaijan produced major Soviet-era scientific and cultural institutions",
    ],
  },
  {
    id: "karabakh",
    title: "Nagorno-Karabakh",
    subtitle: "The Frozen Conflict That Thawed — Twice",
    icon: "⚔",
    color: "#7B1C1C",
    year: "1988–2023",
    content: `The conflict over Nagorno-Karabakh — Artsakh to Armenians — defined Azerbaijan's post-Soviet existence. Stalin had placed the Armenian-majority enclave inside the Azerbaijani SSR in 1921. In 1988, as the USSR weakened, the enclave's Armenians voted to join Armenia, triggering violence that escalated into full war after 1991. Azerbaijan lost the war and the territory — including a corridor around it — by 1994, displacing around 600,000 Azerbaijanis from their homes. For 26 years the enclave remained under Armenian control. Then in 2020, a 44-day war saw Azerbaijan, equipped with Turkish Bayraktar drones and Israeli precision weapons, retake most of the territory. In September 2023, a 24-hour offensive ended Armenian control entirely. Both sides carry deep wounds from a conflict Stalin designed to be insoluble.`,
    facts: [
      "Stalin placed the Armenian enclave inside Azerbaijan in 1921 — a deliberate time bomb",
      "1994 ceasefire: Azerbaijan lost 20% of its territory including Karabakh",
      "2020: Turkish Bayraktar drones were decisive in Azerbaijan's victory",
      "September 2023: 24-hour offensive ended Armenian presence in Karabakh",
    ],
  },
  {
    id: "culture",
    title: "Mugham, Carpet & Pomegranate",
    subtitle: "A Culture at the Crossroads of Worlds",
    icon: "🎶",
    color: "#6A1B9A",
    year: "Ancient–present",
    content: `Azerbaijan sits at the intersection of Persian, Turkic, Russian, and Caucasian cultural worlds — and its culture reflects every influence. Mugham, the classical musical tradition of Azerbaijan, is a sophisticated improvisatory form recognised by UNESCO as Intangible Cultural Heritage — emotionally intense, technically demanding, blending Persian classical music with Azerbaijani folk tradition. Azerbaijani carpet weaving is among the most technically refined in the world; specific regional styles — Guba, Shirvan, Karabakh — are instantly recognisable to specialists. The pomegranate is Azerbaijan's national symbol — present in ancient Zoroastrian art, in medieval manuscripts, in modern design. Azerbaijani cuisine reflects the Silk Road: saffron rice pilafs, lamb dishes with dried fruit, stuffed grape leaves, and pomegranate in everything.`,
    facts: [
      "Mugham classical music is UNESCO Intangible Cultural Heritage",
      "Azerbaijani carpet weaving tradition is also UNESCO-recognised",
      "The pomegranate is the national symbol — used in art, food, and ceremony",
      "Uzeyir Hajibeyov's opera Leyli and Majnun (1908) was the first in the Muslim world",
    ],
  },
  {
    id: "january20",
    title: "Black January",
    subtitle: "The Night the Soviet Union Lost Azerbaijan",
    icon: "🕯",
    color: "#546E7A",
    year: "20 Jan 1990",
    content: `On the night of 19–20 January 1990, Soviet troops entered Baku to suppress the Azerbaijani national movement. The operation — codenamed with bureaucratic indifference — killed at least 137 civilians. Tanks drove through residential areas. People trying to flee were shot. The crackdown was intended to crush the Azerbaijan Popular Front and prevent independence. Instead, it had the opposite effect: it unified Azerbaijani society against Soviet power and made independence inevitable. The date is now known as Black January and commemorated as a national day of mourning. Gorbachev declared a state of emergency, but the moral authority of Soviet rule in Azerbaijan was gone. A million people attended the funerals. The coffins were draped in the Azerbaijani tricolour.`,
    facts: [
      "At least 137 civilians killed when Soviet troops entered Baku on 20 January 1990",
      "The operation was intended to prevent independence — it accelerated it",
      "A million people attended the funerals of those killed",
      "Black January is now a national day of mourning — 20 January",
    ],
  },
  {
    id: "modern",
    title: "Aliyev's Azerbaijan",
    subtitle: "Petro-State, Eurovision & Authoritarian Modernisation",
    icon: "🏙",
    color: "#00695C",
    year: "1993–present",
    content: `Since 1993, Azerbaijan has been ruled by the Aliyev family — first Heydar Aliyev, a former KGB general and Soviet-era Communist Party boss, then his son Ilham from 2003 onward. Oil revenues from the Baku-Tbilisi-Ceyhan pipeline, completed in 2006, funded a spectacular transformation of Baku: the Flame Towers (three skyscrapers shaped like flames), the Heydar Aliyev Centre designed by Zaha Hadid, and the hosting of Eurovision 2012 and the inaugural European Games in 2015. The country ranked as one of the most corrupt in Europe throughout, with opposition leaders jailed and press freedom severely curtailed. The combination of futuristic architecture, authoritarian governance, and extraordinary oil wealth has made Azerbaijan one of the 21st century's most striking — and troubling — state-building experiments.`,
    facts: [
      "The Flame Towers in Baku are the tallest buildings in the Caucasus",
      "The Heydar Aliyev Centre was designed by Zaha Hadid — one of her masterpieces",
      "Azerbaijan hosted Eurovision 2012 and the first European Games in 2015",
      "The Aliyev family has ruled Azerbaijan for over 30 years",
    ],
  },
];

const timeline = [
  { year: "7th c.", event: "Caucasian Albania absorbed into Islamic Caliphate; gradual Islamisation" },
  { year: "13th c.", event: "Mongol invasion devastates the region" },
  { year: 1501, event: "Safavid dynasty makes Tabriz its capital; Azerbaijan at the heart of Persia" },
  { year: 1813, event: "Russia acquires northern Azerbaijan from Persia — Treaty of Gulistan" },
  { year: 1846, event: "World's first industrially drilled oil well near Baku" },
  { year: 1872, event: "Oil boom begins; Nobel brothers and Rothschilds invest in Baku" },
  { year: 1901, event: "Baku produces over 50% of the world's oil" },
  { year: 1908, event: "Uzeyir Hajibeyov composes Leyli and Majnun — first opera in Muslim world" },
  { year: 1918, event: "Azerbaijan Democratic Republic declared — first Muslim democracy" },
  { year: 1920, event: "Red Army invasion; Azerbaijani SSR established" },
  { year: 1921, event: "Stalin assigns Nagorno-Karabakh to Azerbaijan" },
  { year: 1941, event: "WWII: Baku oil critical to Soviet survival; Hitler targets it" },
  { year: 1969, event: "Heydar Aliyev becomes Communist Party First Secretary of Azerbaijan" },
  { year: 1988, event: "Karabakh conflict begins; pogroms in Sumgait" },
  { year: 1990, event: "Black January — Soviet troops kill 137 civilians in Baku" },
  { year: 1991, event: "Azerbaijan declares independence — 18 October" },
  { year: 1993, event: "Heydar Aliyev takes power; first Karabakh war continues" },
  { year: 1994, event: "Ceasefire — Azerbaijan loses Karabakh and surrounding territories" },
  { year: 2003, event: "Ilham Aliyev succeeds his father as president" },
  { year: 2006, event: "Baku-Tbilisi-Ceyhan pipeline opens; oil wealth accelerates" },
  { year: 2012, event: "Baku hosts Eurovision Song Contest" },
  { year: 2020, event: "44-day war — Azerbaijan retakes most of Karabakh" },
  { year: 2023, event: "24-hour offensive ends Armenian presence in Karabakh entirely" },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function AnimCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
}

function SectionCard({ s, index }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimCard delay={index * 0.07}>
      <div
        style={{
          background: CARD,
          border: `1px solid ${s.color}33`,
          borderLeft: `4px solid ${s.color}`,
          borderRadius: 3,
          overflow: "hidden",
          marginBottom: 20,
          cursor: "pointer",
        }}
        onClick={() => setOpen(o => !o)}
      >
        <div style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 26, lineHeight: 1, minWidth: 34, textAlign: "center" }}>{s.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0, color: "#e8eef4", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color === "#1a1a1a" ? "#888" : s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#3a4858", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color === "#1a1a1a" ? "#888" : s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0b8c8", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#08090c", borderLeft: `3px solid ${s.color === "#1a1a1a" ? "#555" : s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#6878a0", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimCard>
  );
}

function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{ position: "relative", paddingLeft: 32 }}>
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${BLUE}, ${RED}, ${GREEN})` }} />
      {timeline.map((t, i) => (
        <div key={i} style={{
          position: "relative", marginBottom: 24,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-18px)",
          transition: `opacity 0.5s ${i * 0.038}s, transform 0.5s ${i * 0.038}s`,
        }}>
          <div style={{
            position: "absolute", left: -26, top: 5,
            width: 10, height: 10, borderRadius: "50%",
            background: i % 3 === 0 ? BLUE : i % 3 === 1 ? RED : GREEN,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_FLAME, fontSize: 12, minWidth: 50, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#607080", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  // Azerbaijani flag: blue, red, green horizontal stripes with white crescent and star
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{
        width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2,
        overflow: "hidden", boxShadow: `0 0 50px ${BLUE}44`,
        display: "flex", flexDirection: "column", height: 80, position: "relative"
      }}>
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: RED, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Crescent and star */}
          <svg width="28" height="28" viewBox="0 0 28 28">
            <circle cx="13" cy="14" r="9" fill="white" />
            <circle cx="16" cy="14" r="7" fill={RED} />
            <polygon points="20,14 21.5,11 23,14 21.5,17" fill="white" transform="rotate(0 20 14)" />
            <polygon points="22,10 23,8 24,10 23,12" fill="white" />
            <polygon points="22,18 23,16 24,18 23,20" fill="white" />
          </svg>
        </div>
        <div style={{ flex: 1, background: GREEN }} />
      </div>
    </div>
  );
}

function FlameIcon() {
  return (
    <svg width="50" height="64" viewBox="0 0 50 64" style={{ display: "block", margin: "0 auto" }}>
      {/* Outer flame */}
      <path d="M25 2 Q38 18 38 32 Q38 50 25 58 Q12 50 12 32 Q12 18 25 2Z" fill={FLAME} opacity="0.9" />
      {/* Inner flame */}
      <path d="M25 18 Q33 28 33 38 Q33 50 25 54 Q17 50 17 38 Q17 28 25 18Z" fill={LIGHT_FLAME} opacity="0.8" />
      {/* Core */}
      <path d="M25 30 Q29 36 29 42 Q29 50 25 52 Q21 50 21 42 Q21 36 25 30Z" fill="#FFE066" opacity="0.9" />
      {/* Small side flames */}
      <path d="M25 16 Q20 24 18 30 Q16 20 20 14 Q22 10 25 8Z" fill={FLAME} opacity="0.6" />
      <path d="M25 16 Q30 24 32 30 Q34 20 30 14 Q28 10 25 8Z" fill={FLAME} opacity="0.6" />
    </svg>
  );
}

function FireSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 180, opacity: 0.05 }} viewBox="0 0 900 180" preserveAspectRatio="none">
      {/* Oil derricks */}
      {[60, 180, 300, 500, 650, 780].map((x, i) => (
        <g key={i} transform={`translate(${x}, 0)`}>
          <line x1="20" y1="180" x2="20" y2="60" stroke={FLAME} strokeWidth="3" />
          <line x1="20" y1="60" x2="0" y2="180" stroke={FLAME} strokeWidth="2" />
          <line x1="20" y1="60" x2="40" y2="180" stroke={FLAME} strokeWidth="2" />
          <line x1="10" y1="120" x2="30" y2="120" stroke={FLAME} strokeWidth="2" />
          <line x1="5" y1="150" x2="35" y2="150" stroke={FLAME} strokeWidth="2" />
          {/* Flame on top */}
          <path d={`M20 60 Q26 50 26 44 Q26 38 20 36 Q14 38 14 44 Q14 50 20 60Z`} fill={FLAME} opacity="0.7" />
        </g>
      ))}
      <path d="M0 160 Q200 140 400 155 Q600 140 900 150 L900 180 L0 180Z" fill={FLAME} opacity="0.15" />
    </svg>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd0dc" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 38%, #1a0800 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 4, background: RED }} />
        <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 4, background: GREEN }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 4, background: RED }} />
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, height: 4, background: GREEN }} />

        <FireSilhouette />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <FlameIcon />
          <div style={{ width: 48, height: 1, background: FLAME, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_FLAME, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Azərbaycan Sovet Sosialist Respublikası
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f5f0ec",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${FLAME}44`,
          }}>
            The Azerbaijani<br /><span style={{ color: LIGHT_BLUE }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#2a3040", lineHeight: 1.8, fontStyle: "italic" }}>
            The Land of Fire that powered the 19th century's lamps, the Soviet war machine, and the 21st century's oil pipelines — and built the Muslim world's first democracy before it was crushed.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1920–1991", "Baku", "7M population", "South Caucasus"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${BLUE}55`, color: LIGHT_BLUE, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${FLAME}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      {/* Pull quote */}
      <div style={{ background: `linear-gradient(90deg, ${BLUE}, ${RED}, ${GREEN})`, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#fff", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "Baku burned before oil was discovered, and it has burned ever since. The fire here is not a metaphor — it is a fact of the earth." — traveller's account, 19th century
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#e8eef4", marginBottom: 14 }}>The Crossroads That Powered the World</h2>
            <p style={{ fontSize: "1.05rem", color: "#202838", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Azerbaijan sits where the Caucasus mountains meet the Caspian Sea, where Persia meets the steppe, where Islam meets the Orthodox world. Its oil made it strategically indispensable to every empire that passed through. Its fire temples drew pilgrims from three religions. Its brief democratic republic was the most progressive Muslim state of its era — and was extinguished before the world had time to notice. The Soviet chapter was one layer in a story of extraordinary complexity.
            </p>
          </div>
        </AnimCard>

        {/* Nobel callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a0800, ${MID})`, border: `1px solid ${FLAME}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>🏆</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0c8a0", fontSize: "1.2rem", marginTop: 0 }}>
                The Nobel Prize Was Funded by Baku Oil
              </h3>
              <p style={{ color: "#604020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Alfred Nobel — the inventor of dynamite and founder of the Nobel Prize — made much of his fortune not from dynamite but from Baku oil. His brothers Ludvig and Robert built the Nobel Brothers Petroleum Company into one of the largest oil enterprises in the world, operating a fleet of Caspian tankers and a pipeline across the Caucasus. The family fortune accumulated in Baku was a significant part of the endowment Alfred Nobel used to establish the prizes that bear his name. The Nobel Prizes — including the Peace Prize — were partly funded by Azerbaijani oil money.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Sections */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${FLAME}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_FLAME, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${FLAME}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${BLUE}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_FLAME, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Azerbaijan in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "1846", l: "Year of the world's first industrially drilled oil well" },
                { n: "50%", l: "Of world oil supply produced in Baku in 1900" },
                { n: "23", l: "Months the first Muslim democracy existed before being crushed" },
                { n: "137", l: "Civilians killed in Black January, 1990" },
                { n: "44", l: "Days it took to retake Karabakh in 2020" },
                { n: "1908", l: "Year the Muslim world's first opera was performed in Baku" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: FLAME, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#1a2030", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Timeline */}
        <AnimCard>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${FLAME}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_FLAME, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${FLAME}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Zaha Hadid callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #000a10, ${MID})`, border: `1px solid ${BLUE}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🏛</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0d0f0", fontSize: "1.2rem", marginTop: 0 }}>
                The Heydar Aliyev Centre — Zaha Hadid's Masterpiece
              </h3>
              <p style={{ color: "#283848", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                The Heydar Aliyev Centre, completed in 2012 in Baku, is widely considered one of the greatest buildings of the 21st century. Designed by Iraqi-British architect Zaha Hadid, it flows in continuous curves that seem to defy gravity — no sharp angles, no visible joints, a single undulating surface of white concrete that houses a conference centre, museum, and auditorium. It won the Design of the Year award from the Design Museum in London in 2014. That a post-Soviet, oil-rich Caspian republic commissioned the greatest female architect in the world to produce her masterpiece in Baku is one of the more unexpected cultural facts of our era.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Ateshgah callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100800, ${MID})`, border: `1px solid ${FLAME}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🕌</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0c090", fontSize: "1.2rem", marginTop: 0 }}>
                Ateshgah — Where Three Religions Came to Pray at One Fire
              </h3>
              <p style={{ color: "#604020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                The fire temple of Ateshgah on the Absheron Peninsula was, at various points in its history, a pilgrimage site for Zoroastrians from Persia, Hindu merchants from India, and Sikh travellers from the Punjab — all drawn to the same eternal flame burning from a natural gas vent in the earth. The current structure was largely built by Indian merchants in the 17th and 18th centuries, and inscriptions in Sanskrit, Persian, and Punjabi can still be read on its walls. It is perhaps the only building in the world where three distinct religions each left inscriptions at the same sacred site. The natural gas vent that fed it is now exhausted — the fire that burns there today is piped in artificially.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100800, #08090c)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <FlameIcon />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#f0eee8", marginTop: 18 }}>The Fire That Never Goes Out</h2>
            <p style={{ color: "#202838", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Azerbaijan's history is inseparable from fire — the geological fire that drew pilgrims for millennia, the oil fire that made it the richest place on Earth for a few extraordinary decades, the political fire of the first Muslim democracy extinguished in 1920, the Black January fire of Soviet bullets in Baku streets, and the Flame Towers that now rise over a city that has reinvented itself yet again. The land burns because it cannot help it. The people endure because they always have. The crescent and star on the flag still turns toward a future that remains, as it always has been, unresolved and contested and alive.
            </p>
            <div style={{ width: 50, height: 1, background: FLAME, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#06070a", borderTop: `2px solid ${BLUE}`, borderBottom: `2px solid ${GREEN}`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#101828", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          AZERBAIJANI SSR · 1920–1991 · BAKU · AZƏRBAYCAN SSR
        </p>
      </div>
    </div>
  );
}
