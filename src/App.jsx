import { useEffect, useState } from "react";
import { interpolate, spring } from "remotion";
import "@hyperframes/player";
import { slides } from "./data/slides";

const PRESENTATION_FPS = 30;
const BLOCK_WIDTH = 184;
const BLOCKS_PER_CYCLE = 5;

function useLoopFrame(isActive) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setFrame(0);
      return undefined;
    }

    let animationFrame = 0;
    const start = performance.now();

    const tick = (now) => {
      const nextFrame = Math.floor(((now - start) / 1000) * PRESENTATION_FPS);
      setFrame(nextFrame);
      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isActive]);

  return frame;
}

function SlideTab({ slide, isActive, index, onSelect }) {
  return (
    <button
      type="button"
      className={`slide-tab ${slide.level === "parent" ? "parent-tab" : "child-tab"} ${isActive ? "active" : ""}`}
      data-index={index}
      onClick={() => onSelect(index)}
    >
      <div className="mini-label">Slide {slide.number}</div>
      <div className="mini-title">{slide.title}</div>
      <div className="mini-status">
        {slide.level === "parent" ? "Main topic" : slide.parentTitle}
      </div>
    </button>
  );
}

function BlockchainLoopGraphic({ isActive }) {
  const frame = useLoopFrame(isActive);
  const cycleFrame = frame % 90;
  const cycleOffset = Math.floor(frame / 90);
  const laneShift = interpolate(cycleFrame, [0, 48, 89], [0, 0, -BLOCK_WIDTH], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const newestProgress = spring({
    fps: PRESENTATION_FPS,
    frame: cycleFrame,
    durationInFrames: 42,
    config: {
      damping: 15,
      stiffness: 120,
      mass: 0.85,
    },
  });

  const blocks = Array.from({ length: BLOCKS_PER_CYCLE }, (_, index) => {
    const blockNumber = 184 + cycleOffset + index;
    const hashSeed = (blockNumber * 7919).toString(16).slice(-4);
    const scale = index === BLOCKS_PER_CYCLE - 1 ? interpolate(newestProgress, [0, 1], [0.86, 1]) : 1;
    const opacity = index === 0 ? 0.38 : 1;

    return {
      id: blockNumber,
      hash: `0x${hashSeed.padStart(4, "0")}`,
      scale,
      opacity,
      x: index * BLOCK_WIDTH + laneShift,
      newest: index === BLOCKS_PER_CYCLE - 1,
    };
  });

  const pulseScale = interpolate(newestProgress, [0, 1], [0.92, 1.26], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulseOpacity = interpolate(newestProgress, [0, 1], [0, 0.24], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div className="blockchain-demo-shell content-card">
      <div className="blockchain-window">
        <div className="blockchain-lane" />
        <div className="blockchain-pulse" style={{ transform: `scale(${pulseScale})`, opacity: pulseOpacity }} />

        {blocks.map((block) => (
          <article
            key={block.id}
            className={`blockchain-block ${block.newest ? "newest" : ""}`}
            style={{
              transform: `translate3d(${block.x}px, 0, 0) scale(${block.scale})`,
              opacity: block.opacity,
            }}
          >
            <div className="block-eyebrow">{block.newest ? "Incoming block" : "Confirmed block"}</div>
            <div className="block-number">#{block.id}</div>
            <div className="block-hash">{block.hash}</div>
            <div className="block-body">
              <span />
              <span />
              <span />
            </div>
          </article>
        ))}
      </div>

      <div className="graphic-legend">
        <div>Transactions gather</div>
        <div>Validators confirm</div>
        <div>Chain advances</div>
      </div>
    </div>
  );
}

function NodeNetworkGraphic() {
  return (
    <div className="node-network-stage">
      <hyperframes-player
        className="node-network-player"
        src="/hyperframes/node-network.html"
        autoplay
        loop
        muted
      />
    </div>
  );
}

function NodeNetworkRemotionGraphic({ isActive }) {
  const frame = useLoopFrame(isActive);
  const cycleFrame = frame % 240;

  const nodes = [
    { id: "wallet", x: 10, y: 54, label: "Wallet", role: "entry" },
    { id: "peer-a", x: 26, y: 26, label: "Peer A", role: "peer" },
    { id: "peer-b", x: 33, y: 72, label: "Peer B", role: "peer" },
    { id: "peer-c", x: 49, y: 48, label: "Peer C", role: "peer" },
    { id: "validator-a", x: 66, y: 20, label: "Validator 1", role: "validator" },
    { id: "validator-b", x: 72, y: 74, label: "Validator 2", role: "validator" },
    { id: "archive", x: 88, y: 46, label: "Shared Ledger", role: "ledger" },
  ];

  const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));
  const edges = [
    ["wallet", "peer-a", "entry"],
    ["wallet", "peer-b", "entry"],
    ["peer-a", "peer-c", "peer"],
    ["peer-b", "peer-c", "peer"],
    ["peer-a", "validator-a", "validator-link"],
    ["peer-b", "validator-b", "validator-link"],
    ["peer-c", "validator-a", "validator-link"],
    ["peer-c", "validator-b", "validator-link"],
    ["validator-a", "validator-b", "validator-link"],
    ["validator-a", "archive", "ledger-link"],
    ["validator-b", "archive", "ledger-link"],
  ];

  const packets = [
    { id: "tx-1", from: "wallet", to: "peer-a", start: 8, duration: 26, kind: "tx" },
    { id: "tx-2", from: "wallet", to: "peer-b", start: 14, duration: 26, kind: "tx" },
    { id: "check-1", from: "peer-a", to: "peer-c", start: 44, duration: 30, kind: "verify" },
    { id: "check-2", from: "peer-b", to: "peer-c", start: 50, duration: 30, kind: "verify" },
    { id: "vote-1", from: "peer-c", to: "validator-a", start: 92, duration: 28, kind: "vote" },
    { id: "vote-2", from: "peer-c", to: "validator-b", start: 98, duration: 28, kind: "vote" },
    { id: "attest-1", from: "validator-a", to: "validator-b", start: 138, duration: 22, kind: "vote" },
    { id: "attest-2", from: "validator-b", to: "validator-a", start: 146, duration: 22, kind: "vote" },
    { id: "final-1", from: "validator-a", to: "archive", start: 178, duration: 24, kind: "finality" },
    { id: "final-2", from: "validator-b", to: "archive", start: 186, duration: 24, kind: "finality" },
  ];

  const pulses = [
    { id: "wallet-pulse", nodeId: "wallet", start: 0 },
    { id: "peer-a-pulse", nodeId: "peer-a", start: 42 },
    { id: "peer-b-pulse", nodeId: "peer-b", start: 48 },
    { id: "peer-c-pulse", nodeId: "peer-c", start: 82 },
    { id: "validator-a-pulse", nodeId: "validator-a", start: 128 },
    { id: "validator-b-pulse", nodeId: "validator-b", start: 134 },
    { id: "archive-pulse", nodeId: "archive", start: 176 },
  ];

  const statusPhase = cycleFrame < 40 ? "Transaction enters one node" :
    cycleFrame < 88 ? "Peers verify and relay" :
      cycleFrame < 174 ? "Validators attest to each other" :
        cycleFrame < 220 ? "Ledger update converges" :
          "Network resets for the next transaction";

  return (
    <div className="node-remotion-shell content-card">
      <div className="node-remotion-stage">
        <div className="node-remotion-grid" />
        <div className="node-remotion-aura node-remotion-aura-left" />
        <div className="node-remotion-aura node-remotion-aura-right" />

        <svg className="network-edges-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {edges.map(([fromId, toId, edgeKind]) => {
            const from = nodeMap[fromId];
            const to = nodeMap[toId];

            return (
              <line
                key={`${fromId}-${toId}`}
                className={`network-edge ${edgeKind}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />
            );
          })}
        </svg>

        {pulses.map((pulse) => {
          const node = nodeMap[pulse.nodeId];
          const pulseFrame = Math.max(0, cycleFrame - pulse.start);
          const scale = interpolate(pulseFrame, [0, 24], [0.42, 1.8], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const opacity = interpolate(pulseFrame, [0, 8, 24], [0, 0.3, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={pulse.id}
              className="network-pulse"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity,
              }}
            />
          );
        })}

        {packets.map((packet) => {
          const from = nodeMap[packet.from];
          const to = nodeMap[packet.to];
          const travel = spring({
            fps: PRESENTATION_FPS,
            frame: Math.max(0, cycleFrame - packet.start),
            durationInFrames: packet.duration,
            config: {
              damping: 15,
              stiffness: 110,
              mass: 0.9,
            },
          });

          const isVisible = cycleFrame >= packet.start && cycleFrame <= packet.start + packet.duration + 8;
          const x = from.x + (to.x - from.x) * travel;
          const y = from.y + (to.y - from.y) * travel;

          return (
            <div
              key={packet.id}
              className={`network-packet ${packet.kind}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                opacity: isVisible ? 1 : 0,
                transform: `translate(-50%, -50%) scale(${interpolate(travel, [0, 1], [0.86, 1])})`,
              }}
            />
          );
        })}

        {nodes.map((node) => {
          const nodeFrame = Math.max(0, cycleFrame - (node.role === "entry" ? 0 : node.role === "peer" ? 46 : node.role === "validator" ? 118 : 168));
          const glow = spring({
            fps: PRESENTATION_FPS,
            frame: nodeFrame,
            durationInFrames: 28,
            config: {
              damping: 16,
              stiffness: 120,
              mass: 0.9,
            },
          });
          const scale = interpolate(glow, [0, 1], [0.94, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={node.id}
              className={`network-node ${node.role}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate(-50%, -50%) scale(${scale})`,
              }}
            >
              <div className="network-node-core" />
              <div className="network-node-label">{node.label}</div>
            </div>
          );
        })}

        <div className="network-status-bar">
          <div className="network-status-label">Live phase</div>
          <div className="network-status-copy">{statusPhase}</div>
        </div>
      </div>
    </div>
  );
}

