import { useState, useEffect, useRef } from "react";

const RED = "#C62828";
const DARK_RED = "#7f0000";
const BLUE = "#1565C0";
const WHITE = "#F5F5F5";
const GOLD = "#B8860B";
const LIGHT_GOLD = "#DAA520";
const DARK = "#0a0a0c";
const MID = "#111114";
const CARD = "#16161a";

const sections = [
  {
    id: "revolution",
    title: "The Bolshevik Revolution",
    subtitle: "Ten Days That Shook the World",
    icon: "✊",
    color: "#C62828",
    year: "1917",
    content: `On the night of 25 October 1917 (Old Style), Bolshevik forces seized the Winter Palace in Petrograd and overthrew the Provisional Government. Lenin's slogan — "Peace, Land, Bread" — had mobilised soldiers exhausted by WWI, peasants starved of land, and workers ground down by 12-hour factory shifts. The October Revolution was the most consequential political event of the 20th century. It sparked a brutal civil war, inspired communist movements on every continent, and divided the world into two ideological blocs for the better part of a century. Whether viewed as liberation or catastrophe, nothing after 1917 was the same.`,
    facts: [
      "The Bolsheviks had fewer than 25,000 members at the time of the revolution",
      "The Winter Palace was taken with minimal resistance — largely mythologised later",
      "Civil War followed: 1917–1922, killing millions through combat and famine",
      "Inspired communist revolutions and movements across the entire 20th century",
    ],
  },
  {
    id: "gulag",
    title: "The Gulag System",
    subtitle: "The Archipelago of Terror",
    icon: "🧊",
    color: "#546E7A",
    year: "1918–1956",
    content: `The Soviet forced labour camp system — immortalised by Alexander Solzhenitsyn as the "Gulag Archipelago" — was one of the largest systems of mass incarceration in human history. At its peak under Stalin, the Gulag held 1.5 to 1.8 million prisoners at any one time, with an estimated 18 million passing through its camps across its existence. Prisoners built canals, railways, mines, and entire cities in the most inhospitable conditions on Earth — from the Siberian permafrost to the Arctic Circle. The camps were simultaneously a tool of political terror and a vast economic enterprise. Solzhenitsyn's account, smuggled out and published in the West, did more to delegitimise Soviet communism than almost any other single work.`,
    facts: [
      "18 million people passed through the Gulag between 1930 and 1953",
      "Prisoners built the White Sea Canal, Kolyma gold mines, and entire Arctic cities",
      "Solzhenitsyn's Gulag Archipelago was written in secret, shared by samizdat",
      "The system was never fully dismantled — it shrank but persisted past Stalin",
    ],
  },
  {
    id: "wwii",
    title: "The Great Patriotic War",
    subtitle: "The War That Defined the Nation",
    icon: "⚔",
    color: "#B71C1C",
    year: "1941–1945",
    content: `Operation Barbarossa — Germany's invasion of the Soviet Union on 22 June 1941 — launched the most destructive conflict in human history. The USSR lost an estimated 27 million people, the vast majority of any nation. Russia bore the brunt: the Siege of Leningrad lasted 872 days and killed over a million civilians. The Battle of Stalingrad — the turning point of the entire war — ended with the destruction of an entire German army. By 1945, the Red Army had fought its way from Stalingrad to Berlin. Victory Day on 9 May remains the most sacred date in the Russian calendar. The sacrifice is real, the suffering was unimaginable — and the memory has been weaponised by every Russian leader since.`,
    facts: [
      "27 million Soviet citizens killed — the highest of any nation in WWII",
      "Siege of Leningrad: 872 days; over 1 million civilians dead",
      "Stalingrad: 2 million casualties; entire German 6th Army destroyed",
      "Red Army advanced from Stalingrad to Berlin — 2,500 km in 2.5 years",
    ],
  },
  {
    id: "space",
    title: "The Space Race",
    subtitle: "First in Space, Always",
    icon: "🚀",
    color: "#1565C0",
    year: "1957–1975",
    content: `The Soviet space programme achieved a string of firsts that humankind will never forget. Sputnik (1957) was the first artificial satellite — its beep heard around the world sent the West into panic. Laika was the first living creature in orbit. Yuri Gagarin became the first human in space on 12 April 1961 — a date still celebrated in Russia as Cosmonautics Day. Valentina Tereshkova was the first woman in space. The Soviet programme achieved the first spacewalk (Leonov, 1965), the first Moon impact, the first soft landing on Venus. Though the US won the Moon race, the Soviet programme's record of firsts in the 1950s and 60s remains unmatched.`,
    facts: [
      "Sputnik 1957 — the first artificial satellite ever launched",
      "Yuri Gagarin, April 12 1961 — first human in space",
      "Valentina Tereshkova — first woman in space, 1963",
      "First spacewalk: Alexei Leonov, March 18 1965",
    ],
  },
  {
    id: "culture",
    title: "Literature, Music & the Arts",
    subtitle: "The Culture That Outlasted the State",
    icon: "📚",
    color: "#6A1B9A",
    year: "1800s–present",
    content: `Russia's cultural output is staggering by any measure. Tolstoy and Dostoevsky redefined the novel. Chekhov invented the modern short story and the modern play. Tchaikovsky, Shostakovich, Prokofiev, and Stravinsky transformed classical music. The Russian avant-garde — Kandinsky, Malevich, Rodchenko — shattered the foundations of visual art. Eisenstein invented the grammar of cinema editing. Under Stalin, socialist realism forced artists into conformity — yet even then, Shostakovich encoded dissent into symphonies, Bulgakov hid satire in manuscripts, and Pasternak wrote Doctor Zhivago in secret. The Soviet state tried to harness Russian culture; Russian culture outlasted the Soviet state.`,
    facts: [
      "Tolstoy's War and Peace is widely called the greatest novel ever written",
      "Shostakovich's 7th Symphony was broadcast during the Siege of Leningrad",
      "Eisenstein's montage theory is still the basis of film editing education",
      "Bulgakov's The Master and Margarita was published 26 years after his death",
    ],
  },
  {
    id: "cold-war",
    title: "The Cold War",
    subtitle: "Forty Years on the Brink",
    icon: "☢",
    color: "#2E7D32",
    year: "1947–1991",
    content: `From Berlin to Cuba to Vietnam to Afghanistan, the Cold War was the defining geopolitical reality of the second half of the 20th century. The USSR and USA never fired directly at each other — but came terrifyingly close during the Cuban Missile Crisis of 1962, when the world spent 13 days on the edge of nuclear annihilation. The Soviet Union maintained the world's largest nuclear arsenal, a global network of client states, and an ideology that genuinely challenged Western capitalism on every continent. The arms race consumed vast resources on both sides. The Soviet-Afghan War (1979–1989) became the USSR's Vietnam — draining treasure, morale, and lives, and accelerating the collapse.`,
    facts: [
      "Cuban Missile Crisis 1962 — the closest humanity came to nuclear war",
      "USSR maintained 40,000+ nuclear warheads at the Cold War's peak",
      "Afghanistan 1979–89 killed 15,000 Soviet soldiers and shattered morale",
      "The Berlin Wall's fall in 1989 effectively ended the Cold War",
    ],
  },
  {
    id: "collapse",
    title: "The Collapse of the USSR",
    subtitle: "The End of an Empire",
    icon: "🏛",
    color: "#4E342E",
    year: "1985–1991",
    content: `Mikhail Gorbachev came to power in 1985 intending to save the Soviet system through glasnost (openness) and perestroika (restructuring). Instead, he unleashed forces that destroyed it. Nationalist movements erupted across the republics. Chernobyl shattered the myth of Soviet competence. The Afghan war ground on. Oil prices collapsed. The economy stagnated. In 1989 the Berlin Wall fell and Eastern Europe broke free. In August 1991, hardliners staged a coup against Gorbachev — it failed within three days, but mortally wounded the state. On 25 December 1991, Gorbachev resigned and the Soviet flag was lowered over the Kremlin for the last time. The largest country on Earth had ceased to exist.`,
    facts: [
      "The USSR dissolved on 25 December 1991 — Christmas Day in the West",
      "15 independent states emerged from the collapse overnight",
      "The August 1991 coup attempt lasted just three days before collapsing",
      "Russia inherited the USSR's UN Security Council seat and nuclear arsenal",
    ],
  },
  {
    id: "putin",
    title: "The Putin Era",
    subtitle: "From Ruins to Revanchism",
    icon: "🦅",
    color: "#37474F",
    year: "1999–present",
    content: `Vladimir Putin rose from obscurity — a KGB officer, then minor St Petersburg bureaucrat — to become acting President on 31 December 1999 when Yeltsin resigned. His consolidation of power was methodical: media brought to heel, oligarchs jailed or exiled, regional governors replaced with Kremlin loyalists. Oil wealth fuelled a decade of growth and nationalist pride. The 2008 war with Georgia, the 2014 annexation of Crimea, and the 2022 full-scale invasion of Ukraine marked an increasingly aggressive foreign policy rooted in imperial nostalgia. Putin's Russia has become the defining geopolitical challenge of the 2020s — a nuclear power conducting land warfare in Europe for the first time since 1945.`,
    facts: [
      "Putin has been in power longer than any Russian leader since Stalin",
      "Russia's GDP grew 7x in his first decade due to oil prices",
      "Annexed Crimea in 2014 — first forcible annexation in Europe since WWII",
      "Launched full-scale invasion of Ukraine on 24 February 2022",
    ],
  },
];

