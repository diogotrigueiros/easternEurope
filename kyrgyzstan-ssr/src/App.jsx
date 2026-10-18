import { useState, useEffect, useRef } from "react";

const RED = "#E8112D";
const DARK_RED = "#A00020";
const GOLD = "#FFCC00";
const LIGHT_GOLD = "#FFD740";
const DARK = "#080a0c";
const MID = "#0d1014";
const CARD = "#111418";
const SLATE = "#7A8C9A";
const LIGHT_SLATE = "#9AACBA";
const MOUNTAIN = "#4A5A6A";

const sections = [
  {
    id: "manas",
    title: "The Epic of Manas",
    subtitle: "The Longest Epic Poem in Human History",
    icon: "📜",
    color: "#C8A800",
    year: "Ancient–present",
    content: `The Epic of Manas is the foundational cultural text of the Kyrgyz people — and by most measures the longest epic poem in human history, at over 500,000 lines, roughly twenty times the length of Homer's Iliad and Odyssey combined. It tells the story of the hero Manas, his son Semetei, and grandson Seitek — three generations of warriors defending the Kyrgyz people against their enemies on the Central Asian steppe. The epic was never written down until the 19th century; for centuries it was preserved and performed entirely through oral tradition by specialist bards called Manaschi, who could recite hundreds of thousands of lines from memory in trance-like performances lasting days. UNESCO recognises it as Intangible Cultural Heritage. The greatest Manaschi were revered figures in Kyrgyz society — part historian, part priest, part performer.`,
    facts: [
      "500,000+ lines — roughly 20 times longer than Homer's Iliad and Odyssey combined",
      "Preserved entirely through oral tradition until the 19th century",
      "Manaschi bards could recite it for days from memory — in trance-like states",
      "UNESCO Intangible Cultural Heritage of Humanity",
    ],
  },
  {
    id: "nomads",
    title: "The Nomadic Civilisation",
    subtitle: "Masters of the World's Highest Pastures",
    icon: "🐎",
    color: "#E8112D",
    year: "Ancient–present",
    content: `The Kyrgyz are one of the world's great nomadic peoples — herders who for millennia moved their flocks between the winter valleys and the high summer pastures (jailoos) of the Tian Shan mountains, some of the most dramatic and inhospitable terrain on Earth. The yurt — boz ui in Kyrgyz — is the masterpiece of nomadic engineering: a circular felt structure that can be assembled in under an hour, breathes in summer, insulates in winter, and folds onto the back of a camel. The Kyrgyz yurt's distinctive red-and-white interior patterns — shyrdak felt rugs, tush kyiz embroidered hangings — constitute one of the richest textile traditions in Asia. Eagle hunting, horsemanship, and kok-boru (a polo-like game played with a goat carcass) remain living traditions. The nomadic worldview shaped everything: Kyrgyz culture has no ancient cities, no written history before Russian contact, no temples — only the open sky and the mountains.`,
    facts: [
      "Kyrgyz nomads seasonally grazed flocks at altitudes above 3,000 metres",
      "The boz ui yurt can be assembled by a family in under an hour",
      "Shyrdak felt rugs are among the most technically sophisticated textiles in Central Asia",
      "Kok-boru — a game played on horseback with a goat carcass — is still played today",
    ],
  },
  {
    id: "russia",
    title: "Russian Conquest & the 1916 Uprising",
    subtitle: "The Rebellion That Was Almost Forgotten",
    icon: "⚔",
    color: "#7B1C1C",
    year: "1860s–1916",
    content: `Russian forces conquered the Kyrgyz steppe and mountain territories between the 1860s and 1870s, establishing colonial control over a population that had never been unified under a single state. Russian settler colonialism brought Slavic farmers who displaced Kyrgyz herders from their best valleys. In 1916, a Russian imperial decree conscripting Central Asians into labour battalions triggered a massive uprising across the region. In Kyrgyzstan, the revolt was brutally suppressed: Russian forces and Cossack settlers killed tens of thousands of Kyrgyz, and the reprisals drove an estimated 100,000–150,000 Kyrgyz to flee across the mountains into China — the Urkun (The Flight), one of the greatest and least-known demographic catastrophes in Central Asian history. The Kyrgyz population may have lost 30–40% of its people in this single year.`,
    facts: [
      "Russian conquest of Kyrgyz territory completed in the 1860s–70s",
      "1916 uprising triggered by forced labour conscription decree",
      "Urkun: 100,000–150,000 Kyrgyz fled to China over mountain passes in winter",
      "Kyrgyz population may have lost 30–40% in 1916 — almost entirely unknown in the West",
    ],
  },
  {
    id: "soviet",
    title: "The Kyrgyz SSR",
    subtitle: "Mountains, Literacy & Chingiz Aitmatov",
    icon: "🏔",
    color: "#1565C0",
    year: "1936–1991",
    content: `The Kyrgyz SSR was established in 1936 after passing through earlier forms of Soviet administrative organisation. Soviet rule brought dramatic changes: near-universal literacy in a society that had no written language tradition, forced settlement of nomadic populations, collectivisation of herds (with catastrophic effects similar to Kazakhstan), and rapid urbanisation of Bishkek (then Frunze). Yet the Soviet period also produced Kyrgyzstan's greatest literary figure: Chingiz Aitmatov, whose novels — The White Steamship, The Day Lasts More than a Hundred Years, Jamila — are considered masterpieces of 20th century world literature. Aitmatov wrote in both Kyrgyz and Russian, and his work was translated into dozens of languages. He remains the only Soviet-era Central Asian writer with a genuine global literary reputation.`,
    facts: [
      "Literacy rose from near zero to nearly universal under Soviet rule",
      "Forced settlement destroyed the nomadic economy — herds collectivised and decimated",
      "Chingiz Aitmatov's novels are translated into over 170 languages",
      "Bishkek (Frunze) grew from a small fort into a major Soviet city",
    ],
  },
  {
    id: "issyk-kul",
    title: "Issyk-Kul",
    subtitle: "The Jewel Lake That Never Freezes",
    icon: "🏞",
    color: "#0277BD",
    year: "Ancient–present",
    content: `Issyk-Kul is one of the great lakes of the world — the second-largest alpine lake on Earth after Lake Titicaca, sitting at 1,600 metres altitude in a ring of snow-capped Tian Shan peaks. Its name means "warm lake" in Kyrgyz: despite its altitude and the surrounding mountains often thick with snow, the lake never freezes, warmed by geothermal activity. It stretches 180 km long and 60 km wide. During the Soviet era it was a top-secret location: Soviet naval vessels conducted torpedo testing on its waters, and the KGB maintained facilities on its shores. Beneath its surface lie the ruins of ancient Silk Road cities, submerged by rising water levels — ghost cities visible from the air in low water. The surrounding mountains contain some of the most spectacular trekking terrain in Asia.`,
    facts: [
      "Second-largest alpine lake on Earth — 1,600 metres altitude, never freezes",
      "Soviet Navy conducted classified torpedo testing on the lake",
      "Submerged Silk Road cities lie beneath its surface — visible from the air",
      "The surrounding Tian Shan is among the most spectacular mountain terrain in Asia",
    ],
  },
  {
    id: "tulip",
    title: "The Tulip Revolution",
    subtitle: "Central Asia's Only Successful Colour Revolution",
    icon: "🌷",
    color: "#E8112D",
    year: "2005",
    content: `In March 2005, disputed parliamentary elections triggered mass protests across southern Kyrgyzstan that quickly spread to Bishkek. Unlike most Central Asian states — where authoritarian rulers crushed dissent without hesitation — Kyrgyzstan's President Askar Akayev fled the country, and protesters stormed and ransacked the White House (government building) in Bishkek. The Tulip Revolution was the only successful colour revolution in Central Asia. It was also deeply flawed: the new government was barely more democratic than the old, and Kyrgyzstan experienced another uprising in 2010 that removed the successor government too, with significant ethnic violence in the south killing hundreds. Kyrgyzstan has had more transfers of power through popular uprising than any other Central Asian state — making it simultaneously the region's most volatile and most politically dynamic country.`,
    facts: [
      "Only successful colour revolution in Central Asia",
      "President Akayev fled to Russia — the White House in Bishkek was stormed",
      "A second revolution in 2010 removed his successor Bakiyev",
      "Kyrgyzstan has had more non-electoral transfers of power than any Central Asian neighbour",
    ],
  },
  {
    id: "silk-road",
    title: "The Silk Road Through the Mountains",
    subtitle: "Where Caravans Crossed the Roof of the World",
    icon: "🐪",
    color: "#5D4037",
    year: "2nd c. BC–15th c. AD",
    content: `The Kyrgyz mountains were not a barrier to the Silk Road — they were a route through it. The Tian Shan passes, including the famous Torugart and Irkeshtam passes, connected China's Xinjiang with Central Asia's great trading cities of Samarkand and Kashgar. Caravans carrying silk, spices, glassware, and ideas crossed these passes for over a thousand years. The nomadic Kyrgyz were essential to this trade — as guides, as providers of horses and food, as occasional raiders. The ancient city of Suyab near modern Tokmok was a major Silk Road hub; it was here that the Tang Dynasty poet Li Bai is believed to have been born, son of a merchant family stationed in the Kyrgyz highlands. Kyrgyzstan sits at a crossroads of civilisations whose depth most visitors — seeing only mountains and pastures — entirely miss.`,
    facts: [
      "Tian Shan passes were critical Silk Road corridors between China and Central Asia",
      "The ancient city of Suyab near Tokmok was a major Silk Road trading hub",
      "Li Bai — China's greatest poet — is believed to have been born in Kyrgyzstan",
      "Kyrgyz nomads served as guides, horse suppliers, and traders to Silk Road caravans",
    ],
  },
  {
    id: "culture",
    title: "Felt, Eagles & the Open Sky",
    subtitle: "A Culture Written on the Wind",
    icon: "🦅",
    color: "#2E7D32",
    year: "Ancient–present",
    content: `Kyrgyz culture is inseparable from the landscape that produced it. The Tian Shan — Celestial Mountains — are not merely a backdrop; they are the spiritual centre of Kyrgyz identity. The flag of Kyrgyzstan bears a tunduk — the circular crown of the yurt — overlaid on a red background: the sky seen from inside home. Felt-making is the central craft tradition: shyrdak rugs and ala-kiyiz felt carpets are created by women using techniques passed through families for centuries. Berkutchi — eagle hunters who train golden eagles to hunt fox and hare across the steppe — compete annually at the World Nomad Games, held in Kyrgyzstan and attended by nomadic cultures from across Eurasia. The kumys tradition — fermented mare's milk — is both food and ceremony. Kyrgyzstan is the country that hosts the Olympics of nomadic civilisation.`,
    facts: [
      "The Kyrgyz flag features the tunduk — the crown of a yurt viewed from inside",
      "The World Nomad Games, held in Kyrgyzstan, bring nomadic cultures from 80+ countries",
      "Berkutchi eagle hunting is a living tradition — hunters bond with birds from birth",
      "Shyrdak felt carpets use techniques passed through families for centuries",
    ],
  },
];

