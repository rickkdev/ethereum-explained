export const slideGroups = [
  {
    number: "01",
    title: "What is a blockchain",
    children: [
      "Shared ledger basics",
      "Blockchain in motion",
      "How nodes work",
      "Blocks, validators, and finality",
    ],
    overview: {
      eyebrow: "Chapter 01",
      headline: "A blockchain is a shared system for agreeing on what happened.",
      intro:
        "Instead of one institution updating a master spreadsheet, many computers keep the same history and verify each update together.",
      pillars: [
        {
          title: "Shared record",
          body: "Many participants store the same transaction history instead of relying on a single private database.",
        },
        {
          title: "Rules before trust",
          body: "The network checks signatures, balances, and validity with code, so strangers can coordinate safely.",
        },
        {
          title: "Hard to rewrite",
          body: "Once activity is accepted and finalized, changing the record becomes expensive and visible to everyone.",
        },
      ],
      callout: "Blockchains are coordination systems before they are investment assets.",
      footer: "Foundation for Bitcoin, Ethereum, and smart contracts",
    },
    childContent: [
      {
        number: "01.1",
        layout: "ledger",
        eyebrow: "Shared ledger basics",
        headline: "A blockchain works like one shared record copied across many independent computers.",
        description:
          "Instead of one institution owning the master database, many participants keep the same history and compare updates against the same rules.",
        comparison: [
          {
            label: "Traditional database",
            title: "One operator controls the record",
            body: "A company, bank, or university updates the system of record and everyone else reads from that source.",
          },
          {
            label: "Blockchain ledger",
            title: "Many copies stay aligned together",
            body: "The network shares the same history broadly, so participants can inspect changes without depending on one central owner.",
          },
        ],
        flow: [
          "A user creates an update",
          "The update is shared with the network",
          "Participants compare it against the rules",
          "Accepted data becomes part of the common history",
        ],
      },
      {
        number: "01.2",
        layout: "blockchain-motion",
        eyebrow: "Blockchain in motion",
        headline: "The chain advances when a new block is appended to the end of the record.",
        description:
          "Use this animation as the visual intuition: older blocks shift backward, the newest validated block enters at the edge, and the shared history moves forward as one sequence.",
        bullets: [
          "Each rectangle is one block in the ordered history.",
          "The rightmost block is the newest accepted batch of transactions.",
          "As a new block arrives, the visible chain shifts forward.",
        ],
      },
      {
        number: "01.3",
        layout: "ledger",
        eyebrow: "How nodes share the ledger",
        headline: "Nodes hear about updates, verify them themselves, and relay only valid information.",
        description:
          "A blockchain node is a computer running the chain's software. It keeps a local copy of history, checks new transactions and blocks, and passes accepted data to other nodes.",
        comparison: [
          {
            label: "Centralized system",
            title: "One server decides what is true",
            body: "Clients send requests to one authority, and that operator is responsible for validating data and updating the database.",
          },
          {
            label: "Node network",
            title: "Many computers repeat the same checks",
            body: "Peers receive the update, inspect signatures and balances independently, then forward only the data that matches the protocol rules.",
          },
        ],
        flow: [
          "A wallet sends a signed transaction to one node",
          "That node checks format, signature, and account state",
          "Valid data is relayed to neighboring peers",
          "More nodes repeat the checks until the network converges",
        ],
      },
      {
        number: "01.5",
        layout: "pipeline",
        eyebrow: "Blocks, validators, and finality",
        headline: "Transactions become blocks, and blocks become reliable history.",
        description:
          "The network groups valid transactions, proposes a block, and uses its consensus process to decide when that block should be treated as settled.",
        stages: [
          {
            title: "Transactions",
            body: "Users create and sign messages such as transfers, swaps, or contract calls.",
          },
          {
            title: "Blocks",
            body: "A producer packages valid transactions into a candidate block with ordering and metadata.",
          },
          {
            title: "Validators",
            body: "Other participants check the block and vote or attest according to the chain's consensus rules.",
          },
          {
            title: "Finality",
            body: "After enough confirmation, the network treats the block as effectively irreversible for normal users.",
          },
        ],
        notes: [
          "A block is a batch of ordered transactions.",
          "Validators help the network agree on one canonical history.",
          "Finality means confidence that the history will not be rolled back.",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Bitcoin",
    children: [
      "The problem Bitcoin solves",
      "Satoshi and the white paper",
      "What is a block?",
      "The chain and hashing",
      "Mining and halving",
      "21M hard cap",
      "Nodes and decentralization",
      "Wallets and keys",
      "Transactions and mempool",
    ],
    overview: {
      eyebrow: "Chapter 02",
      headline: "Bitcoin turned the blockchain idea into internet-native money with no central operator.",
      intro:
        "It introduced a public ledger, fixed monetary rules, and open participation so digital value could move without trusting one company or government to keep the score.",
      pillars: [
        {
          title: "Why it exists",
          body: "Bitcoin addresses the double-spend problem by letting a distributed network agree on one transaction history for digital money.",
        },
        {
          title: "What makes it distinct",
          body: "Proof of Work, predictable issuance, and a hard supply cap give Bitcoin a simple monetary design with very strong rule enforcement.",
        },
        {
          title: "What this chapter covers",
          body: "We move from the original problem and Satoshi's white paper into blocks, hashing, mining, supply, nodes, wallets, and the mempool.",
        },
      ],
      callout: "Bitcoin is the first major blockchain application: digital scarcity enforced by a public network.",
      footer: "From double-spend problem to blocks, mining, and self-custody",
    },
    childContent: [
      {
        number: "02.1",
        layout: "ledger",
        eyebrow: "The problem Bitcoin solves",
        headline: "Online money is hard because digital information can be copied perfectly.",
        description:
          "If money is just data, the same payment can be sent to two places at once. Traditional systems solve that with a bank or payment company keeping the master ledger. Bitcoin was designed to solve the same problem without one central scorekeeper.",
        comparison: [
          {
            label: "Physical cash",
            title: "One note can only be handed over once",
            body: "When you pass a paper bill to someone else, you no longer control that same bill. Scarcity is enforced by the physical object itself.",
          },
          {
            label: "Digital payments",
            title: "A message can be copied and broadcast twice",
            body: "A digital payment is information, and information is cheap to duplicate. Someone needs a trusted record to decide which spend is real and which one should be rejected.",
          },
        ],
        flow: [
          "A user creates a digital payment message",
          "That same message can be copied to multiple recipients",
          "Each recipient needs one agreed order of spends",
          "Banks solve this with a private ledger; Bitcoin tries to solve it with a public one",
        ],
      },
      {
        number: "02.2",
        layout: "ledger",
        eyebrow: "Satoshi and the white paper",
        headline: "In October 2008, Satoshi Nakamoto published a short paper describing peer-to-peer electronic cash.",
        description:
          "The white paper introduced Bitcoin's core idea: a network can timestamp and order transactions without relying on a bank to maintain the official ledger. Satoshi remains pseudonymous, but the design gave the internet a workable model for digital scarcity.",
        comparison: [
          {
            label: "Before Bitcoin",
            title: "Digital money depended on an institution to keep score",
            body: "Online payments already existed, but a company or bank had to run the central ledger, settle disputes, and decide which transactions counted as final.",
          },
          {
            label: "Bitcoin white paper",
            title: "Rules and network consensus replace the single scorekeeper",
            body: "Satoshi's proposal combined signatures, proof of work, and a shared transaction history so strangers could agree on one record of ownership in an open network.",
          },
        ],
        flow: [
          "October 31, 2008: the Bitcoin white paper is published",
          "It describes peer-to-peer electronic cash without a trusted third party",
          "January 2009: the first Bitcoin software and genesis block appear",
          "The idea moves from paper concept to a live public network",
        ],
      },
      {
        number: "02.3",
        layout: "anatomy",
        eyebrow: "What is a block?",
        headline: "A Bitcoin block is one packaged update to the ledger: ordered transactions plus the metadata that lets the network verify and link it.",
        description:
          "Think of a block as a container. Most of its payload is transactions, but it also carries summary data in the header and a unique identity that lets the rest of the chain point to it.",
        frameLabel: "Inside a Bitcoin block",
        segments: [
          {
            label: "Transactions",
            title: "A batch of ordered payments",
            body: "The block body contains individual Bitcoin transactions. Their order matters because the network will process them in that sequence when updating the ledger.",
          },
          {
            label: "Header data",
            title: "Metadata for verification",
            body: "The header summarizes the block with fields like the previous block hash, timestamp, difficulty target, and Merkle root so nodes can validate what this block claims.",
          },
          {
            label: "Block identity",
            title: "One fingerprint for the whole package",
            body: "When miners hash the header, they are trying to produce a valid block hash. That hash becomes the block's identity and is what the next block will reference.",
          },
        ],
        notes: [
          "A block is more than raw transactions; it also carries the data needed to verify and link them.",
          "The header is the bridge to the next lesson: hashing turns this metadata into a tamper-evident chain.",
          "Mining is about finding a valid block hash for that package, not creating money from nothing.",
        ],
      },
      {
        number: "02.4",
        layout: "hash-chain",
        eyebrow: "The chain and hashing",
        headline: "Bitcoin links blocks by storing the previous block's hash inside the next block's header.",
        description:
          "A hash is a compact fingerprint of block data. If one block changes, its fingerprint changes too, and the next block's stored reference no longer matches. That is why rewriting history breaks the chain unless later blocks are rebuilt as well.",
        frameLabel: "How one block points to the last one",
        chain: [
          {
            label: "Block 728,441",
            prevHash: "0000A1F9",
            hash: "0000C4B2",
            note: "Produces a block hash from its header.",
          },
          {
            label: "Block 728,442",
            prevHash: "0000C4B2",
            hash: "00008E31",
            note: "Stores the prior block hash in its header.",
          },
          {
            label: "Block 728,443",
            prevHash: "00008E31",
            hash: "0000D771",
            note: "Extends the same ordered history.",
          },
        ],
        tamperedChain: [
          {
            label: "Block 728,441",
            prevHash: "0000A1F9",
            hash: "0000C4B2",
            note: "This earlier block still matches the chain.",
          },
          {
            label: "Block 728,442*",
            prevHash: "0000C4B2",
            hash: "7F31AA09",
            note: "Edit one transaction and the block hash changes.",
            tone: "tampered",
          },
          {
            label: "Block 728,443",
            prevHash: "00008E31",
            hash: "0000D771",
            note: "Its stored previous hash no longer matches.",
            tone: "broken",
          },
        ],
        notes: [
          "Each block header carries the previous block's hash, so the chain is linked one block at a time.",
          "Change the contents of a past block and its hash changes immediately.",
          "That mismatch ripples forward: later blocks still point to the old hash, so the chain shows visible tampering.",
        ],
      },
      {
        number: "02.5",
        layout: "issuance",
        eyebrow: "Mining and halving",
        headline: "Mining adds new blocks through Proof of Work, and the block reward halves on a fixed schedule.",
        description:
          "Miners gather transactions and compete to find a valid block hash. When a miner wins, the network accepts a new block and issues the block reward. Roughly every 210,000 blocks, that reward is cut in half, so Bitcoin's new supply arrives more slowly over time.",
        processLabel: "How mining turns pending payments into one new block",
        process: [
          {
            title: "Pending transactions gather",
            body: "Miners select valid transactions from the mempool and assemble a candidate block.",
          },
          {
            title: "Proof of Work competition begins",
            body: "Each miner repeatedly hashes the block header with different nonces, searching for a hash below the difficulty target.",
          },
          {
            title: "One block wins the race",
            body: "The first miner to find a valid hash broadcasts the block so other nodes can verify it.",
          },
          {
            title: "Reward plus fees are issued",
            body: "If the block is accepted, the winning miner earns the block subsidy and transaction fees for that block.",
          },
        ],
        erasLabel: "Halvings reduce new issuance step by step",
        eras: [
          {
            label: "Launch era",
            title: "2009 to 2012",
            reward: "50 BTC",
            width: "100%",
            body: "Bitcoin starts with the largest subsidy so the network can bootstrap security and distribution.",
          },
          {
            label: "1st halving",
            title: "2012 to 2016",
            reward: "25 BTC",
            width: "50%",
            body: "After 210,000 blocks, the new bitcoin created per block is cut in half.",
          },
          {
            label: "2nd and 3rd halvings",
            title: "2016 to 2024",
            reward: "12.5 to 6.25 BTC",
            width: "25%",
            body: "Each halving keeps the same pattern: less new supply enters the market even as blocks continue.",
          },
          {
            label: "4th halving",
            title: "2024 onward",
            reward: "3.125 BTC",
            width: "12.5%",
            body: "The issuance schedule keeps stepping down until the subsidy becomes tiny and fees matter more.",
            tone: "active",
          },
        ],
        stats: [
          {
            label: "Block rhythm",
            value: "~10 min",
            body: "Bitcoin targets roughly one new block about every ten minutes on average.",
          },
          {
            label: "Halving trigger",
            value: "210,000 blocks",
            body: "The reward changes by block count, not by a vote or central policy meeting.",
          },
          {
            label: "Why it matters",
            value: "Slower issuance",
            body: "Halvings make Bitcoin's monetary policy predictable and increasingly scarce over time.",
          },
        ],
        notes: [
          "Mining is not just minting coins; it is the process that orders transactions into Bitcoin's shared ledger.",
          "The block reward has two parts: newly issued bitcoin plus the fees attached to transactions in that block.",
          "A halving cuts only the new issuance rate. The network keeps running, and miners still compete to produce blocks.",
        ],
      },
      {
        number: "02.6",
        layout: "issuance",
        eyebrow: "21M hard cap",
        headline: "Bitcoin's supply does not grow forever. New issuance keeps shrinking until total supply approaches 21 million BTC.",
        description:
          "The same halving schedule that slows new issuance also places a ceiling on total supply. Most bitcoin is issued early, later eras add much less, and no company or central bank can decide to print beyond the cap without the network accepting different rules.",
        processLabel: "How Bitcoin moves from new issuance toward a fixed ceiling",
        process: [
          {
            title: "Each block starts with a subsidy",
            body: "New bitcoin enters circulation only through the block subsidy paid to the miner who produces a valid block.",
          },
          {
            title: "Every halving cuts the flow in half",
            body: "After each 210,000-block interval, the subsidy shrinks, so each new era adds less bitcoin than the one before it.",
          },
          {
            title: "Most supply arrives early",
            body: "Because the reductions are geometric, the cumulative supply gets close to 21 million quickly but never jumps past it.",
          },
          {
            title: "The limit comes from the rules",
            body: "The hard cap is part of Bitcoin's monetary policy. Raising it would require widespread agreement to run different software.",
          },
        ],
        erasLabel: "Cumulative supply climbs fast early, then flattens toward 21M",
        eras: [
          {
            label: "After launch era",
            title: "2009 to 2012",
            reward: "10.5M BTC",
            width: "50%",
            body: "The first era issues half of the eventual supply because the subsidy begins at 50 BTC per block.",
          },
          {
            label: "After 1st halving",
            title: "2012 to 2016",
            reward: "15.75M BTC",
            width: "75%",
            body: "Another quarter of the total arrives in the second era, bringing cumulative supply to three quarters of the cap.",
          },
          {
            label: "After 3rd halving",
            title: "2016 to 2024",
            reward: "19.6875M BTC",
            width: "93.75%",
            body: "By the end of the 6.25 BTC era, nearly all bitcoin has already been issued even though the network keeps producing blocks.",
          },
          {
            label: "Long tail to the cap",
            title: "Future eras",
            reward: "< 21M BTC",
            width: "99.9%",
            body: "Later halvings add smaller and smaller amounts, so total supply approaches 21 million asymptotically rather than crossing above it.",
            tone: "active",
          },
        ],
        stats: [
          {
            label: "Maximum supply",
            value: "21M BTC",
            body: "Bitcoin's monetary policy aims at a fixed terminal supply instead of open-ended issuance.",
          },
          {
            label: "Issued by 2024 halving",
            value: "93.75%",
            body: "Most of the supply is already in circulation before the later eras, which is why halvings matter more for marginal new issuance than total stock.",
          },
          {
            label: "Who can raise it?",
            value: "No single actor",
            body: "Changing the cap would require the network to adopt different consensus rules, not a unilateral decision from one institution.",
          },
        ],
        notes: [
          "The 21 million figure is tied to Bitcoin's block subsidy schedule, not to a board meeting or discretionary monetary committee.",
          "Halvings affect the flow of new bitcoin entering circulation; the hard cap describes the eventual stock of bitcoin outstanding.",
          "In practice, people say the supply caps at 21 million even though the curve technically approaches that number over a very long tail.",
        ],
      },
      {
        number: "02.7",
        layout: "anatomy",
        eyebrow: "Nodes and decentralization",
        headline: "Bitcoin stays decentralized because thousands of nodes independently enforce the same rules and reject invalid history.",
        description:
          "A Bitcoin node is a computer running the Bitcoin software. It downloads blocks, checks transactions and consensus rules for itself, and only accepts the chain that matches those rules. The more this verification is spread across many operators and jurisdictions, the harder it is for one actor to censor activity or quietly rewrite the system.",
        frameLabel: "Why node operators matter more than one central server",
        segments: [
          {
            label: "Rule enforcement",
            title: "Nodes verify the ledger for themselves",
            body: "Every node checks block headers, signatures, and transaction validity against Bitcoin's consensus rules. It does not need to trust a company API to decide whether a payment or a block is legitimate.",
          },
          {
            label: "Nodes vs miners",
            title: "Miners produce blocks, but nodes decide whether those blocks count",
            body: "Miners compete to propose the next block through Proof of Work. Nodes still inspect that block and reject it if it breaks the rules, which is why mining power alone does not get to redefine Bitcoin.",
          },
          {
            label: "Distribution",
            title: "Wide node distribution improves censorship resistance and resilience",
            body: "When many people run nodes across different networks and countries, there is no single switch to shut off. If one provider, region, or company goes down, the rest of the network can keep relaying and validating the ledger.",
          },
        ],
        notes: [
          "A node is primarily a verifier and rule enforcer, not just a passive copy of the chain.",
          "Decentralization is operational: it depends on many independent operators running the software.",
          "Miners and nodes overlap sometimes in practice, but conceptually they play different roles in Bitcoin's design.",
        ],
      },
      {
        number: "02.8",
        layout: "anatomy",
        eyebrow: "Wallets and keys",
        headline: "A Bitcoin wallet is mostly a key manager: it helps you generate addresses, sign transactions, and prove control over coins recorded on the chain.",
        description:
          "Coins are not stored inside an app like files in a folder. The blockchain holds the shared record of ownership, while your wallet manages the keys that let you authorize spending from addresses you control.",
        frameLabel: "What a wallet actually controls",
        segments: [
          {
            label: "Public side",
            title: "Public keys and addresses tell the network where coins can be received",
            body: "A wallet can derive public-facing addresses from your keys. Other people can send bitcoin to those addresses, and everyone can see those outputs on the blockchain without learning your private key.",
          },
          {
            label: "Private side",
            title: "The private key is the secret that authorizes spending",
            body: "When you want to move bitcoin, the wallet uses a private key to create a digital signature. That signature proves you are allowed to spend the coins linked to that key without exposing the secret itself.",
          },
          {
            label: "Wallet software",
            title: "The wallet manages keys and signing, not a pile of coins inside the app",
            body: "The app helps you view balances, generate receive addresses, and sign transactions. If you restore the same keys in another wallet, you can still access the same coins because the blockchain, not the app, is the source of truth.",
          },
        ],
        notes: [
          "Public keys and addresses are for receiving; private keys are for authorizing spending.",
          "A wallet is an interface for key management and transaction signing.",
          "The coins live on the shared ledger as spendable outputs, not inside the wallet application itself.",
        ],
      },
      {
        number: "02.9",
        layout: "ledger",
        eyebrow: "Transactions and mempool",
        headline: "A Bitcoin transaction is pending in the mempool until a miner selects it for a block and the network confirms it.",
        description:
          "The mempool is the waiting area each node keeps for valid but unconfirmed transactions. After a wallet signs and broadcasts a transaction, nodes verify it, hold it in memory, and relay it onward. Miners then choose from that pool when assembling the next candidate block.",
        comparison: [
          {
            label: "Pending state",
            title: "The mempool is a queue of valid transactions still waiting for confirmation",
            body: "A transaction can be properly signed and accepted by nodes before it is final. While it sits in the mempool, it has been seen and checked, but it is not yet part of Bitcoin's permanent block history.",
          },
          {
            label: "Confirmed state",
            title: "A mined transaction moves from shared waiting room to shared history",
            body: "When a miner includes that transaction in a valid block and the network accepts the block, the transaction leaves the mempool and becomes part of the ledger other nodes sync and verify.",
          },
        ],
        flow: [
          "A wallet signs a transaction and broadcasts it to a Bitcoin node",
          "Nodes verify the format, signatures, and spendability, then place valid transactions in their mempool",
          "Miners pick transactions from the mempool when building a candidate block, often prioritizing higher-fee transactions",
          "Once the block is accepted by the network, the transaction gains confirmations and leaves the mempool",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Ethereum",
    children: [
      "What Ethereum adds beyond Bitcoin",
      "State, accounts, and the EVM",
      "Smart contracts and programmability",
    ],
  },
  {
    number: "04",
    title: "Smart Contracts",
    children: ["How contracts execute", "Common examples and risks"],
  },
  {
    number: "05",
    title: "Ethereum Values & CROPS",
    children: [
      "What CROPS stands for",
      "How values show up in ecosystem design",
    ],
  },
  {
    number: "06",
    title: "DeFi use-cases",
    children: [
      "Swaps, lending, and stablecoins",
      "Risks, composability, and real-world fit",
    ],
  },
  {
    number: "07",
    title: "The Ethereum community",
    children: [
      "Core teams, researchers, and builders",
      "How the ecosystem coordinates change",
    ],
  },
  {
    number: "08",
    title: "Gas & transaction fees",
    children: ["Why gas exists", "Fee market and user experience"],
  },
  {
    number: "09",
    title: "Wallets & Keys / EOA",
    children: ["EOAs, seed phrases, and signing", "Custody models and wallet UX"],
  },
  {
    number: "10",
    title: "Consensus",
    children: [
      "Proof of Work vs Proof of Stake",
      "Security assumptions and tradeoffs",
    ],
  },
  {
    number: "11",
    title: "Security & OPSEC",
    children: ["Common attack surfaces", "Practical safety habits"],
  },
];

export const slides = slideGroups.flatMap((group) => {
  const parent = {
    number: group.number,
    title: group.title,
    parentTitle: group.title,
    level: "parent",
    chrome: "Main topic",
    content: group.overview ?? null,
  };

  let contentIndex = 0;

  const children = group.children.map((child, childIndex) => {
    if (typeof child === "string") {
      const content = group.childContent?.[contentIndex] ?? null;
      contentIndex += 1;

      return {
        number: `${group.number}.${childIndex + 1}`,
        title: child,
        parentTitle: group.title,
        level: "child",
        chrome: "Subtopic",
        content,
      };
    }

    return {
      number: child.number,
      title: child.title,
      parentTitle: group.title,
      level: "child",
      chrome: "Subtopic",
      content: child.content ?? null,
    };
  });

  return [parent, ...children];
});
