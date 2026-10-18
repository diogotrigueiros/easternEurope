import { useState, useEffect, useRef } from "react";

const GREEN = "#006A44";
const LIGHT_GREEN = "#00875A";
const YELLOW = "#FDB913";
const LIGHT_YELLOW = "#FFCD3C";
const RED = "#C1272D";
const DARK = "#080a08";
const MID = "#0d100d";
const CARD = "#111511";
const GOLD = "#A07830";
const LIGHT_GOLD = "#C49040";

const sections = [
  {
    id: "grand-duchy",
    title: "The Grand Duchy of Lithuania",
    subtitle: "Once the Largest State in Europe",
    icon: "⚔",
    color: "#C1272D",
    year: "1236–1795",
    content: `At its peak in the 15th century, the Grand Duchy of Lithuania was the largest state in Europe — stretching from the Baltic Sea to the Black Sea, encompassing modern Lithuania, Belarus, Ukraine, and parts of Russia and Poland. Founded by Mindaugas in 1236, it was the last pagan state in Europe to convert to Christianity, doing so only in 1387 under Jogaila. The Duchy developed a sophisticated legal code, the Lithuanian Statute, that was more advanced than most European legal systems of its time. The Union of Lublin in 1569 merged it with Poland into the Polish-Lithuanian Commonwealth — one of the most remarkable multinational experiments in pre-modern history, with an elected king and a parliamentary tradition centuries old.`,
    facts: [
      "At its peak, the Grand Duchy covered 930,000 km² — larger than any other European state",
      "Last pagan state in Europe — converted to Christianity only in 1387",
      "The Lithuanian Statute of 1529 was one of Europe's most advanced legal codes",
      "The Polish-Lithuanian Commonwealth had an elected monarchy and a parliament",
    ],
  },
  {
    id: "independence-1918",
    title: "The First Republic",
    subtitle: "Twenty Years of Fragile Freedom",
    icon: "🏛",
    color: "#006A44",
    year: "1918–1940",
    content: `Lithuania declared independence on 16 February 1918 — a date still celebrated as the most important in the Lithuanian calendar. The new state immediately faced war on multiple fronts: against Soviet Russia, against Germany, and against Poland over the Vilnius region. Poland seized Vilnius in 1920 and held it until 1939 — leaving Lithuania without its historic capital for nearly two decades, and Kaunas serving as the temporary capital. In 1926 a coup brought Antanas Smetona to power, ending parliamentary democracy. Yet interwar Lithuania built universities, a national culture, and a functioning modern state before it was all swept away in June 1940 by Soviet occupation under the secret terms of the Molotov-Ribbentrop Pact.`,
    facts: [
      "Independence declared 16 February 1918 — the most celebrated date in Lithuania",
      "Poland seized Vilnius in 1920; Lithuania refused to recognise it for 19 years",
      "Kaunas served as 'temporary capital' for the entire interwar period",
      "Antanas Smetona led an authoritarian government from 1926 to 1940",
    ],
  },
  {
    id: "holocaust",
    title: "The Holocaust in Lithuania",
    subtitle: "95% of Lithuanian Jews Were Murdered",
    icon: "🕯",
    color: "#4A4A4A",
    year: "1941–1944",
    content: `Lithuania had one of the largest and most devastating Jewish losses of the entire Holocaust. Of approximately 220,000 Jews living in Lithuania before the war, around 195,000 — over 95% — were murdered, mostly in mass shootings during 1941. Paneriai (Ponary), a forest outside Vilnius, became the site of one of the war's first mass killing operations: over 70,000 Jews, Poles, and Soviet prisoners were shot there. Vilnius had been known as the "Jerusalem of Lithuania" — a major centre of Jewish intellectual and religious life for centuries. The Litvak (Lithuanian Jewish) tradition produced some of the greatest minds of 20th century Jewish thought. In six months, it was almost entirely annihilated. Lithuania's reckoning with local collaboration in these killings is still incomplete.`,
    facts: [
      "Over 95% of Lithuanian Jews murdered — one of the highest rates in Europe",
      "Paneriai forest: 70,000+ killed in mass shootings from 1941",
      "Vilnius was known as 'Jerusalem of Lithuania' for its Jewish cultural life",
      "Most killings happened in the first six months of Nazi occupation",
    ],
  },
  {
    id: "deportations",
    title: "Deportations & Soviet Terror",
    subtitle: "Cattle Cars to Siberia",
    icon: "🚂",
    color: "#7B1C1C",
    year: "1941–1949",
    content: `Lithuania suffered two massive waves of Soviet deportation. On 14–18 June 1941, just days before the Nazi invasion, the Soviets deported over 17,000 Lithuanians in a single operation — entire families loaded into cattle cars, sent to Siberia and Kazakhstan. A second wave in May 1949 deported another 29,000 people. The targets were landowners, intellectuals, former military officers, Catholic clergy, and anyone deemed a threat to Soviet power. Conditions in the deportation camps were brutal; thousands died of cold, hunger, and overwork. Lithuanian June 14 is now a national day of mourning. The deportations were a deliberate attempt to decapitate Lithuanian society and break the will to resist.`,
    facts: [
      "14 June 1941: 17,000+ Lithuanians deported in a single night",
      "May 1949: another 29,000 deported — the largest single operation",
      "Catholic priests and intellectuals were primary targets",
      "June 14 is now a national day of mourning in Lithuania",
    ],
  },
  {
    id: "partisans",
    title: "The Forest Brothers",
    subtitle: "A Decade of Armed Resistance",
    icon: "🌲",
    color: "#2E6B3E",
    year: "1944–1953",
    content: `When the Soviets returned in 1944, tens of thousands of Lithuanians took to the forests. The Lithuanian partisans — part of the broader Baltic Forest Brothers movement — were the most organised armed anti-Soviet resistance in the entire Eastern Bloc. At their peak in 1945–46, around 30,000 fighters operated under a unified command structure with their own courts, newspapers, and military hierarchy. They expected Western military intervention that never came. The last commander of the Lithuanian partisans, Juozas Lukša (codename Daumantas), parachuted back into Lithuania from the West in 1951 and was killed by the KGB in 1951. The last Lithuanian Forest Brother, Stasys Guiga, emerged from hiding only in 1995 — four years after independence.`,
    facts: [
      "~30,000 Lithuanian partisans at their peak in 1945–46",
      "Most organised anti-Soviet armed resistance in the Eastern Bloc",
      "Juozas Lukša parachuted back from the West in 1951; killed by KGB the same year",
      "The last Lithuanian Forest Brother emerged from hiding in 1995",
    ],
  },
  {
    id: "chronicle",
    title: "The Chronicle of the Catholic Church",
    subtitle: "Samizdat That Shook the Soviet Union",
    icon: "📖",
    color: "#8B4513",
    year: "1972–1989",
    content: `From 1972 to 1989, an anonymous group of Lithuanian Catholic priests produced and distributed the Chronicle of the Catholic Church in Lithuania — a samizdat underground journal documenting Soviet religious persecution, human rights abuses, and resistance. It was typed on manual typewriters, copied by hand, passed person to person, and eventually smuggled to the West where it was broadcast back via Radio Free Europe and Vatican Radio. The KGB tried repeatedly to identify and destroy the network behind it — and largely failed. 81 issues were published over 17 years without the editors ever being fully exposed. It was one of the most sustained acts of civil resistance in the entire Soviet era, and it kept Lithuania's cause alive in the Western consciousness for two decades.`,
    facts: [
      "81 issues published over 17 years — entirely anonymously",
      "Typed, hand-copied, and passed person to person across Lithuania",
      "Smuggled to the West and broadcast back via Radio Free Europe",
      "The KGB never fully dismantled the network behind it",
    ],
  },
  {
    id: "independence-1990",
    title: "The Road Back — First to Leave",
    subtitle: "Lithuania Breaks the Soviet Union Open",
    icon: "🦅",
    color: "#006A44",
    year: "1990–1991",
    content: `On 11 March 1990, Lithuania became the first Soviet republic to declare the restoration of independence — before Estonia, before Latvia, before any other. The move was electrifying and terrifying: Gorbachev imposed an economic blockade, cutting off fuel and raw materials. Soviet troops seized buildings in Vilnius. On 13 January 1991 — now known as Freedom Defenders' Day — Soviet paratroopers and tanks moved on Vilnius, storming the TV tower and killing 14 unarmed civilians. Thousands of Lithuanians surrounded the parliament building with their bodies, broadcasting live. The world watched. The coup failed. When the August 1991 putsch against Gorbachev collapsed, Lithuania's independence was internationally recognised within days. It had broken the USSR open.`,
    facts: [
      "First Soviet republic to declare independence — 11 March 1990",
      "Soviet economic blockade imposed immediately after the declaration",
      "13 January 1991: 14 civilians killed at the Vilnius TV Tower",
      "Citizens formed human shields around parliament, broadcasting live",
    ],
  },
  {
    id: "culture",
    title: "Amber, Basketball & Culture",
    subtitle: "The Soul of a Stubborn Nation",
    icon: "🎨",
    color: "#C89020",
    year: "Ancient–present",
    content: `Lithuania is the world's largest producer of amber — the fossilised resin known since antiquity as "Baltic gold," traded across Europe and the Mediterranean for thousands of years. Lithuanian basketball is a national religion: the Soviet Lithuanian team was the dominant force in Soviet and European basketball, and independent Lithuania has produced NBA stars including Arvydas Sabonis, Žydrūnas Ilgauskas, and Domantas Sabonis. The Užgavėnės winter festival, Rasos (Midsummer) celebrations, and the Hill of Crosses — a pilgrimage site outside Šiauliai where hundreds of thousands of crosses have been planted over two centuries — are expressions of a culture that blends pagan and Catholic traditions unlike anywhere else in Europe. Rūpintojėlis, the Sorrowful Christ, is one of the most distinctive folk art traditions in the world.`,
    facts: [
      "Lithuania produces ~80% of the world's amber supply",
      "Soviet Lithuania dominated European and Olympic basketball for decades",
      "The Hill of Crosses: hundreds of thousands of crosses, planted across two centuries",
      "Arvydas Sabonis is widely considered one of the greatest European players ever",
    ],
  },
];

