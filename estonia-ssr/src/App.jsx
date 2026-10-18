import { useState, useEffect, useRef } from "react";

const BLUE = "#005AA4";
const LIGHT_BLUE = "#1976D2";
const BLACK = "#1a1a1a";
const WHITE_TINT = "#F0F4F8";
const FOREST = "#2E5339";
const GOLD = "#A0845C";
const LIGHT_GOLD = "#C4A97D";
const DARK = "#08090c";
const MID = "#0d0f14";
const CARD = "#121520";

const sections = [
  {
    id: "singing",
    title: "The Singing Revolution",
    subtitle: "Freedom Carried on Five-Part Harmony",
    icon: "🎵",
    color: "#005AA4",
    year: "1987–1991",
    content: `Estonia's path to independence was sung. The Singing Revolution — a term coined by activist and filmmaker Jaan Sarv — describes the series of mass song gatherings that galvanised Estonian national consciousness against Soviet rule from 1987 onward. The tradition had deep roots: the Estonian Song Festival, held every five years since 1869, had always been more than music — it was an act of collective identity under foreign rule. In September 1988, 300,000 people — a quarter of Estonia's entire population — gathered at the Tallinn Song Festival Grounds for a spontaneous night of national songs. They sang forbidden songs, waved forbidden flags, and demanded freedom. It was the largest gathering in Estonian history, and it was peaceful. Three years later, they were free.`,
    facts: [
      "300,000 people — one quarter of Estonia's population — gathered in 1988",
      "The Song Festival tradition dates unbroken to 1869",
      "Forbidden Soviet-era songs and blue-black-white flags were openly displayed",
      "The term 'Singing Revolution' has since been applied to all three Baltic states",
    ],
  },
  {
    id: "occupation",
    title: "Occupation & Deportations",
    subtitle: "The Years the World Refused to Recognise",
    icon: "🚂",
    color: "#7B1C1C",
    year: "1940–1991",
    content: `Estonia was occupied by the Soviet Union in June 1940 under the secret Molotov-Ribbentrop Pact, which had assigned the Baltic states to the Soviet sphere of influence. The US, UK, and most Western nations never formally recognised the annexation — a diplomatic stance maintained for 51 years. On the night of 14 June 1941, the Soviets deported over 10,000 Estonians to Siberia in a single operation — families torn apart, loaded into cattle cars, sent to labour camps and special settlements in which thousands died. A second wave of deportations in March 1949 sent another 21,000 Estonians east. The deportations targeted the educated class, landowners, military officers, and anyone deemed a threat — systematically decapitating Estonian society.`,
    facts: [
      "The West never formally recognised the Soviet annexation for 51 years",
      "14 June 1941: 10,000+ Estonians deported to Siberia in one night",
      "March 1949: another 21,000 deported — the largest single deportation",
      "Deportees faced Siberian labour camps; thousands did not survive",
    ],
  },
  {
    id: "baltic-way",
    title: "The Baltic Way",
    subtitle: "Two Million Hands Across Three Nations",
    icon: "🤝",
    color: "#2E5339",
    year: "23 Aug 1989",
    content: `On 23 August 1989 — the 50th anniversary of the Molotov-Ribbentrop Pact — approximately two million people joined hands to form a human chain stretching 675 kilometres through Estonia, Latvia, and Lithuania. From Tallinn to Riga to Vilnius, the chain passed through cities, forests, and farmland. People stood in fields, on road shoulders, on bridges, linking hands with strangers for fifteen minutes in complete silence before the singing began. It was the largest political demonstration in the history of the Soviet Union, and one of the most extraordinary acts of collective peaceful protest in human history. The image — a living line of people across three countries — was broadcast around the world and proved impossible to ignore.`,
    facts: [
      "675 km of unbroken human chain across three countries",
      "~2 million participants — roughly the population of all three capitals combined",
      "Held on the exact 50th anniversary of the Molotov-Ribbentrop Pact",
      "Widely considered the most powerful peaceful protest of the 20th century",
    ],
  },
  {
    id: "digital",
    title: "Digital Pioneer",
    subtitle: "From Soviet Republic to the World's Most Digital Nation",
    icon: "💻",
    color: "#1565C0",
    year: "1991–present",
    content: `Perhaps no nation has reinvented itself more dramatically after independence than Estonia. From the ruins of a Soviet planned economy, Estonia built the world's most digitally advanced state. By the 2000s, Estonians could vote online, file taxes in 3 minutes, sign legally binding documents digitally, and access virtually every government service via a secure digital identity card. Skype was built by Estonians. Transferwise (now Wise) was founded by Estonians. The concept of e-Residency — allowing anyone in the world to start an EU-registered company digitally — was an Estonian invention. NATO's Cooperative Cyber Defence Centre of Excellence is headquartered in Tallinn. Estonia went from Soviet backwater to global model of digital governance in under 30 years.`,
    facts: [
      "Skype was built in Estonia and launched in 2003",
      "Estonia introduced online voting in 2005 — a world first",
      "NATO's Cyber Defence Centre of Excellence is in Tallinn",
      "Estonia's e-Residency programme has 100,000+ members from 170 countries",
    ],
  },
  {
    id: "culture",
    title: "Language, Song & Runo",
    subtitle: "A Language That Survived Everything",
    icon: "📖",
    color: "#5D4037",
    year: "Ancient–present",
    content: `Estonian belongs to the Finno-Ugric language family — making it more closely related to Finnish and Hungarian than to any of its neighbours. It has no Indo-European roots whatsoever, which makes it one of the most distinct languages in Europe. The Kalevipoeg — Estonia's national epic, compiled by Friedrich Reinhold Kreutzwald in the 19th century — gave the Estonian people a literary mythology equivalent to Finland's Kalevala. The runic song tradition (regilaul) — ancient, hypnotic, non-rhyming folk song — is one of the oldest living musical traditions in Europe. Estonia's literacy rate was among the highest in the Russian Empire; by the Soviet era, Estonian literature, poetry, and theatre maintained a quiet resistance to Russification that never fully broke.`,
    facts: [
      "Estonian is Finno-Ugric — unrelated to Russian, Latvian, or Lithuanian",
      "The Kalevipoeg national epic was compiled in the 1850s–60s",
      "Regilaul runic songs are among the oldest living musical traditions in Europe",
      "Estonia had near-universal literacy before Soviet annexation",
    ],
  },
  {
    id: "forest-brothers",
    title: "The Forest Brothers",
    subtitle: "The Longest Armed Resistance in Europe",
    icon: "🌲",
    color: "#33691E",
    year: "1944–1978",
    content: `When the Soviets re-occupied Estonia in 1944, thousands of Estonians fled into the forests rather than submit. The metsavennad — Forest Brothers — fought a guerrilla resistance campaign against Soviet forces for decades. At their peak in the late 1940s, around 30,000 armed resisters operated across the Baltic states. The last known Estonian Forest Brother, August Sabbe, died in 1978 — drowned during a KGB ambush, having lived in the forest for 34 years. Their resistance was ultimately futile militarily, but it kept alive a flame of defiance and became a cornerstone of Baltic national identity. They fought on long after the West had accepted that the Baltic states were gone — because they had not.`,
    facts: [
      "~30,000 armed Forest Brothers at peak across the three Baltic states",
      "Resistance lasted from 1944 to 1978 — over three decades",
      "The last Estonian Forest Brother died in 1978 during a KGB ambush",
      "They expected Western military support that never came",
    ],
  },
  {
    id: "nazi",
    title: "The Nazi Occupation",
    subtitle: "Between Two Occupations",
    icon: "⚔",
    color: "#4A4A4A",
    year: "1941–1944",
    content: `Estonia's 20th century was defined by being trapped between two totalitarian powers. When Germany invaded in 1941, many Estonians initially welcomed them as liberators from Soviet rule — only to find a different kind of terror. Estonia's Jewish community of around 4,500 people was almost entirely annihilated — Estonia was declared Judenfrei (Jew-free) by the Wannsee Conference by January 1942, making it one of the first occupied territories to reach that designation. Estonian units served in both the Wehrmacht and the Waffen-SS, a deeply contested historical legacy. By 1944 Estonia was once again caught between the retreating Germans and the advancing Soviets — and chose Soviet "liberation" only because it promised national survival, however diminished.`,
    facts: [
      "Estonia's Jewish community was almost entirely murdered under Nazi rule",
      "Estonia was declared 'Judenfrei' by January 1942 at Wannsee",
      "Many Estonians initially welcomed Germans as relief from Soviet occupation",
      "Estonian units served on both the German and Soviet sides of WWII",
    ],
  },
  {
    id: "independence",
    title: "Restoration of Independence",
    subtitle: "The Country That Legally Never Ceased to Exist",
    icon: "🦅",
    color: "#005AA4",
    year: "1991",
    content: `Estonia's independence in 1991 was technically a restoration, not a declaration — because the West had never recognised the Soviet annexation, Estonia's pre-war legal continuity had been maintained. Estonian diplomatic missions in some countries had remained open throughout the occupation. On 20 August 1991, during the failed Moscow coup against Gorbachev, the Estonian Supreme Council voted to fully restore independence. Within days, Iceland became the first nation to recognise it; within weeks, most of the world followed. Estonia joined NATO and the EU in 2004 — completing the fastest and most comprehensive transformation of any post-Soviet state. Today it consistently ranks among the world's freest, most innovative, and most digitally advanced nations.`,
    facts: [
      "Independence was a legal restoration — not a new declaration",
      "Estonian embassies in some countries had operated throughout Soviet occupation",
      "Iceland was the first nation to recognise restored independence",
      "Estonia joined both NATO and the EU in 2004",
    ],
  },
];

