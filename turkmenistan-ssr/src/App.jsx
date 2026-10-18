import { useState, useEffect, useRef } from "react";

const GREEN = "#1E7A4A";
const LIGHT_GREEN = "#2A9E60";
const RED = "#C8001A";
const DARK = "#080c08";
const MID = "#0c1008";
const CARD = "#101408";
const GOLD = "#9A7820";
const LIGHT_GOLD = "#C09830";
const CARPET_RED = "#8B1A1A";
const CARPET_DARK = "#2A0A0A";
const SAND = "#C8A050";
const LIGHT_SAND = "#E8C070";

const sections = [
  {
    id: "darvaza",
    title: "The Door to Hell",
    subtitle: "A Crater of Fire That Has Burned Since 1971",
    icon: "🔥",
    color: "#E85000",
    year: "1971–present",
    content: `In 1971, Soviet geologists drilling for natural gas in the Karakum Desert accidentally broke through into a vast underground cavern. The drilling rig collapsed into the hole. Fearing the spread of poisonous methane gas, the geologists decided to set the crater on fire, expecting it to burn out within a few weeks. It has been burning ever since — for over 50 years. The Darvaza Gas Crater — nicknamed the Door to Hell or the Gates of Hell — is approximately 70 metres wide and 30 metres deep, a glowing pit of blue and orange flame visible for miles in the pitch-black desert. President Gurbanguly Berdimuhamedov twice ordered it extinguished — in 2010 and again in 2022 — citing lost revenue from the burning gas and environmental concerns. It continues to burn. The Door to Hell has become one of the most extraordinary natural spectacles in Central Asia, drawing visitors to the middle of one of the world's most remote and isolated countries.`,
    facts: [
      "Burning continuously since 1971 — over 50 years — when Soviet geologists accidentally ignited it",
      "Approximately 70 metres wide and 30 metres deep",
      "The Turkmen president has twice ordered it extinguished — it keeps burning",
      "Visible from miles away in the pitch-black Karakum Desert night",
    ],
  },
  {
    id: "carpet",
    title: "The Sacred Carpet",
    subtitle: "A Nation Woven in Red and Geometry",
    icon: "🧵",
    color: "#8B1A1A",
    year: "Ancient–present",
    content: `The Turkmen carpet is one of the great textile traditions of human civilisation — and in Turkmenistan it is not merely a craft but a national identity. The five major Turkmen tribal groups — Tekke, Yomut, Ersari, Saryk, and Salor — each have distinct carpet traditions with specific patterns (gols) that served as tribal emblems. Turkmen carpets are instantly recognisable: deep crimson backgrounds, octagonal medallion patterns, geometric precision achieved by hand with wool dyed using plants and insects. The world's largest handmade carpet — 301 square metres — was woven in Turkmenistan and certified by Guinness. The carpet appears on the Turkmen flag and national emblem. Every major public building in Ashgabat is decorated with them. January 28 is celebrated as Carpet Day — a national holiday. No country on Earth has made a single textile object so central to its national identity.`,
    facts: [
      "Five Turkmen tribal groups each have distinct, instantly recognisable carpet traditions",
      "The world's largest handmade carpet was woven in Turkmenistan — 301 square metres",
      "The carpet pattern appears on the national flag — unique among all world flags",
      "January 28 is Carpet Day — a national public holiday",
    ],
  },
  {
    id: "gas",
    title: "The Fourth Largest Gas Reserves on Earth",
    subtitle: "A Desert Sitting on an Ocean of Natural Gas",
    icon: "⛽",
    color: "#1E7A4A",
    year: "1971–present",
    content: `Turkmenistan possesses the fourth-largest natural gas reserves in the world — an extraordinary endowment for a country of just 6 million people. The Galkynysh gas field alone is the second-largest single gas field on Earth. Under Soviet rule, Turkmenistan's gas fed the entire southern USSR through a pipeline network. After independence, the gas became the basis of Niyazov's and then Berdimuhamedov's authoritarian state model: gas revenues funded a cult of personality on a scale that rivals North Korea, while the population received free gas, electricity, water, and salt for decades. In 2017 even free petrol was ended, and subsidies have been gradually reduced. The gas wealth that could have made Turkmenistan wealthy per capita instead funded golden statues of the president, white marble cities, and an Olympiad no one attended.`,
    facts: [
      "Fourth-largest natural gas reserves in the world — for a population of just 6 million",
      "Galkynysh gas field is the second-largest single gas field on Earth",
      "Citizens received free gas, electricity, water, and salt for decades after independence",
      "Gas revenues funded golden presidential statues rather than public development",
    ],
  },
  {
    id: "niyazov",
    title: "Turkmenbashi — The Father of All Turkmen",
    subtitle: "The Most Extreme Personality Cult in Post-Soviet History",
    icon: "☀",
    color: "#9A7820",
    year: "1990–2006",
    content: `Saparmurat Niyazov — who renamed himself Turkmenbashi, meaning Father of All Turkmen — ruled from 1985 until his death in 2006, constructing the most elaborate personality cult in the post-Soviet world. He renamed the months of the year after himself, his mother, and his book. He renamed bread after his mother. He built a golden rotating statue of himself on a tripod in central Ashgabat that rotated to always face the sun. He declared himself President for Life. He banned beards, gold teeth, and car radios. He closed all hospitals outside the capital and all libraries outside the capital, saying Turkmens had no need for them. He wrote a spiritual guide called the Ruhnama (Book of the Soul) and made it mandatory reading in schools, universities, and driving tests. Knowledge of its contents was required to obtain a driving licence. The Ruhnama was fired into space on a satellite.`,
    facts: [
      "Renamed the months of the year after himself, his mother, and his book",
      "Built a golden rotating statue of himself that always faced the sun",
      "Closed all hospitals and libraries outside the capital",
      "The Ruhnama was fired into space on a satellite — Turkmenbashi's book, in orbit",
    ],
  },
  {
    id: "ancient",
    title: "Merv — The Ancient Capital of the World",
    subtitle: "Once the Largest City on Earth",
    icon: "🏛",
    color: "#5D4037",
    year: "3000 BC–1221 AD",
    content: `The ancient city of Merv — in the Mary oasis of modern Turkmenistan — was one of the greatest cities of the ancient world. At various points in history it served as a capital of the Parthian, Sasanian, and Abbasid empires. In the 12th century AD, during the Seljuk period, Merv was estimated to be the largest city on Earth, with a population of perhaps 500,000 — bigger than any city in Europe or China at the time. It sat at the crossroads of Silk Road routes and was a major centre of Islamic learning and trade. In 1221, Tolui Khan — son of Genghis Khan — besieged Merv. When the city surrendered, Mongol forces massacred the entire population. Contemporary accounts estimated the dead at over a million — almost certainly exaggerated, but the devastation was total. Merv never recovered. Its ruins — a UNESCO World Heritage Site — stretch across 1,000 hectares of desert.`,
    facts: [
      "Merv may have been the largest city on Earth in the 12th century — population ~500,000",
      "Served as capital of the Parthian, Sasanian, and Abbasid empires at various points",
      "Destroyed by Tolui Khan in 1221 — the population massacred",
      "UNESCO World Heritage Site — ruins stretch across 1,000 hectares of desert",
    ],
  },
  {
    id: "karakum",
    title: "The Karakum Desert",
    subtitle: "The Black Sand Sea That Covers 70% of the Country",
    icon: "🏜",
    color: "#C8A050",
    year: "Ancient–present",
    content: `The Karakum Desert — Black Sand in Turkic — covers approximately 70% of Turkmenistan's territory. It is one of the world's great deserts: 350,000 square kilometres of sand dunes, saxaul forests, and salt flats stretching from the Caspian Sea to the Afghan border. The Karakum Canal — built by the Soviets between 1954 and 1988 — is one of the longest irrigation canals in the world at over 1,375 kilometres, diverting water from the Amu Darya across the desert to grow cotton and sustain Ashgabat. It is also one of the world's least water-efficient canals — losing an estimated 30–50% of its water to evaporation and seepage through its unlined earthen bed. The canal helped drain the Aral Sea. The Karakum is also home to the Akhal-Teke horse — one of the oldest and most beautiful horse breeds on Earth, the probable ancestor of the modern Thoroughbred, capable of covering 360 kilometres in three days across desert.`,
    facts: [
      "The Karakum covers 70% of Turkmenistan — 350,000 square kilometres",
      "The Karakum Canal is 1,375 km long — one of the world's largest irrigation projects",
      "The canal loses 30–50% of its water to evaporation — contributing to the Aral Sea disaster",
      "The Akhal-Teke horse — ancient, metallic-coated, desert-adapted — is a national symbol",
    ],
  },
  {
    id: "white-city",
    title: "Ashgabat — The City of White Marble",
    subtitle: "The Most Surreal Capital on Earth",
    icon: "🏙",
    color: "#1565C0",
    year: "1991–present",
    content: `Ashgabat holds the Guinness World Record for the highest concentration of white marble buildings in the world. The city was almost entirely rebuilt after independence using gas revenues — a ghostly, gleaming, monumental capital of white marble towers, golden domes, and vast empty boulevards that almost no one walks. The streets are spotless. The fountains play day and night. The buildings are spectacular and largely empty. The city has more white marble than almost any place on Earth, a functioning but deserted metro system, a monument park full of giant gold-plated structures, and a population surveilled by one of the world's most thorough authoritarian security apparatus. Foreign journalists are almost never allowed in. Satellite images show a city that appears to have been designed by a committee tasked with imagining what a capital city looks like, having never visited one.`,
    facts: [
      "Guinness World Record: highest density of white marble buildings on Earth",
      "Rebuilt almost entirely from scratch using gas revenues after independence",
      "Streets are spotless and largely empty — surveillance is pervasive",
      "Foreign journalists are almost never granted access",
    ],
  },
  {
    id: "culture",
    title: "Akhal-Teke, Dutar & the Desert Wind",
    subtitle: "A Nomadic Soul in a Marble City",
    icon: "🐎",
    color: "#006600",
    year: "Ancient–present",
    content: `Beneath the white marble and the personality cults, Turkmen culture is nomadic at its root. The yurt, the horse, the carpet, and the dog — the Alabai (Central Asian Shepherd), one of the world's oldest and largest dog breeds, also a national symbol — are the foundations of Turkmen identity. The dutar (two-stringed long-necked lute) is the central instrument of Turkmen classical music; the bakhshi tradition — a poet-musician who improvises epics from memory — is one of the oldest surviving oral traditions in Central Asia, recognised by UNESCO. Melon — Turkmenistan grows over 400 varieties — is treated with a reverence that borders on the sacred; there is a national Melon Day holiday (second Sunday of August) celebrated with public festivals. The Akhal-Teke horse, whose coat shimmers with a metallic golden sheen, is probably the most beautiful horse breed on Earth and is given as diplomatic gifts to foreign heads of state.`,
    facts: [
      "The Alabai dog — one of the world's oldest and largest breeds — is a national symbol",
      "The bakhshi oral epic tradition is UNESCO Intangible Cultural Heritage",
      "Turkmenistan grows over 400 varieties of melon — Melon Day is a national holiday",
      "The Akhal-Teke horse has a metallic golden coat and has been given to world leaders as gifts",
    ],
  },
];

