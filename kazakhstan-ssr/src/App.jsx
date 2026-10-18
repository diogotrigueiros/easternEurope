import { useState, useEffect, useRef } from "react";

const CYAN = "#00838F";
const LIGHT_CYAN = "#00ACC1";
const GOLD = "#C89B3C";
const LIGHT_GOLD = "#E8B84B";
const SUN = "#FFD700";
const DARK = "#080c0c";
const MID = "#0c1212";
const CARD = "#101818";

const sections = [
  {
    id: "alash",
    title: "The Alash Autonomy",
    subtitle: "The First Dream of a Kazakh State",
    icon: "🏇",
    color: "#C89B3C",
    year: "1917–1920",
    content: `When the Russian Empire collapsed in 1917, Kazakh intellectuals saw their moment. The Alash Orda movement — led by figures like Alikhan Bukeikhanov, Akhmet Baitursynov, and Mirzhakyp Dulatov — declared the Alash Autonomy, the first modern Kazakh political state. Educated in Russian imperial universities but deeply rooted in Kazakh culture, the Alash leaders drafted a constitution, organised a government, and attempted to navigate between the Reds and Whites in the Civil War. They failed. By 1920 the Bolsheviks had crushed the autonomy. Many Alash leaders initially cooperated with Soviet power — only to be arrested and shot in the purges of the 1930s. They were rehabilitated only after the USSR collapsed.`,
    facts: [
      "Alash Autonomy declared December 1917 — first Kazakh political state",
      "Leaders were intellectuals educated in St Petersburg and Omsk",
      "Attempted to remain neutral between Reds and Whites in Civil War",
      "Most founding leaders were executed during Stalin's purges of 1937–38",
    ],
  },
  {
    id: "famine",
    title: "The Kazakh Famine",
    subtitle: "Asharshylyk — The Great Hunger",
    icon: "🌾",
    color: "#B71C1C",
    year: "1930–1933",
    content: `The forced collectivisation of the Kazakh nomadic economy between 1930 and 1933 caused one of the most catastrophic demographic collapses of the 20th century. Kazakhs were nomadic pastoralists — their entire civilisation built around herding livestock across the steppe. Soviet collectivisation destroyed this way of life overnight, confiscating animals and forcing settlement. The result was famine on an apocalyptic scale. Estimates suggest 1.5 to 2.3 million Kazakhs died — up to 38–42% of the entire Kazakh population. It was proportionally worse than even the Ukrainian Holodomor. Hundreds of thousands more fled to China, Mongolia, and Afghanistan. The Kazakh population would not recover to its pre-famine level until the 1990s.`,
    facts: [
      "Up to 42% of the entire Kazakh ethnic population perished",
      "Nomadic herds were confiscated wholesale — the entire economic base destroyed",
      "800,000+ Kazakhs fled across borders to China, Mongolia and Afghanistan",
      "Kazakh population did not recover to 1926 levels until after independence",
    ],
  },
  {
    id: "nuclear",
    title: "The Semipalatinsk Test Site",
    subtitle: "The Polygon — Ground Zero of the Soviet Bomb",
    icon: "☢",
    color: "#558B2F",
    year: "1949–1989",
    content: `From 1949 to 1989, the Soviet Union detonated 456 nuclear weapons at the Semipalatinsk Test Site in northeastern Kazakhstan — known simply as "The Polygon." It was chosen because Moscow deemed the steppe empty. It was not empty. Over 1.5 million Kazakhs lived in the surrounding region and were never warned, never evacuated, never informed. The consequences were catastrophic: elevated cancer rates, birth defects, genetic mutations, and radiation sickness passed across generations. The Nevada-Semipalatinsk anti-nuclear movement, founded by poet Olzhas Suleimenov in 1989, became one of the most powerful civic movements in the entire Soviet space and helped end testing entirely. Kazakhstan was the first country in history to voluntarily give up a nuclear arsenal upon independence.`,
    facts: [
      "456 nuclear tests conducted between 1949 and 1989",
      "1.5 million people lived in the surrounding region — never warned",
      "Cancer rates in the region remain significantly elevated today",
      "Kazakhstan voluntarily surrendered its nuclear arsenal in 1994",
    ],
  },
  {
    id: "baikonur",
    title: "Baikonur Cosmodrome",
    subtitle: "The Launchpad of the Space Age",
    icon: "🚀",
    color: "#1565C0",
    year: "1955–present",
    content: `The Baikonur Cosmodrome, built on the Kazakh steppe in 1955, became the most important launch facility in history. Sputnik launched from here. Gagarin launched from here. Every Soviet crewed mission in history launched from here. The Cosmodrome was constructed in secret, with the surrounding town of Leninsk built to house its workers. After independence, Kazakhstan leased the facility to Russia for $115 million per year — a deal that continued until Russia shifted to its own Vostochny Cosmodrome in the 2020s. The first human to fly in space lifted off from Kazakh soil. Every International Space Station crew that launched aboard a Soyuz rocket departed from Baikonur.`,
    facts: [
      "Sputnik and Gagarin both launched from Baikonur, Kazakhstan",
      "Every Soviet crewed space mission launched from Kazakh soil",
      "Russia leased Baikonur from Kazakhstan for $115M per year post-independence",
      "The ISS was supplied exclusively via Baikonur for over a decade",
    ],
  },
  {
    id: "gulag",
    title: "GULAG: The Steppe Camps",
    subtitle: "Kazakhstan as the Soviet Exile Continent",
    icon: "🧊",
    color: "#546E7A",
    year: "1930s–1950s",
    content: `Kazakhstan's vast, empty steppe made it the Soviet Union's preferred destination for mass deportation and forced labour. The ALZHIR camp — Akmolinsk Camp for Wives of Traitors of the Motherland — held thousands of women whose only crime was being married to men who had been arrested. Entire peoples were deported to Kazakhstan: Volga Germans (1941), Chechens and Ingush (1944), Crimean Tatars (1944), Koreans from the Far East (1937), Poles, Hungarians, and others. At one point, Kazakhstan held populations of over 60 distinct deported nationalities. This forced mixing paradoxically created one of the most multiethnic societies in the Soviet world, a legacy independent Kazakhstan has tried to embrace.`,
    facts: [
      "ALZHIR camp held wives and relatives of 'enemies of the people'",
      "Over 60 distinct nationalities were forcibly deported to Kazakhstan",
      "Entire peoples relocated: Chechens, Volga Germans, Crimean Tatars, Koreans",
      "Kazakhstan remains one of the most ethnically diverse post-Soviet states",
    ],
  },
  {
    id: "virgin-lands",
    title: "The Virgin Lands Campaign",
    subtitle: "Khrushchev's Great Steppe Gamble",
    icon: "🌿",
    color: "#2E7D32",
    year: "1954–1965",
    content: `In 1954 Nikita Khrushchev launched the Virgin Lands Campaign — a massive agricultural project to cultivate the untouched northern Kazakh steppe and solve the Soviet food crisis. Hundreds of thousands of volunteers and settlers poured into Kazakhstan from across the USSR. New cities and towns were built overnight. At its peak the campaign brought 36 million hectares of new land under cultivation. Initial harvests were spectacular. But the campaign ignored the steppe's ecology — topsoil erosion set in, dust storms devastated the region, and long-term yields were disappointing. The campaign also permanently altered Kazakhstan's demographics: Russians and Slavic settlers poured in, making Kazakhs a minority in their own republic for decades.`,
    facts: [
      "36 million hectares of steppe brought under cultivation",
      "Hundreds of thousands of Slavic settlers permanently relocated to Kazakhstan",
      "Kazakhs became a minority in their own republic by the 1960s",
      "Soil erosion and dust storms undermined long-term agricultural yields",
    ],
  },
  {
    id: "independence",
    title: "Independence & Nazarbayev",
    subtitle: "The Last Republic to Leave the USSR",
    icon: "🦅",
    color: "#00838F",
    year: "1991–present",
    content: `Kazakhstan was the last Soviet republic to declare independence — on 16 December 1991, just days before the USSR was formally dissolved. Nursultan Nazarbayev, the Communist Party boss who had opposed the breakup, became the new nation's first president and ruled for 30 years. He renamed the capital Astana after himself (briefly calling it Nur-Sultan), built a gleaming futurist city from scratch on the frozen steppe, and maintained power through a blend of genuine economic development and authoritarian control. Kazakhstan's vast oil and gas reserves — some of the largest on Earth — funded a remarkable modernisation. In 2022, mass protests over fuel prices briefly threatened to topple his successor before being suppressed with Russian military assistance.`,
    facts: [
      "Last Soviet republic to declare independence — 16 December 1991",
      "Kazakhstan has the world's largest landlocked oil reserves",
      "Nazarbayev ruled for 30 years; resigned in 2019 but retained influence",
      "The capital was renamed Nur-Sultan after him, then renamed back to Astana",
    ],
  },
  {
    id: "culture",
    title: "Steppe Culture & Identity",
    subtitle: "Nomads, Eagles, and the Dombyra",
    icon: "🎵",
    color: "#6A1B9A",
    year: "Ancient–present",
    content: `Kazakh culture is rooted in nomadism — a way of life that shaped everything from its music to its philosophy to its cuisine. The dombyra, a two-stringed lute, is the soul of Kazakh music; the akyn, a travelling poet-musician, was the keeper of oral history for a largely non-literate nomadic society. Eagle hunting — using trained golden eagles to hunt on horseback — is a 4,000-year-old tradition still practised in western Kazakhstan and Bayan-Ölgii in Mongolia. The yurt (ger) is the architectural masterpiece of nomadic engineering — warm, portable, and assembled in under an hour. Abai Kunanbaiuly, the 19th-century poet and philosopher, is Kazakhstan's Shevchenko — the figure who first gave Kazakh identity a literary and intellectual foundation.`,
    facts: [
      "Eagle hunting on horseback is a 4,000-year-old continuous tradition",
      "The dombyra two-stringed lute is the central instrument of Kazakh music",
      "Abai Kunanbaiuly's poetry is the foundation of modern Kazakh literary identity",
      "Kazakh oral epic tradition preserved history without a written script for centuries",
    ],
  },
];

