import { useState, useEffect, useRef } from "react";

const RED = "#D90012";
const DARK_RED = "#8B0000";
const BLUE = "#0033A0";
const ORANGE = "#F2A800";
const DARK_ORANGE = "#C88000";
const DARK = "#09080c";
const MID = "#100e14";
const CARD = "#151220";
const GOLD = "#9A7840";
const LIGHT_GOLD = "#C0A060";

const sections = [
  {
    id: "genocide",
    title: "The Armenian Genocide",
    subtitle: "The Crime That Shaped a Nation's Soul",
    icon: "🕯",
    color: "#D90012",
    year: "1915–1923",
    content: `Between 1915 and 1923, the Ottoman government systematically exterminated the Armenian population of Anatolia. An estimated 600,000 to 1.5 million Armenians were killed through mass shootings, death marches into the Syrian desert, and deliberate starvation. The survivors were scattered across the world — to Syria, Lebanon, France, the United States, and eventually Soviet Armenia — creating the Armenian diaspora that exists to this day. The genocide is recognised by over 30 countries, though Turkey continues to deny it. Adolf Hitler reportedly invoked it directly in 1939, asking "Who remembers the Armenians?" to justify his own plans for mass murder. The Tsitsernakaberd memorial in Yerevan, where an eternal flame burns, receives over a million visitors every April 24 — Genocide Remembrance Day.`,
    facts: [
      "600,000–1.5 million Armenians killed by the Ottoman government",
      "Death marches into the Syrian desert were a primary method of killing",
      "Recognised as genocide by over 30 countries; Turkey still denies it",
      "Hitler cited the lack of consequences in 1939 as justification for his own plans",
    ],
  },
  {
    id: "ancient",
    title: "The World's Oldest Christian Nation",
    subtitle: "301 AD — Before Rome, Before Byzantium",
    icon: "⛪",
    color: "#8B4513",
    year: "301 AD–present",
    content: `In 301 AD, Armenia became the first nation in history to adopt Christianity as its state religion — a full decade before the Edict of Milan that granted Christians tolerance in Rome, and nearly a century before Rome itself became Christian. King Tiridates III converted after being cured of madness by St Gregory the Illuminator, and declared Christianity the state religion of the Kingdom of Armenia. The Armenian Apostolic Church that emerged from this moment is one of the oldest Christian institutions on Earth. It developed its own unique liturgy, its own alphabet (created in 405 AD), its own theological tradition, and its own distinct architecture — the khachkar, a cross-stone carved in interlocking patterns, is found wherever Armenians have lived or been buried.`,
    facts: [
      "First nation to adopt Christianity as a state religion — 301 AD",
      "The Armenian Apostolic Church predates the Roman Catholic Church",
      "The Armenian alphabet was created in 405 AD specifically to translate the Bible",
      "Khachkar cross-stones are found on every continent where Armenians settled",
    ],
  },
  {
    id: "alphabet",
    title: "Mesrop Mashtots & the Armenian Alphabet",
    subtitle: "The Script That Saved a People",
    icon: "✍",
    color: "#1A5276",
    year: "405 AD",
    content: `In 405 AD, the monk and scholar Mesrop Mashtots created the Armenian alphabet — 38 letters designed specifically for the sounds of the Armenian language. The creation of the alphabet was not merely a linguistic achievement: it was an act of cultural survival. Before it, Armenian religious life depended on Greek and Syriac texts that most Armenians could not read. The alphabet allowed the translation of the Bible, the preservation of Armenian history, and the development of a distinctly Armenian literary tradition. It is still used today, entirely unchanged after 1,600 years, making it one of the most durable human inventions. The Armenians call the period immediately after the alphabet's creation the "Golden Age" of Armenian literature. Mashtots is venerated as a saint by the Armenian Church.`,
    facts: [
      "Created in 405 AD — in continuous use for over 1,600 years without modification",
      "Mesrop Mashtots also created the Georgian and Caucasian Albanian alphabets",
      "The first sentence written in Armenian was a verse from the Bible",
      "The alphabet has 38 letters, perfectly matching Armenian phonology",
    ],
  },
  {
    id: "soviet",
    title: "The Armenian SSR",
    subtitle: "Sanctuary or Prison?",
    icon: "🏛",
    color: "#1A5276",
    year: "1920–1991",
    content: `The Armenian SSR was established in 1920 when the Red Army invaded the short-lived First Republic of Armenia. For many Armenians, Soviet rule was bitterly resented — yet for others it represented security after the genocide: a territory, however constrained, that was unambiguously Armenian. The Soviet period brought rapid industrialisation, universal literacy, and world-class scientific institutions. Yerevan transformed from a small town into a modern capital. Armenian brandy — produced at the Yerevan Brandy Company — became the finest in the Soviet Union, Winston Churchill's preferred drink, and famously the subject of a Churchill-Stalin exchange at Yalta. The Matenadaran manuscript repository, housing over 23,000 ancient manuscripts, became one of the great archives of human civilisation.`,
    facts: [
      "Armenian brandy was Winston Churchill's favourite — he received 400 bottles from Stalin",
      "The Matenadaran holds over 23,000 ancient manuscripts in Armenian and other languages",
      "Yerevan grew from a town of 30,000 in 1920 to a city of over 1 million by 1991",
      "Armenia had one of the highest concentrations of scientists in the USSR",
    ],
  },
  {
    id: "science",
    title: "Science, Chess & the Arts",
    subtitle: "A Tiny Republic's Outsized Mind",
    icon: "♟",
    color: "#6A1B9A",
    year: "1920–1991",
    content: `The Armenian SSR produced an extraordinary concentration of intellectual and artistic talent for its size. Tigran Petrosian — the "Iron Tigran" — was World Chess Champion from 1963 to 1969, one of the most defensive and strategically profound players in the history of the game. Aram Khachaturian composed the Sabre Dance and the Spartacus ballet, works performed in concert halls worldwide. Arno Babajanyan became the Soviet Union's most celebrated composer of popular song. Sergei Parajanov, though Georgian-Armenian, made The Color of Pomegranates in Armenia — one of the most visually extraordinary films in cinema history. Armenia's scientific institutes contributed to Soviet computing, astrophysics, and mathematics at the highest levels.`,
    facts: [
      "Tigran Petrosian: World Chess Champion 1963–1969",
      "Khachaturian's Sabre Dance is one of the most recognised pieces of 20th century music",
      "The Color of Pomegranates, filmed in Armenia, is a landmark of world cinema",
      "Armenia punched far above its weight in Soviet science and mathematics",
    ],
  },
  {
    id: "diaspora",
    title: "The Armenian Diaspora",
    subtitle: "A Nation Scattered Across the World",
    icon: "🌍",
    color: "#00695C",
    year: "1915–present",
    content: `The Armenian genocide created one of the world's most significant diaspora communities. Today there are more Armenians living outside Armenia than inside it — approximately 7–10 million in the diaspora versus 3 million in the republic. The largest communities are in Russia, the United States (particularly Los Angeles), France, Lebanon, Syria, and Argentina. The diaspora has produced figures of extraordinary global influence: the Kardashian family, Charles Aznavour (France's most celebrated singer), William Saroyan (Pulitzer Prize-winning author), Cher, Andre Agassi, and system-96 architect of modern genetics Arshile Gorky. Diaspora communities have been crucial in keeping genocide recognition on international political agendas for over a century.`,
    facts: [
      "More Armenians live outside Armenia than inside — 7–10 million in diaspora",
      "Charles Aznavour sold over 180 million records worldwide",
      "The LA Armenian community is one of the largest diaspora concentrations on Earth",
      "Diaspora lobbying has driven genocide recognition in dozens of countries",
    ],
  },
  {
    id: "karabakh",
    title: "Nagorno-Karabakh",
    subtitle: "The Wound That Never Closed",
    icon: "⚔",
    color: "#7B1C1C",
    year: "1988–2023",
    content: `Nagorno-Karabakh — Artsakh to Armenians — was an Armenian-majority enclave within Soviet Azerbaijan. Stalin had deliberately placed it under Azerbaijani jurisdiction in 1921, a classic divide-and-rule move that seeded a conflict destined to outlast the USSR. In 1988, as the Soviet Union weakened, the Armenian population of Karabakh voted to unite with Armenia, triggering a war that killed tens of thousands. After the USSR collapsed, Armenia held the enclave and a corridor to it. A fragile ceasefire held for decades. In 2020, a six-week war saw Azerbaijan, backed by Turkey and equipped with Israeli and Turkish drones, retake most of the territory. In September 2023, a 24-hour Azerbaijani offensive ended Armenian presence in Karabakh entirely — over 100,000 Armenians fled in days. It was the end of a 2,000-year Armenian presence in the region.`,
    facts: [
      "Stalin placed the Armenian-majority enclave under Azerbaijani control in 1921",
      "The 1988–94 war killed ~30,000 and displaced over a million people",
      "Azerbaijan retook most of Karabakh in a 44-day war in 2020",
      "September 2023: 100,000 Armenians fled in 24 hours — ending millennia of presence",
    ],
  },
  {
    id: "velvet",
    title: "The Velvet Revolution",
    subtitle: "Armenia's Peaceful Uprising",
    icon: "✊",
    color: "#D90012",
    year: "2018",
    content: `In April 2018, mass street protests in Yerevan forced the resignation of longtime ruler Serzh Sargsyan, who had attempted to extend his grip on power by transitioning from president to prime minister after term limits prevented him from remaining president. The protests were led by opposition MP Nikol Pashinyan, who walked across Armenia to rally support before the demonstrations peaked. Hundreds of thousands filled the streets of Yerevan in completely peaceful protest. Sargsyan resigned after just 11 days. Pashinyan became prime minister and launched anti-corruption reforms. Unlike most post-Soviet colour revolutions, the Velvet Revolution produced a genuine transfer of power — though the 2020 defeat in Karabakh severely tested the new government's legitimacy.`,
    facts: [
      "Serzh Sargsyan resigned after just 11 days of peaceful protests",
      "Nikol Pashinyan walked across Armenia to rally support before the protests",
      "Hundreds of thousands gathered in Yerevan — the largest protests in Armenian history",
      "One of the only post-Soviet colour revolutions to result in genuine democratic transfer",
    ],
  },
];

