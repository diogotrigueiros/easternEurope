import { useState, useEffect, useRef } from "react";

const WINE = "#722F37";
const DARK_WINE = "#4A1C22";
const GOLD = "#C9A84C";
const LIGHT_GOLD = "#E8C97A";
const DARK = "#111215";
const MID = "#1e2024";
const CARD = "#252830";

const sections = [
  {
    id: "stalin",
    title: "Stalin & the Georgian Ascent",
    subtitle: "From Gori to the Kremlin",
    icon: "★",
    color: "#C0392B",
    year: "1878–1953",
    content: `Ioseb Jughashvili — born in Gori, Georgia — rose from seminary student and bank robber for Bolshevik funds to become the absolute ruler of the world's largest country. Georgia's most consequential export reshaped the 20th century. Stalin's collectivisation, industrialisation, and wartime leadership transformed the USSR into a superpower, at catastrophic human cost. Whether viewed as a monster or a moderniser, no Georgian left a deeper mark on world history. His birthplace Gori maintained a Stalin museum that still operates today.`,
    facts: [
      "Born in Gori, Georgia in 1878 to a cobbler and a housemaid",
      "Robbed banks across the Caucasus to fund Bolshevik operations",
      "Led the USSR through WWII to victory over Nazi Germany",
      "Gori's Stalin Museum still attracts thousands of visitors annually",
    ],
  },
  {
    id: "beria",
    title: "Lavrentiy Beria",
    subtitle: "Georgia's Most Feared Son",
    icon: "🔎",
    color: "#8E44AD",
    year: "1899–1953",
    content: `Lavrentiy Beria, born in Merkheuli, Georgia, became the longest-serving and most powerful head of the Soviet secret police. As head of the NKVD and later MGB, he oversaw the Gulag system, mass deportations, and the Soviet nuclear weapons programme — reportedly delivering the atomic bomb to Stalin ahead of schedule. A Georgian through and through, he spoke Russian with a heavy accent his entire life. After Stalin's death he briefly appeared set to liberalize the USSR before being arrested and executed by his rivals within months.`,
    facts: [
      "Oversaw Soviet nuclear weapons development from 1945",
      "Managed the entire Gulag system at its largest extent",
      "Proposed German reunification to end the Cold War in 1953",
      "Executed just months after Stalin died, in December 1953",
    ],
  },
  {
    id: "wine",
    title: "Wine, the Georgian Gift",
    subtitle: "8,000 Years of Viticulture",
    icon: "🍷",
    color: "#922B21",
    year: "6000 BC – present",
    content: `Georgia is widely regarded as the birthplace of wine. Archaeological evidence from the Caucasus shows wine production dating back 8,000 years — older than any other known winemaking tradition. Georgia's qvevri method (fermenting wine in buried clay vessels) is recognised by UNESCO as Intangible Cultural Heritage. Under the Soviet system, Georgian wine was the prestige product of the entire bloc — Kindzmarauli and Khvanchkara were Stalin's personal favourites, and Georgian wine stocked the Kremlin's cellars and elite tables across the USSR.`,
    facts: [
      "Oldest evidence of winemaking on Earth, ~6000 BC",
      "UNESCO-listed qvevri clay vessel tradition still in use",
      "Kindzmarauli was Stalin's personally preferred wine",
      "Over 500 unique indigenous grape varieties cultivated",
    ],
  },
  {
    id: "republic",
    title: "The Georgian SSR",
    subtitle: "Caucasus Pearl of the Soviet Union",
    icon: "🏛",
    color: "#1A6B5A",
    year: "1921–1991",
    content: `Annexed by the Red Army in 1921, the Georgian SSR became one of the most culturally distinct republics in the Union. Tbilisi was a cosmopolitan city by Soviet standards — its architecture, cuisine, cinema, and polyphonic music set it apart. Georgia had a disproportionate number of scientists, artists, and party officials at the all-Union level. Its Black Sea coast made it the Soviet Riviera: Batumi and Sukhumi were the holiday destinations of choice for the Soviet elite. Georgia also produced manganese, tea, and citrus for the entire bloc.`,
    facts: [
      "Tbilisi hosted major all-Union film and arts institutions",
      "Batumi and Sukhumi were premier Soviet holiday destinations",
      "Georgia supplied nearly all Soviet tea and citrus",
      "Georgian polyphonic singing is UNESCO Intangible Heritage",
    ],
  },
  {
    id: "cinema",
    title: "Georgian Cinema",
    subtitle: "The Soviet World's Most Daring Films",
    icon: "🎬",
    color: "#D4830D",
    year: "1950s–1980s",
    content: `The Georgian school of cinema is one of the great underappreciated traditions of world film. Directors like Sergei Parajanov (Shadows of Forgotten Ancestors, The Color of Pomegranates) and Tengiz Abuladze (Repentance) created works of searing originality that baffled and alarmed Soviet censors. Parajanov's lush, image-driven poetics defied every convention of socialist realism. Abuladze's Repentance — a savage allegory of Stalinism — was filmed in secret and released only under Gorbachev. Georgian filmmakers pushed the boundaries of what Soviet cinema could be.`,
    facts: [
      "Parajanov's films were banned and he was imprisoned by the KGB",
      "Repentance was filmed in secret during the Brezhnev era",
      "Georgian studio Gruziya-Film produced over 100 features",
      "The Color of Pomegranates is regularly listed among the greatest films ever made",
    ],
  },
  {
    id: "rose",
    title: "The Rose Revolution",
    subtitle: "Georgia Breaks Free",
    icon: "🌹",
    color: "#C0392B",
    year: "2003",
    content: `Though independence came in 1991, Georgia's post-Soviet path was turbulent — civil war, secessionist conflicts, and corruption. In 2003, mass protests against a fraudulent election brought tens of thousands into the streets of Tbilisi holding roses. President Shevardnadze resigned without bloodshed. The Rose Revolution brought Mikheil Saakashvili to power and launched sweeping reforms that dramatically reduced corruption and modernised the state. It became the template for subsequent colour revolutions across the post-Soviet space.`,
    facts: [
      "Protesters carried roses as a symbol of peaceful intent",
      "Shevardnadze resigned after parliament was stormed peacefully",
      "Georgia's corruption index improved dramatically post-2004",
      "Inspired the Orange Revolution in Ukraine (2004) and others",
    ],
  },
];

