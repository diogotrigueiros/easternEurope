import { useState, useEffect, useRef } from "react";

const GREEN = "#1B5E20";
const BRIGHT_GREEN = "#2E7D32";
const LIGHT_GREEN = "#4CAF50";
const RED = "#B71C1C";
const DARK = "#0a0d0a";
const MID = "#111611";
const CARD = "#161d16";
const GOLD = "#A5915A";

const sections = [
  {
    id: "wwii",
    title: "The Great Patriotic War",
    subtitle: "The Most Devastated Nation in Europe",
    icon: "⚔",
    color: "#B71C1C",
    year: "1941–1945",
    content: `Belarus suffered more than almost any other country on Earth during World War II. Trapped between advancing German forces and a scorched-earth Soviet retreat, then subjected to three years of brutal Nazi occupation, Belarus lost an estimated 25–30% of its entire population — between 2 and 3 million people. Entire villages were burned with their inhabitants locked inside. The Khatyn massacre, where 149 people were burned alive in a single barn, became the symbol of a pattern repeated in over 600 Belarusian villages. Despite this, Belarusian partisan resistance was among the most ferocious in all of occupied Europe.`,
    facts: [
      "Up to 30% of the entire population killed — the highest ratio in Europe",
      "Over 600 villages burned to the ground with inhabitants inside",
      "Khatyn: 149 civilians locked in a barn and burned alive, 1943",
      "Minsk was almost entirely destroyed; rebuilt from rubble post-war",
    ],
  },
  {
    id: "partisans",
    title: "Partisan Resistance",
    subtitle: "The Forest War Against the Reich",
    icon: "🌲",
    color: "#2E7D32",
    year: "1941–1944",
    content: `The Belarusian forests became the staging ground for one of the most effective partisan movements in history. By 1943, over 120,000 partisans operated from the forests, disrupting German supply lines, derailing trains, and tying down entire Wehrmacht divisions far from the front. Operation Rail War (1943) saw partisans destroy tens of thousands of rail segments in a single coordinated attack, crippling German logistics before the Kursk offensive. The Naliboki Forest and Lipiczany marshes became legendary partisan strongholds. Belarus's terrain — dense forests and impassable swamps — made it ideal for guerrilla warfare.`,
    facts: [
      "Over 120,000 active partisans by 1943",
      "Operation Rail War destroyed 40,000+ rail segments in days",
      "Partisans controlled vast 'partisan republics' in forest zones",
      "Tied down over 10 German divisions needed at the front",
    ],
  },
  {
    id: "chernobyl",
    title: "Chernobyl's Forgotten Victims",
    subtitle: "70% of the Fallout Fell on Belarus",
    icon: "☢",
    color: "#E65100",
    year: "1986–present",
    content: `When Reactor No. 4 at Chernobyl exploded in April 1986, the prevailing winds carried approximately 70% of the total radioactive fallout across the Belarusian SSR. The Gomel and Mogilev regions were devastated. Over 2 million Belarusians were exposed to significant radiation; 500,000 children were treated for thyroid problems. The Polesie State Radioecological Reserve — the Chernobyl Exclusion Zone on the Belarusian side — covers 2,162 km² of permanently abandoned land. Belarus continues to bear the health, environmental, and economic consequences of a disaster it had nothing to do with causing.`,
    facts: [
      "70% of Chernobyl's total fallout landed on Belarusian territory",
      "Over 485 villages were abandoned due to contamination",
      "2 million+ Belarusians exposed to elevated radiation",
      "The cleanup cost Belarus an estimated 235 billion dollars over 30 years",
    ],
  },
  {
    id: "industry",
    title: "Industrial Giant of the USSR",
    subtitle: "The Soviet Assembly Line",
    icon: "⚙",
    color: "#1565C0",
    year: "1950s–1991",
    content: `Rebuilt from utter ruin after WWII, the Belarusian SSR became one of the Soviet Union's most productive industrial republics — sometimes called the "assembly shop of the USSR." The Minsk Automobile Plant (MAZ) produced heavy trucks exported across the entire bloc and beyond. The Minsk Tractor Works (MTZ) manufactured the Belarus tractor, which became the most widely used agricultural tractor in the Soviet world and is still produced today. BelAZ produced the world's largest mining dump trucks. Minsk's electronics industry produced televisions, radios, and computers. From near-total destruction to industrial powerhouse in less than two decades.`,
    facts: [
      "MAZ trucks were exported to over 45 countries",
      "Belarus tractors: still produced and sold globally today",
      "BelAZ makes the world's largest mining dump trucks",
      "Minsk went from rubble in 1944 to major industrial city by 1960",
    ],
  },
  {
    id: "marc-chagall",
    title: "Marc Chagall & the Arts",
    subtitle: "From Vitebsk to the World",
    icon: "🎨",
    color: "#6A1B9A",
    year: "1887–1985",
    content: `Marc Chagall, one of the most celebrated painters of the 20th century, was born in Vitebsk (then Russian Empire, now Belarus) in 1887. His dreamlike, colour-saturated canvases — floating lovers, fiddlers on rooftops, goats flying over shtetls — drew on the Jewish and Belarusian folk world of his childhood. Vitebsk was also the birthplace of the avant-garde UNOVIS movement under Kazimir Malevich. Belarusian literature, though suppressed under Russification, preserved the works of Yanka Kupala and Yakub Kolas — national poets whose writing defined Belarusian identity. Belarus also produced the Nobel-winning writer Svetlana Alexievich.`,
    facts: [
      "Chagall born in Vitebsk, 1887; became a titan of modern art",
      "Vitebsk hosted UNOVIS, the Soviet avant-garde art school",
      "Svetlana Alexievich won the Nobel Prize in Literature, 2015",
      "Yanka Kupala and Yakub Kolas are celebrated as national poets",
    ],
  },
  {
    id: "republic",
    title: "The Byelorussian SSR",
    subtitle: "A Founding Member of the United Nations",
    icon: "🏛",
    color: "#00695C",
    year: "1919–1991",
    content: `In a remarkable diplomatic achievement, the Byelorussian SSR was granted its own seat at the United Nations in 1945 — despite being part of the USSR — in recognition of its catastrophic wartime losses. It was a founding UN member, giving the Soviet bloc an extra vote. The republic formally existed from 1919, briefly merged into a short-lived Lithuanian-Belarusian SSR, and was reconstituted with its 1939 borders after WWII. Minsk became the capital of the Commonwealth of Independent States (CIS) after the USSR dissolved in 1991. Belarus declared independence on 25 July 1990, confirmed after the August 1991 coup attempt.`,
    facts: [
      "One of only two Soviet republics with a UN seat (alongside Ukraine)",
      "Founding member of the United Nations, 1945",
      "Minsk became capital of the post-Soviet CIS in 1991",
      "Independence declared July 27, 1990",
    ],
  },
  {
    id: "lukashenko",
    title: "Europe's Last Dictatorship",
    subtitle: "From Soviet Republic to Frozen State",
    icon: "🔒",
    color: "#4E342E",
    year: "1994–present",
    content: `Alexander Lukashenko has ruled Belarus since 1994, making him Europe's longest-serving ruler. He never renamed the KGB, kept Soviet-era collective farms, and maintained close ties with Moscow. The 2020 presidential election, widely considered fraudulent, triggered the largest protests in Belarusian history — hundreds of thousands took to the streets of Minsk. The crackdown was severe: thousands were arrested and tortured, opposition leaders fled into exile. The 2021 forced diversion of a Ryanair flight to arrest a journalist shocked the world. Belarus remains the only European state that still applies the death penalty.`,
    facts: [
      "Lukashenko in power since 1994 — Europe's longest-serving leader",
      "Belarus never dismantled the KGB; it still operates under that name",
      "2020 protests: largest in Belarusian history, brutally suppressed",
      "Only European country still carrying out executions",
    ],
  },
];