const timeline = [
  { year: "301 AD", event: "Armenia becomes the first Christian nation in history" },
  { year: "405 AD", event: "Mesrop Mashtots creates the Armenian alphabet" },
  { year: "428 AD", event: "Kingdom of Armenia falls to Persia and Byzantium" },
  { year: 1064, event: "Seljuk Turks devastate Armenia; mass emigration begins" },
  { year: 1375, event: "Last Armenian kingdom falls — stateless for five centuries" },
  { year: 1813, event: "Eastern Armenia absorbed into Russian Empire from Persia" },
  { year: 1894, event: "Hamidian massacres — first wave of Ottoman violence against Armenians" },
  { year: 1915, event: "Armenian Genocide begins — mass deportations and killings" },
  { year: 1918, event: "First Republic of Armenia declared" },
  { year: 1920, event: "Red Army invades; Armenian SSR established" },
  { year: 1921, event: "Stalin assigns Nagorno-Karabakh to Azerbaijan" },
  { year: 1936, event: "Armenian SSR becomes a full Union Republic" },
  { year: 1939, event: "Hitler references Armenian Genocide to justify his own plans" },
  { year: 1945, event: "Armenian diaspora repatriation programme brings thousands home" },
  { year: 1963, event: "Tigran Petrosian becomes World Chess Champion" },
  { year: 1965, event: "First public commemoration of the genocide in Soviet Armenia" },
  { year: 1988, event: "Karabakh conflict begins; Spitak earthquake kills 25,000" },
  { year: 1991, event: "Armenia declares independence — 21 September" },
  { year: 1994, event: "First Karabakh war ceasefire; Armenia holds the enclave" },
  { year: 2018, event: "Velvet Revolution — Pashinyan comes to power" },
  { year: 2020, event: "44-day war; Azerbaijan retakes most of Karabakh" },
  { year: 2023, event: "Final Azerbaijani offensive — 100,000 Armenians flee Karabakh" },
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
              <h3 style={{ margin: 0, color: "#f0e8e8", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#504050", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#c0b0b8", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#090810", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#806878", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${RED}, ${BLUE}, ${ORANGE})` }} />
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
            background: i % 3 === 0 ? RED : i % 3 === 1 ? BLUE : ORANGE,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: DARK_ORANGE, fontSize: 12, minWidth: 52, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#706070", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  // Armenian flag: red, blue, orange stripes
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{
        width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2,
        overflow: "hidden", boxShadow: `0 0 50px ${RED}44`,
        display: "flex", flexDirection: "column", height: 80
      }}>
        <div style={{ flex: 1, background: RED }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: ORANGE }} />
      </div>
    </div>
  );
}

