import { useState, useEffect, useRef } from "react";

const BLUE = "#1565C0";
const LIGHT_BLUE = "#1E88E5";
const YELLOW = "#F9A825";
const BRIGHT_YELLOW = "#FFD600";
const DARK = "#09090f";
const MID = "#0e0e1a";
const CARD = "#13131f";
const WHEAT = "#C8A84B";

const sections = [
  {
    id: "holodomor",
    title: "The Holodomor",
    subtitle: "Stalin's Man-Made Famine",
    icon: "🌾",
    color: "#C8A84B",
    year: "1932–1933",
    content: `The Holodomor — literally "death by hunger" — was a man-made famine engineered by Stalin's regime that killed between 3.5 and 7.5 million Ukrainians in two years. Grain quotas were set impossibly high; brigades searched homes and confiscated every last scrap of food. Ukrainians were blacklisted from receiving any food at all if their village failed to meet targets. The famine disproportionately targeted the Ukrainian peasantry — the backbone of Ukrainian national identity. Today, over 30 countries recognise the Holodomor as genocide. It remains one of the defining traumas of the Ukrainian nation.`,
    facts: [
      "3.5–7.5 million Ukrainians killed in 1932–1933",
      "Grain was exported abroad while millions starved inside Ukraine",
      "Villages that missed quotas were blacklisted — no food at all",
      "Recognised as genocide by over 30 countries and counting",
    ],
  },
  {
    id: "wwii",
    title: "Ukraine in World War II",
    subtitle: "Battleground of the Eastern Front",
    icon: "⚔",
    color: "#B71C1C",
    year: "1941–1945",
    content: `Ukraine was the central theatre of the Eastern Front — the most brutal military campaign in human history. The Wehrmacht's drive into Ukraine in 1941 was catastrophic: Kyiv fell after the largest encirclement in military history, with over 600,000 Soviet troops captured. Babi Yar, a ravine outside Kyiv, became the site of one of the largest single massacres of the Holocaust — 33,771 Jews shot in two days. Ukraine lost somewhere between 5 and 8 million people in the war. The Battle of Kursk, partly fought on Ukrainian soil, was the largest tank battle ever. Ukraine was liberated by 1944, utterly devastated.`,
    facts: [
      "Kyiv encirclement: 600,000+ Soviet troops captured — largest ever",
      "Babi Yar: 33,771 Jews massacred in 2 days, September 1941",
      "5–8 million Ukrainians killed during the war",
      "Ukraine hosted the largest tank battle in history at Kursk",
    ],
  },
  {
    id: "breadbasket",
    title: "Breadbasket of Europe",
    subtitle: "The Land That Fed an Empire",
    icon: "🌻",
    color: "#F9A825",
    year: "Ancient–present",
    content: `Ukraine's black soil — chornozem — is among the most fertile on Earth. For centuries Ukraine fed the Russian Empire, the Soviet Union, and much of the world. The Ukrainian SSR produced roughly 25% of all Soviet agricultural output despite covering only 2.7% of its territory. Ukrainian wheat, sunflowers, sugar beet, and corn were the foundation of Soviet food security. Ukraine's agricultural identity is inseparable from its national soul — the sunflower is its national flower, the wheat sheaf appears on its coat of arms. Today Ukraine remains one of the world's top five grain exporters, a fact that has made its fields a geopolitical battleground.`,
    facts: [
      "Ukraine has 30% of the world's richest black soil (chornozem)",
      "Produced ~25% of all Soviet agricultural output",
      "Top 5 global wheat exporter today",
      "The sunflower is Ukraine's national flower",
    ],
  },
  {
    id: "chernobyl",
    title: "Chernobyl",
    subtitle: "The Disaster That Helped End the USSR",
    icon: "☢",
    color: "#558B2F",
    year: "1986",
    content: `On 26 April 1986, Reactor No. 4 at the Chernobyl Nuclear Power Plant in northern Ukraine exploded during a safety test. The Soviet government initially tried to suppress the news. Firefighters arrived with no protective equipment; many died within weeks. The subsequent evacuation of Pripyat — a city of 50,000 — happened 36 hours after the explosion. The disaster released 400 times more radiation than the Hiroshima bomb. Mikhail Gorbachev later said Chernobyl was perhaps the true cause of the Soviet Union's collapse — it shattered the myth of Soviet technological competence and accelerated glasnost. The Exclusion Zone around the plant remains uninhabited today.`,
    facts: [
      "Explosion released 400x more radiation than Hiroshima",
      "Pripyat — 50,000 residents — evacuated 36 hours after the blast",
      "Gorbachev credited Chernobyl as a key cause of the USSR's collapse",
      "The Exclusion Zone covers 2,600 km² still uninhabitable today",
    ],
  },
  {
    id: "cossacks",
    title: "The Cossack Heritage",
    subtitle: "Warriors, Poets, and Nation-Builders",
    icon: "🐴",
    color: "#6A1B9A",
    year: "15th–18th century",
    content: `The Zaporozhian Cossacks were a semi-nomadic warrior people who established the Sich — a fortified military republic — on the islands of the Dnipro River. The Cossacks represented something unique: a free, self-governing society on the steppe frontier. Hetman Bohdan Khmelnytsky led a massive uprising against Polish-Lithuanian rule in 1648, briefly creating a Cossack state. The Cossacks' famous reply to the Sultan's demand for submission became a celebrated piece of Ukrainian folk culture, immortalised by Ilya Repin's painting. The Hetmanate and Cossack traditions remain the foundational myth of Ukrainian statehood and military identity.`,
    facts: [
      "The Zaporozhian Sich was a self-governing military republic",
      "Khmelnytsky Uprising 1648 created a short-lived Cossack state",
      "Repin's 'Cossacks' is one of the most famous paintings in Eastern Europe",
      "Cossack culture underpins modern Ukrainian national identity",
    ],
  },
  {
    id: "science",
    title: "Science & Industry",
    subtitle: "Rockets, Steel, and Soviet Brainpower",
    icon: "🚀",
    color: "#00838F",
    year: "1920s–1991",
    content: `The Ukrainian SSR was the Soviet Union's second-largest economy and its industrial spine. The Donbas region was the USSR's coal and steel heartland. Kharkiv was a major centre of tank production — the T-34, the tank that won WWII, was designed and produced in Kharkiv. Yuzhnoye Design Bureau in Dnipro designed rockets and satellites for the Soviet space programme; it later built the Zenit rocket. Ukraine produced 35% of all Soviet military hardware. Kyiv's Institute of Cybernetics built one of the USSR's earliest computers. The republic trained more engineers per capita than almost anywhere else in the Soviet bloc.`,
    facts: [
      "The T-34 tank — which won WWII — was designed in Kharkiv",
      "Ukraine produced 35% of all Soviet military hardware",
      "Yuzhnoye Design Bureau built rockets for the Soviet space programme",
      "Donbas supplied the majority of Soviet coal and steel",
    ],
  },
  {
    id: "culture",
    title: "Language, Literature & Resistance",
    subtitle: "A Culture That Refused to Disappear",
    icon: "📖",
    color: "#1565C0",
    year: "1800s–1991",
    content: `The Ukrainian language and identity survived centuries of suppression — Tsarist decrees banning Ukrainian publishing, Soviet Russification campaigns, and the destruction of the "Executed Renaissance" — a generation of Ukrainian writers, poets, and intellectuals shot or sent to the Gulag in the 1930s. Taras Shevchenko, the 19th-century poet and painter, remains the central figure of Ukrainian culture — his Kobzar is to Ukrainians what Shakespeare is to the English. The dissident movement of the 1960s–70s produced brave intellectuals like Ivan Dziuba and Vasyl Stus, who died in a Soviet labour camp in 1985. Ukraine's culture endured because ordinary people refused to let it die.`,
    facts: [
      "The 'Executed Renaissance': hundreds of writers shot in the 1930s",
      "Taras Shevchenko's Kobzar is the foundational text of Ukrainian identity",
      "Vasyl Stus died in a Soviet labour camp in 1985",
      "Ukrainian was officially suppressed under multiple Russian/Soviet decrees",
    ],
  },
  {
    id: "independence",
    title: "Road to Independence",
    subtitle: "From Maidan to Sovereignty",
    icon: "🟡",
    color: "#F9A825",
    year: "1991–present",
    content: `Ukraine declared independence on 24 August 1991, confirmed by a 90% referendum vote. The Budapest Memorandum of 1994 saw Ukraine surrender the world's third-largest nuclear arsenal in exchange for security guarantees from Russia, the US, and UK — guarantees that proved worthless in 2014 and 2022. The Orange Revolution of 2004 and the Euromaidan Revolution of 2013–14 demonstrated Ukraine's determination to choose its own path. Russia's annexation of Crimea in 2014 and full-scale invasion in 2022 turned Ukraine into the frontline of a new European war. Ukraine's resistance has become the defining story of the 2020s.`,
    facts: [
      "90% voted for independence in the 1991 referendum",
      "Ukraine gave up 1,900 nuclear warheads under the Budapest Memorandum",
      "Euromaidan 2013–14 removed the pro-Russian Yanukovych government",
      "Russia launched a full-scale invasion on 24 February 2022",
    ],
  },
];

