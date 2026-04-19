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
  const pulseOpacity = interpolate(newestProgress, [0, 1], [0, 0.34], {
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
    <div className="node-network-card content-card">
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

function SlideFrame({ slide, isActive }) {
  if (slide.content?.layout === "ledger") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <div className={`slide lesson-slide ledger-slide slide-${slide.number.replaceAll(".", "-")}`}>
          <div className="slide-grid">
            <div className="slide-main">
              <div className="slide-kicker">{slide.content.eyebrow}</div>
              <h2 className="hero-title">{slide.content.headline}</h2>
              <p className="hero-copy">{slide.content.description}</p>

              <div className="comparison-grid">
                {slide.content.comparison.map((item) => (
                  <article key={item.label} className="content-card comparison-card">
                    <div className="card-label">{item.label}</div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="slide-side-stack">
              <aside className="content-card flow-card">
                <div className="card-label">How one ledger update spreads</div>
                <ol className="flow-list">
                  {slide.content.flow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>

          <div className="slide-chrome">
            <div>{slide.chrome}</div>
            <div>Shared verification over central control</div>
          </div>
        </div>
      </section>
    );
  }

  if (slide.content?.layout === "blockchain-motion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <div className={`slide lesson-slide motion-slide slide-${slide.number.replaceAll(".", "-")}`}>
          <div className="motion-slide-header">
            <div>
              <div className="slide-kicker">{slide.content.eyebrow}</div>
              <h2 className="hero-title">{slide.content.headline}</h2>
            </div>
            <p className="hero-copy">{slide.content.description}</p>
          </div>

          <BlockchainLoopGraphic isActive={isActive} />

          <div className="motion-slide-rail">
            {slide.content.bullets.map((bullet) => (
              <div key={bullet} className="note-pill motion-pill">
                {bullet}
              </div>
            ))}
          </div>

          <div className="slide-chrome">
            <div>{slide.chrome}</div>
            <div>Visual intuition for a growing chain</div>
          </div>
        </div>
      </section>
    );
  }

  if (slide.content?.layout === "node-motion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <div className={`slide lesson-slide motion-slide slide-${slide.number.replaceAll(".", "-")}`}>
          <div className="motion-slide-header">
            <div>
              <div className="slide-kicker">{slide.content.eyebrow}</div>
              <h2 className="hero-title">{slide.content.headline}</h2>
            </div>
            <p className="hero-copy">{slide.content.description}</p>
          </div>

          <NodeNetworkGraphic />

          <div className="motion-slide-rail">
            {slide.content.bullets.map((bullet) => (
              <div key={bullet} className="note-pill motion-pill">
                {bullet}
              </div>
            ))}
          </div>

          <div className="slide-chrome">
            <div>{slide.chrome}</div>
            <div>Peer-to-peer verification in motion</div>
          </div>
        </div>
      </section>
    );
  }

  if (slide.content?.layout === "pipeline") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <div className={`slide lesson-slide pipeline-slide slide-${slide.number.replaceAll(".", "-")}`}>
          <div className="slide-kicker">{slide.content.eyebrow}</div>
          <div className="pipeline-header">
            <h2 className="hero-title">{slide.content.headline}</h2>
            <p className="hero-copy">{slide.content.description}</p>
          </div>

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
            {slide.content.notes.map((note) => (
              <div key={note} className="note-pill">
                {note}
              </div>
            ))}
          </div>

          <div className="slide-chrome">
            <div>{slide.chrome}</div>
            <div>Consensus turns updates into trusted history</div>
          </div>
        </div>
      </section>
    );
  }

  if (slide.content) {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <div className={`slide lesson-slide overview-slide slide-${slide.number.replaceAll(".", "-")}`}>
          <div className="overview-hero">
            <div className="overview-header">
              <div className="slide-kicker">{slide.content.eyebrow}</div>
              <h1 className="overview-title">{slide.content.headline}</h1>
              <p className="overview-copy">{slide.content.intro}</p>
            </div>
          </div>

          <div className="overview-pillar-grid">
            {slide.content.pillars.map((pillar) => (
              <article key={pillar.title} className="content-card pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>

          <div className="overview-footer">
            <div className="callout-card">{slide.content.callout}</div>
            <div className="footer-tag">{slide.content.footer}</div>
          </div>

          <div className="slide-chrome">
            <div>{slide.chrome}</div>
            <div>Chapter opener</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
      <div className="slide placeholder-slide">
        <div className="placeholder-card">
          <div className="slide-kicker slide-kicker-static">
            Slide {slide.number} / {slide.parentTitle}
          </div>
          <h2>{slide.title}</h2>
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
        <div className="slide-chrome">
          <div>{slide.chrome}</div>
          <div>Outline placeholder</div>
        </div>
      </div>
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
