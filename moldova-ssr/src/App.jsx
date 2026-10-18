import { useState, useEffect, useRef } from "react";

const BLUE = "#003DA5";
const LIGHT_BLUE = "#1E5FBF";
const YELLOW = "#FFD100";
const RED = "#CC0001";
const DARK = "#080810";
const MID = "#0d0d18";
const CARD = "#111120";
const GOLD = "#8A6C2A";
const LIGHT_GOLD = "#B08C40";
const WINE = "#722F37";

const sections = [
  {
    id: "bessarabia",
    title: "Bessarabia — The Contested Land",
    subtitle: "The Region Every Empire Wanted",
    icon: "🗺",
    color: "#003DA5",
    year: "1812–1940",
    content: `Bessarabia — the territory between the Prut and Dniester rivers that forms the core of modern Moldova — has been one of the most fought-over pieces of land in Eastern European history. Taken from the Ottoman Empire by Russia in 1812, it became part of Romania after WWI in 1918, was seized by the Soviet Union under the Molotov-Ribbentrop Pact in 1940, reoccupied by Romania and Germany in 1941, retaken by the Soviets in 1944, and has been part of an independent Moldova since 1991. In under 200 years it changed hands six times. The question of whether Moldovans are a distinct people or simply Romanians living east of the Prut remains the central unresolved tension of Moldovan identity to this day.`,
    facts: [
      "Bessarabia changed hands six times between 1812 and 1991",
      "Russia annexed it from the Ottoman Empire in 1812",
      "Romania held it from 1918–1940 and again 1941–1944",
      "The Prut River remains one of Europe's most historically charged borders",
    ],
  },
  {
    id: "wine",
    title: "The Wine Civilisation",
    subtitle: "More Vineyard Per Capita Than Any Nation on Earth",
    icon: "🍷",
    color: "#722F37",
    year: "Ancient–present",
    content: `Moldova is one of the world's great wine nations — a fact almost entirely unknown outside the region. The country has more vineyard per capita than any other nation on Earth. Winemaking here dates back over 5,000 years, with some of the earliest evidence of cultivated grapes in Europe found in the region. The Mileștii Mici wine cellar outside Chișinău is the world's largest wine collection by volume, holding over 1.5 million bottles in a network of tunnels stretching 200 kilometres — so large it has its own internal road system with street names. Under the Soviet system, Moldovan wine was the premium table wine of the entire USSR, exported to Eastern Europe and beyond. When Russia banned Moldovan wine imports in 2006 as a political weapon, it devastated the country's economy overnight.`,
    facts: [
      "Mileștii Mici is in the Guinness Book of Records — 1.5 million bottles underground",
      "Moldova has more vineyard per capita than any other country",
      "Winemaking in the region dates back over 5,000 years",
      "Russia weaponised a wine import ban in 2006, severely damaging Moldova's economy",
    ],
  },
  {
    id: "identity",
    title: "The Identity Question",
    subtitle: "Romanian, Moldovan — or Both?",
    icon: "❓",
    color: "#8A6C2A",
    year: "1812–present",
    content: `No post-Soviet republic has a more contested national identity than Moldova. The Moldovan and Romanian languages are mutually intelligible — effectively the same language. Yet decades of Soviet propaganda insisted they were distinct, that Moldovans were a separate people with their own history, and that the Cyrillic script (imposed during the Soviet period) reflected a distinct Eastern identity separate from Romania's Latin script. Today Moldova is split: a significant portion of the population identifies as Romanian and holds Romanian passports, while another significant portion insists on a distinct Moldovan identity. The Constitutional Court ruled in 2023 that Romanian is the official language — overturning decades of the Soviet-era designation of "Moldovan." The debate is political, historical, and deeply personal.`,
    facts: [
      "Moldovan and Romanian are mutually intelligible — linguists consider them the same language",
      "The Soviet Union promoted a distinct 'Moldovan' identity as political policy",
      "Cyrillic script was imposed during Soviet rule; Latin script restored after independence",
      "In 2023 the Constitutional Court declared Romanian the official state language",
    ],
  },
  {
    id: "transnistria",
    title: "Transnistria",
    subtitle: "The Country That Doesn't Exist",
    icon: "🔒",
    color: "#546E7A",
    year: "1990–present",
    content: `Along a thin strip of land on the eastern bank of the Dniester River, a breakaway state calling itself the Pridnestrovian Moldavian Republic — Transnistria — has existed since 1990, recognised by no UN member state. When Moldova declared independence and tilted toward Romania, the heavily Russian and Ukrainian population of Transnistria declared their own independence, fearing Moldovan nationalism. A brief war in 1992 killed over 1,500 people before a Russian-brokered ceasefire. Russian troops have been stationed there ever since as "peacekeepers." Transnistria has its own currency (the Transnistrian ruble), its own military, its own Soviet-era aesthetic — Lenin statues, red stars, hammer and sickle emblems — frozen in 1991. It remains Europe's oldest unresolved frozen conflict.`,
    facts: [
      "Recognised by no UN member state — yet has existed for over 30 years",
      "Russian troops remain stationed in Transnistria as 'peacekeepers' since 1992",
      "Transnistria still uses Soviet symbols — Lenin statues, red stars, hammer and sickle",
      "Has its own currency, military, and government — but no international recognition",
    ],
  },
  {
    id: "poorest",
    title: "Europe's Poorest Country",
    subtitle: "The Price of Periphery",
    icon: "📉",
    color: "#4E342E",
    year: "1991–present",
    content: `Since independence, Moldova has consistently ranked as the poorest country in Europe by GDP per capita. The collapse of the Soviet planned economy devastated a republic that had been almost entirely agricultural and dependent on all-Union supply chains. Factories closed, vineyards were abandoned, and mass emigration began. Today approximately one third of Moldova's working-age population lives and works abroad — primarily in Russia, Italy, Romania, and Germany — sending remittances home that constitute a significant portion of GDP. The country has been wracked by corruption, oligarchic capture of the state, and energy dependence on Russia. The 2022 Russian invasion of Ukraine — on Moldova's doorstep — sent energy prices soaring and hundreds of thousands of Ukrainian refugees across the border.`,
    facts: [
      "Consistently ranked as Europe's lowest GDP per capita since independence",
      "~1/3 of working-age Moldovans live and work abroad",
      "Remittances from abroad are a major component of the national economy",
      "100,000+ Ukrainian refugees entered Moldova after Russia's 2022 invasion",
    ],
  },
  {
    id: "gagauzia",
    title: "Gagauzia",
    subtitle: "The Turkic Christians of the Steppe",
    icon: "🐺",
    color: "#00695C",
    year: "Ancient–present",
    content: `Within Moldova there is an autonomous region that few people in the world have heard of: Gagauzia, home to the Gagauz people — Turkic-speaking Orthodox Christians. The Gagauz are believed to be descended from Seljuk Turks who converted to Christianity centuries ago, making them one of the most unusual ethnic groups in Europe: culturally Turkic, religiously Christian, politically pro-Russian. Gagauzia is fiercely opposed to Moldovan unification with Romania and strongly oriented toward Russia. It held a 2014 referendum in which 98% voted for "independence if Moldova joins the EU" and 98% voted to join the Customs Union with Russia instead. It is an autonomous region within a country that is itself disputed — layers of sovereignty within sovereignty.`,
    facts: [
      "Gagauz are Turkic-speaking Orthodox Christians — one of Europe's most unusual groups",
      "2014 referendum: 98% voted against EU integration and for Russia's Customs Union",
      "Gagauzia is an autonomous region within Moldova with its own executive and assembly",
      "The Gagauz language is related to Turkish and Azerbaijani",
    ],
  },
  {
    id: "maia",
    title: "Maia Sandu & the EU Path",
    subtitle: "Moldova's Unlikely Democratic Pivot",
    icon: "🇪🇺",
    color: "#003DA5",
    year: "2020–present",
    content: `In 2020 Maia Sandu, a Harvard-educated former World Bank economist, won the Moldovan presidential election — defeating the incumbent pro-Russian president in a country long considered hopelessly mired in oligarchic capture. Her Party of Action and Solidarity then won parliamentary elections in 2021 with a commanding majority. Moldova applied for EU membership in 2022, was granted candidate status the same year — the fastest candidate status application in EU history — and accession negotiations formally opened in 2024. The transformation was remarkable: in four years Moldova went from one of Europe's most corrupt and Russia-dependent states to an official EU candidate. The 2024 referendum on EU membership passed by the narrowest possible margin, with diaspora votes proving decisive.`,
    facts: [
      "Maia Sandu holds a Harvard Kennedy School master's degree",
      "Moldova received EU candidate status in 2022 — within weeks of applying",
      "EU accession negotiations formally opened in 2024",
      "The 2024 EU membership referendum passed by less than 1% — diaspora votes were decisive",
    ],
  },
  {
    id: "culture",
    title: "Culture, Music & the Doina",
    subtitle: "The Song That Carries a People's Sorrow",
    icon: "🎶",
    color: "#6A1B9A",
    year: "Ancient–present",
    content: `Moldovan culture is rooted in the broader Romanian-speaking tradition but has developed its own distinct folk character shaped by centuries at the intersection of Slavic, Turkic, and Latin worlds. The doina is the emblematic musical form — a slow, mournful, improvisatory song expressing longing, separation, and the beauty of nature; UNESCO recognised it as Intangible Cultural Heritage of Romania and Moldova in 2009. The hora — a circle dance — brings communities together at weddings, harvests, and festivals. Moldovan cuisine reflects every empire that passed through: mamaliga (polenta) from Romanian peasant culture, plăcinte (pastries) with Ottoman roots, and wine at the centre of every table. O-Zone's "Dragostea Din Tei" — the "numa numa" song — remains one of the most-watched internet videos in history.`,
    facts: [
      "The doina is UNESCO-recognised Intangible Cultural Heritage",
      "O-Zone's 'Dragostea Din Tei' (2003) became a global viral phenomenon",
      "The hora circle dance is central to Moldovan community life",
      "Mamaliga — cornmeal porridge — is the foundational dish of Moldovan cuisine",
    ],
  },
];

