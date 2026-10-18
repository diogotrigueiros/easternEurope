import { useState, useEffect, useRef } from "react";

const RED = "#C0392B";
const DARK_RED = "#7B241C";
const GOLD = "#D4AC0D";
const CREAM = "#FAF3E0";
const DARK = "#1a1a1a";
const MID = "#2d2d2d";

const sections = [
  {
    id: "riflemen",
    title: "Red Latvian Riflemen",
    subtitle: "The Iron Fist of the Revolution",
    icon: "⚔",
    color: "#C0392B",
    year: "1915–1920",
    content: `Born in the trenches of WWI, the Latvian Riflemen were among the most battle-hardened units in the entire Russian Empire. When revolution came, they became the backbone of Bolshevik military power. Lenin himself called them "the most reliable troops of the revolution." They defended Petrograd, crushed counter-revolutionary forces, and were instrumental in securing Soviet power from Ukraine to Siberia. At their peak, over 40,000 Latvian riflemen served the Red Army — an extraordinary contribution from a tiny nation.`,
    facts: [
      "Protected Lenin personally in the Kremlin",
      "Suppressed the Left SR uprising in Moscow, 1918",
      "Formed a key part of the Cheka's armed units",
      "Fought across 14 different fronts during the Civil War",
    ],
  },
  {
    id: "cheka",
    title: "Latvians in the Cheka",
    subtitle: "Architects of Soviet Security",
    icon: "🔎",
    color: "#884EA0",
    year: "1917–1930s",
    content: `Latvians held disproportionate power in the early Soviet security apparatus. Jānis Pētersons (Peters) served as deputy head of the Cheka under Dzerzhinsky. Martins Lācis ran entire departments and wrote seminal texts on Red Terror doctrine. Their organizational discipline, literacy, and revolutionary zeal made them indispensable to the new state. This outsized influence reflected a broader pattern: Latvian Bolsheviks, exiled for years, returned home through Moscow with enormous accumulated power.`,
    facts: [
      "Jānis Peters deputized under Dzerzhinsky himself",
      "Latvians led the crackdown after the 1918 Moscow uprising",
      "Martins Lācis theorized the Red Terror in writing",
      "Latvian units guarded the Kremlin complex directly",
    ],
  },
  {
    id: "republic",
    title: "The Latvian SSR",
    subtitle: "Soviet Latvia's Dual Life",
    icon: "🏛",
    color: "#1A5276",
    year: "1940–1991",
    content: `Occupied and formally annexed in 1940, Latvia became a Soviet republic under enormous pressure. After Nazi occupation and re-annexation in 1944, Soviet Latvia underwent rapid industrialisation. Riga became one of the USSR's most important industrial and cultural centers — producing VEF radios (used across the entire Soviet bloc), RAF minibuses, and world-class electronics. The Latvian SSR also produced one of the highest standards of living in the Soviet Union, and its culture maintained a quietly distinct identity beneath the Soviet surface.`,
    facts: [
      "VEF Riga radios were exported across the entire USSR",
      "RAF minibuses became the standard Soviet van",
      "Riga hosted major all-Union scientific institutes",
      "Latvia had the highest GDP per capita in the Soviet bloc",
    ],
  },
  {
    id: "industry",
    title: "Industrial Powerhouse",
    subtitle: "The USSR's Western Workshop",
    icon: "⚙",
    color: "#1E8449",
    year: "1945–1985",
    content: `Post-war Latvia was transformed into an industrial engine for the entire Soviet Union. The Riga Motor Plant produced the iconic RAF-977 Latviya minibus, ubiquitous from Vladivostok to Minsk. VEF (Valsts Elektrotehniskā Fabrika) manufactured radios, telephone exchanges, and precision instruments exported across the bloc. The Alpha factory produced cameras. Laima chocolates fed the whole USSR. Latvia punched enormously above its weight as a small republic that became a cornerstone of Soviet manufacturing.`,
    facts: [
      "RAF minibuses served as ambulances across all 15 republics",
      "VEF employed over 20,000 workers at its peak",
      "Laima became one of the USSR's most recognized brands",
      "Riga produced 40% of Soviet telephone exchange equipment",
    ],
  },
  {
    id: "singing",
    title: "The Singing Revolution",
    subtitle: "Freedom Through Song",
    icon: "🎵",
    color: "#D4AC0D",
    year: "1987–1991",
    content: `Latvia's path to independence was sung, not fought. The Latvian Song and Dance Festival tradition — dating to 1873 — became a vehicle for national revival under Soviet rule. In 1989, nearly two million people joined hands across Estonia, Latvia, and Lithuania in the Baltic Way — a 675-kilometre human chain demanding independence. The Latvian SSR's Supreme Soviet declared sovereignty in 1989 and full independence in 1991. The singing had won.`,
    facts: [
      "The Baltic Way stretched 675km through all three countries",
      "~2 million people participated in the human chain",
      "Latvia declared independence on 21 August 1991",
      "Song festivals had continued throughout Soviet occupation",
    ],
  },
  {
    id: "culture",
    title: "Culture & Science",
    subtitle: "Minds the USSR Couldn't Silence",
    icon: "🎨",
    color: "#CA6F1E",
    year: "1940–1991",
    content: `Despite Sovietization, Latvian culture proved resilient. The Dainas — ancient Latvian folk songs — were preserved. Latvian cinema produced internationally recognized films. The Riga school of animated film created surrealist and satirical works that slipped past censors. Scientists at Riga's institutes contributed to Soviet space technology, chemistry, and computing. Architect Gunārs Birkerts, though he emigrated, showed the world what Latvian design could achieve. The republic maintained its language, its choral traditions, and its distinctive amber-tinged soul.`,
    facts: [
      "Riga's animated studio produced surrealist films through allegory",
      "Latvian chemists contributed to Soviet space program materials",
      "The Dainas collection preserves over 1.2 million folk song texts",
      "Riga Polytechnic Institute was a top Soviet engineering school",
    ],
  },
];