const timeline = [
  { year: "500 BC", event: "Scythian and Saka nomadic cultures dominate the steppe" },
  { year: "13th c.", event: "Mongol conquest; Kazakhstan becomes part of the Golden Horde" },
  { year: 1465, event: "Kazakh Khanate founded — first unified Kazakh political entity" },
  { year: 1731, event: "Kazakh khans seek Russian protection against Dzungar invasions" },
  { year: 1860, event: "Russian Empire fully annexes Kazakh steppe" },
  { year: 1916, event: "Kazakh uprising against Russian conscription; brutally suppressed" },
  { year: 1917, event: "Alash Autonomy declared after Russian Revolution" },
  { year: 1920, event: "Kirghiz ASSR established (renamed Kazakh ASSR in 1925)" },
  { year: 1930, event: "Forced collectivisation begins; famine devastates Kazakh people" },
  { year: 1936, event: "Kazakh SSR established as a full Union Republic" },
  { year: 1937, event: "Alash leaders and Kazakh intelligentsia shot in the Great Terror" },
  { year: 1941, event: "Volga Germans deported en masse to Kazakhstan" },
  { year: 1944, event: "Chechens, Ingush, Crimean Tatars deported to Kazakhstan" },
  { year: 1949, event: "First Soviet nuclear test at Semipalatinsk" },
  { year: 1954, event: "Virgin Lands Campaign begins; mass Slavic settlement" },
  { year: 1961, event: "Gagarin launches from Baikonur — Kazakhstan hosts the space age" },
  { year: 1986, event: "Jeltoqsan riots in Alma-Ata — early spark of Kazakh nationalism" },
  { year: 1989, event: "Nevada-Semipalatinsk movement ends nuclear testing" },
  { year: 1991, event: "Last republic to declare independence — December 16" },
  { year: 1994, event: "Nuclear arsenal voluntarily surrendered" },
  { year: 1997, event: "Capital moved from Almaty to Astana on the northern steppe" },
  { year: 2022, event: "January uprising; suppressed with Russian CSTO assistance" },
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
              <h3 style={{ margin: 0, color: "#e8f0f0", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#446060", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0c0c0", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#080c0c", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#7a9898", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${CYAN}, ${GOLD}, ${CYAN})` }} />
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
            background: i % 3 === 0 ? CYAN : i % 3 === 1 ? GOLD : "#446060",
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: 12, minWidth: 50, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#6a8888", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  // Kazakh flag: light blue with yellow sun and eagle
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{ width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 60px ${CYAN}55`, height: 80, background: "#00AEDB", position: "relative", display: "flex", alignItems: "center" }}>
        {/* Ornamental stripe on left */}
        <div style={{ width: 14, height: "100%", background: "#009BBE", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", padding: "4px 2px" }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ width: 8, height: 8, background: GOLD, borderRadius: "50%", opacity: 0.8 }} />
          ))}
        </div>
        {/* Sun */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <div style={{ position: "relative", width: 40, height: 40 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: SUN, opacity: 0.95 }} />
            {[...Array(32)].map((_, i) => (
              <div key={i} style={{
                position: "absolute", left: "50%", top: "50%",
                width: 2, height: 22,
                background: SUN,
                transformOrigin: "top center",
                transform: `rotate(${i * 11.25}deg) translateX(-50%) translateY(-130%)`,
                opacity: 0.85,
              }} />
            ))}
          </div>
          {/* Eagle silhouette */}
          <svg width="32" height="28" viewBox="0 0 32 28" style={{ opacity: 0.9 }}>
            <path d="M16 6 Q6 2 2 10 Q8 12 12 10 Q8 16 6 20 Q12 18 15 14 Q14 20 12 24 Q18 20 16 14 Q18 20 20 24 Q18 20 17 14 Q20 18 26 20 Q24 16 20 10 Q24 12 30 10 Q26 2 16 6Z" fill={SUN} />
            <ellipse cx="16" cy="10" rx="4" ry="5" fill={SUN} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SteppeHorizon() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 160, opacity: 0.06 }} viewBox="0 0 900 160" preserveAspectRatio="none">
      <path d="M0 160 Q100 80 200 120 Q300 60 400 100 Q500 40 600 90 Q700 50 800 80 Q850 65 900 70 L900 160Z" fill={GOLD} />
      <circle cx="160" cy="40" r="28" fill={SUN} />
      {[...Array(16)].map((_, i) => (
        <line key={i} x1="160" y1="40" x2={160 + 44 * Math.cos(i * Math.PI / 8)} y2={40 + 44 * Math.sin(i * Math.PI / 8)} stroke={SUN} strokeWidth="2" />
      ))}
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd8d8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 40%, #001a1a 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: CYAN }} />
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 3, background: GOLD }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: CYAN }} />
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, height: 3, background: GOLD }} />

        <SteppeHorizon />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>

          {/* Sun icon */}
          <div style={{ position: "relative", width: 64, height: 64, margin: "0 auto" }}>
            <div style={{ position: "absolute", inset: 8, borderRadius: "50%", background: GOLD, opacity: 0.9 }} />
            {[...Array(24)].map((_, i) => (
              <div key={i} style={{
                position: "absolute", left: "50%", top: "50%",
                width: 2, height: 28,
                background: GOLD,
                transformOrigin: "top center",
                transform: `rotate(${i * 15}deg) translateX(-50%) translateY(-130%)`,
                opacity: 0.7,
              }} />
            ))}
          </div>

          <div style={{ width: 48, height: 1, background: CYAN, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Қазақ Кеңестік Социалистік Республикасы
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f0f5f5",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${CYAN}55`,
          }}>
            The Kazakh<br /><span style={{ color: LIGHT_CYAN }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#335555", lineHeight: 1.8, fontStyle: "italic" }}>
            A nomadic civilisation broken and rebuilt. The steppe that launched humanity into space. The ground zero of the Soviet nuclear programme. A nation that lost nearly half its people — and survived.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1936–1991", "Almaty / Astana", "2.7M km²", "Central Asia"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${CYAN}55`, color: LIGHT_CYAN, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${CYAN}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      {/* Pull quote */}
      <div style={{ background: CYAN, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#e0f8f8", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "We are the people of the steppe. We survived the Mongols, the Russians, and Stalin. We will survive anything." — Kazakh proverb
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#e8f0f0", marginBottom: 14 }}>The Steppe Republic the World Overlooked</h2>
            <p style={{ fontSize: "1.05rem", color: "#2a4444", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Kazakhstan is the ninth-largest country on Earth, yet its history remains almost entirely unknown outside the former Soviet space. It was simultaneously the USSR's nuclear testing ground, its space launch pad, its dumping ground for deported peoples, and one of its most brutally collectivised nations. The Kazakh people paid an extraordinary price — and built something extraordinary from the ruins.
            </p>
          </div>
        </AnimCard>

        {/* Polygon callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #001a00, ${MID})`, border: `1px solid #558B2F55`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>☢</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#c0e0b0", fontSize: "1.2rem", marginTop: 0 }}>The Polygon — 40 Years of Silence</h3>
              <p style={{ color: "#3a5530", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                For 40 years, the Soviet government conducted nuclear tests in northeastern Kazakhstan and told no one. Local people noticed strange illnesses, children born with defects, livestock dying. They were told nothing. It was poet Olzhas Suleimenov who finally broke the silence in 1989, reading an anti-nuclear poem on live television and spontaneously calling for a movement. Within months, 2 million people had signed the Nevada-Semipalatinsk petition. Testing stopped within a year. It remains one of the greatest civic victories of the late Soviet era.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Section cards */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${CYAN}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${CYAN}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${CYAN}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Kazakhstan in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "~2M", l: "Killed in the 1930s famine — up to 42% of Kazakhs" },
                { n: "456", l: "Nuclear tests at Semipalatinsk" },
                { n: "9th", l: "Largest country on Earth by area" },
                { n: "60+", l: "Nationalities forcibly deported to Kazakhstan" },
                { n: "1991", l: "Last republic to leave the USSR" },
                { n: "1994", l: "Nuclear arsenal surrendered voluntarily" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: CYAN, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#1a3a3a", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Timeline */}
        <AnimCard>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${CYAN}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${CYAN}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Baikonur callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #00001a, ${MID})`, border: `1px solid #1565C055`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🚀</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0c8f0", fontSize: "1.2rem", marginTop: 0 }}>Baikonur — The Steppe That Touched the Stars</h3>
              <p style={{ color: "#284060", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                There is a remarkable irony at the heart of Soviet space history: the country that launched humanity into space did so from a facility built on land taken from a people Moscow had spent decades trying to destroy. The Kazakh steppe — dismissed as empty, bombed with nuclear weapons, flooded with settlers — was also the ground from which Sputnik rose, from which Gagarin flew, from which every Soviet cosmonaut departed into the void. Kazakhstan held the launchpad of the space age and was never given the credit.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #00100f, #080c0c)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <div style={{ fontSize: 48, lineHeight: 1 }}>🦅</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#e8f0f0", marginTop: 16 }}>The Steppe Remembers</h2>
            <p style={{ color: "#224040", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Kazakhstan today is a country of extraordinary contradictions — futurist glass towers rising from the frozen steppe, ancient eagle-hunting traditions kept alive alongside one of the world's fastest-growing economies, a government that suppresses dissent while hosting the world's religions in peace conferences. The Soviet chapter left deep scars: a famine that halved the population, a nuclear wasteland in the east, a demographic shift that made Kazakhs strangers in their own land. But the steppe endures. The dombyra still plays. The eagle still flies. And the golden sun on the blue flag shines over a nation that outlasted everything thrown at it.
            </p>
            <div style={{ width: 50, height: 1, background: CYAN, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#050a0a", borderTop: `3px solid ${CYAN}`, borderBottom: `2px solid ${GOLD}`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#0e2222", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          KAZAKH SSR · 1936–1991 · ALMATY · ҚАЗАҚ КСР
        </p>
      </div>
    </div>
  );
}
