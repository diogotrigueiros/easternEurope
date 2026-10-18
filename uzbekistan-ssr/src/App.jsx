import { useState, useEffect, useRef } from "react";

const BLUE = "#1EB2C8";
const DARK_BLUE = "#0E7A8A";
const WHITE = "#F0F4F0";
const GREEN = "#1DAA5A";
const DARK_GREEN = "#0E7A3A";
const GOLD = "#C8900A";
const LIGHT_GOLD = "#E8B030";
const TURQUOISE = "#00B4C8";
const DARK = "#080c0a";
const MID = "#0c1210";
const CARD = "#101814";
const SAND = "#8A7040";

const sections = [
  {
    id: "samarkand",
    title: "Samarkand — Jewel of the Ancient World",
    subtitle: "The City Alexander the Great Called the Most Beautiful",
    icon: "🕌",
    color: "#1EB2C8",
    year: "329 BC–present",
    content: `Samarkand is one of the oldest continuously inhabited cities on Earth — settled for at least 2,700 years, conquered by Alexander the Great in 329 BC (who called it "everything I had heard about it was true, except that it is even more beautiful than I imagined"), and transformed by Timur in the 14th century into the most dazzling capital in Central Asia. The Registan — three monumental madrassas surrounding a central square — is one of the most magnificent architectural ensembles ever built. The Gur-e-Amir mausoleum holds Timur himself. The Shah-i-Zinda necropolis is a corridor of turquoise-domed tombs that seem to defy the desert around them. Samarkand's tile-work — intricate geometric mosaics in cobalt, turquoise, and gold — represents a summit of human decorative art that the world has never surpassed.`,
    facts: [
      "Continuously inhabited for at least 2,700 years",
      "Alexander the Great conquered it in 329 BC and called it the most beautiful city he had seen",
      "The Registan is considered one of the world's greatest architectural ensembles",
      "Timur (Tamerlane) made it the capital of his vast empire in the 14th century",
    ],
  },
  {
    id: "timurid",
    title: "The Timurid Renaissance",
    subtitle: "When Central Asia Led the World in Science and Art",
    icon: "⭐",
    color: "#C8900A",
    year: "1370–1507",
    content: `The Timurid dynasty that ruled from Samarkand produced one of history's most extraordinary cultural flowerings. Timur himself — conqueror, builder, patron — assembled the greatest craftsmen, scholars, and poets from across his empire in Samarkand. His grandson Ulugh Beg built the most accurate observatory of the pre-telescopic age, calculated the length of the solar year to within one minute of modern measurements in the 15th century, and compiled star catalogues used by astronomers for centuries. Ali-Shir Navai, poet and statesman, wrote in Chagatai Turkic and argued that Turkic was a richer literary language than Persian — founding a tradition that influenced Ottoman, Uzbek, and Uyghur literature for five centuries. The Timurid court at Herat was the intellectual capital of the Islamic world.`,
    facts: [
      "Ulugh Beg's 15th-century observatory calculated the solar year to within 58 seconds",
      "Timur assembled craftsmen from across the Islamic world to build Samarkand",
      "Ali-Shir Navai established Chagatai Turkic as a major literary language",
      "Timurid miniature painting is among the greatest in the Islamic tradition",
    ],
  },
  {
    id: "silk-road",
    title: "Heart of the Silk Road",
    subtitle: "Where East and West Exchanged Everything",
    icon: "🐪",
    color: "#8A7040",
    year: "2nd c. BC–15th c. AD",
    content: `Uzbekistan was not merely on the Silk Road — it was its beating heart. The great cities of Samarkand, Bukhara, and Khiva were the essential waypoints where caravans rested, traded, and exchanged not just silk but paper, gunpowder, mathematics, astronomy, religion, and disease. Bukhara was one of the Islamic world's greatest centres of learning — at its peak it had over 100 madrassas and was called the "Dome of Islam." The scholar Ibn Sina (Avicenna), born near Bukhara in 980 AD, wrote the Canon of Medicine — the foundational medical textbook of the Islamic world and of European medicine for five centuries. Al-Khwarizmi, born in the Khwarazm region of modern Uzbekistan, invented algebra and gave his name to the algorithm. Muhammad al-Bukhari, compiler of the most authoritative collection of hadith in Sunni Islam, was born in Bukhara.`,
    facts: [
      "Ibn Sina (Avicenna) born near Bukhara — his Canon of Medicine used in Europe for 500 years",
      "Al-Khwarizmi invented algebra — the word algorithm comes from his name",
      "Muhammad al-Bukhari compiled the most authoritative Sunni hadith collection",
      "Bukhara had over 100 madrassas at its peak — the Dome of Islam",
    ],
  },
  {
    id: "cotton",
    title: "The White Gold Catastrophe",
    subtitle: "How Soviet Cotton Killed the Aral Sea",
    icon: "🌾",
    color: "#7B1C1C",
    year: "1950s–present",
    content: `The Soviet Union's drive to make Uzbekistan the primary cotton producer for the entire bloc caused one of the greatest environmental catastrophes in human history. The Aral Sea — once the world's fourth-largest lake — was drained by the diversion of the Amu Darya and Syr Darya rivers to irrigate cotton fields across the Uzbek steppe. By the 1980s the sea had lost 60% of its volume. By the 2000s it had effectively split into remnants. The former seabed is now a salt desert called the Aralkum — from which toxic dust storms carry salt, pesticides, and fertiliser residue across the region, causing respiratory diseases, infant mortality spikes, and agricultural collapse. The fishing fleets of the Aral Sea sit rusting in sand, kilometres from any water. It is one of the most visible man-made disasters visible from space.`,
    facts: [
      "The Aral Sea was once the world's fourth-largest lake — now largely a desert",
      "Soviet cotton irrigation diverted the two rivers that fed it",
      "Former fishing boats now sit in sand dozens of kilometres from water",
      "The Aralkum salt desert sends toxic dust storms across the region",
    ],
  },
  {
    id: "soviet",
    title: "The Uzbek SSR",
    subtitle: "Central Asia's Largest Soviet Republic",
    icon: "🏛",
    color: "#1DAA5A",
    year: "1924–1991",
    content: `The Uzbek SSR, established in 1924, was the largest and most populous of the Central Asian Soviet republics. Tashkent — rebuilt after a devastating 1966 earthquake with Soviet-wide support — became the fourth-largest city in the USSR and the cultural capital of Soviet Central Asia. The republic developed significant industrial capacity, a world-class academic system, and one of the Soviet Union's largest cotton economies. Soviet archaeologists also conducted extraordinary work excavating Silk Road cities. The 1966 Tashkent earthquake was a pivotal moment: the entire Soviet Union sent workers and materials to rebuild, and Tashkent emerged as a modern Soviet showpiece city — with wide boulevards, a metro system, and monumental architecture alongside its ancient legacy.`,
    facts: [
      "Uzbek SSR was the most populous Central Asian Soviet republic",
      "The 1966 Tashkent earthquake was answered by all-Union reconstruction effort",
      "Tashkent became the fourth-largest city in the USSR",
      "Soviet archaeologists uncovered major Silk Road sites across the republic",
    ],
  },
  {
    id: "bukhara-khiva",
    title: "Bukhara & Khiva",
    subtitle: "Two Cities Frozen in Turquoise and Time",
    icon: "🏰",
    color: "#1EB2C8",
    year: "Ancient–present",
    content: `If Samarkand is the crown jewel of Uzbek civilisation, Bukhara and Khiva are its hidden chambers. Bukhara — with its Kalon minaret, its Ark citadel, and its labyrinthine old city — was the last emirate to resist Soviet power, falling only in 1920. The last Emir of Bukhara fled to Afghanistan and lived in exile in Kabul until his death. Khiva, even more intact, is an entire ancient city preserved almost without modern intrusion — its inner city Ichan Kala is a UNESCO World Heritage Site that visitors describe as entering a portal to the medieval Islamic world. The Khivan khans maintained their state until 1920, a direct continuation of a political entity stretching back centuries. Genghis Khan specifically ordered the Kalon minaret in Bukhara spared — the only structure he preserved in his destruction of the city.`,
    facts: [
      "The Emir of Bukhara fled to Afghanistan when Soviet forces arrived in 1920",
      "Khiva's Ichan Kala is one of the best-preserved medieval Islamic urban environments",
      "Genghis Khan spared the Kalon minaret — the only structure he ordered preserved",
      "Khiva's Khan palace complex is a direct continuation of a centuries-old tradition",
    ],
  },
  {
    id: "karimov",
    title: "Karimov & the Post-Soviet Freeze",
    subtitle: "25 Years Under One Man",
    icon: "🔒",
    color: "#546E7A",
    year: "1991–2016",
    content: `Islam Karimov ruled Uzbekistan from 1989 — first as Communist Party First Secretary, then as president — until his death in 2016, making him one of the longest-serving and most repressive leaders in post-Soviet history. He extended his rule through referendums that abolished term limits, suppressed all political opposition, and used the security services against dissidents with a ferocity that appalled international observers. The 2005 Andijan massacre — in which government troops opened fire on a crowd of protesters, killing hundreds — was among the worst atrocities in post-Soviet Central Asia. Yet Karimov also maintained Uzbekistan's independence from Russian domination and pursued a strictly neutral foreign policy. His successor Shavkat Mirziyoyev has cautiously opened the country and released political prisoners.`,
    facts: [
      "Karimov ruled for 27 years — from Soviet era to death in office in 2016",
      "The 2005 Andijan massacre killed hundreds — exact toll was suppressed",
      "Karimov extended presidential terms through referendums abolishing term limits",
      "Mirziyoyev has released political prisoners and opened the economy since 2016",
    ],
  },
  {
    id: "culture",
    title: "Plov, Suzani & the Sound of the Dutar",
    subtitle: "A Culture Where Hospitality Is Sacred Law",
    icon: "🎶",
    color: "#6A1B9A",
    year: "Ancient–present",
    content: `Uzbek culture is built around the table. Plov — a rice dish cooked with lamb, onions, carrots, and chickpeas in a massive cast-iron kazan — is the national dish, the ceremonial food, the celebration food, the everyday food. Samarkand plov, Tashkent plov, and Fergana plov are distinct traditions whose differences Uzbeks debate with the intensity of French arguments about wine. Suzani — large embroidered textiles made by brides as dowries — are among the most beautiful textile traditions in Central Asia. The dutar (two-stringed lute) and doira (frame drum) anchor the classical shashmaqam musical tradition, another UNESCO-recognised art form. Uzbek hospitality is not merely a custom — it is a moral obligation embedded in the culture at its deepest level.`,
    facts: [
      "Plov is UNESCO Intangible Cultural Heritage — Uzbekistan consumes 70kg of rice per person annually",
      "Uzbek shashmaqam classical music is UNESCO-recognised",
      "Suzani embroideries were created by brides as dowries — took years to complete",
      "Uzbekistan has the most UNESCO World Heritage Sites in Central Asia",
    ],
  },
];

