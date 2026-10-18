import { useState, useEffect, useRef } from "react";

const RED = "#CC0000";
const DARK_RED = "#880000";
const WHITE = "#F5F5F5";
const GREEN = "#006600";
const GOLD = "#9A7820";
const LIGHT_GOLD = "#C09830";
const DARK = "#080a08";
const MID = "#0c100c";
const CARD = "#101410";
const CROWN = "#C8A030";

const sections = [
  {
    id: "persian",
    title: "Cradle of Persian Civilisation",
    subtitle: "The Language of Rumi, Hafez, and Avicenna",
    icon: "📜",
    color: "#9A7820",
    year: "Ancient–present",
    content: `Tajiks are an Iranian people — speakers of a form of Persian called Tajik — who represent the oldest continuous civilisation in Central Asia. While Turkic nomads ruled the steppe, Tajik-speaking people cultivated the valleys and cities: they were the administrators, the poets, the scholars, the merchants. The Persian literary tradition — Rumi, Hafez, Ferdowsi, Omar Khayyam — is the shared heritage of Tajiks, Iranians, and Afghans. The Samanid dynasty (819–999 AD), based in Bukhara, was the first great Persian renaissance after the Arab conquest, producing a flowering of literature, science, and art. Ibn Sina (Avicenna) wrote his early works under Samanid patronage. Rudaki, the Father of Persian poetry, was born in Tajikistan. The word "Tajik" is ancient — it may derive from the name of an Arab tribe, adopted by Persian-speakers to distinguish themselves from Turkic nomads.`,
    facts: [
      "Tajiks are an Iranian people — among Central Asia's oldest continuous civilisations",
      "The Samanid dynasty (819–999) produced the first Persian renaissance after Arab conquest",
      "Rudaki — Father of Persian poetry — was born in what is now Tajikistan",
      "Tajik is mutually intelligible with Farsi and Dari — the same language in three countries",
    ],
  },
  {
    id: "stolen-cities",
    title: "The Stolen Cities",
    subtitle: "Bukhara and Samarkand Were Tajik — Until Stalin Drew His Lines",
    icon: "🗺",
    color: "#CC0000",
    year: "1924–1929",
    content: `When the Soviet Union carved Central Asia into republics in 1924, it made decisions that Tajiks consider one of the great injustices of the 20th century. Bukhara and Samarkand — the two greatest cities of Persian-Tajik civilisation, where the Samanid dynasty had ruled, where Rudaki had written, where Avicenna had studied — were assigned to the Uzbek SSR. The Tajik ASSR was created as an autonomous region within Uzbekistan, with the smaller city of Dushanbe (then barely a village called Dyushambe) as its capital. Only in 1929 was the Tajik SSR elevated to a full Union Republic — but without its historic cities. Stalin's border-drawing deliberately mixed populations to prevent any republic from becoming a coherent nationalist entity. Tajikistan has never recovered its historical urban centres.`,
    facts: [
      "Samarkand and Bukhara — historically Tajik cities — were given to Uzbekistan in 1924",
      "The Tajik ASSR was initially subordinate within the Uzbek SSR",
      "Dushanbe was a small village market when it became the capital",
      "Stalin's borders deliberately separated Tajik populations from their cultural centres",
    ],
  },
  {
    id: "mountains",
    title: "The Roof of the World",
    subtitle: "93% Mountain — The Most Mountainous Country on Earth",
    icon: "🏔",
    color: "#1565C0",
    year: "Ancient–present",
    content: `Tajikistan is the most mountainous country on Earth — 93% of its territory is covered by mountains, many above 3,000 metres. The Pamir Mountains — the Roof of the World — dominate the east, with Ismoil Somoni Peak (formerly Communism Peak) rising to 7,495 metres, the highest point in the former Soviet Union. The Fedchenko Glacier, at 77 kilometres, is the longest glacier outside the polar regions. The Pamirs are one of the last great wilderness frontiers on Earth — sparsely populated, seismically active, and home to the Marco Polo sheep, named because Marco Polo described them in the 13th century. The mountains have always isolated Tajikistan from the world — and protected it.`,
    facts: [
      "93% of Tajikistan is mountainous — the highest proportion of any country",
      "Ismoil Somoni Peak at 7,495m was the highest point in the Soviet Union",
      "The Fedchenko Glacier is the longest non-polar glacier on Earth at 77 km",
      "The Marco Polo sheep — huge-horned wild sheep — roam the Pamir highlands",
    ],
  },
  {
    id: "civil-war",
    title: "The Civil War",
    subtitle: "The Bloodiest Post-Soviet Conflict Nobody Remembers",
    icon: "⚔",
    color: "#7B1C1C",
    year: "1992–1997",
    content: `Between 1992 and 1997, Tajikistan was consumed by a civil war that killed between 50,000 and 100,000 people — the deadliest conflict on former Soviet territory after the Chechen wars. The war pitted a government coalition against the United Tajik Opposition, an alliance of Islamists, democrats, and regionalist factions. It had deep roots in Soviet-era clan and regional rivalries deliberately cultivated by Moscow to prevent unified opposition. Around 1.2 million people were displaced — about a fifth of the entire population. The war ended with a UN-brokered peace agreement in 1997. Emomali Rahmon, who came to power during the conflict, remains president today — ruling with increasing authoritarianism for over 30 years.`,
    facts: [
      "50,000–100,000 people killed — deadliest post-Soviet conflict after Chechnya",
      "1.2 million displaced — roughly a fifth of the entire population",
      "The war had roots in Soviet-era clan divisions deliberately maintained by Moscow",
      "UN-brokered peace in 1997; Rahmon has ruled ever since",
    ],
  },
  {
    id: "soviet-era",
    title: "The Tajik SSR",
    subtitle: "Hydropower, Cotton & High Altitude Science",
    icon: "⚙",
    color: "#006600",
    year: "1929–1991",
    content: `Despite being the poorest and most remote Soviet republic, the Tajik SSR developed significant industrial and scientific capacity. The Nurek Dam on the Vakhsh River — completed in 1980 — was the tallest dam in the world at 300 metres, providing electricity for the entire republic and beyond. Soviet geologists mapped the Pamirs and found extraordinary mineral wealth: gold, silver, aluminium, uranium. The Tajik Academy of Sciences produced serious work in seismology (the Pamirs are one of the world's most seismically active regions), astrophysics, and Central Asian history. Cotton monoculture devastated the Ferghana Valley lowlands while mountain communities maintained more traditional ways of life largely untouched by Soviet modernity.`,
    facts: [
      "The Nurek Dam at 300m was the world's tallest dam when completed in 1980",
      "The Pamirs are among the world's most seismically active regions",
      "Soviet geologists found gold, silver, aluminium, and uranium in the mountains",
      "Tajikistan was the poorest Soviet republic by GDP per capita",
    ],
  },
  {
    id: "wakhan",
    title: "The Wakhan & the Great Game",
    subtitle: "Where Empires Drew Lines Through Mountains",
    icon: "🎯",
    color: "#5D4037",
    year: "1800s–present",
    content: `The remote Wakhan Corridor — a finger of Afghan territory that juts eastward along Tajikistan's southern border to reach China — was the product of 19th century imperial rivalry between Britain and Russia. The British, protecting their Indian Empire, and the Russians, expanding southward, agreed on the Wakhan as a buffer zone to prevent their empires touching directly. The Tajik-Afghan border runs for 1,344 kilometres along the Panj River — one of the most dramatic border rivers in the world, where you can stand on the Tajik bank and see Afghan villages a hundred metres across the water, utterly inaccessible by road. During the Soviet-Afghan War, this border was heavily militarised. Today it remains one of the most remote and beautiful frontiers on Earth.`,
    facts: [
      "The Wakhan Corridor was created to prevent British and Russian empires from touching",
      "The Panj River border runs for 1,344 km — Afghan villages visible from the Tajik bank",
      "The border region was heavily militarised during the Soviet-Afghan War (1979–89)",
      "The Wakhan is one of the most remote inhabited regions on Earth",
    ],
  },
  {
    id: "ismaili",
    title: "The Ismaili Heartland",
    subtitle: "The Aga Khan's People of the Pamirs",
    icon: "✨",
    color: "#6A1B9A",
    year: "Ancient–present",
    content: `The Pamiri people of eastern Tajikistan — the Shughnanis, Wakhis, Ishkashimis, and others — are not only ethnically distinct from lowland Tajiks; they are religiously distinct too. While most of Tajikistan is Sunni Muslim, the Pamiri peoples follow Ismaili Shia Islam — recognising the Aga Khan as their living Imam. During the Soviet period, the Aga Khan Development Network was barred from the region. After independence, the network moved in with extraordinary impact: funding schools, hospitals, infrastructure, and cultural preservation in one of the world's most isolated and impoverished regions. The Pamiri people maintain distinct languages — Shughni, Wakhi, and others — spoken by fewer than 100,000 people and largely unwritten. They are among the most endangered languages on Earth, in the world's most dramatic landscape.`,
    facts: [
      "Pamiri peoples are Ismaili Shia — the only region of Central Asia with this tradition",
      "The Aga Khan Development Network funds schools and hospitals across the Pamirs",
      "Shughni, Wakhi, and other Pamiri languages are spoken by tiny communities",
      "Pamiri languages belong to the Eastern Iranian branch — distinct from Tajik",
    ],
  },
  {
    id: "culture",
    title: "Navruz, Rubab & the Mountains' Song",
    subtitle: "A Culture Written in Snow and Poetry",
    icon: "🎶",
    color: "#00695C",
    year: "Ancient–present",
    content: `Tajik culture is rooted in the Persian literary and musical tradition, filtered through mountain isolation and Central Asian folk life. Navruz — the Persian New Year celebrated at the spring equinox — is the central festival of the Tajik year, predating Islam by millennia. The rubab (plucked lute) and the doira (frame drum) are the primary instruments of Tajik classical music. Tajik cuisine centres on qurut (dried yoghurt balls), laghman noodle soups, and samsa pastries — a diet shaped by high altitude and the need for preserved food through long winters. The Pamiri hospice tradition — where any traveller must be fed and housed — is one of the strongest surviving traditions of Central Asian nomadic hospitality in a settled context.`,
    facts: [
      "Navruz (Persian New Year) is a UNESCO-recognised festival predating Islam by millennia",
      "The rubab lute is the central instrument of Tajik classical music",
      "Qurut — dried yoghurt balls — are a staple preserved food of mountain communities",
      "Pamiri hospitality requires feeding and housing any traveller who arrives",
    ],
  },
];

