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