function SlideShell({ slide, children }) {
  return (
    <div className={`slide lesson-slide slide-${slide.number.replaceAll(".", "-")}`}>
      <div className="slide-grid-bg" />
      <div className="slide-edge slide-edge-left" />
      <div className="slide-edge slide-edge-right" />

      <header className="slide-topbar">
        <div className="brand-mark">Architectural Noir</div>
        <div className="topbar-meta">
          <span>{slide.level === "parent" ? "Main topic" : "Subtopic"}</span>
          <span>{slide.parentTitle}</span>
        </div>
      </header>

      <div className="slide-content">{children}</div>
    </div>
  );
}

function SlideIntro({ kicker, title, copy }) {
  return (
    <div className="slide-intro">
      <div className="slide-kicker">{kicker}</div>
      <h1 className="hero-title">{title}</h1>
      <div className="intro-rule" />
      <p className="hero-copy">{copy}</p>
    </div>
  );
}

function SlideFrame({ slide, isActive }) {
  if (slide.content?.layout === "ledger") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="ledger-layout">
            <div className="intro-column">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <aside className="content-card side-panel">
              <div className="panel-label">Protocol sequence</div>
              <ol className="flow-list">
                {slide.content.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </aside>

            <div className="comparison-grid">
              {slide.content.comparison.map((item, index) => (
                <article key={item.label} className="content-card comparison-card">
                  <div className="card-index">0{index + 1}</div>
                  <div className="card-label">{item.label}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </SlideShell>
      </section>
    );
  }

  if (slide.content?.layout === "blockchain-motion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="motion-layout">
            <div className="motion-header">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <BlockchainLoopGraphic isActive={isActive} />

            <div className="notes-panel">
              {slide.content.bullets.map((bullet, index) => (
                <div key={bullet} className="note-pill">
                  <span className="note-index">0{index + 1}</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideShell>
      </section>
    );
  }

  if (slide.content?.layout === "node-motion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <div className={`slide node-motion-slide slide-${slide.number.replaceAll(".", "-")}`}>
          <NodeNetworkGraphic />
        </div>
      </section>
    );
  }

  if (slide.content?.layout === "node-motion-remotion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="motion-layout node-remotion-layout">
            <div className="motion-header">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <NodeNetworkRemotionGraphic isActive={isActive} />

            <div className="notes-panel">
              {slide.content.bullets.map((bullet, index) => (
                <div key={bullet} className="note-pill">
                  <span className="note-index">0{index + 1}</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideShell>
      </section>
    );
  }

  if (slide.content?.layout === "pipeline") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="pipeline-layout">
            <SlideIntro
              kicker={`Slide ${slide.number}`}
              title={slide.title}
              copy={slide.content.description}
            />

            <div className="pipeline-grid">
              {slide.content.stages.map((stage, index) => (
                <article key={stage.title} className="content-card stage-card">
                  <div className="stage-index">0{index + 1}</div>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </article>
              ))}
            </div>

            <div className="notes-panel">
              {slide.content.notes.map((note, index) => (
                <div key={note} className="note-pill">
                  <span className="note-index">0{index + 1}</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideShell>
      </section>
    );
  }

  if (slide.content?.layout === "anatomy") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="anatomy-layout">
            <div className="anatomy-header">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <div className="content-card anatomy-shell">
              <div className="panel-label">{slide.content.frameLabel}</div>

              <div className="anatomy-stack">
                {slide.content.segments.map((segment, index) => (
                  <article key={segment.title} className="anatomy-segment">
                    <div className="card-index">0{index + 1}</div>
                    <div className="card-label">{segment.label}</div>
                    <h3>{segment.title}</h3>
                    <p>{segment.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="notes-panel">
              {slide.content.notes.map((note, index) => (
                <div key={note} className="note-pill">
                  <span className="note-index">0{index + 1}</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideShell>
      </section>
    );
  }

  if (slide.content) {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="overview-layout">
            <SlideIntro
              kicker={`Slide ${slide.number}`}
              title={slide.title}
              copy={slide.content.headline}
            />

            <div className="overview-pillar-grid">
              {slide.content.pillars.map((pillar, index) => (
                <article key={pillar.title} className="content-card pillar-card">
                  <div className="card-index">0{index + 1}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              ))}
            </div>

            <div className="overview-footer">
              <div className="callout-card">{slide.content.callout}</div>
              <div className="footer-tag">{slide.content.footer}</div>
            </div>
          </div>
        </SlideShell>
      </section>
    );
  }

  return (
    <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
      <SlideShell slide={slide}>
        <div className="placeholder-slide">
          <div className="placeholder-card">
            <div className="slide-kicker slide-kicker-static">
              Slide {slide.number} / {slide.parentTitle}
            </div>
            <h2>{slide.title}</h2>
            <div className="intro-rule" />
            <p>
              This section is intentionally left as a placeholder so the deck can
              be reorganized around a more detailed sidebar and submenu flow first.
            </p>
            <div className="placeholder-meta">
              <div className="placeholder-chip">
                Type: {slide.level === "parent" ? "Main topic slide" : "Subtopic slide"}
              </div>
              <div className="placeholder-chip">Section: {slide.parentTitle}</div>
            </div>
          </div>
        </div>
      </SlideShell>
    </section>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarHidden, setSidebarHidden] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        setActiveIndex((current) => Math.min(slides.length - 1, current + 1));
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        setActiveIndex((current) => Math.max(0, current - 1));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function selectSlide(index) {
    setActiveIndex(Math.max(0, Math.min(slides.length - 1, index)));
  }

  return (
    <div className={`app ${sidebarHidden ? "sidebar-hidden" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-head">
          <div className="deck-label">Workshop Deck</div>
          <div className="deck-title">Intro to Blockchain for University Students</div>
        </div>

        <div className="slide-list">
          {slides.map((slide, index) => (
            <SlideTab
              key={slide.number}
              slide={slide}
              index={index}
              isActive={index === activeIndex}
              onSelect={selectSlide}
            />
          ))}
        </div>

        <div className="nav-help">Use sidebar, arrow keys, or Prev/Next buttons</div>
      </aside>

      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setSidebarHidden((current) => !current)}
        aria-label={sidebarHidden ? "Show sidebar" : "Hide sidebar"}
        title={sidebarHidden ? "Show sidebar" : "Hide sidebar"}
      >
        {sidebarHidden ? "›" : "‹"}
      </button>

      <main className="stage-shell">
        <div className="stage">
          <div className="frame-host">
            {slides.map((slide, index) => (
              <SlideFrame key={slide.number} slide={slide} isActive={index === activeIndex} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