const timeline = [
  { year: 1236, event: "Grand Duchy of Lithuania founded by Mindaugas" },
  { year: 1387, event: "Lithuania converts to Christianity — last pagan state in Europe" },
  { year: 1569, event: "Union of Lublin creates the Polish-Lithuanian Commonwealth" },
  { year: 1795, event: "Third Partition of Poland — Lithuania absorbed into Russian Empire" },
  { year: 1863, event: "January Uprising; Russian Empire bans Lithuanian Latin script" },
  { year: 1883, event: "Aušra — first Lithuanian language newspaper — published in secret" },
  { year: 1918, event: "Independence declared — 16 February" },
  { year: 1920, event: "Poland seizes Vilnius; Kaunas becomes temporary capital" },
  { year: 1926, event: "Smetona coup; parliamentary democracy ends" },
  { year: 1939, event: "Molotov-Ribbentrop Pact secretly assigns Lithuania to the USSR" },
  { year: 1940, event: "Soviet occupation; Lithuanian SSR established" },
  { year: 1941, event: "Mass deportations of 14 June; Nazi invasion days later" },
  { year: 1941, event: "Paneriai massacres begin — 95% of Lithuanian Jews murdered" },
  { year: 1944, event: "Soviet re-occupation; Forest Brothers begin armed resistance" },
  { year: 1949, event: "Second mass deportation — 29,000 Lithuanians sent east" },
  { year: 1951, event: "Partisan commander Juozas Lukša killed by KGB" },
  { year: 1972, event: "Chronicle of the Catholic Church begins publication" },
  { year: 1987, event: "First public protests at the KGB building in Vilnius" },
  { year: 1988, event: "Sąjūdis reform movement founded" },
  { year: 1989, event: "Baltic Way — 675 km human chain" },
  { year: 1990, event: "First Soviet republic to declare independence — 11 March" },
  { year: 1991, event: "Vilnius TV Tower assault — 14 killed; independence recognised" },
  { year: 1995, event: "Last Forest Brother Stasys Guiga emerges from hiding" },
  { year: 2004, event: "Lithuania joins NATO and the European Union" },
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
              <h3 style={{ margin: 0, color: "#eaf0e8", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#3a5040", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0bca8", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#080a08", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#708068", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${GREEN}, ${YELLOW}, ${RED})` }} />
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
            background: i % 3 === 0 ? GREEN : i % 3 === 1 ? YELLOW : RED,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_YELLOW, fontSize: 12, minWidth: 42, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#607858", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  // Lithuanian flag: yellow, green, red horizontal stripes
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{
        width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2,
        overflow: "hidden", boxShadow: `0 0 50px ${GREEN}55`,
        display: "flex", flexDirection: "column", height: 80
      }}>
        <div style={{ flex: 1, background: YELLOW }} />
        <div style={{ flex: 1, background: GREEN }} />
        <div style={{ flex: 1, background: RED }} />
      </div>
    </div>
  );
}