const timeline = [
  { year: "500 BC", event: "Achaemenid Persian Empire includes Sogdia and Bactria" },
  { year: "329 BC", event: "Alexander the Great crosses the Oxus — marries Roxana from Bactria" },
  { year: "712 AD", event: "Arab conquest brings Islam; Persian language and culture survive" },
  { year: 819, event: "Samanid dynasty founded in Bukhara — first Persian renaissance" },
  { year: 858, event: "Rudaki, Father of Persian poetry, born in Tajikistan" },
  { year: 980, event: "Ibn Sina (Avicenna) born under Samanid patronage near Bukhara" },
  { year: 999, event: "Samanid dynasty falls — Tajik statelessness begins" },
  { year: 1220, event: "Mongol conquest devastates the region" },
  { year: 1868, event: "Russia conquers the region — Tajik territories under imperial control" },
  { year: 1920, event: "Red Army takes Bukhara; Basmachi resistance begins" },
  { year: 1924, event: "Tajik ASSR created within Uzbek SSR — Bukhara and Samarkand excluded" },
  { year: 1929, event: "Tajik SSR elevated to full Union Republic" },
  { year: 1937, event: "Tajik intelligentsia purged in the Great Terror" },
  { year: 1980, event: "Nurek Dam completed — world's tallest at 300m" },
  { year: 1991, event: "Tajikistan declares independence — 9 September" },
  { year: 1992, event: "Civil war begins — 50,000–100,000 killed over five years" },
  { year: 1997, event: "UN-brokered peace agreement ends the civil war" },
  { year: 2016, event: "Rogun Dam construction resumes — set to be world's tallest at 335m" },
  { year: 2022, event: "Brief border clashes with Kyrgyzstan over water and land" },
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
              <h3 style={{ margin: 0, color: "#eef0ec", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#384030", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0b8a8", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#080a08", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${RED}, ${GREEN}, ${GOLD})` }} />
      {timeline.map((t, i) => (
        <div key={i} style={{ position: "relative", marginBottom: 24, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-18px)", transition: `opacity 0.5s ${i * 0.038}s, transform 0.5s ${i * 0.038}s` }}>
          <div style={{ position: "absolute", left: -26, top: 5, width: 10, height: 10, borderRadius: "50%", background: i % 3 === 0 ? RED : i % 3 === 1 ? GREEN : GOLD, border: `2px solid ${MID}` }} />
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
      <div style={{ width: "100%", border: `2px solid ${GOLD}55`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 50px ${RED}44`, display: "flex", flexDirection: "column", height: 80, position: "relative" }}>
        <div style={{ flex: 2, background: RED }} />
        <div style={{ flex: 3, background: WHITE, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="60" height="28" viewBox="0 0 60 28">
            <path d="M10 24 L10 12 L18 18 L30 8 L42 18 L50 12 L50 24 Z" fill={CROWN} />
            <rect x="8" y="22" width="44" height="4" rx="1" fill={CROWN} />
            {[10,20,30,40,50].map((x, i) => (
              <polygon key={i} points={`${x},8 ${x+1.5},13 ${x+5},13 ${x+2},16 ${x+3.5},21 ${x},18 ${x-3.5},21 ${x-2},16 ${x-5},13 ${x-1.5},13`} fill={CROWN} opacity="0.9" />
            ))}
          </svg>
        </div>
        <div style={{ flex: 2, background: GREEN }} />
      </div>
    </div>
  );
}

function MountainSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 240, opacity: 0.07 }} viewBox="0 0 900 240" preserveAspectRatio="none">
      <polygon points="0,240 80,100 160,240" fill={RED} opacity="0.5" />
      <polygon points="80,240 200,40 320,240" fill={RED} opacity="0.8" />
      <polygon points="220,240 360,20 500,240" fill={RED} />
      <polygon points="360,20 380,0 400,20" fill="white" opacity="0.7" />
      <polygon points="400,240 520,60 640,240" fill={RED} opacity="0.7" />
      <polygon points="520,60 535,40 550,60" fill="white" opacity="0.5" />
      <polygon points="580,240 700,80 820,240" fill={RED} opacity="0.6" />
      <polygon points="200,40 190,70 210,70" fill="white" opacity="0.6" />
      <rect x="0" y="225" width="900" height="15" fill={GREEN} opacity="0.2" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="62" height="44" viewBox="0 0 62 44" style={{ display: "block", margin: "0 auto" }}>
      <path d="M6 40 L6 22 L16 32 L31 12 L46 32 L56 22 L56 40 Z" fill={CROWN} opacity="0.9" />
      <rect x="4" y="38" width="54" height="6" rx="2" fill={CROWN} opacity="0.8" />
      {[10,20,31,42,52].map((x, i) => (
        <polygon key={i} points={`${x},10 ${x+2},16 ${x+6},16 ${x+3},20 ${x+4},26 ${x},23 ${x-4},26 ${x-3},20 ${x-6},16 ${x-2},16`} fill={CROWN} opacity="0.8" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd4c8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 24px", position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at 50% 38%, #1a0004 0%, ${DARK} 68%)` }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: RED }} />
        <div style={{ position: "absolute", top: 5, left: 0, right: 0, height: 4, background: WHITE }} />
        <div style={{ position: "absolute", top: 9, left: 0, right: 0, height: 5, background: GREEN }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: RED }} />
        <div style={{ position: "absolute", bottom: 5, left: 0, right: 0, height: 4, background: WHITE }} />
        <div style={{ position: "absolute", bottom: 9, left: 0, right: 0, height: 5, background: GREEN }} />
        <MountainSilhouette />
        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <CrownIcon />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>Jumhurii Shuravii Sotsialistii Tojikiston</p>
          <h1 style={{ fontSize: "clamp(2.2rem, 6.5vw, 5rem)", fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: 1.07, color: "#f5f2ec", margin: "0 0 8px", textShadow: `0 0 80px ${RED}55` }}>
            The Tajik<br /><span style={{ color: "#E05050" }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#2a1820", lineHeight: 1.8, fontStyle: "italic" }}>
            The cradle of Persian civilisation, robbed of its greatest cities by a Soviet mapmaker. The Roof of the World. A civil war the world forgot. A people whose poetry outlasted every empire.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1929–1991", "Dushanbe", "5.3M population", "Pamirs"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${RED}55`, color: "#E06060", fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${RED}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      <div style={{ background: DARK_RED, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#ffe8e8", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "I have been a slave of the grape and the morning breeze, of the beloved's eyebrow and the stranger's face." — Rudaki, Father of Persian Poetry, born in Tajikistan
        </p>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>
        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eef0ec", marginBottom: 14 }}>The Persian Soul of Central Asia</h2>
            <p style={{ fontSize: "1.05rem", color: "#20180c", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Tajikistan is the smallest, poorest, and highest of the Central Asian republics — and in many ways the most ancient. While Turkic empires rose and fell around them, the Tajik-speaking people of the valleys and cities maintained a Persian literary and intellectual tradition stretching back more than a thousand years. They were robbed of their greatest cities by Soviet mapmaking, devastated by a civil war the world ignored, and confined to a landscape so mountainous that half the country is barely accessible. They endure. The poetry endures with them.
            </p>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #1a0c00, ${MID})`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>✍</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0d890", fontSize: "1.2rem", marginTop: 0 }}>Rudaki — The Father of Persian Poetry</h3>
              <p style={{ color: "#5a4010", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Abu Abdollah Rudaki (858–941 AD) was born in Panjrud, a village in the Zarafshan Valley of what is now Tajikistan. He is considered the father of Persian literature — the first great poet to write in New Persian, establishing its conventions and proving its expressive range. He worked at the Samanid court in Bukhara and is said to have been blind. Of the hundreds of thousands of lines he reportedly wrote, only about a thousand survive. Yet those surviving lines — sensual, melancholic, philosophically rich — established a tradition that produced Rumi, Hafez, and Khayyam. The father of one of the world's great literary traditions was born in a Tajik valley.
              </p>
            </div>
          </div>
        </AnimCard>

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

        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${RED}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Tajikistan in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "93%", l: "Of Tajikistan covered by mountains" },
                { n: "7,495m", l: "Ismoil Somoni Peak — highest in former USSR" },
                { n: "77 km", l: "Fedchenko Glacier — longest outside polar regions" },
                { n: "100K", l: "People killed in the civil war (1992–97)" },
                { n: "1,000", l: "Surviving lines of Rudaki's poetry — from hundreds of thousands written" },
                { n: "335m", l: "Planned height of Rogun Dam — to be world's tallest" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: RED, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#1a1008", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

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

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100408, ${MID})`, border: `1px solid #7B1C1C44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>💍</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0b0c0", fontSize: "1.2rem", marginTop: 0 }}>Alexander the Great Married a Tajik Woman</h3>
              <p style={{ color: "#5a1828", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                When Alexander the Great crossed the Oxus River in 329 BC, he met Roxana, daughter of the Bactrian nobleman Oxyartes. He married her — his first wife and the mother of Alexander IV, heir to his empire. Roxana was from the region of Bactria, corresponding to northern Afghanistan and southern Tajikistan. The conqueror of the ancient world fell in love in what is now one of the world's poorest and most remote countries. Their son was murdered at age 14, before he could inherit anything. The story of Roxana is among the most poignant in ancient history.
              </p>
            </div>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #081008, ${MID})`, border: `1px solid ${GREEN}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🛣</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#a0d0a0", fontSize: "1.2rem", marginTop: 0 }}>The Pamir Highway — The World's Second Highest Road</h3>
              <p style={{ color: "#204020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                The M41 highway — the Pamir Highway — runs from Dushanbe across the Pamir plateau to Osh in Kyrgyzstan, reaching altitudes of over 4,600 metres. Built by the Soviets as a military supply route, it is one of the world's great road journeys and one of its most demanding. For much of the year, snow closes mountain passes. Villages along the route are accessible only by this road — or not at all. The communities it serves — Pamiri, Ismaili, speaking languages spoken by tens of thousands — exist in near-total isolation from the modern world. The highway connects them to it, barely, at 4,000 metres above sea level.
              </p>
            </div>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100004, #080a08)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <CrownIcon />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#eef0ec", marginTop: 18 }}>The Mountains Remember Everything</h2>
            <p style={{ color: "#18100a", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Tajikistan is the country the 20th century happened to most and noticed least. Its greatest cities were taken by a Soviet mapmaker. Its civil war killed a hundred thousand people and made barely a headline in the West. Its mountains contain glaciers longer than some countries. Its people carry one of the world's oldest literary traditions in a language spoken without interruption since before the Islamic conquest. Rudaki's surviving lines — sensual, philosophical, heartbroken — were written in a Tajik valley more than a thousand years ago. They still sound like they were written yesterday. That is what the mountains do. They keep things.
            </p>
            <div style={{ width: 50, height: 1, background: RED, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      <div style={{ background: "#060806", borderTop: `3px solid ${RED}`, borderBottom: `2px solid ${GREEN}44`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#0e0808", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          TAJIK SSR · 1929–1991 · DUSHANBE · ТОҶИКИСТОН ССР
        </p>
      </div>
    </div>
  );
}
