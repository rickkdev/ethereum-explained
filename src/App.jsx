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

function MiningRaceRemotionGraphic({ slide, isActive }) {
  const frame = useLoopFrame(isActive);
  const cycleFrame = frame % 270;
  const miners = [
    { id: "miner-a", label: "Miner A", x: 18, tone: "calm" },
    { id: "miner-b", label: "Miner B", x: 50, tone: "winner" },
    { id: "miner-c", label: "Miner C", x: 82, tone: "calm" },
  ];
  const mempoolPackets = [
    { id: "tx-a", fromX: 18, toX: 18, start: 10, duration: 28 },
    { id: "tx-b", fromX: 50, toX: 50, start: 20, duration: 28 },
    { id: "tx-c", fromX: 82, toX: 82, start: 30, duration: 28 },
    { id: "tx-d", fromX: 34, toX: 50, start: 44, duration: 30 },
    { id: "tx-e", fromX: 66, toX: 82, start: 54, duration: 30 },
  ];

  const raceProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 54),
    durationInFrames: 68,
    config: {
      damping: 16,
      stiffness: 96,
      mass: 0.92,
    },
  });
  const winnerProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 118),
    durationInFrames: 38,
    config: {
      damping: 15,
      stiffness: 112,
      mass: 0.88,
    },
  });
  const chainProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 148),
    durationInFrames: 44,
    config: {
      damping: 17,
      stiffness: 104,
      mass: 0.9,
    },
  });
  const eraProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 150),
    durationInFrames: 92,
    config: {
      damping: 18,
      stiffness: 72,
      mass: 0.98,
    },
  });
  const activeEraIndex = Math.min(
    slide.content.eras.length - 1,
    Math.floor(interpolate(eraProgress, [0, 1], [0, slide.content.eras.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })),
  );
  const phaseLabel = cycleFrame < 54 ? "Candidate blocks form from pending transactions" :
    cycleFrame < 118 ? "Miners race different nonces against the target" :
      cycleFrame < 150 ? "One miner finds a valid hash first" :
        cycleFrame < 236 ? "Accepted block joins the chain as rewards step down" :
          "Loop resets for the next block";

  const incomingBlockX = interpolate(chainProgress, [0, 1], [54, 4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const incomingBlockOpacity = interpolate(chainProgress, [0, 0.18, 1], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div className="content-card mining-motion-shell">
      <div className="mining-motion-head">
        <div>
          <div className="panel-label">{slide.content.processLabel}</div>
          <div className="mining-motion-phase">{phaseLabel}</div>
        </div>

        <div className="mining-motion-legend">
          <span className="mining-legend-chip">Pending txs</span>
          <span className="mining-legend-chip winner">Winning miner</span>
          <span className="mining-legend-chip reward">Reward era</span>
        </div>
      </div>

      <div className="mining-motion-grid">
        <div className="mining-race-stage">
          <div className="mining-grid" />
          <div className="mining-mempool">
            <div className="mining-card-label">Mempool</div>
            <div className="mempool-stack">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          {mempoolPackets.map((packet) => {
            const travel = spring({
              fps: PRESENTATION_FPS,
              frame: Math.max(0, cycleFrame - packet.start),
              durationInFrames: packet.duration,
              config: {
                damping: 14,
                stiffness: 104,
                mass: 0.88,
              },
            });
            const isVisible = cycleFrame >= packet.start && cycleFrame <= packet.start + packet.duration + 10;
            const x = packet.fromX + (packet.toX - packet.fromX) * travel;
            const y = 76 - 40 * travel;

            return (
              <div
                key={packet.id}
                className="mining-packet"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translate(-50%, -50%) scale(${interpolate(travel, [0, 1], [0.84, 1])})`,
                }}
              />
            );
          })}

          <div className="hash-target-band">
            <span>Difficulty target</span>
            <strong>Hash must land below this line</strong>
          </div>

          <div className="mining-chain-lane">
            <div className="chain-lane-label">Accepted chain</div>
            <div className="chain-lane-track">
              {[0, 1, 2].map((index) => (
                <article key={index} className="chain-lane-block stable">
                  <div className="block-eyebrow">Confirmed</div>
                  <div className="block-number">#{728440 + index}</div>
                  <div className="block-hash">0x{((728440 + index) * 1297).toString(16).slice(-4).padStart(4, "0")}</div>
                </article>
              ))}
              <article
                className="chain-lane-block incoming"
                style={{
                  transform: `translateX(${incomingBlockX}px) scale(${interpolate(chainProgress, [0, 1], [0.9, 1])})`,
                  opacity: incomingBlockOpacity,
                }}
              >
                <div className="block-eyebrow">New winner</div>
                <div className="block-number">#728443</div>
                <div className="block-hash">0x00af</div>
              </article>
            </div>
          </div>

          {miners.map((miner, index) => {
            const isWinner = miner.tone === "winner";
            const pulse = spring({
              fps: PRESENTATION_FPS,
              frame: Math.max(0, cycleFrame - (isWinner ? 112 : 64 + index * 8)),
              durationInFrames: isWinner ? 42 : 52,
              config: {
                damping: 16,
                stiffness: isWinner ? 118 : 94,
                mass: 0.9,
              },
            });
            const ringOpacity = isWinner
              ? interpolate(winnerProgress, [0, 1], [0.12, 0.46], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })
              : interpolate(raceProgress, [0, 1], [0.06, 0.2], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });
            const nonceCount = 184320 + index * 932 + Math.floor((cycleFrame + index * 13) * (isWinner ? 41 : 33));

            return (
              <article
                key={miner.id}
                className={`mining-rig ${isWinner ? "winner" : ""}`}
                style={{
                  left: `${miner.x}%`,
                  transform: `translateX(-50%) scale(${interpolate(pulse, [0, 1], [0.96, 1])})`,
                }}
              >
                <div className="mining-rig-ring" style={{ opacity: ringOpacity }} />
                <div className="mining-card-label">{miner.label}</div>
                <div className="mining-rig-block">
                  <span>Candidate block</span>
                  <strong>Nonce {nonceCount.toLocaleString()}</strong>
                  <div className="mining-hash-meter">
                    <div
                      className="mining-hash-fill"
                      style={{
                        width: `${interpolate(
                          isWinner ? winnerProgress : raceProgress,
                          [0, 1],
                          [18 + index * 7, isWinner ? 92 : 66 + index * 6],
                          {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                          },
                        )}%`,
                      }}
                    />
                  </div>
                  <p>{isWinner ? slide.content.process[2].title : slide.content.process[1].title}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="halving-cadence-panel">
          <div className="panel-label">{slide.content.erasLabel}</div>
          <div className="halving-cadence-rail" />

          <div className="halving-era-list">
            {slide.content.eras.map((era, index) => {
              const isActiveEra = index === activeEraIndex;
              const isPastEra = index < activeEraIndex;

              return (
                <article
                  key={era.title}
                  className={`halving-era-card ${isActiveEra ? "active" : ""} ${isPastEra ? "past" : ""}`}
                >
                  <div className="halving-era-step">0{index + 1}</div>
                  <div className="card-label">{era.label}</div>
                  <div className="halving-era-reward">{era.reward}</div>
                  <div className="halving-era-bar-track">
                    <div className="halving-era-bar" style={{ width: era.width }} />
                  </div>
                  <p>{era.body}</p>
                </article>
              );
            })}
          </div>

          <div className="halving-summary">
            <div className="halving-summary-label">What the learner should notice</div>
            <p>
              One block wins at a time, but the subsidy attached to that block keeps shrinking across eras. Mining
              stays continuous while issuance steps down on schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EvmStateMotionGraphic({ slide, isActive }) {
  const frame = useLoopFrame(isActive);
  const cycleFrame = frame % 270;
  const { frameLabel, transaction, stateBefore, stateAfter, executionSteps, segments } = slide.content;
  const txProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 18),
    durationInFrames: 38,
    config: {
      damping: 15,
      stiffness: 112,
      mass: 0.88,
    },
  });
  const execProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 74),
    durationInFrames: 52,
    config: {
      damping: 16,
      stiffness: 96,
      mass: 0.92,
    },
  });
  const stateProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 142),
    durationInFrames: 48,
    config: {
      damping: 16,
      stiffness: 104,
      mass: 0.9,
    },
  });
  const phaseLabel = cycleFrame < 52 ? "Account signs a state-change request" :
    cycleFrame < 130 ? "The EVM executes the same logic on every node" :
      cycleFrame < 222 ? "One updated shared state snapshot is accepted" :
        "Loop resets to the next transaction";

  const packetX = interpolate(txProgress, [0, 1], [20, 50], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const packetY = interpolate(txProgress, [0, 1], [62, 33], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const packetOpacity = interpolate(txProgress, [0, 0.12, 0.9, 1], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beamOpacity = interpolate(execProgress, [0, 0.12, 1], [0, 0.75, 0.16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const glowScale = interpolate(execProgress, [0, 1], [0.9, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const afterPanelOffset = interpolate(stateProgress, [0, 1], [28, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const afterPanelOpacity = interpolate(stateProgress, [0, 0.18, 1], [0, 0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div className="content-card evm-motion-shell">
      <div className="evm-motion-head">
        <div>
          <div className="panel-label">{frameLabel}</div>
          <div className="evm-motion-phase">{phaseLabel}</div>
        </div>

        <div className="evm-motion-legend">
          <span className="evm-legend-chip account">Account</span>
          <span className="evm-legend-chip execution">Execution</span>
          <span className="evm-legend-chip state">State snapshot</span>
        </div>
      </div>

      <div className="evm-motion-stage">
        <div className="evm-motion-grid" />

        <article className="evm-account-card">
          <div className="mining-card-label">{segments[0].label}</div>
          <strong>{transaction.from}</strong>
          <p>{segments[0].body}</p>
        </article>

        <article className="evm-state-card before">
          <div className="mining-card-label">Current state</div>
          <strong>{segments[1].title}</strong>
          <div className="evm-state-list">
            {stateBefore.map((entry) => (
              <div key={`before-${entry.label}`} className="evm-state-row">
                <span>{entry.label}</span>
                <strong>{entry.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <article
          className="evm-core-card"
          style={{
            transform: `translate(-50%, -50%) scale(${glowScale})`,
          }}
        >
          <div className="evm-core-aura" style={{ opacity: beamOpacity }} />
          <div className="mining-card-label">{segments[2].label}</div>
          <strong>Ethereum Virtual Machine</strong>
          <p>{executionSteps[1]}</p>
          <div className="evm-step-list">
            {executionSteps.map((step, index) => (
              <div key={step} className={`evm-step-chip ${cycleFrame >= 24 + index * 52 ? "active" : ""}`}>
                <span>0{index + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </article>

        <article
          className="evm-state-card after"
          style={{
            transform: `translateY(${afterPanelOffset}px)`,
            opacity: afterPanelOpacity,
          }}
        >
          <div className="mining-card-label">Next state</div>
          <strong>Accepted shared update</strong>
          <div className="evm-state-list">
            {stateAfter.map((entry, index) => (
              <div key={`after-${entry.label}`} className={`evm-state-row ${index === 0 ? "decrease" : "increase"}`}>
                <span>{entry.label}</span>
                <strong>{entry.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <div className="evm-transaction-packet" style={{ left: `${packetX}%`, top: `${packetY}%`, opacity: packetOpacity }}>
          <div className="evm-packet-label">Transaction</div>
          <strong>{transaction.action}</strong>
          <span>{transaction.to}</span>
          <span>{transaction.gas}</span>
        </div>

        <div className="evm-flow-line account-to-evm" style={{ opacity: beamOpacity }} />
        <div className="evm-flow-line evm-to-state" style={{ opacity: afterPanelOpacity }} />
      </div>
    </div>
  );
}

function HashChainGraphic({ slide }) {
  const { chain, tamperedChain, frameLabel } = slide.content;

  const renderChainRow = (blocks, rowLabel) => (
    <div className="hash-chain-row">
      <div className="hash-chain-row-label">{rowLabel}</div>

      <div className="hash-chain-track">
        {blocks.map((block, index) => {
          const nextBlock = blocks[index + 1];
          const linkMatches = !nextBlock || nextBlock.prevHash === block.hash;

          return (
            <div key={`${rowLabel}-${block.label}`} className="hash-chain-item">
              <article className={`hash-block ${block.tone ?? "stable"}`}>
                <div className="block-eyebrow">{block.label}</div>
                <div className="hash-field">
                  <span>Prev hash</span>
                  <strong>{block.prevHash}</strong>
                </div>
                <div className="hash-field">
                  <span>Block hash</span>
                  <strong>{block.hash}</strong>
                </div>
                <p>{block.note}</p>
              </article>

              {nextBlock ? (
                <div className={`hash-link ${linkMatches ? "linked" : "broken"}`}>
                  <div className="hash-link-line" />
                  <div className="hash-link-copy">
                    {linkMatches ? "Next block stores this hash" : "Next block points to the old hash"}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="content-card hash-chain-shell">
      <div className="panel-label">{frameLabel}</div>
      {renderChainRow(chain, "Valid chain")}
      {renderChainRow(tamperedChain, "After tampering")}
    </div>
  );
}

function HashTamperMotionGraphic({ slide, isActive }) {
  const frame = useLoopFrame(isActive);
  const cycleFrame = frame % 240;
  const { chain, tamperedChain, frameLabel } = slide.content;
  const tamperProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 62),
    durationInFrames: 44,
    config: {
      damping: 16,
      stiffness: 108,
      mass: 0.9,
    },
  });
  const rippleProgress = spring({
    fps: PRESENTATION_FPS,
    frame: Math.max(0, cycleFrame - 118),
    durationInFrames: 54,
    config: {
      damping: 17,
      stiffness: 96,
      mass: 0.94,
    },
  });
  const phaseLabel = cycleFrame < 62 ? "Stable chain" :
    cycleFrame < 118 ? "Block edit changes the fingerprint" :
      cycleFrame < 198 ? "Mismatch ripples into the next block" :
        "Loop resets";

  const activeBlocks = chain.map((block, index) => {
    if (index === 1) {
      return tamperProgress > 0.5 ? tamperedChain[index] : block;
    }

    if (index === 2) {
      return rippleProgress > 0.52 ? tamperedChain[index] : block;
    }

    return block;
  });

  const auditScale = interpolate(tamperProgress, [0, 1], [1, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tamperGlow = interpolate(tamperProgress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rippleX = interpolate(rippleProgress, [0, 1], [35, 69], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rippleOpacity = interpolate(rippleProgress, [0, 0.15, 1], [0, 0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div className="content-card hash-motion-shell">
      <div className="hash-motion-head">
        <div>
          <div className="panel-label">{frameLabel}</div>
          <div className="hash-motion-phase">{phaseLabel}</div>
        </div>

        <div className="hash-motion-legend">
          <span className="hash-legend-chip stable">Linked</span>
          <span className="hash-legend-chip tampered">Edited block</span>
          <span className="hash-legend-chip broken">Broken reference</span>
        </div>
      </div>

      <div className="hash-motion-stage">
        <div className="hash-motion-trackline" />
        <div
          className="hash-ripple"
          style={{
            left: `${rippleX}%`,
            opacity: rippleOpacity,
          }}
        />

        {activeBlocks.map((block, index) => {
          const isTampered = block.tone === "tampered";
          const isBroken = block.tone === "broken";
          const scale = index === 1 ? auditScale : 1;
          const blockGlow = index === 1 ? tamperGlow : 0;

          return (
            <div key={block.label} className="hash-motion-node">
              <article
                className={`hash-block hash-motion-block ${block.tone ?? "stable"}`}
                style={{
                  transform: `scale(${scale})`,
                  boxShadow: isTampered
                    ? `0 0 ${18 + blockGlow * 26}px rgba(255, 188, 128, ${0.12 + blockGlow * 0.22})`
                    : isBroken
                      ? "0 0 26px rgba(255, 128, 128, 0.14)"
                      : "none",
                }}
              >
                <div className="block-eyebrow">{block.label}</div>
                <div className="hash-field">
                  <span>Prev hash</span>
                  <strong>{block.prevHash}</strong>
                </div>
                <div className="hash-field">
                  <span>Block hash</span>
                  <strong>{block.hash}</strong>
                </div>
                <p>{block.note}</p>
              </article>

              {index < activeBlocks.length - 1 ? (
                <div
                  className={`hash-link hash-motion-link ${!isBroken && activeBlocks[index + 1].prevHash === block.hash ? "linked" : "broken"}`}
                >
                  <div className="hash-link-line" />
                  <div className="hash-link-copy">
                    {!isBroken && activeBlocks[index + 1].prevHash === block.hash
                      ? "Next block still matches"
                      : "Next block points to the old hash"}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
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

  if (slide.content?.layout === "mining-motion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="motion-layout mining-motion-layout">
            <div className="motion-header">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <MiningRaceRemotionGraphic slide={slide} isActive={isActive} />

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

  if (slide.content?.layout === "evm-state-motion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="motion-layout evm-motion-layout">
            <div className="motion-header">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <EvmStateMotionGraphic slide={slide} isActive={isActive} />

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

  if (slide.content?.layout === "hash-chain") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="hash-chain-layout">
            <div className="anatomy-header">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <HashChainGraphic slide={slide} />

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

  if (slide.content?.layout === "hash-chain-motion") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="motion-layout hash-motion-layout">
            <div className="motion-header">
              <SlideIntro
                kicker={`Slide ${slide.number}`}
                title={slide.title}
                copy={slide.content.description}
              />
            </div>

            <HashTamperMotionGraphic slide={slide} isActive={isActive} />

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

  if (slide.content?.layout === "issuance") {
    return (
      <section className={`frame ${isActive ? "active" : ""}`} data-slide-index={slide.number}>
        <SlideShell slide={slide}>
          <div className="issuance-layout">
            <SlideIntro
              kicker={`Slide ${slide.number}`}
              title={slide.title}
              copy={slide.content.description}
            />

            <div className="issuance-grid">
              <article className="content-card issuance-process-card">
                <div className="panel-label">{slide.content.processLabel}</div>
                <ol className="issuance-process-list">
                  {slide.content.process.map((step, index) => (
                    <li key={step.title} className="issuance-process-step">
                      <div className="stage-index">0{index + 1}</div>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="content-card issuance-eras-card">
                <div className="panel-label">{slide.content.erasLabel}</div>
                <div className="issuance-era-list">
                  {slide.content.eras.map((era) => (
                    <div key={era.title} className={`issuance-era ${era.tone ?? ""}`}>
                      <div className="issuance-era-meta">
                        <div className="card-label">{era.label}</div>
                        <div className="issuance-era-value">{era.reward}</div>
                      </div>

                      <div className="issuance-era-bar-track">
                        <div className="issuance-era-bar" style={{ width: era.width }} />
                      </div>

                      <p>{era.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="issuance-stats">
              {slide.content.stats.map((stat) => (
                <article key={stat.label} className="content-card issuance-stat-card">
                  <div className="card-label">{stat.label}</div>
                  <strong>{stat.value}</strong>
                  <p>{stat.body}</p>
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