const timeline = [
  { year: "700 BC", event: "Sogdian civilisation flourishes — Samarkand established" },
  { year: "329 BC", event: "Alexander the Great conquers Samarkand" },
  { year: "712 AD", event: "Arab conquest brings Islam to Central Asia" },
  { year: 819, event: "Samanid dynasty — first major Persian renaissance in Central Asia" },
  { year: 980, event: "Ibn Sina (Avicenna) born near Bukhara" },
  { year: 1220, event: "Genghis Khan destroys Samarkand and Bukhara" },
  { year: 1370, event: "Timur (Tamerlane) founds his empire from Samarkand" },
  { year: 1409, event: "Ulugh Beg begins construction of his great observatory" },
  { year: 1500, event: "Shaybani Khan and the Uzbek tribes conquer the region" },
  { year: 1866, event: "Russian Empire begins conquest of Central Asian khanates" },
  { year: 1920, event: "Red Army takes Bukhara; Uzbek Soviet Republic established" },
  { year: 1924, event: "Uzbek SSR formally established" },
  { year: 1936, event: "Stalin redraws Central Asian borders — Fergana Valley divided" },
  { year: 1950, event: "Cotton monoculture imposed; Aral Sea diversion begins" },
  { year: 1966, event: "Tashkent earthquake — rebuilt with all-Union help" },
  { year: 1989, event: "Fergana Valley ethnic violence; Karimov takes power" },
  { year: 1991, event: "Uzbekistan declares independence — 1 September" },
  { year: 2005, event: "Andijan massacre — hundreds killed by government forces" },
  { year: 2016, event: "Karimov dies; Mirziyoyev begins cautious opening" },
  { year: 2022, event: "Uzbekistan signs major tourism and investment agreements with EU" },
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
              <h3 style={{ margin: 0, color: "#eef2f0", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#354840", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0bab4", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#080c0a", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#608070", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${TURQUOISE}, ${GOLD}, ${GREEN})` }} />
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
            background: i % 3 === 0 ? TURQUOISE : i % 3 === 1 ? GOLD : GREEN,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: 12, minWidth: 50, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#607870", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
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
        overflow: "hidden", boxShadow: `0 0 50px ${TURQUOISE}44`,
        display: "flex", flexDirection: "column", height: 80, position: "relative"
      }}>
        <div style={{ flex: 1, background: TURQUOISE }} />
        <div style={{ height: 6, background: WHITE }} />
        <div style={{ flex: 1.4, background: WHITE, display: "flex", alignItems: "center", paddingLeft: 12, gap: 6 }}>
          <svg width="50" height="30" viewBox="0 0 50 30">
            <circle cx="12" cy="15" r="10" fill={TURQUOISE} />
            <circle cx="16" cy="15" r="7.5" fill={WHITE} />
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 - 60) * Math.PI / 180;
              const x = 32 + 14 * Math.cos(angle);
              const y = 15 + 14 * Math.sin(angle);
              return <circle key={i} cx={x} cy={y} r="1.8" fill={TURQUOISE} />;
            })}
          </svg>
        </div>
        <div style={{ height: 6, background: WHITE }} />
        <div style={{ flex: 1, background: GREEN }} />
      </div>
    </div>
  );
}

function ArchSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 200, opacity: 0.07 }} viewBox="0 0 900 200" preserveAspectRatio="none">
      {[80, 250, 450, 650, 820].map((x, i) => (
        <g key={i} transform={`translate(${x}, 0)`}>
          <ellipse cx="40" cy="130" rx="40" ry="50" fill={TURQUOISE} />
          <rect x="0" y="80" width="10" height="120" fill={TURQUOISE} />
          <ellipse cx="5" cy="78" rx="6" ry="12" fill={TURQUOISE} />
          <rect x="70" y="80" width="10" height="120" fill={TURQUOISE} />
          <ellipse cx="75" cy="78" rx="6" ry="12" fill={TURQUOISE} />
          <rect x="15" y="120" width="50" height="80" fill={TURQUOISE} opacity="0.7" />
        </g>
      ))}
      <rect x="0" y="185" width="900" height="15" fill={SAND} opacity="0.4" />
    </svg>
  );
}

function StarCrescent() {
  return (
    <svg width="58" height="52" viewBox="0 0 58 52" style={{ display: "block", margin: "0 auto" }}>
      <path d="M14 26 Q14 8 28 4 Q10 6 8 26 Q10 46 28 48 Q14 44 14 26Z" fill={TURQUOISE} opacity="0.9" />
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x = 40 + 16 * Math.cos(angle);
        const y = 26 + 16 * Math.sin(angle);
        return <circle key={i} cx={x} cy={y} r="2.5" fill={GOLD} opacity="0.9" />;
      })}
      <circle cx="40" cy="26" r="5" fill={TURQUOISE} opacity="0.4" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd4cc" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 38%, #001a14 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: TURQUOISE }} />
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 3, background: WHITE }} />
        <div style={{ position: "absolute", top: 7, left: 0, right: 0, height: 4, background: GREEN }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: TURQUOISE }} />
        <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 3, background: WHITE }} />
        <div style={{ position: "absolute", bottom: 7, left: 0, right: 0, height: 4, background: GREEN }} />
        <ArchSilhouette />
        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <StarCrescent />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Uzbekiston Sovet Sotsialistik Respublikasi
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f5f2ee",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${TURQUOISE}44`,
          }}>
            The Uzbek<br /><span style={{ color: TURQUOISE }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#1a3028", lineHeight: 1.8, fontStyle: "italic" }}>
            The land where algebra was invented, where the most beautiful buildings in the world were raised in turquoise tile, where the Silk Road had its heart — and where Soviet cotton killed one of Earth's great lakes.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1924–1991", "Tashkent", "20M population", "Central Asia"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${TURQUOISE}55`, color: BLUE, fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${TURQUOISE}, transparent)`, margin: "0 auto", animation: "pulse 2s infinite" }} />
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      </div>

      <div style={{ background: `linear-gradient(90deg, ${DARK_BLUE}, ${DARK_GREEN})`, padding: "26px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#e0f8f0", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "Everything I had heard about Samarkand was true, except that it is even more beautiful than I imagined." — Alexander the Great, 329 BC
        </p>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>
        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eef2f0", marginBottom: 14 }}>The Land Where Civilisation Passed Through Everything</h2>
            <p style={{ fontSize: "1.05rem", color: "#162820", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Uzbekistan gave the world algebra, the algorithm, the foundational texts of Islamic medicine, and the most magnificent Islamic architecture ever built. It was the crossroads through which Chinese silk, Indian spices, Greek philosophy, and Arab mathematics all passed and mixed. The Soviet chapter was extraordinary in its contradictions — building universities and destroying a sea, preserving ancient cities and erasing ancient ways of life.
            </p>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #001814, ${MID})`, border: `1px solid ${TURQUOISE}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>🕌</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0e0e0", fontSize: "1.2rem", marginTop: 0 }}>The Registan — The Most Beautiful Square in the World</h3>
              <p style={{ color: "#1a4838", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                In the 14th and 15th centuries, Samarkand's rulers assembled a square flanked by three monumental madrassas covered in tilework of extraordinary intricacy: deep cobalt blue, turquoise, gold, and white geometric patterns that expand infinitely the longer you look at them. Lord Curzon, British Viceroy of India, visited in 1888 and called it "the noblest public square in the world." Soviet archaeologists and restorers spent decades carefully preserving it. It is arguably the finest piece of public architecture in human history — and it is in Uzbekistan.
              </p>
            </div>
          </div>
        </AnimCard>

        <div style={{ marginBottom: 56 }}>
          <AnimCard>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${TURQUOISE}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Key Chapters</h2>
              <div style={{ flex: 1, height: 1, background: `${TURQUOISE}44` }} />
            </div>
          </AnimCard>
          {sections.map((s, i) => <SectionCard key={s.id} s={s} index={i} />)}
        </div>

        <AnimCard>
          <div style={{ background: CARD, border: `1px solid ${TURQUOISE}28`, borderRadius: 3, padding: "32px 24px", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Uzbekistan in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "2,700", l: "Years Samarkand has been continuously inhabited" },
                { n: "500yrs", l: "Ibn Sina's Canon of Medicine used in European universities" },
                { n: "90%", l: "Of the Aral Sea's volume lost to cotton irrigation" },
                { n: "100+", l: "Madrassas in medieval Bukhara — the Dome of Islam" },
                { n: "20M", l: "Population of the Uzbek SSR at independence" },
                { n: "1220", l: "Year Genghis Khan destroyed Samarkand — and spared one minaret" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: TURQUOISE, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#142820", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ flex: 1, height: 1, background: `${TURQUOISE}44` }} />
              <h2 style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: "0.82rem", letterSpacing: "0.22em", margin: 0, textTransform: "uppercase" }}>Timeline</h2>
              <div style={{ flex: 1, height: 1, background: `${TURQUOISE}44` }} />
            </div>
            <Timeline />
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #100008, ${MID})`, border: `1px solid #7B1C1C44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🚢</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0b0b0", fontSize: "1.2rem", marginTop: 0 }}>The Ships of the Desert — Moynaq's Rusting Fleet</h3>
              <p style={{ color: "#5a2020", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                The town of Moynaq in northwestern Uzbekistan was once a thriving fishing port on the Aral Sea. Today it sits in the middle of a salt desert, kilometres from any water. Its ship graveyard — rusting hulls of fishing trawlers lying on cracked sand — is one of the most haunting images of the 20th century. The people of Moynaq went to bed beside a lake and woke up in a desert over the course of a few decades. Respiratory diseases, cancer, and infant mortality in the region remain significantly elevated from the toxic dust that blows off the former seabed. The Soviet cotton machine demanded the water; the sea paid the price.
              </p>
            </div>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0c1008, ${MID})`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🍚</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f0d890", fontSize: "1.2rem", marginTop: 0 }}>Plov — The Dish That Feeds Nations</h3>
              <p style={{ color: "#5a4010", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                In 2016, a single plov was cooked in Tashkent using 2,500 kg of rice, 1,000 kg of lamb, 500 kg of carrots, and 200 kg of onions, feeding 20,000 people from a single kazan. Plov in Uzbekistan is not merely food — it is ceremony, community, celebration, and identity. A proper Uzbek wedding requires plov. A proper farewell requires plov. A proper reconciliation requires plov. Uzbekistan consumes more rice per capita than almost any non-Asian country, almost entirely in the form of plov. The UNESCO inscription in 2016 noted that the dish functions as a social glue binding Uzbek communities together.
              </p>
            </div>
          </div>
        </AnimCard>

        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #001410, #080c0a)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <StarCrescent />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#eef2f0", marginTop: 18 }}>The Turquoise Heart of the World</h2>
            <p style={{ color: "#162820", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Uzbekistan invented algebra, gave us Avicenna, built the Registan, fed the Silk Road for a thousand years — and then watched Soviet cotton drain one of the world's great lakes to dust. The Soviet chapter added literacy and industry and removed the Aral Sea. The cities of Samarkand, Bukhara, and Khiva endured everything: Mongol destruction, Soviet collectivisation, post-Soviet neglect — and they still stand, turquoise-domed against the Central Asian sky, as extraordinary as when Alexander first saw them and forgot, briefly, that he was supposed to be conquering.
            </p>
            <div style={{ width: 50, height: 1, background: TURQUOISE, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      <div style={{ background: "#060a08", borderTop: `3px solid ${TURQUOISE}`, borderBottom: `2px solid ${GREEN}44`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#0e2018", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          UZBEK SSR · 1924–1991 · TASHKENT · O'ZBEKISTON SSR
        </p>
      </div>
    </div>
  );
}