const timeline = [
  { year: "3000 BC", event: "Ancient settlements in the Merv oasis — one of the oldest in Central Asia" },
  { year: "6th c. BC", event: "Achaemenid Persian Empire controls the region" },
  { year: "329 BC", event: "Alexander the Great passes through on his campaign east" },
  { year: "247 BC", event: "Parthian Empire founded — origin in what is now Turkmenistan" },
  { year: "651 AD", event: "Arab conquest brings Islam to the region" },
  { year: "1037", event: "Seljuk Turks make Merv their capital — city reaches its peak" },
  { year: "1221", event: "Mongols massacre Merv — the city never fully recovers" },
  { year: "1881", event: "Battle of Geok Tepe — Russia crushes last Tekke Turkmen resistance" },
  { year: "1924", event: "Turkmen SSR established" },
  { year: "1954", event: "Karakum Canal construction begins" },
  { year: "1971", event: "Darvaza gas crater ignited — still burning today" },
  { year: "1985", event: "Niyazov (future Turkmenbashi) becomes First Secretary" },
  { year: "1991", event: "Turkmenistan declares independence — 27 October" },
  { year: "1993", event: "Niyazov declares permanent neutrality and begins personality cult" },
  { year: "1995", event: "UN recognises Turkmenistan's permanent neutrality" },
  { year: "2001", event: "Ruhnama published — made mandatory in all schools and exams" },
  { year: "2002", event: "Months renamed — January becomes Turkmenbashi, April becomes his mother" },
  { year: "2006", event: "Niyazov dies suddenly; Berdimuhamedov takes power" },
  { year: "2013", event: "Galkynysh gas field confirmed as world's second-largest" },
  { year: "2022", event: "President orders Darvaza crater extinguished — it keeps burning" },
  { year: "2023", event: "Berdimuhamedov transfers power to his son Serdar" },
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
      <div style={{ background: CARD, border: `1px solid ${s.color}33`, borderLeft: `4px solid ${s.color}`, borderRadius: 3, overflow: "hidden", marginBottom: 20, cursor: "pointer" }} onClick={() => setOpen(o => !o)}>
        <div style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 26, lineHeight: 1, minWidth: 34, textAlign: "center" }}>{s.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0, color: "#eef2ec", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#304030", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0baa8", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#080c08", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#608060", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${GREEN}, ${SAND}, ${RED})` }} />
      {timeline.map((t, i) => (
        <div key={i} style={{ position: "relative", marginBottom: 24, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-18px)", transition: `opacity 0.5s ${i * 0.038}s, transform 0.5s ${i * 0.038}s` }}>
          <div style={{ position: "absolute", left: -26, top: 5, width: 10, height: 10, borderRadius: "50%", background: i % 3 === 0 ? GREEN : i % 3 === 1 ? SAND : RED, border: `2px solid ${MID}` }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: 12, minWidth: 52, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#607860", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{ width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 50px ${GREEN}44`, display: "flex", height: 80 }}>
        {/* Left stripe with carpet pattern */}
        <div style={{ width: 22, background: RED, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", padding: "3px 2px" }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: 14, height: 12, border: `1.5px solid ${LIGHT_GOLD}`, borderRadius: 1, background: CARPET_DARK, opacity: 0.9 }} />
          ))}
        </div>
        {/* Main green field */}
        <div style={{ flex: 1, background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          {/* Crescent and 5 stars */}
          <svg width="40" height="36" viewBox="0 0 40 36">
            <circle cx="14" cy="18" r="11" fill="white" opacity="0.9" />
            <circle cx="18" cy="18" r="8" fill={GREEN} />
            {[[20,6],[28,10],[32,18],[28,26],[20,30]].map(([x,y],i) => (
              <polygon key={i} points={`${x},${y-3} ${x+1},${y} ${x+3},${y} ${x+1.5},${y+1.5} ${x+2},${y+4} ${x},${y+2.5} ${x-2},${y+4} ${x-1.5},${y+1.5} ${x-3},${y} ${x-1},${y}`} fill="white" opacity="0.9" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

function DesertFireSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 200, opacity: 0.06 }} viewBox="0 0 900 200" preserveAspectRatio="none">
      {/* Sand dunes */}
      <path d="M0 200 Q100 140 200 160 Q300 140 400 155 Q500 135 600 150 Q700 135 800 148 Q850 140 900 145 L900 200Z" fill={SAND} />
      <path d="M0 200 Q150 160 280 175 Q400 160 500 170 Q650 155 750 165 Q820 158 900 162 L900 200Z" fill={SAND} opacity="0.5" />
      {/* Fire crater */}
      <ellipse cx="450" cy="150" rx="60" ry="20" fill="#FF4400" opacity="0.4" />
      <path d="M420 150 Q430 120 440 100 Q450 80 445 60 Q455 80 460 100 Q470 120 480 150Z" fill="#FF6600" opacity="0.5" />
      <path d="M430 150 Q438 128 445 110 Q452 128 460 150Z" fill="#FFAA00" opacity="0.6" />
      {/* Carpet pattern hint */}
      {[80, 160, 720, 800].map((x, i) => (
        <rect key={i} x={x} y="120" width="40" height="60" fill={CARPET_RED} opacity="0.3" rx="2" />
      ))}
    </svg>
  );
}

function CarpetIcon() {
  return (
    <svg width="60" height="50" viewBox="0 0 60 50" style={{ display: "block", margin: "0 auto" }}>
      <rect x="2" y="2" width="56" height="46" rx="2" fill={CARPET_RED} opacity="0.9" />
      <rect x="6" y="6" width="48" height="38" rx="1" fill={CARPET_DARK} opacity="0.8" />
      {/* Central gol pattern */}
      <rect x="20" y="14" width="20" height="22" rx="2" fill={CARPET_RED} opacity="0.9" />
      <polygon points="30,10 34,18 30,14 26,18" fill={LIGHT_GOLD} opacity="0.8" />
      <polygon points="30,40 34,32 30,36 26,32" fill={LIGHT_GOLD} opacity="0.8" />
      <polygon points="16,25 24,21 20,25 24,29" fill={LIGHT_GOLD} opacity="0.8" />
      <polygon points="44,25 36,21 40,25 36,29" fill={LIGHT_GOLD} opacity="0.8" />
      <rect x="27" y="21" width="6" height="8" rx="1" fill={LIGHT_GOLD} opacity="0.7" />
      {/* Border diamonds */}
      {[12,22,32,42].map((x, i) => <polygon key={i} points={`${x},9 ${x+3},12 ${x},15 ${x-3},12`} fill={LIGHT_GOLD} opacity="0.6" />)}
      {[12,22,32,42].map((x, i) => <polygon key={`b${i}`} points={`${x},35 ${x+3},38 ${x},41 ${x-3},38`} fill={LIGHT_GOLD} opacity="0.6" />)}
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd4c8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 24px", position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at 50% 38%, #001a04 0%, ${DARK} 68%)` }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: GREEN }} />
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 3, background: LIGHT_GOLD, opacity: 0.6 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: GREEN }} />
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, height: 3, background: LIGHT_GOLD, opacity: 0.6 }} />
        <DesertFireSilhouette />
        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <CarpetIcon />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Turkmenistan Sowet Sotsialistik Respublikasy
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem, 6.5vw, 5rem)", fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: 1.07, color: "#f5f2ec", margin: "0 0 8px", textShadow: `0 0 80px ${GREEN}55` }}>
            The Turkmen<br /><span style={{ color: LIGHT_GREEN }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#1a2c1a", lineHeight: 1.8, fontStyle: "italic" }}>
            A desert sitting on the world's fourth-largest gas reserves. A personality cult of astonishing ambition. A carpet on the flag. A crater of fire that refused to go out. A golden horse. A golden city. A door to hell.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1924–1991", "Ashgabat", "6M population", "Karakum Desert"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${GREEN}55`, color: LIGHT_GREEN, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${GREEN}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      <div style={{ background: GREEN, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#e0f8e8", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "We ordered the crater to be extinguished. It is still burning. The desert does not take orders." — after President Berdimuhamedov's 2022 directive
        </p>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>
        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eef2ec", marginBottom: 14 }}>The Desert Republic That Defies Description</h2>
            <p style={{ fontSize: "1.05rem", color: "#182018", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Turkmenistan is one of the world's most isolated and least-understood countries. It is covered by desert, sitting on a sea of natural gas, ruled by one of the most extraordinary personality cults in modern history, home to ancient ruins that were once the greatest cities on Earth, and populated by a people whose carpet-weaving tradition is literally on their flag. It is also, by any measure, deeply strange — and that strangeness has a history.
            </p>
          </div>
        </AnimCard>

        {/* Ruhnama callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0a1400, ${MID})`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>📖</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#d0e890", fontSize: "1.2rem", marginTop: 0 }}>
                The Ruhnama — The Book Fired Into Space
              </h3>
              <p style={{ color: "#3a4818", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Niyazov's Ruhnama (Book of the Soul) was part autobiography, part history, part spiritual guide, and part national mythology. It was compulsory reading in all schools and universities. Knowledge of its contents was tested in driving licence examinations. It was recited in mosques alongside the Quran. Giant illuminated copies were erected on buildings across Ashgabat, with pages turning automatically. In 2005, a Turkmen-Russian satellite placed a copy of the Ruhnama in orbit — Turkmenbashi's spiritual guide, circling Earth at 28,000 kilometres per hour. When Niyazov died in 2006, his successor quietly phased out most Ruhnama requirements — but the satellite is still up there.
              </p>
            </div>
          </div>
        </AnimCard>

        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${GREEN}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Turkmenistan in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "4th", l: "Largest natural gas reserves in the world" },
                { n: "70%", l: "Of the country covered by the Karakum Desert" },
                { n: "50+", l: "Years the Darvaza crater has burned without stopping" },
                { n: "301m²", l: "World's largest handmade carpet — woven in Turkmenistan" },
                { n: "500K", l: "Estimated population of ancient Merv at its peak" },
                { n: "1", l: "Country on Earth that has a carpet pattern on its national flag" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: GREEN, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#142014", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${GREEN}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Akhal-Teke callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0c1008, ${MID})`, border: `1px solid ${SAND}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🐎</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0e0a0", fontSize: "1.2rem", marginTop: 0 }}>
                The Akhal-Teke — The Golden Horse of the Desert
              </h3>
              <p style={{ color: "#5a4808", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                The Akhal-Teke is one of the oldest domesticated horse breeds on Earth — perhaps 3,000 years old — and arguably the most beautiful. Its coat has a metallic sheen, shimmering gold or silver in sunlight, caused by the structure of its hair shafts which act like optical fibres. It is built for desert endurance: narrow-bodied, long-necked, capable of travelling 360 kilometres in three days without water. It is the probable ancestor of the modern Thoroughbred. Niyazov banned the export of Akhal-Tekes and declared them a national treasure. The Turkmen president has given them as diplomatic gifts to foreign heads of state. There is a golden statue of one in Ashgabat. There is also a golden statue of the president. The horse arguably deserves the statue more.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Neutrality callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #001008, ${MID})`, border: `1px solid ${GREEN}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🕊</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#a0d0a0", fontSize: "1.2rem", marginTop: 0 }}>
                Permanent Neutrality — The Country That Belongs to No One
              </h3>
              <p style={{ color: "#1a4020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                In 1995, the United Nations General Assembly recognised Turkmenistan's permanent neutrality — making it one of only two countries in the world with this status (alongside Austria). Niyazov declared it a cornerstone of foreign policy: no military alliances, no foreign bases, no involvement in others' conflicts. In practice, neutrality has served as cover for total isolation. Turkmenistan has no embassies in most countries, issues almost no visas, and its citizens cannot freely travel abroad. The neutrality is real in the sense that Turkmenistan genuinely avoids international entanglements. It is less real in the sense that the country is a hermetically sealed authoritarian state that uses neutrality to avoid accountability to anyone.
              </p>
            </div>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #001008, #080c08)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <CarpetIcon />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#eef2ec", marginTop: 18 }}>The Desert Keeps Its Secrets</h2>
            <p style={{ color: "#141c10", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Turkmenistan is the country that put a book in space, built a white marble capital in the middle of a desert, renamed the months of the year, accidentally opened a door to hell and cannot close it, and placed a carpet pattern on its national flag. Beneath all of this — beneath the personality cult, the gas wealth, the white marble, the golden statues — there is a nomadic people of genuine depth: carpet weavers of extraordinary skill, breeders of the world's most beautiful horses, keepers of an oral epic tradition thousands of years old. The desert does not care about the statues. The carpet does not need the gold. The fire in the crater burns because it cannot help it. Turkmenistan is, in the end, simply itself — which is more than enough.
            </p>
            <div style={{ width: 50, height: 1, background: GREEN, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      <div style={{ background: "#060a06", borderTop: `3px solid ${GREEN}`, borderBottom: `2px solid ${GOLD}44`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#0e180e", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          TURKMEN SSR · 1924–1991 · ASHGABAT · TURKMENISTAN SSR
        </p>
      </div>
    </div>
  );
}