const timeline = [
  { year: "840 AD", event: "Kyrgyz Khaganate at peak — controls vast steppe territory" },
  { year: "13th c.", event: "Mongol conquest; Kyrgyz absorbed into the Mongol Empire" },
  { year: "17th c.", event: "Dzungar invasions devastate Kyrgyz population" },
  { year: 1863, event: "Russian Empire begins conquest of Kyrgyz territory" },
  { year: 1876, event: "Kokand Khanate (which included Kyrgyzstan) annexed by Russia" },
  { year: 1916, event: "Urkun — massive uprising and flight to China; tens of thousands killed" },
  { year: 1918, event: "Soviet power established in the region" },
  { year: 1924, event: "Kara-Kyrgyz Autonomous Oblast established" },
  { year: 1926, event: "Renamed Kyrgyz ASSR" },
  { year: 1930, event: "Forced collectivisation; nomadic herds decimated" },
  { year: 1936, event: "Kyrgyz SSR established as a full Union Republic" },
  { year: 1941, event: "WWII: Kyrgyz soldiers fight and die on the Eastern Front" },
  { year: 1958, event: "Chingiz Aitmatov publishes Jamila — his breakthrough work" },
  { year: 1980, event: "Aitmatov's The Day Lasts More than a Hundred Years published" },
  { year: 1991, event: "Kyrgyzstan declares independence — 31 August" },
  { year: 1995, event: "First World Nomad Games concept developed" },
  { year: 2005, event: "Tulip Revolution — Akayev flees; first successful Central Asian uprising" },
  { year: 2010, event: "Second revolution; ethnic violence in south kills hundreds" },
  { year: 2016, event: "World Nomad Games held at Issyk-Kul — 77 countries participate" },
  { year: 2021, event: "Brief border war with Tajikistan over water and land disputes" },
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
              <h3 style={{ margin: 0, color: "#eef0f4", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#3a4858", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0b8c8", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#08090c", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#607080", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${RED}, ${GOLD}, ${RED})` }} />
      {timeline.map((t, i) => (
        <div key={i} style={{
          position: "relative", marginBottom: 24,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-18px)",
          transition: `opacity 0.5s ${i * 0.04}s, transform 0.5s ${i * 0.04}s`,
        }}>
          <div style={{
            position: "absolute", left: -26, top: 5,
            width: 10, height: 10, borderRadius: "50%",
            background: i % 3 === 0 ? RED : i % 3 === 1 ? GOLD : SLATE,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: 12, minWidth: 50, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#607080", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  // Kyrgyz flag: red background with yellow sun and tunduk
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{
        width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2,
        overflow: "hidden", boxShadow: `0 0 50px ${RED}44`,
        height: 80, background: RED,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative"
      }}>
        {/* Sun rays */}
        {[...Array(40)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: 2,
            height: 44,
            background: GOLD,
            transformOrigin: "center center",
            transform: `rotate(${i * 9}deg)`,
            opacity: 0.7,
          }} />
        ))}
        {/* Tunduk (yurt crown) */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <svg width="46" height="46" viewBox="0 0 46 46">
            <circle cx="23" cy="23" r="21" fill={RED} stroke={GOLD} strokeWidth="2.5" />
            {/* Tunduk pattern — crossing lines forming the yurt crown */}
            <line x1="23" y1="4" x2="23" y2="42" stroke={GOLD} strokeWidth="2" />
            <line x1="4" y1="23" x2="42" y2="23" stroke={GOLD} strokeWidth="2" />
            <line x1="9" y1="9" x2="37" y2="37" stroke={GOLD} strokeWidth="2" />
            <line x1="37" y1="9" x2="9" y2="37" stroke={GOLD} strokeWidth="2" />
            <line x1="4" y1="16" x2="42" y2="30" stroke={GOLD} strokeWidth="1.5" />
            <line x1="4" y1="30" x2="42" y2="16" stroke={GOLD} strokeWidth="1.5" />
            <line x1="16" y1="4" x2="30" y2="42" stroke={GOLD} strokeWidth="1.5" />
            <line x1="30" y1="4" x2="16" y2="42" stroke={GOLD} strokeWidth="1.5" />
            <circle cx="23" cy="23" r="7" fill={RED} stroke={GOLD} strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MountainSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 220, opacity: 0.08 }} viewBox="0 0 900 220" preserveAspectRatio="none">
      {/* Background peaks */}
      <polygon points="0,220 120,60 240,220" fill={MOUNTAIN} opacity="0.6" />
      <polygon points="160,220 300,30 440,220" fill={MOUNTAIN} opacity="0.8" />
      <polygon points="300,60 420,220" fill={MOUNTAIN} opacity="0.5" />
      <polygon points="380,220 500,50 620,220" fill={MOUNTAIN} />
      <polygon points="520,220 640,80 760,220" fill={MOUNTAIN} opacity="0.7" />
      <polygon points="680,220 800,40 920,220" fill={MOUNTAIN} opacity="0.9" />
      {/* Snow caps */}
      <polygon points="300,30 280,70 320,70" fill="white" opacity="0.6" />
      <polygon points="500,50 480,90 520,90" fill="white" opacity="0.5" />
      <polygon points="800,40 780,80 820,80" fill="white" opacity="0.6" />
      <polygon points="120,60 105,90 135,90" fill="white" opacity="0.4" />
      {/* Ground */}
      <rect x="0" y="200" width="900" height="20" fill={MOUNTAIN} opacity="0.3" />
    </svg>
  );
}

function TundukIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" style={{ display: "block", margin: "0 auto" }}>
      <circle cx="30" cy="30" r="28" fill="none" stroke={GOLD} strokeWidth="2.5" opacity="0.8" />
      <line x1="30" y1="2" x2="30" y2="58" stroke={GOLD} strokeWidth="2" opacity="0.8" />
      <line x1="2" y1="30" x2="58" y2="30" stroke={GOLD} strokeWidth="2" opacity="0.8" />
      <line x1="10" y1="10" x2="50" y2="50" stroke={GOLD} strokeWidth="2" opacity="0.8" />
      <line x1="50" y1="10" x2="10" y2="50" stroke={GOLD} strokeWidth="2" opacity="0.8" />
      <line x1="2" y1="20" x2="58" y2="40" stroke={GOLD} strokeWidth="1.5" opacity="0.6" />
      <line x1="2" y1="40" x2="58" y2="20" stroke={GOLD} strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="2" x2="40" y2="58" stroke={GOLD} strokeWidth="1.5" opacity="0.6" />
      <line x1="40" y1="2" x2="20" y2="58" stroke={GOLD} strokeWidth="1.5" opacity="0.6" />
      <circle cx="30" cy="30" r="9" fill={DARK} stroke={GOLD} strokeWidth="2" opacity="0.9" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd0d8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 38%, #1a0004 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: RED }} />
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 3, background: GOLD }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: RED }} />
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, height: 3, background: GOLD }} />

        <MountainSilhouette />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <TundukIcon />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Кыргыз Советтик Социалисттик Республикасы
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f5f2f0",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${RED}55`,
          }}>
            The Kyrgyz<br /><span style={{ color: GOLD }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#2a2030", lineHeight: 1.8, fontStyle: "italic" }}>
            A nomadic people whose epic poem is twenty times the length of Homer. The mountains where China's greatest poet was born. The lake where Soviet submarines tested torpedoes. A revolution that actually worked.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1936–1991", "Bishkek / Frunze", "4.4M population", "Central Asia"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${RED}55`, color: "#E84060", fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${RED}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      {/* Pull quote */}
      <div style={{ background: RED, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#fff0e8", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "The mountains are our walls, the steppe our floor, the sky our ceiling, and the yurt our home." — Kyrgyz saying
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eef0f4", marginBottom: 14 }}>The Republic That Lives Between Sky and Stone</h2>
            <p style={{ fontSize: "1.05rem", color: "#202030", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Kyrgyzstan is 94% mountains. It has no major rivers navigable by boat, no ancient walled cities, no pyramids. What it has is one of the longest oral epic traditions on Earth, some of the world's most dramatic landscape, a lake where Soviet torpedoes were tested in secret, and a nomadic culture that survived empires, collectivisation, and Soviet modernity — and still takes its horses to the mountain pastures every summer.
            </p>
          </div>
        </AnimCard>

        {/* Aitmatov callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100818, ${MID})`, border: `1px solid #6A1B9A44`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>📚</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#d0b0f0", fontSize: "1.2rem", marginTop: 0 }}>
                Chingiz Aitmatov — The Voice of the Mountains
              </h3>
              <p style={{ color: "#503868", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Chingiz Aitmatov (1928–2008) is the only Central Asian writer with a genuine global literary reputation. Born in a remote Kyrgyz village, his first major work Jamila (1958) was called by Louis Aragon "the most beautiful love story in the world." The Day Lasts More Than a Hundred Years (1980) blended Kyrgyz nomadic myth with science fiction and a searing critique of Soviet cultural erasure — published in the USSR, which makes its survival remarkable. His novels were translated into over 170 languages. He later served as Kyrgyzstan's ambassador to NATO and the EU. He is buried in a mausoleum at the foot of the Kyrgyz mountains, looking toward the steppe.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Sections */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${RED}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${RED}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${RED}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Kyrgyzstan in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "500K+", l: "Lines in the Epic of Manas — longest epic in history" },
                { n: "94%", l: "Of Kyrgyzstan's territory is mountainous" },
                { n: "1,600m", l: "Altitude of Issyk-Kul — never freezes" },
                { n: "170+", l: "Languages Aitmatov's novels translated into" },
                { n: "80+", l: "Countries at the World Nomad Games" },
                { n: "1916", l: "Year Urkun killed up to 40% of the Kyrgyz people" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: RED, fontWeight: 700 }}>{s.n}</div>
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
              <div style={{ flex: 1, height: 1, background: `${RED}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${RED}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Li Bai callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #080c10, ${MID})`, border: `1px solid #0277BD44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🎋</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0cce0", fontSize: "1.2rem", marginTop: 0 }}>
                Li Bai Was Born in Kyrgyzstan
              </h3>
              <p style={{ color: "#284050", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Li Bai (701–762 AD), widely considered China's greatest poet, was not born in China. He was born in Suyab — a Silk Road city near modern Tokmok in the Chuy Valley of what is now Kyrgyzstan — where his merchant father was stationed. He spent his early childhood in the Kyrgyz highlands before his family returned to Sichuan. The high mountain landscapes and vast steppe horizons of his birth region arguably shaped the cosmic scale and freedom of his poetic imagination. The knowledge that the Tang Dynasty's supreme lyric voice was born on the Kyrgyz steppe is almost entirely unknown outside specialist scholarship — and almost never mentioned in Kyrgyzstan itself.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* World Nomad Games callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0c1008, ${MID})`, border: `1px solid #2E7D3244`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🏹</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0d0a0", fontSize: "1.2rem", marginTop: 0 }}>
                The World Nomad Games — The Olympics of the Steppe
              </h3>
              <p style={{ color: "#284020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Every two years on the shores of Issyk-Kul, Kyrgyzstan hosts the World Nomad Games — a gathering of nomadic and semi-nomadic cultures from across Eurasia to compete in traditional sports: eagle hunting, kok-boru (the goat carcass polo), horseback wrestling, archery from horseback, traditional wrestling, and more. Over 80 countries have participated. It is the largest gathering of nomadic cultures in the world, and it was invented by Kyrgyzstan — a small country with a large sense of cultural mission. In a world where nomadic cultures are everywhere in retreat, Kyrgyzstan insists they deserve their own Olympics.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100004, #080a0c)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <TundukIcon />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#f0eef4", marginTop: 18 }}>The Sky Still Frames the Tunduk</h2>
            <p style={{ color: "#1a1828", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Kyrgyzstan remains one of the world's least-known countries — and one of its most extraordinary. A nomadic civilisation that kept a 500,000-line epic alive in human memory for centuries, a lake that holds Silk Road cities beneath its surface, a poet born here whose words shaped Chinese literature, a revolution that actually removed a dictator, and a country that decided the world needed an Olympics for nomads. The tunduk on the flag is not merely a symbol — it is a philosophy: the circular crown of the yurt, through which the Kyrgyz have always looked up and seen the same open, limitless sky.
            </p>
            <div style={{ width: 50, height: 1, background: RED, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#06080a", borderTop: `3px solid ${RED}`, borderBottom: `2px solid ${GOLD}44`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#100810", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          KYRGYZ SSR · 1936–1991 · BISHKEK (FRUNZE) · КЫРГЫЗ ССР
        </p>
      </div>
    </div>
  );
}