const timeline = [
  { year: "13th c.", event: "Crusader conquest; Estonia divided between Denmark and Teutonic Order" },
  { year: 1561, event: "Northern Estonia comes under Swedish rule — a relatively benign era" },
  { year: 1710, event: "Russian Empire absorbs Estonia during Great Northern War" },
  { year: 1819, event: "Serfdom abolished in Estonia — decades before Russia proper" },
  { year: 1869, event: "First Estonian Song Festival held in Tartu" },
  { year: 1918, event: "Estonian Declaration of Independence — 24 February" },
  { year: 1920, event: "Treaty of Tartu: Soviet Russia recognises Estonian independence" },
  { year: 1939, event: "Molotov-Ribbentrop Pact secretly assigns Estonia to the USSR" },
  { year: 1940, event: "Soviet occupation; Estonian SSR established" },
  { year: 1941, event: "Mass deportations of 14 June; Nazi Germany then occupies Estonia" },
  { year: 1944, event: "Soviet re-occupation; Forest Brothers begin armed resistance" },
  { year: 1949, event: "Second mass deportation — 21,000 Estonians sent to Siberia" },
  { year: 1969, event: "Song Festival held; subtle national resistance through music" },
  { year: 1978, event: "Last Forest Brother August Sabbe dies in KGB ambush" },
  { year: 1987, event: "Phosphorite War — first major public environmental protest" },
  { year: 1988, event: "300,000 gather at the Tallinn Song Festival Grounds" },
  { year: 1989, event: "Baltic Way — 675 km human chain" },
  { year: 1991, event: "Independence restored on 20 August" },
  { year: 2003, event: "Skype launched — built by Estonians" },
  { year: 2004, event: "Estonia joins NATO and the European Union" },
  { year: 2007, event: "First country to experience a state-level cyber attack (from Russia)" },
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
              <h3 style={{ margin: 0, color: "#e8ecf4", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#445566", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b0b8cc", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#080a10", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#7888aa", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${BLUE}, ${FOREST}, ${BLUE})` }} />
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
            background: i % 3 === 0 ? BLUE : i % 3 === 1 ? FOREST : GOLD,
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
  // Estonian flag: blue, black, white horizontal stripes
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{
        width: "100%", border: `2px solid ${GOLD}44`, borderRadius: 2,
        overflow: "hidden", boxShadow: `0 0 50px ${BLUE}55`,
        display: "flex", flexDirection: "column", height: 80
      }}>
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: "#111111" }} />
        <div style={{ flex: 1, background: "#E8E8E8" }} />
      </div>
    </div>
  );
}