const timeline = [
  { year: "6000 BC", event: "Earliest evidence of winemaking in the South Caucasus" },
  { year: 1801, event: "Georgia annexed by the Russian Empire" },
  { year: 1878, event: "Ioseb Jughashvili (Stalin) born in Gori" },
  { year: 1899, event: "Lavrentiy Beria born in Merkheuli" },
  { year: 1907, event: "Stalin robs Tiflis bank, netting 250,000 roubles for Bolsheviks" },
  { year: 1917, event: "Bolshevik Revolution; Georgia declares independence" },
  { year: 1921, event: "Red Army invades; Georgian SSR established" },
  { year: 1924, event: "Georgian anti-Soviet uprising crushed" },
  { year: 1936, event: "Georgian SSR becomes a full Union Republic" },
  { year: 1945, event: "WWII ends; Beria leads nuclear weapons programme" },
  { year: 1953, event: "Stalin dies; Beria arrested and executed" },
  { year: 1956, event: "Pro-Stalin riots in Tbilisi after Khrushchev's denunciation" },
  { year: 1978, event: "Mass protests preserve Georgian as official state language" },
  { year: 1989, event: "Soviet troops massacre protesters in Tbilisi; April 9 tragedy" },
  { year: 1991, event: "Georgia declares independence from the USSR" },
  { year: 2003, event: "Rose Revolution" },
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
          <span style={{ fontSize: 28, lineHeight: 1, minWidth: 36, textAlign: "center" }}>{s.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0, color: "#f0ece4", fontSize: 17, fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "25", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#888", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>

        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#c8c2b8", lineHeight: 1.8, fontSize: 15, marginTop: 18, fontFamily: "'Cormorant Garamond', serif" }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#111315", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#bbb", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${WINE}, ${GOLD}, ${WINE})` }} />
      {timeline.map((t, i) => (
        <div key={i} style={{
          position: "relative", marginBottom: 24,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-18px)",
          transition: `opacity 0.5s ${i * 0.05}s, transform 0.5s ${i * 0.05}s`,
        }}>
          <div style={{
            position: "absolute", left: -26, top: 5,
            width: 10, height: 10, borderRadius: "50%",
            background: i % 3 === 0 ? WINE : i % 3 === 1 ? GOLD : "#555",
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: GOLD, fontSize: 12, minWidth: 54, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#bbb", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function GeorgianCross() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" style={{ display: "block", margin: "0 auto" }}>
      <rect x="24" y="4" width="8" height="48" fill={WINE} />
      <rect x="4" y="24" width="48" height="8" fill={WINE} />
      <rect x="6" y="6" width="14" height="14" fill={WINE} opacity="0.6" />
      <rect x="36" y="6" width="14" height="14" fill={WINE} opacity="0.6" />
      <rect x="6" y="36" width="14" height="14" fill={WINE} opacity="0.6" />
      <rect x="36" y="36" width="14" height="14" fill={WINE} opacity="0.6" />
    </svg>
  );
}

function HeroFlag() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "28px auto 20px", maxWidth: 300 }}>
      <div style={{ width: "100%", border: `2px solid ${GOLD}44`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 50px ${WINE}44`, position: "relative", height: 90, background: "#fff" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, bottom: 0, width: 14, background: WINE }} />
        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 0, right: 0, height: 14, background: WINE }} />
        {[[8, 8], [54, 8], [8, 54], [54, 54]].map(([x, y], i) => (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: 22, height: 22, background: WINE, opacity: 0.7 }} />
        ))}
      </div>
    </div>
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#e8e2d8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Marcellus&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 40%, #2a0a10 0%, ${DARK} 65%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: WINE }} />
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 2, background: GOLD }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: WINE }} />
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, height: 2, background: GOLD }} />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)` }}>
          <GeorgianCross />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "18px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.4em", color: GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 14 }}>
            საქართველოს საბჭოთა სოციალისტური რესპუბლიკა
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Marcellus', serif",
            fontWeight: 400,
            lineHeight: 1.08,
            color: "#f5f0e8",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${WINE}66`,
          }}>
            The Georgian<br /><span style={{ color: WINE }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 540, margin: "14px auto 0", fontSize: "1.15rem", color: "#a09488", lineHeight: 1.75, fontStyle: "italic" }}>
            Birthplace of wine, cradle of Stalin, home of cinema's boldest rebels — Georgia shaped the Soviet century more than any republic its size.
          </p>
          <div style={{ marginTop: 34, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1921–1991", "Tbilisi", "5.5M population", "Caucasus"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${GOLD}44`, color: GOLD, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${WINE}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      {/* Pull quote */}
      <div style={{ background: WINE, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#f5e6dc", fontStyle: "italic", maxWidth: 680, marginInline: "auto", lineHeight: 1.7 }}>
          "Georgia — a country that gave the world wine 8,000 years ago, and gave the Soviet Union its most powerful and most feared ruler."
        </p>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Marcellus', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#f0ece4", marginBottom: 14, fontWeight: 400 }}>The Caucasus Republic That Shaped History</h2>
            <p style={{ fontSize: "1.05rem", color: "#9a9088", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              No Soviet republic of comparable size punched harder above its weight. Georgia gave the USSR its supreme leader, its most feared secret police chief, its finest wines, its most daring cinema, and — ultimately — one of the first successful post-Soviet democratic revolutions.
            </p>
          </div>
        </AnimCard>

        {/* Section cards */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${WINE}55` }} />
              <h2 style={{ fontFamily: "monospace", color: GOLD, fontSize: "0.85rem", letterSpacing: "0.2em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${WINE}55` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${GOLD}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Marcellus', serif", color: GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem", fontWeight: 400 }}>Georgia in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "8,000", l: "Years of winemaking history" },
                { n: "500+", l: "Indigenous grape varieties" },
                { n: "29 yrs", l: "Stalin ruled the USSR" },
                { n: "675 km", l: "Georgian border to border length" },
                { n: "#1", l: "Tea & citrus supplier to USSR" },
                { n: "1921", l: "Year Red Army annexed Georgia" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.9rem", fontFamily: "'Marcellus', serif", color: WINE, fontWeight: 400 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#777", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Timeline */}
        <AnimCard>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${WINE}55` }} />
              <h2 style={{ fontFamily: "monospace", color: GOLD, fontSize: "0.85rem", letterSpacing: "0.2em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${WINE}55` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* April 9 memorial */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a0508, #0d0d0f)`, border: `1px solid ${WINE}55`, borderRadius: 3, padding: "32px 28px", marginBottom: 32, textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🌹</div>
            <h3 style={{ fontFamily: "'Marcellus', serif", color: "#f0ece4", fontSize: "1.3rem", fontWeight: 400, marginTop: 0 }}>April 9, 1989</h3>
            <p style={{ color: "#9a9088", lineHeight: 1.8, maxWidth: 580, margin: "0 auto", fontSize: "1rem" }}>
              Soviet troops dispersed a peaceful demonstration in Tbilisi with toxic gas and sharpened sapper shovels, killing 21 people — mostly women. The April 9 Tragedy became the defining moment of Georgia's independence movement. It is now a national day of remembrance, and the site on Rustaveli Avenue bears the names of every victim.
            </p>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #160508, #0e0e12)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <GeorgianCross />
            <h2 style={{ fontFamily: "'Marcellus', serif", fontSize: "1.7rem", color: "#f0ece4", marginTop: 18, fontWeight: 400 }}>An Ancient Nation, A Soviet Century</h2>
            <p style={{ color: "#9a9088", lineHeight: 1.85, maxWidth: 580, margin: "16px auto 0", fontSize: "1rem" }}>
              Georgia's Soviet chapter was one of extremes: it produced the man who built and terrorised the USSR, yet also the artists who quietly subverted it. It was occupied against its will, yet its people shaped the occupying power from within. Today, Georgia navigates between East and West — but its ancient culture, its wine, its polyphonic voices, and its fierce identity endure unchanged.
            </p>
            <div style={{ width: 50, height: 1, background: GOLD, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#0c0c0e", borderTop: `2px solid ${WINE}`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#444", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          GEORGIAN SSR · 1921–1991 · TBILISI · საქართველოს სსრ
        </p>
      </div>
    </div>
  );
}