function AraratIcon() {
  // Stylised Mount Ararat — Armenia's national symbol (though in Turkey)
  return (
    <svg width="80" height="56" viewBox="0 0 80 56" style={{ display: "block", margin: "0 auto" }}>
      {/* Greater Ararat */}
      <polygon points="40,4 8,52 72,52" fill={RED} opacity="0.75" />
      {/* Snow cap */}
      <polygon points="40,4 32,18 48,18" fill="#f0f0f0" opacity="0.85" />
      {/* Lesser Ararat */}
      <polygon points="62,20 48,52 76,52" fill={RED} opacity="0.5" />
      {/* Lesser snow */}
      <polygon points="62,20 58,28 66,28" fill="#f0f0f0" opacity="0.7" />
      {/* Base ground */}
      <rect x="0" y="50" width="80" height="6" fill={ORANGE} opacity="0.3" />
    </svg>
  );
}

function MountainSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 200, opacity: 0.06 }} viewBox="0 0 900 200" preserveAspectRatio="none">
      <polygon points="200,200 320,60 440,200" fill={RED} />
      <polygon points="320,60 350,30 380,60" fill="#fff" opacity="0.5" />
      <polygon points="550,200 630,100 710,200" fill={RED} opacity="0.6" />
      <polygon points="630,100 645,80 660,100" fill="#fff" opacity="0.4" />
      <polygon points="0,200 100,120 200,200" fill={RED} opacity="0.4" />
      <polygon points="700,200 780,130 860,200" fill={RED} opacity="0.4" />
      <rect x="0" y="185" width="900" height="15" fill={ORANGE} opacity="0.2" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#d0c8d4" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 38%, #1a0008 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: RED }} />
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 4, background: ORANGE }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: RED }} />
        <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, height: 4, background: ORANGE }} />

        <MountainSilhouette />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <AraratIcon />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: DARK_ORANGE, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Հայկական Խորհրդային Սոցիալիստական Հանրապետություն
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f5eef0",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${RED}55`,
          }}>
            The Armenian<br /><span style={{ color: "#E05060" }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#402838", lineHeight: 1.8, fontStyle: "italic" }}>
            The world's oldest Christian nation. A people who survived genocide, statelessness, and Soviet rule — and never stopped being Armenian.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1920–1991", "Yerevan", "3.5M population", "South Caucasus"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${RED}55`, color: "#E06070", fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
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
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#ffe8ec", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "We are Armenians. We have always been here, and we will always be here." — inscription at the Tsitsernakaberd Genocide Memorial, Yerevan
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#f0e8e8", marginBottom: 14 }}>A Civilisation That Refused Extinction</h2>
            <p style={{ fontSize: "1.05rem", color: "#3a2030", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Armenia has spent most of its history without a state of its own — ruled by Persians, Arabs, Byzantines, Mongols, Ottomans, and Russians in succession. Yet the Armenian people, their language, their alphabet, their church, and their identity survived every empire that tried to absorb or destroy them. The Soviet chapter was one more layer in a civilisation 3,000 years old — complicated, sometimes brutal, sometimes genuinely beneficial, and always secondary to the deeper Armenian story.
            </p>
          </div>
        </AnimCard>

        {/* Ararat callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a0008, ${MID})`, border: `1px solid ${RED}55`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>🏔</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0c0c8", fontSize: "1.2rem", marginTop: 0 }}>
                Mount Ararat — The Symbol Armenia Cannot Reach
              </h3>
              <p style={{ color: "#602030", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Mount Ararat — the biblical mountain where Noah's Ark came to rest, the most sacred symbol of Armenian identity — is visible from Yerevan on clear days. It appears on the Armenian coat of arms. Yet it lies entirely within Turkey. When the Soviet government incorporated it into the coat of arms, Turkish officials protested. Soviet foreign minister Litvinov reportedly replied: "You have a moon on your flag, but there is no moon in Turkey." The mountain Armenians revere most is the mountain they cannot visit. It is the perfect symbol of a people defined by loss.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Sections */}
        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${RED}44` }} />
              <h2 style={{ fontFamily: "monospace", color: DARK_ORANGE, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${RED}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        {/* Stats */}
        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${RED}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: DARK_ORANGE, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Armenia in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "301 AD", l: "First Christian nation in history" },
                { n: "1.5M", l: "Armenians killed in the genocide" },
                { n: "1,600", l: "Years the Armenian alphabet has been in use" },
                { n: "10M+", l: "Armenians in the global diaspora" },
                { n: "23,000", l: "Ancient manuscripts in the Matenadaran" },
                { n: "2023", l: "Year Karabakh's Armenian population was expelled" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: RED, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#302030", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
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
              <h2 style={{ fontFamily: "monospace", color: DARK_ORANGE, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${RED}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        {/* Brandy callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100810, ${MID})`, border: `1px solid #6A1B9A44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🥃</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#d0a8e0", fontSize: "1.2rem", marginTop: 0 }}>
                Churchill, Stalin & Armenian Brandy
              </h3>
              <p style={{ color: "#503860", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                At the Yalta Conference in 1945, Stalin served Winston Churchill Armenian brandy from the Yerevan Brandy Company. Churchill was so taken with it that he reportedly asked Stalin to send him 400 bottles a year — a request Stalin apparently fulfilled. Churchill is said to have declared it the finest brandy he had ever tasted, surpassing Cognac. The story — whether entirely true or partly legend — reflects a genuine fact: Armenian brandy, produced from grapes grown on the volcanic slopes near Ararat, was the prestige drink of the Soviet elite and is still produced by the company now owned by Pernod Ricard.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Spitak callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0a0810, ${MID})`, border: `1px solid ${RED}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🌍</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0c0c0", fontSize: "1.2rem", marginTop: 0 }}>
                The Spitak Earthquake — 1988
              </h3>
              <p style={{ color: "#602020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                On 7 December 1988, a magnitude 6.8 earthquake devastated northwestern Armenia, killing between 25,000 and 50,000 people and leaving half a million homeless. The city of Spitak was almost entirely destroyed; Leninakan (now Gyumri) was severely damaged. It struck as the Karabakh conflict was already escalating, compounding the trauma enormously. Gorbachev cut short a visit to the United States to return. International aid poured in from around the world — including from the Armenian diaspora. The earthquake, the war, and Soviet mismanagement combined to accelerate Armenia's drive toward independence just three years later.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100008, #090810)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <AraratIcon />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#f0e8e8", marginTop: 18 }}>The Eternal Nation</h2>
            <p style={{ color: "#382030", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Armenia is one of the oldest continuous civilisations on Earth. It has been conquered, partitioned, massacred, and scattered — and it has endured. The Armenian alphabet has not changed in 1,600 years. The Armenian Church has not wavered in 1,700 years. The Armenian language, spoken today by communities on every inhabited continent, is the same language that Mesrop Mashtots first committed to writing in 405 AD. The Soviet chapter was 70 years in a story 3,000 years long. Mount Ararat still rises on the horizon from Yerevan — unreachable, unchanging, eternal.
            </p>
            <div style={{ width: 50, height: 1, background: RED, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#07060a", borderTop: `3px solid ${RED}`, borderBottom: `2px solid ${ORANGE}44`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#281018", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          ARMENIAN SSR · 1920–1991 · YEREVAN · ՀԱՅԿԱԿԱՆ ԽՍՀ
        </p>
      </div>
    </div>
  );
}