function VytisKnight() {
  // Stylised Vytis — the Lithuanian Knight
  return (
    <svg width="52" height="62" viewBox="0 0 52 62" style={{ display: "block", margin: "0 auto" }}>
      {/* Horse body */}
      <ellipse cx="28" cy="42" rx="16" ry="10" fill={RED} opacity="0.85" />
      {/* Horse legs */}
      <line x1="18" y1="50" x2="14" y2="62" stroke={RED} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="24" y1="52" x2="22" y2="62" stroke={RED} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="32" y1="52" x2="34" y2="62" stroke={RED} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="38" y1="50" x2="42" y2="62" stroke={RED} strokeWidth="3.5" strokeLinecap="round" />
      {/* Horse neck and head */}
      <ellipse cx="16" cy="36" rx="6" ry="9" fill={RED} opacity="0.85" />
      <ellipse cx="10" cy="28" rx="5" ry="6" fill={RED} opacity="0.85" />
      {/* Horse ear */}
      <polygon points="7,23 9,18 12,22" fill={RED} opacity="0.9" />
      {/* Horse eye */}
      <circle cx="8" cy="27" r="1.5" fill={DARK} />
      {/* Rider body */}
      <ellipse cx="26" cy="30" rx="7" ry="10" fill={RED} opacity="0.9" />
      {/* Rider head */}
      <circle cx="26" cy="18" r="6" fill={RED} opacity="0.9" />
      {/* Helmet */}
      <rect x="20" y="13" width="12" height="5" rx="2" fill={YELLOW} opacity="0.9" />
      {/* Sword arm */}
      <line x1="33" y1="24" x2="48" y2="10" stroke={YELLOW} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="7" x2="50" y2="13" stroke={YELLOW} strokeWidth="2" strokeLinecap="round" />
      {/* Shield */}
      <rect x="12" y="26" width="8" height="10" rx="1" fill={YELLOW} opacity="0.9" />
      <line x1="16" y1="26" x2="16" y2="36" stroke={RED} strokeWidth="1.5" />
    </svg>
  );
}

function ForestSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 170, opacity: 0.07 }} viewBox="0 0 900 170" preserveAspectRatio="none">
      {[...Array(24)].map((_, i) => {
        const x = i * 38 + 5;
        const h = 80 + Math.sin(i * 1.9) * 45;
        const w = 22 + Math.sin(i * 2.7) * 8;
        return (
          <g key={i}>
            <polygon points={`${x + w / 2},${170 - h} ${x},170 ${x + w},170`} fill={GREEN} />
            <polygon points={`${x + w / 2},${170 - h * 0.65} ${x - 5},170 ${x + w + 5},170`} fill={GREEN} opacity="0.5" />
          </g>
        );
      })}
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd4c0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 38%, #001a08 0%, ${DARK} 68%)`,
      }}>
        {/* Flag stripe accents */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: YELLOW }} />
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 4, background: GREEN }} />
        <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 4, background: RED }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: YELLOW }} />
        <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 4, background: GREEN }} />
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, height: 4, background: RED }} />

        <ForestSilhouette />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <VytisKnight />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_YELLOW, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Lietuvos Tarybų Socialistinė Respublika
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f0f4ec",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${GREEN}55`,
          }}>
            The Lithuanian<br /><span style={{ color: LIGHT_GREEN }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#2a4030", lineHeight: 1.8, fontStyle: "italic" }}>
            Once the largest state in Europe. The first to break the Soviet Union open. A nation that buried its dead in forests and its defiance in samizdat — and never stopped fighting.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1940–1990", "Vilnius", "3.5M population", "Baltic Sea"].map(tag => (
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
      <div style={{ background: GREEN, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#e0f0e0", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "Lithuania does not ask for independence. Lithuania restores it." — Vytautas Landsbergis, 11 March 1990
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eaf0e8", marginBottom: 14 }}>From Empire to Occupation — and Back</h2>
            <p style={{ fontSize: "1.05rem", color: "#243828", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Lithuania's history is one of the most dramatic arcs in European history: from ruling the continent's largest medieval state to Russian imperial subjugation, to a brief republic, to double occupation, to becoming the republic that cracked the Soviet Union open. It is a small country with a very long memory — and it used every tool available, from prayer to samizdat to song to human shields, to survive.
            </p>
          </div>
        </AnimCard>

        {/* Feb 16 callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0a0800, ${MID})`, border: `1px solid ${YELLOW}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>📅</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0d890", fontSize: "1.2rem", marginTop: 0 }}>
                16 February 1918 — The Most Important Date in Lithuania
              </h3>
              <p style={{ color: "#5a4818", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                The Act of Independence of Lithuania was signed on 16 February 1918 by the twenty members of the Council of Lithuania. It declared the restoration of an independent Lithuanian state — not a new country, but the continuation of an ancient one. This date is still Lithuania's most sacred national holiday. During the Soviet occupation, simply possessing a copy of this document was enough to be arrested. People kept copies hidden in walls, under floorboards, behind icons. The original Act was lost for decades — it was found in 2017 in a German archive, 99 years after it was signed.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Section cards */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_YELLOW, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${GREEN}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_YELLOW, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Lithuania in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "930K km²", l: "Size of the Grand Duchy at its peak" },
                { n: "95%", l: "Of Lithuanian Jews murdered in the Holocaust" },
                { n: "30,000", l: "Partisan Forest Brothers at peak" },
                { n: "81", l: "Issues of the Chronicle of the Catholic Church" },
                { n: "11 Mar", l: "1990 — first republic to declare independence" },
                { n: "14", l: "Civilians killed at Vilnius TV Tower, January 1991" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: GREEN, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#1a3020", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
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
              <h2 style={{ fontFamily: "monospace", color: LIGHT_YELLOW, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* TV Tower callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0f0000, ${MID})`, border: `1px solid ${RED}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>📺</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0b0b0", fontSize: "1.2rem", marginTop: 0 }}>
                13 January 1991 — The Night of the TV Tower
              </h3>
              <p style={{ color: "#5a2020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Soviet paratroopers and tanks moved on Vilnius in the early hours of 13 January 1991, storming the TV tower and killing 14 unarmed civilians. The Lithuanian parliament voted not to resist with weapons. Instead, tens of thousands of citizens surrounded the parliament building with their bare hands, singing hymns and national songs, broadcasting live on radio and what remained of television. The footage went around the world. The Soviet assault stopped. Fourteen people died — and Lithuania did not bend. Every year on January 13, Lithuanians light candles at the TV tower in their memory.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Hill of Crosses callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #080a08, ${MID})`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>✝</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#d0c090", fontSize: "1.2rem", marginTop: 0 }}>
                The Hill of Crosses — A Forest of Defiance
              </h3>
              <p style={{ color: "#4a4020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Outside the city of Šiauliai stands a hill covered in hundreds of thousands of crosses — large and small, carved and simple, ancient and new. The tradition began in the 19th century after anti-Russian uprisings, as a way of mourning the dead and asserting Lithuanian Catholic identity. The Soviets bulldozed the hill three times — and each time it was rebuilt overnight. Today the Hill of Crosses is a UNESCO-recognised site and a place of quiet, overwhelming power. Pope John Paul II visited in 1993 and called it a place where hope had triumphed over oppression.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #001008, #080a08)`, border: `1px solid ${GREEN}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <VytisKnight />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#eaf0e8", marginTop: 18 }}>The Knight Still Rides</h2>
            <p style={{ color: "#1e3028", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Lithuania was the first republic to break the Soviet Union — a fact that changed the world. It did so through a combination of extraordinary civic courage, moral clarity, and the stubborn refusal of a small nation to accept that its story was over. From the Grand Duchy that once ruled half of Eastern Europe, to the underground Chronicle typed in secret, to the human chain of the Baltic Way, to the unarmed citizens who faced tanks with songs — Lithuania's history is a long argument against the idea that small nations do not matter. The Vytis knight on the red shield still charges forward. He always has.
            </p>
            <div style={{ width: 50, height: 1, background: GREEN, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#05070a", borderTop: `3px solid ${GREEN}`, borderBottom: `2px solid ${YELLOW}44`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#0e2018", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          LITHUANIAN SSR · 1940–1990 · VILNIUS · LIETUVOS TSR
        </p>
      </div>
    </div>
  );
}