const timeline = [
  { year: 1915, event: "Latvian Rifle battalions formed in WWI" },
  { year: 1917, event: "Riflemen join the Bolshevik Revolution" },
  { year: 1918, event: "Latvian SSR declared (short-lived)" },
  { year: 1920, event: "Latvia gains independence; many Latvians remain in USSR" },
  { year: 1940, event: "Soviet occupation; Latvian SSR re-established" },
  { year: 1941, event: "Nazi occupation begins" },
  { year: 1944, event: "Soviet re-occupation; massive industrialization begins" },
  { year: 1949, event: "Mass deportations to Siberia" },
  { year: 1960, event: "VEF and RAF factories at peak production" },
  { year: 1988, event: "Latvian People's Front founded" },
  { year: 1989, event: "Baltic Way human chain" },
  { year: 1991, event: "Independence restored" },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
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
      transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
}

function SectionCard({ s, index }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimCard delay={index * 0.08}>
      <div style={{
        background: MID,
        border: `1px solid ${s.color}44`,
        borderRadius: 2,
        overflow: "hidden",
        marginBottom: 24,
        cursor: "pointer",
        transition: "border-color 0.3s",
        borderLeft: `4px solid ${s.color}`,
      }}
        onClick={() => setOpen(o => !o)}
      >
        <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 32, lineHeight: 1 }}>{s.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0, color: "#fff", fontSize: 18, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "33", color: s.color, borderRadius: 2, letterSpacing: "0.08em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "4px 0 0", color: "#aaa", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 18, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none" }}>+</span>
        </div>

        {open && (
          <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${s.color}22` }}>
            <p style={{ color: "#ccc", lineHeight: 1.75, fontSize: 15, marginTop: 20 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginTop: 20 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#111", borderLeft: `3px solid ${s.color}`, padding: "10px 14px", borderRadius: 1 }}>
                  <p style={{ margin: 0, color: "#ddd", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
    <div ref={ref}>
      <div style={{ position: "relative", paddingLeft: 32 }}>
        <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${RED}, ${GOLD})` }} />
        {timeline.map((t, i) => (
          <div key={i} style={{
            position: "relative", marginBottom: 28,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-20px)",
            transition: `opacity 0.5s ${i * 0.06}s, transform 0.5s ${i * 0.06}s`,
          }}>
            <div style={{ position: "absolute", left: -26, top: 4, width: 10, height: 10, borderRadius: "50%", background: i % 3 === 0 ? RED : i % 3 === 1 ? GOLD : "#888", border: "2px solid " + MID }} />
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span style={{ fontFamily: "monospace", color: GOLD, fontSize: 13, minWidth: 42, fontWeight: 700 }}>{t.year}</span>
              <span style={{ color: "#ccc", fontSize: 14, lineHeight: 1.5 }}>{t.event}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StarDecor() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" style={{ display: "block" }}>
      <polygon points="24,4 28,18 42,18 31,27 35,42 24,33 13,42 17,27 6,18 20,18" fill={RED} opacity="0.85" />
    </svg>
  );
}

function HeroFlag() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "32px auto 24px", maxWidth: 320 }}>
      <div style={{ width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 40px ${RED}33` }}>
        <div style={{ height: 20, background: RED }} />
        <div style={{ height: 20, background: "#fff" }} />
        <div style={{ height: 20, background: RED }} />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#eee" }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* HERO */}
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 24px",
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at center, #2a0a0a 0%, ${DARK} 70%)`,
      }}>
        {/* Decorative stripes */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: RED }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: RED }} />

        <div style={{ transform: `translateY(${scrollY * 0.25}px)`, transition: "transform 0.1s linear" }}>
          <StarDecor />
          <div style={{ width: 60, height: 2, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.35em", color: GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>Latvijas Padomju Sociālistiskā Republika</p>
          <h1 style={{
            fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#fff",
            margin: "0 0 8px",
            textShadow: `0 0 60px ${RED}88`,
          }}>
            The Latvian<br /><span style={{ color: RED }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "16px auto 0", fontSize: "1.1rem", color: "#bbb", lineHeight: 1.7, fontStyle: "italic" }}>
            A small nation that shaped the course of revolution, industrialised a continent, and sang its way to freedom.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {["1940–1991", "Riga", "1.5M population"].map(tag => (
              <span key={tag} style={{ padding: "5px 14px", border: `1px solid ${GOLD}55`, color: GOLD, fontSize: 12, letterSpacing: "0.1em", fontFamily: "monospace" }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", animation: "bounce 1.8s infinite" }}>
          <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${RED}, transparent)`, margin: "0 auto" }} />
        </div>
        <style>{`@keyframes bounce { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
      </div>

      {/* INTRO BANNER */}
      <div style={{ background: RED, padding: "28px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#fff", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "The most reliable troops of the revolution" — <strong>V.I. Lenin on the Latvian Riflemen</strong>
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        {/* Intro text */}
        <AnimCard>
          <div style={{ marginBottom: 60, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#fff", marginBottom: 16 }}>An Underrated Force in History</h2>
            <p style={{ fontSize: "1.05rem", color: "#bbb", lineHeight: 1.8, maxWidth: 680, margin: "0 auto" }}>
              Latvia's contributions to the 20th century — to revolution, to Soviet industry, to peaceful liberation — remain largely overlooked in Western historical memory. From the riflemen who saved Lenin's government to the engineers who built the Soviet bloc's minibuses, Latvia left its mark everywhere.
            </p>
          </div>
        </AnimCard>

        {/* Section cards */}
        <div style={{ marginBottom: 60 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ flex: 1, height: 1, background: `${RED}55` }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: RED, fontSize: "1.1rem", letterSpacing: "0.12em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${RED}55` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats row */}
        <AnimCard>
          <div style={{ background: MID, border: `1px solid ${GOLD}33`, borderRadius: 2, padding: "32px 24px", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: GOLD, textAlign: "center", marginTop: 0, fontSize: "1.4rem" }}>Latvia in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "40,000+", l: "Latvian Riflemen in the Red Army" },
                { n: "#1", l: "GDP per capita in Soviet bloc" },
                { n: "675 km", l: "Baltic Way human chain length" },
                { n: "1.2M", l: "Latvian Dainas folk song texts" },
                { n: "20,000", l: "VEF factory workers at peak" },
                { n: "51", l: "Years as a Soviet republic" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "2rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: RED }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#999", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Timeline */}
        <AnimCard>
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ flex: 1, height: 1, background: `${RED}55` }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: RED, fontSize: "1.1rem", letterSpacing: "0.12em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${RED}55` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a0000, #0d0d0d)`, border: `1px solid ${RED}55`, borderRadius: 2, padding: 40, textAlign: "center" }}>
            <StarDecor />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#fff", marginTop: 16 }}>A Legacy Reclaimed</h2>
            <p style={{ color: "#bbb", lineHeight: 1.8, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Independent since 1991, Latvia has joined NATO and the EU — yet its Soviet-era chapters remain complex: trauma of occupation alongside genuine industrial achievement, cultural suppression alongside remarkable resilience. The Latvian SSR was never just a victim. It was, in many ways, an unlikely architect of the world the 20th century became.
            </p>
            <div style={{ width: 60, height: 2, background: GOLD, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#111", borderTop: `2px solid ${RED}`, padding: "24px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#555", fontSize: 12, letterSpacing: "0.05em", fontFamily: "monospace" }}>
          LATVIAN SSR · 1940–1991 · RIGA · LATVIJAS PSR
        </p>
      </div>
    </div>
  );
}