const timeline = [
  { year: 1703, event: "St. Petersburg founded by Peter the Great" },
  { year: 1812, event: "Napoleon invades; Moscow burns; Russia prevails" },
  { year: 1861, event: "Serfdom abolished under Tsar Alexander II" },
  { year: 1905, event: "First Russian Revolution; Bloody Sunday massacre" },
  { year: 1914, event: "WWI begins; Russia suffers catastrophic losses" },
  { year: 1917, event: "February and October Revolutions; Tsar abdicates; Bolsheviks seize power" },
  { year: 1918, event: "Tsar Nicholas II and family executed at Yekaterinburg" },
  { year: 1922, event: "USSR formally established" },
  { year: 1924, event: "Lenin dies; Stalin begins consolidation of power" },
  { year: 1932, event: "Holodomor — engineered famine kills millions in Ukraine" },
  { year: 1937, event: "Great Terror — peak of Stalin's purges" },
  { year: 1941, event: "Operation Barbarossa; WWII's Eastern Front begins" },
  { year: 1945, event: "Victory over Nazi Germany; Red Flag over the Reichstag" },
  { year: 1953, event: "Stalin dies; Khrushchev's 'Thaw' begins" },
  { year: 1957, event: "Sputnik launched — space age begins" },
  { year: 1961, event: "Yuri Gagarin becomes first human in space" },
  { year: 1962, event: "Cuban Missile Crisis — 13 days from nuclear war" },
  { year: 1979, event: "Soviet invasion of Afghanistan" },
  { year: 1986, event: "Chernobyl nuclear disaster" },
  { year: 1991, event: "USSR collapses; Russian Federation established" },
  { year: 1999, event: "Putin becomes acting President on New Year's Eve" },
  { year: 2022, event: "Full-scale invasion of Ukraine" },
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
              <h3 style={{ margin: 0, color: "#eee8e8", fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{s.title}</h3>
              <span style={{ fontSize: 11, padding: "2px 8px", background: s.color + "22", color: s.color, borderRadius: 2, letterSpacing: "0.07em", fontFamily: "monospace" }}>{s.year}</span>
            </div>
            <p style={{ margin: "3px 0 0", color: "#555", fontSize: 13 }}>{s.subtitle}</p>
          </div>
          <span style={{ color: s.color, fontSize: 20, fontWeight: 700, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", userSelect: "none", minWidth: 20, textAlign: "center" }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${s.color}18` }}>
            <p style={{ color: "#b8b4bc", lineHeight: 1.8, fontSize: 15, marginTop: 18 }}>{s.content}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginTop: 18 }}>
              {s.facts.map((f, i) => (
                <div key={i} style={{ background: "#0a0a0c", borderLeft: `3px solid ${s.color}`, padding: "9px 13px", borderRadius: 2 }}>
                  <p style={{ margin: 0, color: "#9090a0", fontSize: 13, lineHeight: 1.5 }}>{f}</p>
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
      <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${RED}, ${BLUE}, ${GOLD})` }} />
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
            background: i % 3 === 0 ? RED : i % 3 === 1 ? BLUE : GOLD,
            border: `2px solid ${MID}`
          }} />
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontFamily: "monospace", color: LIGHT_GOLD, fontSize: 12, minWidth: 42, fontWeight: 700, paddingTop: 2 }}>{t.year}</span>
            <span style={{ color: "#80808a", fontSize: 14, lineHeight: 1.55 }}>{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroFlag() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "26px auto 20px", maxWidth: 300 }}>
      <div style={{ width: "100%", border: `2px solid ${GOLD}44`, borderRadius: 2, overflow: "hidden", boxShadow: `0 0 60px ${RED}44`, display: "flex", flexDirection: "column", height: 80 }}>
        <div style={{ flex: 1, background: WHITE }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: RED }} />
      </div>
    </div>
  );
}

function DoubleEagle() {
  return (
    <svg width="62" height="58" viewBox="0 0 62 58" style={{ display: "block", margin: "0 auto" }}>
      {/* Left wing */}
      <path d="M31 18 Q10 8 4 20 Q10 24 18 22 Q12 30 8 36 Q18 34 24 28 Q22 38 18 44 Q28 38 30 28" fill={GOLD} opacity="0.9"/>
      {/* Right wing */}
      <path d="M31 18 Q52 8 58 20 Q52 24 44 22 Q50 30 54 36 Q44 34 38 28 Q40 38 44 44 Q34 38 32 28" fill={GOLD} opacity="0.9"/>
      {/* Body */}
      <ellipse cx="31" cy="30" rx="8" ry="14" fill={GOLD} />
      {/* Left head */}
      <circle cx="22" cy="12" r="7" fill={GOLD} />
      <circle cx="19" cy="10" r="2" fill={DARK} />
      {/* Right head */}
      <circle cx="40" cy="12" r="7" fill={GOLD} />
      <circle cx="43" cy="10" r="2" fill={DARK} />
      {/* Beaks */}
      <polygon points="15,14 18,18 20,13" fill={RED} />
      <polygon points="47,14 44,18 42,13" fill={RED} />
      {/* Crown hints */}
      <path d="M18 6 L20 2 L22 6 L24 2 L26 6" stroke={GOLD} strokeWidth="1.5" fill="none" />
      <path d="M36 6 L38 2 L40 6 L42 2 L44 6" stroke={GOLD} strokeWidth="1.5" fill="none" />
      {/* Shield */}
      <rect x="27" y="26" width="8" height="10" rx="1" fill={RED} />
      <path d="M29 28 L33 28 L33 32 L31 34 L29 32Z" fill={RED} />
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
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Crimson Text', Georgia, serif", color: "#d8d4e0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px",
        position: "relative", overflow: "hidden",
        background: `radial-gradient(ellipse at 50% 35%, #1a0000 0%, ${DARK} 68%)`,
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: WHITE }} />
        <div style={{ position: "absolute", top: 4, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", top: 8, left: 0, right: 0, height: 4, background: RED }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: WHITE }} />
        <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, height: 4, background: BLUE }} />
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, height: 4, background: RED }} />

        {/* Onion dome silhouettes */}
        <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.05, width: "100%", height: 200 }} viewBox="0 0 900 200" preserveAspectRatio="none">
          {[80, 200, 320, 440, 560, 680, 800].map((x, i) => {
            const h = 80 + (i % 3) * 30;
            const w = 28 + (i % 2) * 14;
            return (
              <g key={i} transform={`translate(${x}, ${200 - h})`}>
                <rect x={-6} y={h - 40} width={12} height={40} fill={GOLD} />
                <ellipse cx={0} cy={h - 60} rx={w / 2} ry={h / 2.5} fill={GOLD} />
                <line x1={0} y1={0} x2={0} y2={-10} stroke={GOLD} strokeWidth={3} />
              </g>
            );
          })}
        </svg>

        <div style={{ transform: `translateY(${scrollY * 0.22}px)`, position: "relative", zIndex: 1 }}>
          <DoubleEagle />
          <div style={{ width: 48, height: 1, background: GOLD, margin: "16px auto" }} />
          <p style={{ fontSize: 11, letterSpacing: "0.38em", color: LIGHT_GOLD, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 12 }}>
            Российская Советская Федеративная Социалистическая Республика
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            lineHeight: 1.07,
            color: "#f5f0ee",
            margin: "0 0 8px",
            textShadow: `0 0 80px ${RED}55`,
          }}>
            The Russian<br /><span style={{ color: RED }}>Soviet Federative</span><br />Socialist Republic
          </h1>
          <HeroFlag />
          <p style={{ maxWidth: 560, margin: "14px auto 0", fontSize: "1.1rem", color: "#504858", lineHeight: 1.8, fontStyle: "italic" }}>
            The largest country ever to exist. The revolution that split the world in two. The culture that endured everything. The empire that never quite ended.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["1917–1991", "Moscow", "148M population", "17M km²"].map(tag => (
              <span key={tag} style={{ padding: "5px 13px", border: `1px solid ${RED}55`, color: "#c07070", fontSize: 11, letterSpacing: "0.1em", fontFamily: "monospace", borderRadius: 1 }}>{tag}</span>
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
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#ffe8e8", fontStyle: "italic", maxWidth: 700, marginInline: "auto", lineHeight: 1.7 }}>
          "Russia is a riddle wrapped in a mystery inside an enigma — but perhaps there is a key: Russian national interest." — Winston Churchill, 1939
        </p>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

        <AnimCard>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.1rem)", color: "#eee8e8", marginBottom: 14 }}>The Republic That Was Bigger Than the Union</h2>
            <p style={{ fontSize: "1.05rem", color: "#403840", lineHeight: 1.85, maxWidth: 660, margin: "0 auto" }}>
              The Russian SFSR was technically one republic among fifteen — but it was 76% of the Soviet Union's territory, 51% of its population, and the overwhelming source of its political, military, and cultural power. Understanding Russia means holding contradictions: extraordinary artistic genius alongside systematic brutality; sacrifice beyond measure alongside crimes beyond reckoning; a people who built the world's greatest literature while their leaders ran the world's largest prison system.
            </p>
          </div>
        </AnimCard>

        {/* Gagarin callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #00001a, ${MID})`, border: `1px solid ${BLUE}55`, borderRadius: 3, padding: "28px 28px", marginBottom: 40, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 44, lineHeight: 1 }}>🌍</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#b0c8f0", fontSize: "1.2rem", marginTop: 0 }}>
                "Poyekhali!" — Gagarin's Single Word
              </h3>
              <p style={{ color: "#304060", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                On 12 April 1961, Yuri Gagarin climbed into Vostok 1 and said one word as the rocket ignited: <em>Poyekhali</em> — "Let's go!" He orbited Earth in 108 minutes and landed in a field in Saratov Oblast, startling a farmer and her granddaughter. He was 27 years old, the son of a carpenter and a dairy worker from Smolensk. For one brief moment, the entire world — East and West — looked up and felt the same thing.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Section cards */}
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: LIGHT_GOLD, textAlign: "center", marginTop: 0, fontSize: "1.35rem" }}>Russia in Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, textAlign: "center" }}>
              {[
                { n: "17M km²", l: "World's largest country by area" },
                { n: "27M", l: "Soviet dead in WWII" },
                { n: "18M", l: "Passed through the Gulag" },
                { n: "40,000+", l: "Nuclear warheads at Cold War peak" },
                { n: "108 min", l: "Gagarin's first orbit of Earth" },
                { n: "74 yrs", l: "Duration of the Soviet experiment" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.85rem", fontFamily: "'Playfair Display', serif", color: RED, fontWeight: 700 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#3a2828", marginTop: 6, lineHeight: 1.4 }}>{s.l}</div>
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

        {/* Solzhenitsyn callout */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #0a0a0a, ${MID})`, border: `1px solid #546E7A55`, borderRadius: 3, padding: "28px 28px", marginBottom: 32, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 40, lineHeight: 1 }}>📖</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#c0c8d0", fontSize: "1.2rem", marginTop: 0 }}>
                Solzhenitsyn — The Writer Who Took On the State
              </h3>
              <p style={{ color: "#485058", lineHeight: 1.8, fontSize: "0.98rem", margin: 0 }}>
                Alexander Solzhenitsyn spent eight years in the Gulag for a careless remark about Stalin in a private letter. He emerged and wrote One Day in the Life of Ivan Denisovich — published under Khrushchev's thaw, it was the first crack of light. Then came The Gulag Archipelago, written in secret over ten years, memorised by volunteers in case every copy was destroyed. When it was published in the West in 1973, Brezhnev expelled him from the country. He called it the KGB's greatest mistake.
              </p>
            </div>
          </div>
        </AnimCard>

        {/* Legacy */}
        <AnimCard>
          <div style={{ background: `linear-gradient(135deg, #130008, #0a0a0c)`, border: `1px solid ${GOLD}44`, borderRadius: 3, padding: 40, textAlign: "center" }}>
            <DoubleEagle />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#f5f0ee", marginTop: 18 }}>The Empire That Answers to History</h2>
            <p style={{ color: "#3d3040", lineHeight: 1.85, maxWidth: 600, margin: "16px auto 0", fontSize: "1rem" }}>
              Russia has never fully resolved the contradiction at its core: a people of enormous creativity, suffering, and resilience, governed by a state of enormous ambition, cruelty, and paranoia. The Soviet chapter was the most extreme expression of that tension. It ended on Christmas Day 1991 — but the questions it raised about power, identity, and empire remain unanswered. The double-headed eagle looks East and West simultaneously, and has never been able to choose.
            </p>
            <div style={{ width: 50, height: 1, background: GOLD, margin: "28px auto 0" }} />
          </div>
        </AnimCard>
      </div>

      {/* Footer */}
      <div style={{
        background: "#070708",
        borderTop: `3px solid ${RED}`,
        padding: "22px",
        textAlign: "center"
      }}>
        <p style={{ margin: 0, color: "#2a1a1a", fontSize: 11, letterSpacing: "0.07em", fontFamily: "monospace" }}>
          RUSSIAN SFSR · 1917–1991 · MOSCOW · РОССИЙСКАЯ СОВЕТСКАЯ ФЕДЕРАТИВНАЯ СОЦИАЛИСТИЧЕСКАЯ РЕСПУБЛИКА
        </p>
      </div>
    </div>
  );
}