const timeline = [
  { year: 1359, event: "Principality of Moldavia founded by Dragoș" },
  { year: 1538, event: "Ottoman suzerainty established over Moldavia" },
  { year: 1812, event: "Russia annexes Bessarabia from the Ottoman Empire" },
  { year: 1859, event: "Moldavia and Wallachia unite to form Romania" },
  { year: 1918, event: "Bessarabia votes to unite with Romania" },
  { year: 1924, event: "Soviet Union creates the Moldavian ASSR east of the Dniester" },
  { year: 1939, event: "Molotov-Ribbentrop Pact assigns Bessarabia to the USSR" },
  { year: 1940, event: "Soviet occupation; Moldavian SSR established" },
  { year: 1941, event: "Romania and Germany reoccupy; deportations to Siberia begin" },
  { year: 1944, event: "Soviet forces retake Moldova; Cyrillic imposed on the language" },
  { year: 1946, event: "Famine kills tens of thousands in Soviet Moldova" },
  { year: 1949, event: "Mass deportations — 35,000 Moldovans sent to Siberia" },
  { year: 1989, event: "Romanian language restored; Latin script readopted" },
  { year: 1990, event: "Transnistria declares independence; war follows" },
  { year: 1991, event: "Moldova declares independence — 27 August" },
  { year: 1992, event: "War of Transnistria — 1,500 killed; Russian troops remain" },
  { year: 2003, event: "O-Zone's 'Dragostea Din Tei' becomes a global hit" },
  { year: 2006, event: "Russia bans Moldovan wine imports — economy devastated" },
  { year: 2009, event: "Twitter Revolution — protests against Communist election results" },
  { year: 2020, event: "Maia Sandu elected president" },
  { year: 2022, event: "Moldova applies for EU membership; receives candidate status" },
  { year: 2024, event: "EU accession negotiations open; referendum passes narrowly" },
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
              <h3 style={{ margin: 0, color: "#eceaf8", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#404060", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0aec8", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#08080e", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#706888", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${BLUE}, ${YELLOW}, ${RED})` }} />
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
            background: i % 3 === 0 ? BLUE : i % 3 === 1 ? YELLOW : RED,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: 12, minWidth: 42, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#605870", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{
        width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2,
        overflow: "hidden", boxShadow: `0 0 50px ${BLUE}44`,
        display: "flex", height: 80
      }}>
        <div style={{ flex: 1, background: BLUE }} />
        {/* Centre stripe with coat of arms suggestion */}
        <div style={{ flex: 1, background: YELLOW, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="34" viewBox="0 0 28 34">
            {/* Eagle */}
            <ellipse cx="14" cy="14" rx="7" ry="9" fill={BLUE} />
            <path d="M14 5 Q6 2 2 10 Q8 11 11 9" fill={BLUE} opacity="0.8" />
            <path d="M14 5 Q22 2 26 10 Q20 11 17 9" fill={BLUE} opacity="0.8" />
            <circle cx="10" cy="8" r="3" fill={BLUE} />
            <circle cx="18" cy="8" r="3" fill={BLUE} />
            {/* Shield */}
            <rect x="10" y="16" width="8" height="10" rx="1" fill={RED} />
            <path d="M11 17 L17 17 L17 22 L14 25 L11 22Z" fill={RED} />
            {/* Aurochs head suggestion */}
            <line x1="14" y1="19" x2="14" y2="24" stroke={YELLOW} strokeWidth="1.5" />
            {/* Legs */}
            <line x1="7" y1="22" x2="6" y2="30" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="23" x2="10" y2="30" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="23" x2="18" y2="30" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="21" y1="22" x2="22" y2="30" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ flex: 1, background: RED }} />
      </div>
    </div>
  );
}

function VineyardSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 150, opacity: 0.06 }} viewBox="0 0 900 150" preserveAspectRatio="none">
      {[...Array(18)].map((_, i) => {
        const x = i * 50 + 10;
        return (
          <g key={i}>
            {/* Vine post */}
            <line x1={x + 10} y1="150" x2={x + 10} y2="60" stroke={WINE} strokeWidth="3" />
            {/* Horizontal wire */}
            <line x1={x} y1="80" x2={x + 20} y2="80" stroke={WINE} strokeWidth="1.5" />
            {/* Grape clusters */}
            <circle cx={x + 5} cy="90" r="6" fill={WINE} opacity="0.7" />
            <circle cx={x + 15} cy="88" r="5" fill={WINE} opacity="0.6" />
            <circle cx={x + 10} cy="95" r="5" fill={WINE} opacity="0.5" />
            {/* Leaves */}
            <ellipse cx={x + 3} cy="75" rx="6" ry="4" fill={WINE} opacity="0.4" transform={`rotate(-20 ${x + 3} 75)`} />
            <ellipse cx={x + 17} cy="73" rx="6" ry="4" fill={WINE} opacity="0.4" transform={`rotate(20 ${x + 17} 73)`} />
          </g>
        );
      })}
      <path d="M0 130 Q200 110 400 125 Q600 110 900 120 L900 150 L0 150Z" fill={WINE} opacity="0.15" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccc8dc" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 38%, #08001a 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 4, background: YELLOW }} />
        <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 4, background: RED }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 4, background: YELLOW }} />
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, height: 4, background: RED }} />

        <VineyardSilhouette />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          {/* Wine glass icon */}
          <svg width="44" height="58" viewBox="0 0 44 58" style={{ display: "block", margin: "0 auto" }}>
            <path d="M8 4 L36 4 Q36 24 22 32 Q8 24 8 4Z" fill={WINE} opacity="0.85" />
            <line x1="22" y1="32" x2="22" y2="50" stroke={WINE} strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="22" cy="54" rx="12" ry="3" fill={WINE} opacity="0.6" />
            <path d="M10 12 Q18 20 22 32 Q26 20 34 12" fill={LIGHT_GOLD} opacity="0.15" />
          </svg>

          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Republica Sovietică Socialistă Moldovenească
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f0eef8",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${BLUE}55`,
          }}>
            The Moldovan<br /><span style={{ color: YELLOW }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#302848", lineHeight: 1.8, fontStyle: "italic" }}>
            A land that every empire wanted, a people who cannot agree on their own name, a wine cellar the size of a city, and a frozen conflict that nobody solved.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1940–1991", "Chișinău", "2.6M population", "Eastern Europe"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${BLUE}55`, color: LIGHT_BLUE, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${BLUE}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      {/* Pull quote */}
      <div style={{ background: BLUE, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#dde8ff", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "Moldova is a small country with a very large wine cellar and a very complicated identity." — a Moldovan saying
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eceaf8", marginBottom: 14 }}>Europe's Most Overlooked Republic</h2>
            <p style={{ fontSize: "1.05rem", color: "#282040", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Moldova sits wedged between Romania and Ukraine, small enough to be overlooked and complicated enough to defy easy description. It is simultaneously a wine civilisation older than Rome, a Soviet-era identity project that partially succeeded, a country with a piece of its own territory it cannot control, and — most recently — one of Europe's most surprising democratic success stories. It deserves to be known.
            </p>
          </div>
        </AnimCard>

        {/* Mileștii Mici callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a0008, ${MID})`, border: `1px solid ${WINE}55`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>🍾</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0c0c8", fontSize: "1.2rem", marginTop: 0 }}>
                The World's Largest Wine Cellar
              </h3>
              <p style={{ color: "#602030", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Mileștii Mici, 18 km from Chișinău, holds the Guinness World Record for the largest wine collection — over 1.5 million bottles stored in a network of limestone tunnels stretching 200 kilometres. The tunnels are so vast they have their own internal road system, and visitors tour them by car. The collection includes bottles dating back to 1968. Built during the Soviet era as a showpiece of Moldovan viticulture, it survived independence, economic collapse, and Russia's wine embargo. Deep underground, in cool limestone darkness, it holds something older and more patient than any of the politics above it.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Sections */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${BLUE}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${BLUE}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${BLUE}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Moldova in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "1.5M", l: "Bottles in Mileștii Mici — world's largest wine cellar" },
                { n: "200 km", l: "Length of the Mileștii Mici tunnel network" },
                { n: "6×", l: "Times Bessarabia changed hands in 200 years" },
                { n: "30yr+", l: "Transnistria has existed unrecognised" },
                { n: "⅓", l: "Of working-age Moldovans live abroad" },
                { n: "2022", l: "Year Moldova became an EU candidate" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: BLUE, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#1a1830", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
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
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${BLUE}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Numa Numa callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #080010, ${MID})`, border: `1px solid #6A1B9A44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🎵</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#d0b0f0", fontSize: "1.2rem", marginTop: 0 }}>
                Dragostea Din Tei — Moldova's Accidental Gift to the Internet
              </h3>
              <p style={{ color: "#503868", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                In 2003, the Moldovan pop group O-Zone released "Dragostea Din Tei" — a cheerful Eurodance song in Romanian about love and a linden tree. A year later a lip-sync video by an overweight American teenager called "Numa Numa Guy" went viral on Newgrounds, becoming one of the first truly global internet video phenomena and helping invent the concept of the viral video. The song has been viewed billions of times across platforms. Moldova — Europe's poorest country, unknown to most of the world — accidentally produced one of the defining cultural moments of the early internet age.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Transnistria callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #080810, ${MID})`, border: `1px solid #546E7A55`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>⭐</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0c0d0", fontSize: "1.2rem", marginTop: 0 }}>
                Transnistria — Where the Soviet Union Never Ended
              </h3>
              <p style={{ color: "#384050", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                If you drive east from Chișinău and cross the Dniester River, you enter a territory that time forgot. Lenin statues still stand. Red stars still adorn buildings. The hammer and sickle appears on the flag. The currency is the Transnistrian ruble, accepted nowhere else on Earth. The economy runs largely on a single steel plant and smuggling. Russian troops are stationed here, legally questionable, politically immovable. The territory is home to around 400,000 people who live in a geopolitical limbo — citizens of a state that does not exist, in a country they do not consider theirs.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #06001a, #080810)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <svg width="44" height="58" viewBox="0 0 44 58" style={{ display: "block", margin: "0 auto" }}>
              <path d="M8 4 L36 4 Q36 24 22 32 Q8 24 8 4Z" fill={WINE} opacity="0.85" />
              <line x1="22" y1="32" x2="22" y2="50" stroke={WINE} strokeWidth="3" strokeLinecap="round" />
              <ellipse cx="22" cy="54" rx="12" ry="3" fill={WINE} opacity="0.6" />
            </svg>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#f0eef8", marginTop: 18 }}>Between Two Worlds, Becoming Itself</h2>
            <p style={{ color: "#282040", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Moldova has spent its entire existence pulled in multiple directions — between East and West, between Romanian identity and Moldovan identity, between Europe and Russia, between its internationally recognised borders and the reality on the ground. Its Soviet chapter created tensions it is still resolving. But beneath all the geopolitical noise, something persistent endures: the vineyards, the doina, the long tables at harvest time, the warmth of a people who have learned that history is something that happens to you, and that survival is its own form of victory. Moldova is heading west. The wine will travel with it.
            </p>
            <div style={{ width: 50, height: 1, background: BLUE, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#060610", borderTop: `3px solid ${BLUE}`, borderBottom: `2px solid ${YELLOW}44`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#141028", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          MOLDAVIAN SSR · 1940–1991 · CHIȘINĂU · RSS MOLDOVENEASCĂ
        </p>
      </div>
    </div>
  );
}