function ForestSilhouette() {
  return (
    <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: 180, opacity: 0.07 }} viewBox="0 0 900 180" preserveAspectRatio="none">
      {[...Array(22)].map((_, i) => {
        const x = i * 42;
        const h = 70 + Math.sin(i * 1.7) * 40;
        const w = 24 + Math.sin(i * 2.3) * 10;
        return (
          <g key={i}>
            <polygon points={`${x + w / 2},${180 - h} ${x},180 ${x + w},180`} fill={FOREST} />
            <polygon points={`${x + w / 2},${180 - h * 0.7} ${x - 6},180 ${x + w + 6},180`} fill={FOREST} opacity="0.6" />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#ccd4e0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 35%, #00091a 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 4, background: "#111" }} />
        <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 4, background: "#ddd" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 4, background: "#111" }} />
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, height: 4, background: "#ddd" }} />

        <ForestSilhouette />

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>

          {/* Swallow — Estonia's national bird */}
          <svg width="60" height="40" viewBox="0 0 60 40" style={{ display: "block", margin: "0 auto" }}>
            <path d="M30 8 Q20 2 8 12 Q18 14 22 20 Q18 28 10 36 Q20 30 30 20 Q40 30 50 36 Q42 28 38 20 Q42 14 52 12 Q40 2 30 8Z" fill={BLUE} opacity="0.9" />
            <path d="M30 18 Q28 26 24 38 M30 18 Q32 26 36 38" stroke={BLUE} strokeWidth="2" fill="none" opacity="0.6" />
          </svg>

          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Eesti Nõukogude Sotsialistlik Vabariik
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f0f4f8",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${BLUE}55`,
          }}>
            The Estonian<br /><span style={{ color: LIGHT_BLUE }}>Soviet Socialist</span><br />Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#2a4060", lineHeight: 1.8, fontStyle: "italic" }}>
            The smallest republic to defy the USSR through song. The nation that never legally stopped existing. The country that went from Soviet occupation to Skype in half a century.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1940–1991", "Tallinn", "1.5M population", "Baltic Sea"].map(tag => (
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
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#ddeeff", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "We sang our way to freedom — and then we coded our way to the future."
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#e8ecf4", marginBottom: 14 }}>The Tiny Republic That Refused to Disappear</h2>
            <p style={{ fontSize: "1.05rem", color: "#283850", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              Estonia has 1.3 million people — smaller than many cities. Yet its history is outsized: a 700-year sequence of foreign dominations, a language that survived them all, a people who resisted with song when guns were impossible, and who built a digital state from scratch that the world now copies. Few countries have been tested so repeatedly and emerged so clearly themselves.
            </p>
          </div>
        </AnimCard>

        {/* Legal continuity callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #00050f, ${MID})`, border: `1px solid ${BLUE}55`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 42, lineHeight: 1 }}>📜</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0c8f0", fontSize: "1.2rem", marginTop: 0 }}>
                The Country That Legally Never Ceased to Exist
              </h3>
              <p style={{ color: "#284060", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Because the United States, United Kingdom, and most Western nations never recognised the Soviet annexation of Estonia as legitimate, Estonia maintained legal continuity throughout the occupation. The Estonian consul in New York continued to issue passports. The Estonian gold reserves, transferred to the Bank of England before the war, were frozen — not seized — and eventually returned. When Estonia restored independence in 1991, it did so as the same state that had existed since 1918, not as a new country emerging from the USSR.
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Estonia in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "300K", l: "People at the 1988 Tallinn song gathering — 25% of the nation" },
                { n: "675 km", l: "Baltic Way human chain length" },
                { n: "51 yrs", l: "Western nations refused to recognise Soviet annexation" },
                { n: "34 yrs", l: "Last Forest Brother lived in hiding" },
                { n: "3 min", l: "Time to file taxes online in Estonia" },
                { n: "2004", l: "Year Estonia joined both NATO and the EU" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: BLUE, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#1a3050", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
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

        {/* Cyber attack callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #00050f, ${MID})`, border: `1px solid #1565C055`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>🛡</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0c8f0", fontSize: "1.2rem", marginTop: 0 }}>
                2007 — The World's First State Cyber Attack
              </h3>
              <p style={{ color: "#284060", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                In April 2007, after Estonia decided to relocate a Soviet-era war memorial in Tallinn, a coordinated wave of cyberattacks knocked out Estonian government websites, banks, and media for days. It was the first time a nation-state had used cyberwarfare against another country at scale. Russia denied involvement. Estonia responded by pushing for NATO to classify cyberattacks as acts of war, and by founding the NATO Cooperative Cyber Defence Centre of Excellence in Tallinn — now the world's leading institution for cyber defence. Being attacked first made Estonia the world's foremost expert on digital defence.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #00050f, #080910)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <svg width="50" height="34" viewBox="0 0 60 40" style={{ display: "block", margin: "0 auto" }}>
              <path d="M30 8 Q20 2 8 12 Q18 14 22 20 Q18 28 10 36 Q20 30 30 20 Q40 30 50 36 Q42 28 38 20 Q42 14 52 12 Q40 2 30 8Z" fill={BLUE} opacity="0.9" />
            </svg>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#e8ecf4", marginTop: 16 }}>Small Country, Long Memory</h2>
            <p style={{ color: "#243040", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Estonia is proof that size is not destiny. With just 1.3 million people, it outlasted an empire, rebuilt itself from nothing, and became a global model for how a modern state should work. Its Soviet chapter — occupation, deportation, resistance, song — is not a footnote. It is the foundation on which everything else was built. The blue, black, and white flag that was hidden for fifty years now flies over a NATO member, an EU member, and one of the most admired democracies on Earth. The swallow always returns.
            </p>
            <div style={{ width: 50, height: 1, background: BLUE, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{ background: "#05060a", borderTop: `3px solid ${BLUE}`, borderBottom: `2px solid #222`, padding: "22px", textAlign: "center" }}>
        <p style={{ margin: 0, color: "#0e1a2a", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          ESTONIAN SSR · 1940–1991 · TALLINN · EESTI NSV
        </p>
      </div>
    </div>
  );
}