const timeline = [
  { year: "9th c.", event: "Kyivan Rus — the medieval state ancestor of modern Ukraine" },
  { year: 1648, event: "Khmelnytsky Uprising; Cossack Hetmanate established" },
  { year: 1709, event: "Battle of Poltava; Cossack autonomy crushed by Peter the Great" },
  { year: 1814, event: "Taras Shevchenko born — Ukraine's national poet" },
  { year: 1918, event: "Ukrainian People's Republic declared independence" },
  { year: 1919, event: "Ukrainian SSR established after Bolshevik victory" },
  { year: 1932, event: "Holodomor begins — engineered famine kills millions" },
  { year: 1937, event: "Executed Renaissance — Ukrainian intelligentsia purged" },
  { year: 1941, event: "Nazi invasion; Babi Yar massacre" },
  { year: 1943, event: "Battle of Kursk; T-34 tanks produced in Kharkiv" },
  { year: 1945, event: "Liberation; Ukraine joins the UN as a founding member" },
  { year: 1954, event: "Khrushchev transfers Crimea to the Ukrainian SSR" },
  { year: 1986, event: "Chernobyl nuclear disaster" },
  { year: 1991, event: "Independence declared; 90% vote yes in referendum" },
  { year: 1994, event: "Budapest Memorandum — nuclear arsenal surrendered" },
  { year: 2004, event: "Orange Revolution" },
  { year: 2014, event: "Euromaidan; Russia annexes Crimea" },
  { year: 2022, event: "Full-scale Russian invasion begins" },
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
              <h3 style={{ margin: 0, color: "#eeeaf0", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#555", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b8bcd0", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#090910", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#9098b0", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${BLUE}, ${YELLOW}, ${BLUE})` }} />
      {timeline.map((t, i) => (
        <div key={i} style={{
          position: "relative", marginBottom: 24,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-18px)",
          transition: `opacity 0.5s ${i * 0.045}s, transform 0.5s ${i * 0.045}s`,
        }}>
          <div style={{
            position: "absolute", left: -26, top: 5,
            width: 10, height: 10, borderRadius: "50%",
            background: i % 3 === 0 ? BLUE : i % 3 === 1 ? YELLOW : WHEAT,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: YELLOW, fontSize: 12, minWidth: 48, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#8890a8", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{ width: "100%", border: `2px solid ${YELLOW}55`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 60px ${BLUE}55`, display: "flex", flexDirection: "column", height: 80 }}>
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: YELLOW }} />
      </div>
    </div>
  );
}

function TridentIcon() {
  return (
    <svg width="48" height="58" viewBox="0 0 48 58" style={{ display: "block", margin: "0 auto" }}>
      <path d="M24 4 L24 54" stroke={YELLOW} strokeWidth="4" strokeLinecap="round" />
      <path d="M24 4 L14 14 L14 28 L24 22" stroke={YELLOW} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M24 4 L34 14 L34 28 L24 22" stroke={YELLOW} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 28 L14 36 Q14 42 20 44 L20 54" stroke={YELLOW} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M34 28 L34 36 Q34 42 28 44 L28 54" stroke={YELLOW} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M14 54 L34 54" stroke={YELLOW} strokeWidth="3.5" strokeLinecap="round" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#d8dce8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 35%, #00103a 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: BLUE }} />
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 3, background: YELLOW }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: BLUE }} />
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, height: 3, background: YELLOW }} />

        {/* Wheat field silhouette */}
        <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.06, width: "100%", height: 140 }} viewBox="0 0 900 140" preserveAspectRatio="none">
          {[...Array(30)].map((_, i) => (
            <g key={i} transform={`translate(${i * 30 + 5}, 0)`}>
              <line x1="15" y1="140" x2="15" y2="60" stroke={YELLOW} strokeWidth="2" />
              <ellipse cx="15" cy="55" rx="5" ry="14" fill={YELLOW} />
              <ellipse cx="10" cy="70" rx="4" ry="10" fill={YELLOW} transform="rotate(-20 10 70)" />
              <ellipse cx="20" cy="70" rx="4" ry="10" fill={YELLOW} transform="rotate(20 20 70)" />
            </g>
          ))}
        </svg>

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <TridentIcon />
          <div style={{ width: 48, height: 1, background: WHEAT, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: YELLOW, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Українська Радянська Соціалістична Республіка
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f5f2e8",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${BLUE}66`,
          }}>
            The Ukrainian<br /><span style={{ color: YELLOW }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#606888", lineHeight: 1.8, fontStyle: "italic" }}>
            Breadbasket of empires. Frontline of the worst war ever fought. A nation whose identity was suppressed for centuries — and survives still.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1919–1991", "Kyiv", "52M population", "Eastern Europe"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${BLUE}66`, color: LIGHT_BLUE, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${YELLOW}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      {/* Pull quote */}
      <div style={{ background: BLUE, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#e8f0ff", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "Ukraine is not a country on the edge of Europe — it is the country at the heart of Europe, and always has been."
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eeeaf0", marginBottom: 14 }}>The Republic That Shaped the Soviet Century</h2>
            <p style={{ fontSize: "1.05rem", color: "#4a5070", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              The Ukrainian SSR was the Soviet Union's most important republic after Russia itself — larger than France, richer in resources than any other, and carrying a national identity old enough to predate Russia's. It fed the USSR, armed it, and ultimately helped bury it. Its people paid an almost unimaginable price along the way.
            </p>
          </div>
        </AnimCard>

        {/* Holodomor callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a1000, ${MID})`, border: `1px solid ${WHEAT}55`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>🕯</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0ddb0", fontSize: "1.2rem", marginTop: 0 }}>A Candle for the Holodomor</h3>
              <p style={{ color: "#80703a", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Every fourth Saturday of November, Ukrainians light a candle in their window at 4 PM in memory of the Holodomor victims. The ritual of remembrance — kept alive through Soviet denial, through diaspora communities, through hushed family memory — became an act of national resistance. Ukraine did not get to formally mourn until independence.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Section cards */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${BLUE}44` }} />
              <h2 style={{ fontFamily: "monospace", color: YELLOW, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${BLUE}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${BLUE}30`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: YELLOW, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Ukraine in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "~7M", l: "Killed in the Holodomor" },
                { n: "25%", l: "Of Soviet agricultural output" },
                { n: "1,900", l: "Nuclear warheads surrendered in 1994" },
                { n: "35%", l: "Of Soviet military hardware produced" },
                { n: "603K", l: "Troops captured at Kyiv, 1941" },
                { n: "1991", l: "Independence — 90% voted yes" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.9rem", fontFamily: "'Playfair Display', serif", color: YELLOW, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#384060", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        {/* Timeline */}
        <AnimCard>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${BLUE}44` }} />
              <h2 style={{ fontFamily: "monospace", color: YELLOW, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${BLUE}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Budapest Memorandum callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #000a1a, ${MID})`, border: `1px solid ${LIGHT_BLUE}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>📜</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0d0f0", fontSize: "1.2rem", marginTop: 0 }}>The Budapest Memorandum — The Broken Promise</h3>
              <p style={{ color: "#304860", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                In 1994, Ukraine held the world's third-largest nuclear arsenal — inherited from the Soviet Union. It agreed to surrender all 1,900 warheads to Russia in exchange for security guarantees from Russia, the United States, and the United Kingdom. Twenty years later, Russia annexed Crimea. Thirty years later, Russia launched a full-scale invasion. The memorandum is now studied worldwide as a cautionary tale about the limits of security guarantees without enforcement mechanisms.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #00051a, #09090f)`, border: `1px solid ${YELLOW}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <TridentIcon />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#f5f2e8", marginTop: 18 }}>A Nation Forged in Fire</h2>
            <p style={{ color: "#404868", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              The Ukrainian SSR was simultaneously the USSR's most valuable republic and its most mistreated one. Famine, purges, occupation, radiation, and Russification — Ukraine bore them all. And yet its language survived. Its culture survived. Its memory survived. When the Soviet Union fell, Ukrainians voted for independence by the largest margin of any republic. The blue and yellow flag that flew over a Soviet building in 1991 now flies over a country defending its existence. The wheat still grows in the black earth. The sunflowers still turn toward the sun.
            </p>
            <div style={{ width: 50, height: 1, background: YELLOW, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#06060c", borderTop: `3px solid ${BLUE}`, borderBottom: `2px solid ${YELLOW}`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#222840", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          UKRAINIAN SSR · 1919–1991 · KYIV · УКРАЇНСЬКА РСР
        </p>
      </div>
    </div>
  );
}