const timeline = [
  { year: 1897, event: "Marc Chagall born in Vitebsk" },
  { year: 1918, event: "Belarusian People's Republic declared (short-lived)" },
  { year: 1919, event: "Byelorussian Soviet Socialist Republic established" },
  { year: 1941, event: "Nazi Germany invades; Minsk falls within a week" },
  { year: 1942, event: "Partisan movement explodes across the forests" },
  { year: 1943, event: "Khatyn massacre; Operation Rail War" },
  { year: 1944, event: "Operation Bagration liberates Belarus; Minsk in ruins" },
  { year: 1945, event: "BSSR becomes a founding UN member" },
  { year: 1954, event: "Minsk rebuilt; industrial boom begins" },
  { year: 1986, event: "Chernobyl explosion; 70% of fallout hits Belarus" },
  { year: 1988, event: "Kurapaty mass grave discovery reveals Stalinist atrocities" },
  { year: 1990, event: "Independence declared" },
  { year: 1991, event: "USSR dissolves; CIS headquartered in Minsk" },
  { year: 1994, event: "Lukashenko elected; democratic erosion begins" },
  { year: 2015, event: "Svetlana Alexievich wins Nobel Prize in Literature" },
  { year: 2020, event: "Disputed election triggers mass protests; brutal crackdown" },
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
              <h3 style={{ margin: 0, color: "#e8f0e8", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "25", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#666", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#c0ccbf", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#0a0d0a", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#aab8aa", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${RED}, ${GREEN}, ${LIGHT_GREEN})` }} />
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
            background: i % 3 === 0 ? RED : i % 3 === 1 ? GREEN : GOLD,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_GREEN, fontSize: 12, minWidth: 42, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#a0b0a0", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  // Belarusian SSR flag: red top stripe, green bottom stripe, white ornamental band on left
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{ width: "100%", border: `2px solid ${GOLD}44`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 50px ${GREEN}44`, display: "flex", height: 80 }}>
        <div style={{ width: 22, background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", padding: "4px 3px" }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{ width: "100%", height: 6, background: i % 2 === 0 ? RED : GREEN, borderRadius: 1 }} />
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 2, background: RED }} />
          <div style={{ flex: 1, background: GREEN }} />
        </div>
      </div>
    </div>
  );
}

function BisonIcon() {
  // Simple stylized bison (national symbol of Belarus)
  return (
    <svg width="54" height="42" viewBox="0 0 54 42" style={{ display: "block", margin: "0 auto" }}>
      <ellipse cx="30" cy="26" rx="18" ry="11" fill={GREEN} opacity="0.85" />
      <ellipse cx="14" cy="22" rx="10" ry="12" fill={GREEN} opacity="0.85" />
      <ellipse cx="10" cy="16" rx="7" ry="6" fill={GREEN} opacity="0.9" />
      <line x1="20" y1="34" x2="18" y2="42" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      <line x1="28" y1="36" x2="27" y2="42" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="35" x2="35" y2="42" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      <line x1="44" y1="34" x2="43" y2="42" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      <circle cx="7" cy="13" r="2" fill={DARK} />
      <path d="M4 10 Q2 6 6 8" stroke={GREEN} strokeWidth="1.5" fill="none" />
      <path d="M10 10 Q12 6 8 8" stroke={GREEN} strokeWidth="1.5" fill="none" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#d8e8d8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 40%, #001a00 0%, ${DARK} 70%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: RED }} />
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 3, background: GREEN }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: RED }} />
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, height: 3, background: GREEN }} />

        {/* Background forest silhouette */}
        <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.07, width: "100%", height: 180 }} viewBox="0 0 800 180" preserveAspectRatio="none">
          {[0,60,120,180,240,300,360,420,480,540,600,660,720,780].map((x, i) => (
            <polygon key={i} points={`${x},180 ${x+30},${60 + (i%3)*30} ${x+60},180`} fill={GREEN} />
          ))}
        </svg>

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <BisonIcon />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GREEN, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Беларуская Савецкая Сацыялістычная Рэспубліка
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f0f5f0",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${GREEN}55`,
          }}>
            The Belarusian<br /><span style={{ color: LIGHT_GREEN }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 540, margin: "14px auto 0", fontSize: "1.1rem", color: "#7a987a", lineHeight: 1.8, fontStyle: "italic" }}>
            The most devastated nation of WWII. A partisan legend. The USSR's industrial workhorse. And a people still fighting for their freedom.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1919–1991", "Minsk", "10M population", "Eastern Europe"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${GREEN}55`, color: LIGHT_GREEN, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${GREEN}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      {/* Pull quote */}
      <div style={{ background: RED, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#ffe8e8", fontStyle: "italic", maxWidth: 680, marginInline: "auto", lineHeight: 1.7 }}>
          "Belarus lost proportionally more people in World War II than any other country on Earth — and rebuilt itself into an industrial powerhouse within a generation."
        </p>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#e8f0e8", marginBottom: 14 }}>The Quiet Republic That Endured Everything</h2>
            <p style={{ fontSize: "1.05rem", color: "#6a886a", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Belarus sits at the crossroads of Europe — and history has trampled it repeatedly. Invaded, occupied, irradiated, and repressed, the Belarusian people have survived through resilience, forest cunning, and an identity that refused to be erased. Their Soviet chapter is one of tragedy and improbable achievement.
            </p>
          </div>
        </AnimCard>

        {/* Khatyn memorial callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a0000, ${MID})`, border: `1px solid ${RED}55`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>🔔</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0d0d0", fontSize: "1.2rem", marginTop: 0 }}>Khatyn — A Bell for Every Village</h3>
              <p style={{ color: "#9a8080", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                The Khatyn Memorial rings 26 bells every 30 seconds — one for each of the 26 Belarusian villages where the same fate was repeated. A lone bronze survivor stands at the centre, cradling his dead son. It is one of the most haunting memorials in the world, and deliberately distinct from Katyn (the Polish massacre) — a confusion the Soviets may have found convenient.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Section cards */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GREEN, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${GREEN}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GREEN, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Belarus in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "~3M", l: "People killed in WWII" },
                { n: "70%", l: "Chernobyl fallout on Belarusian soil" },
                { n: "600+", l: "Villages burned by Nazis" },
                { n: "120K", l: "Partisan fighters by 1943" },
                { n: "1945", l: "Year Belarus joined the UN" },
                { n: "30yr", l: "Lukashenko in power and counting" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.9rem", fontFamily: "'Playfair Display', serif", color: RED, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#557055", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Timeline */}
        <AnimCard>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GREEN, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Chagall panel */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0a001a, ${MID})`, border: `1px solid #6A1B9A55`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🎨</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#d8c0f0", fontSize: "1.2rem", marginTop: 0 }}>Vitebsk: The City That Made Modern Art</h3>
              <p style={{ color: "#8878a0", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Vitebsk — now a quiet Belarusian city — was once one of the most electrifying centres of the avant-garde. Chagall founded an art school there. Malevich arrived and took it over. El Lissitzky created revolutionary graphic design in its studios. Three giants of modernism, one provincial Belarusian city, at the exact same moment.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #001400, #0a0d0a)`, border: `1px solid ${GREEN}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <BisonIcon />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#e8f0e8", marginTop: 18 }}>Still Standing</h2>
            <p style={{ color: "#6a886a", lineHeight: 1.85, maxWidth: 580, margin: "16px auto 0", fontSize: "1rem" }}>
              Belarus is the only post-Soviet republic that never fully broke with its Soviet past — by choice or by force, depending on who you ask. Its forests still hold the memory of partisans. Its soil still holds Chernobyl's caesium. Its people still hold a dream of a different country — one glimpsed briefly in 2020, before the riot police arrived. The bison still roams the Białowieża Forest. Belarus endures.
            </p>
            <div style={{ width: 50, height: 1, background: GREEN, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#070a07", borderTop: `2px solid ${GREEN}`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#334433", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          BYELORUSSIAN SSR · 1919–1991 · MINSK · БЕЛАРУСКАЯ ССР
        </p>
      </div>
    </div>
  );
}
