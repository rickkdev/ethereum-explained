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
    overview: {
      eyebrow: "Chapter 03",
      headline: "Ethereum turned the blockchain from a payment rail into a general-purpose computing platform.",
      intro:
        "Bitcoin proved that a public network could keep one trustworthy money ledger. Ethereum keeps the shared-history idea, then adds a programmable execution layer so developers can build applications directly on-chain.",
      pillars: [
        {
          title: "Beyond transfers",
          body: "Ethereum is not limited to sending value from one address to another. It can run application logic, manage digital assets, and coordinate many kinds of shared state.",
        },
        {
          title: "Programmable state",
          body: "Accounts, balances, contract storage, and code all live inside one evolving system state that every node can verify and reproduce.",
        },
        {
          title: "What this chapter covers",
          body: "We move from why Ethereum exists into accounts and state, the EVM, and the idea of smart contracts as software on a blockchain.",
        },
      ],
      callout: "Ethereum extends the blockchain idea from digital money to shared computation.",
      footer: "From Bitcoin-style ledgers to accounts, state, and on-chain applications",
    },
    childContent: [
      {
        number: "03.1",
        layout: "ledger",
        eyebrow: "What Ethereum adds beyond Bitcoin",
        headline: "Bitcoin proved scarce digital money. Ethereum keeps that foundation, then adds a programmable execution layer on top.",
        description:
          "Both networks maintain a shared history that nodes can verify. The difference is scope: Bitcoin is optimized around money and settlement, while Ethereum was designed so transactions can also trigger application logic and update shared on-chain state.",
        comparison: [
          {
            label: "Bitcoin",
            title: "A blockchain focused on money and transaction settlement",
            body: "Bitcoin's design is intentionally narrow. It excels at recording ownership, moving value, and enforcing monetary rules, but it does not aim to be a broad application platform for many kinds of on-chain logic.",
          },
          {
            label: "Ethereum",
            title: "A blockchain that can also run shared application logic",
            body: "Ethereum still moves assets between accounts, but transactions can also call code, change contract storage, mint tokens, and coordinate applications that many users interact with through the same chain state.",
          },
        ],
        flow: [
          "Bitcoin showed that a public network can agree on one trustworthy history without a central operator",
          "Developers then asked for a blockchain that could do more than record payments",
          "Ethereum introduced transactions that can execute code and update shared application state",
          "That shift makes the chain a platform for tokens, apps, and smart contracts instead of only money transfer",
        ],
      },
      {
        number: "03.2",
        layout: "anatomy",
        eyebrow: "State, accounts, and the EVM",
        headline: "Ethereum keeps one shared state machine: accounts hold data, transactions request changes, and the EVM computes the next valid state.",
        description:
          "Instead of tracking only who paid whom, Ethereum tracks account balances, contract code, and contract storage. When a transaction arrives, every node runs the same computation in the Ethereum Virtual Machine, then updates the shared state if the execution is valid.",
        frameLabel: "How Ethereum turns transactions into state changes",
        segments: [
          {
            label: "Accounts",
            title: "Every address points to an account with current data",
            body: "Ethereum organizes the system around accounts. Externally owned accounts can send transactions, while contract accounts also store code and persistent storage. Together they define the current snapshot the network is agreeing on.",
          },
          {
            label: "Shared state",
            title: "Balances, storage, and code live in one evolving record",
            body: "The chain is not just a list of transfers. It is a shared state that includes ETH balances, token balances, contract variables, and deployed program code. Each block moves that global state from one version to the next.",
          },
          {
            label: "EVM execution",
            title: "Transactions are executed before the state is updated",
            body: "When a transaction calls a contract, nodes run the same instructions inside the EVM. If execution succeeds under the protocol rules, the resulting balance changes, storage writes, and emitted outputs become the next accepted state.",
          },
        ],
        notes: [
          "A transaction is a request to change Ethereum's shared state, not just a message to move coins.",
          "The EVM is the common execution environment that lets every node reproduce the same result from the same input.",
          "This is the bridge to smart contracts: contract code is what the EVM runs when transactions interact with applications on-chain.",
        ],
      },
      {
        number: "03.3",
        layout: "ledger",
        eyebrow: "Smart contracts and programmability",
        headline: "A smart contract is on-chain code that runs the same way for every participant and updates shared state when its rules are triggered.",
        description:
          "Instead of asking one company server to execute business logic, Ethereum lets transactions call contract code that lives on the chain itself. That makes behaviors like token issuance, escrow release, and automated exchange logic part of the shared state machine every node can verify.",
        comparison: [
          {
            label: "Traditional app logic",
            title: "One backend decides what the program should do",
            body: "In a normal web app, the rules for balances, permissions, or payouts run on a company's server. Users can interact with the product, but they cannot independently verify or reproduce the exact execution environment.",
          },
          {
            label: "Smart contract logic",
            title: "Shared code executes against the same chain state",
            body: "On Ethereum, the contract code and storage live on-chain. When a transaction calls that code, every node runs the same instructions and arrives at the same state update, which is why the application logic becomes part of the network itself.",
          },
        ],
        flow: [
          "A developer deploys contract code to an address on Ethereum",
          "A user sends a transaction that calls one of the contract's functions",
          "The EVM executes the code against the current shared state",
          "The result can transfer tokens, release escrow, record votes, or update application storage for everyone",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Smart Contracts",
    children: ["How contracts execute", "Common examples and risks"],
    overview: {
      eyebrow: "Chapter 04",
      headline: "Smart contracts are deterministic programs on a blockchain: rules go on-chain, and outcomes follow from the code plus current state.",
      intro:
        "Ethereum lets developers deploy software that many users can call through the same shared state machine. That creates new coordination tools, but it also means bugs, bad assumptions, and upgrade choices become part of the system's real risk surface.",
      pillars: [
        {
          title: "Programs on-chain",
          body: "A smart contract is code stored at an address. Users send transactions to its functions, and every node executes the same logic against the same state.",
        },
        {
          title: "Rules create outcomes",
          body: "Contracts can move assets, update storage, enforce conditions, and coordinate users without a central operator manually approving each step.",
        },
        {
          title: "Power with constraints",
          body: "Because the code is public, stateful, and hard to change safely, developers must think about bugs, exploits, gas costs, and upgrade paths from the start.",
        },
      ],
      callout: "Smart contracts are not magic agreements. They are software with explicit rules, predictable execution, and real failure modes.",
      footer: "From execution flow to practical examples, risks, and tradeoffs",
    },
    childContent: [
      {
        number: "04.1",
        layout: "pipeline",
        eyebrow: "How contracts execute",
        headline: "A contract call follows a repeatable path: code is deployed once, users call functions through transactions, the EVM runs the logic, and the shared state updates if execution succeeds.",
        description:
          "Smart contract execution is deterministic, not magical. The contract code lives on-chain at an address, a user submits a transaction that targets one of its functions, and every node replays the same computation against the same current state before accepting the result.",
        stages: [
          {
            title: "Deploy the code",
            body: "A developer publishes contract bytecode to Ethereum. Once the deployment transaction is accepted, the contract exists at an address with code and, often, initial storage.",
          },
          {
            title: "Call a function",
            body: "A wallet sends a transaction to that contract address with function data and any required ETH. This transaction is a request for the network to run a specific piece of contract logic.",
          },
          {
            title: "Every node executes it",
            body: "When the transaction is included in a block, each node runs the same contract code inside the EVM using the same inputs and current state. Determinism matters: honest nodes should compute the same result independently.",
          },
          {
            title: "State changes become shared history",
            body: "If execution succeeds under the protocol rules, balances, storage values, and emitted outputs are updated in Ethereum's shared state. If it fails, the intended state change does not go through.",
          },
        ],
        notes: [
          "Deployment is how code gets onto the chain; calling is how users ask that code to run.",
          "Nodes do not trust one server's answer. They reproduce the same execution themselves.",
          "The contract can only act on the current on-chain state plus the transaction inputs it receives.",
        ],
      },
      {
        number: "04.2",
        layout: "ledger",
        eyebrow: "Common examples and risks",
        headline: "Smart contracts can automate tokens, escrow, and voting, but the same automation makes bugs and governance mistakes matter immediately.",
        description:
          "Useful contract systems turn shared rules into software that anyone can inspect and call. That power comes with sharp edges: if the code has a flaw, the exploit path can be just as automatic as the intended behavior, and even a safe contract can become risky if its upgrade process is unclear.",
        comparison: [
          {
            label: "Common examples",
            title: "Contracts make repeated coordination tasks explicit and automatic",
            body: "A token contract tracks balances and transfer rules, an escrow contract holds funds until agreed conditions are met, and a governance contract records votes and enforces outcomes without one operator editing a private database.",
          },
          {
            label: "Common risks",
            title: "The chain executes flawed logic just as faithfully as correct logic",
            body: "A bug can freeze or leak funds, an exploit can abuse a hidden edge case, and an upgrade path can introduce governance risk if users are no longer sure who can change the rules after deployment.",
          },
        ],
        flow: [
          "Developers encode the business rules into contract functions and storage",
          "Users depend on those rules for tokens, escrow, exchanges, or voting",
          "If the logic is sound, the workflow is transparent and repeatable for everyone",
          "If the logic is flawed, the same automation can scale the failure or exploit just as fast",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Ethereum Values & CROPS",
    children: [
      "What CROPS stands for",
      "How values show up in ecosystem design",
    ],
    overview: {
      eyebrow: "Chapter 05",
      headline: "Ethereum is also a culture: the ecosystem keeps returning to a small set of values that shape how it builds.",
      intro:
        "This chapter shifts from protocol mechanics to design principles. Instead of asking only what Ethereum can do, it asks what kinds of systems the community tends to prefer and why those values show up in tools, governance, and public infrastructure.",
      pillars: [
        {
          title: "Values guide design",
          body: "Ethereum is not one company with one product strategy. Shared values help explain why the ecosystem keeps favoring certain technical and social choices.",
        },
        {
          title: "CROPS is a memory aid",
          body: "The CROPS framework bundles several recurring Ethereum principles into one simple acronym so learners can scan and remember them more easily.",
        },
        {
          title: "Ideas become institutions",
          body: "These values do not stay abstract. They show up in open-source norms, public goods funding, protocol choices, and how the ecosystem thinks about coordination.",
        },
      ],
      callout: "Technical systems reflect human values. Ethereum's architecture makes more sense once you see the principles behind it.",
      footer: "From cultural principles to visible ecosystem design choices",
    },
    childContent: [
      {
        number: "05.1",
        layout: "anatomy",
        eyebrow: "What CROPS stands for",
        headline: "CROPS is a compact way to remember the values Ethereum keeps trying to protect in practice.",
        description:
          "The recent Ethereum Foundation mandate describes Ethereum as needing to remain censorship resistant, open source, private, and secure. This slide turns that phrase into a teachable framework: one value is about access, one about resistance to control, one about transparent building, one about user privacy, and one about system safety.",
        frameLabel: "Reading the CROPS framework left to right",
        segments: [
          {
            label: "C",
            title: "Censorship",
            body: "Ethereum aims to let valid users and transactions participate without a platform owner deciding who is allowed to speak, publish, or transact.",
          },
          {
            label: "R",
            title: "Resistance",
            body: "The point is not just anti-censorship in theory. The infrastructure should resist pressure from states, companies, or intermediaries that want to block or reshape usage.",
          },
          {
            label: "O",
            title: "Open source",
            body: "Core software, standards, and tooling are developed in public so anyone can inspect the code, contribute improvements, or build compatible alternatives.",
          },
          {
            label: "P",
            title: "Privacy",
            body: "Users should not have to reveal every detail about themselves just to participate. Privacy protects safety, dignity, and room for self-sovereign action.",
          },
          {
            label: "S",
            title: "Security",
            body: "Assets, applications, and the base protocol need strong guarantees against theft, corruption, and accidental failure so people can rely on the system.",
          },
        ],
        notes: [
          "C and R belong together: censorship resistance is stronger than a promise from one company to behave well.",
          "Open source is about inspectability and exit, not just putting code on GitHub.",
          "Privacy and security are separate values: one protects information and autonomy, the other protects funds and system integrity.",
        ],
      },
      {
        number: "05.2",
        layout: "anatomy",
        eyebrow: "How values show up in ecosystem design",
        headline: "Ethereum's values become visible when you look at what the ecosystem keeps building, funding, and defending.",
        description:
          "CROPS matters because it changes design choices. The ecosystem tends to favor permissionless access over gatekeepers, open standards over closed platforms, privacy tools over total transparency by default, and cautious security practices over fast but brittle upgrades.",
        frameLabel: "From principle to concrete ecosystem choice",
        segments: [
          {
            label: "C + R",
            title: "Permissionless access and resistance to control",
            body: "Ethereum applications are typically built so a wallet can connect and interact directly without asking a platform operator for approval first. The same instinct shows up in resistance to app-store style chokepoints, infrastructure monocultures, and governance patterns that would let one actor quietly decide who gets to participate.",
          },
          {
            label: "O",
            title: "Open-source clients, standards, and exits",
            body: "Core clients, wallets, SDKs, and standards like ERCs are developed in public so others can inspect them, fork them, or build compatible alternatives. That is why the ecosystem has multiple clients, many wallet interfaces, and shared token standards instead of one official product stack.",
          },
          {
            label: "P",
            title: "Privacy shows up as a design goal, even when it is incomplete",
            body: "The chain is transparent, but the ecosystem still keeps pushing for better privacy through practices like new-address hygiene, selective disclosure, zero-knowledge tooling, and products that minimize what users must reveal just to use an application.",
          },
          {
            label: "S",
            title: "Security-first culture slows down high-risk change",
            body: "Critical systems are expected to go through audits, formal review, bug bounties, staged rollouts, and conservative upgrade debates. Client diversity, careful protocol changes, and strong key-management habits all reflect the idea that protecting user funds and network integrity matters more than shipping quickly.",
          },
        ],
        notes: [
          "These values are visible in product defaults, open standards, funding priorities, and governance habits, not just in mission statements.",
          "Privacy is aspirational as well as practical in Ethereum today: the value shapes roadmaps even when the current user experience is still imperfect.",
          "The useful teaching move is principle to manifestation: ask what a value caused the ecosystem to build or defend.",
        ],
      },
    ],
  },
  {
    number: "06",
    title: "DeFi use-cases",
    children: [
      "Swaps, lending, and stablecoins",
      "Risks, composability, and real-world fit",
    ],
    overview: {
      eyebrow: "Chapter 06",
      headline: "DeFi turns financial activities into open on-chain building blocks instead of closed products run by one institution.",
      intro:
        "This chapter introduces decentralized finance at the level of primitives rather than trading jargon. The goal is to see how swaps, lending markets, and stable-value assets work as reusable pieces of software, while keeping the tradeoffs visible: transparency, programmability, and open access can create useful new coordination patterns, but they also expose users to smart-contract risk, liquidation risk, and market structure problems.",
      pillars: [
        {
          title: "Finance becomes modular",
          body: "Instead of one bank or broker bundling everything together, DeFi breaks common financial functions into protocols for exchange, borrowing, collateral, and settlement.",
        },
        {
          title: "Protocols can compose",
          body: "Because these systems are on-chain and programmable, one application can build on another. A wallet, a swap, a lending market, and a stablecoin can all connect inside one user flow.",
        },
        {
          title: "Opportunity comes with protocol risk",
          body: "Open access and automation can be powerful, but they do not remove risk. Code flaws, cascading liquidations, oracle failures, and poor market design still matter.",
        },
      ],
      callout: "DeFi is best understood as reusable financial infrastructure: legible, programmable, and sometimes fragile.",
      footer: "From core primitives to composability, failure modes, and practical fit",
    },
    childContent: [
      {
        number: "06.1",
        layout: "anatomy",
        eyebrow: "Swaps, lending, and stablecoins",
        headline: "Three DeFi primitives show up again and again: swaps move between assets, lending markets turn collateral into credit, and stablecoins try to keep one unit close to one dollar.",
        description:
          "The easiest way to read DeFi is by function. One protocol category helps users exchange assets, another lets them borrow against posted collateral, and another provides a steadier unit of account so prices, loans, and payments are easier to reason about on-chain.",
        frameLabel: "Reading core DeFi primitives by job to be done",
        segments: [
          {
            label: "Swaps",
            title: "Swap protocols let users trade one asset for another on-chain",
            body: "A swap protocol is the exchange layer of DeFi. Instead of sending funds to a centralized broker, users interact with a contract that quotes a price path and settles the trade against on-chain liquidity, such as swapping ETH for USDC or one token for another.",
          },
          {
            label: "Lending",
            title: "Lending markets turn posted collateral into borrowable liquidity",
            body: "A lending protocol lets users deposit assets into shared pools and borrow against collateral they lock on-chain. One user earns yield by supplying liquidity, while another can unlock short-term capital without selling the asset they already hold.",
          },
          {
            label: "Stablecoins",
            title: "Stablecoins provide the relatively steady unit that many DeFi workflows depend on",
            body: "Stablecoins are blockchain-based assets designed to track something less volatile, usually the US dollar. They matter because traders, borrowers, and apps often need a predictable reference asset for quoting prices, posting collateral, or making payments without taking full crypto price risk every step of the way.",
          },
        ],
        notes: [
          "Swaps answer exchange, lending answers credit, and stablecoins answer price stability and settlement.",
          "These primitives often connect in one user flow: swap into collateral, borrow a stablecoin, then move that stable asset elsewhere.",
          "Thinking in protocol roles first makes later composability slides easier to teach than starting with brand names or token jargon.",
        ],
      },
      {
        number: "06.2",
        layout: "ledger",
        eyebrow: "Risks, composability, and real-world fit",
        headline: "DeFi is powerful because protocols can stack together, but that same composability can turn one weak link into a larger failure.",
        description:
          "On-chain finance is modular: a wallet can connect to a swap, a lending market can rely on a stablecoin, and an app can build on all of them. That openness creates new product possibilities, but it also means liquidation engines, oracle inputs, smart-contract code, and thin markets can amplify each other's problems.",
        comparison: [
          {
            label: "Composability",
            title: "Protocols can plug into each other like financial Lego",
            body: "A user might swap into collateral, deposit it into a lending market, borrow a stablecoin, and move that stable asset into another app without leaving the chain. Shared standards and visible state make those connections possible.",
          },
          {
            label: "Fragility and fit",
            title: "Open finance still has sharp edges and does not fit every need",
            body: "Smart-contract bugs, forced liquidations, oracle mistakes, MEV-heavy market structure, and shallow liquidity can all hurt users. DeFi fits best when programmability and open access matter more than chargebacks, customer support, or strong legal recourse.",
          },
        ],
        flow: [
          "A user starts with one on-chain asset in a wallet",
          "That asset is swapped or posted as collateral in another protocol",
          "The next app depends on prices, code, and liquidity from the earlier layers",
          "If one layer breaks or markets move fast, risk can cascade through the full stack",
        ],
      },
    ],
  },
  {
    number: "07",
    title: "The Ethereum community",
    children: [
      "Core teams, researchers, and builders",
      "How the ecosystem coordinates change",
    ],
    overview: {
      eyebrow: "Chapter 07",
      headline: "Ethereum is not one company shipping one product. It is a many-sided ecosystem coordinating around shared infrastructure.",
      intro:
        "To understand Ethereum, you have to look beyond the protocol itself. Researchers, client teams, application builders, educators, node operators, and community stewards all shape how the network evolves, which is why governance looks more like rough coordination than top-down management.",
      pillars: [
        {
          title: "Many roles, one ecosystem",
          body: "Ethereum depends on different groups doing different jobs: some research upgrades, some maintain clients, some build applications, and some operate infrastructure that keeps the network usable.",
        },
        {
          title: "Social and technical layers",
          body: "The chain runs on software, but software choices come from discussion, research, implementation, testing, and community buy-in. The ecosystem is social coordination plus protocol engineering together.",
        },
        {
          title: "What this chapter covers",
          body: "We first map the major actor groups, then show how Ethereum changes through discussions, EIPs, client work, and network upgrades without a single central controller.",
        },
      ],
      callout: "Ethereum works because many independent groups keep aligning on the same shared system, not because one organization commands the network.",
      footer: "From ecosystem roles to rough consensus, client work, and protocol change",
    },
    childContent: [
      {
        number: "07.1",
        layout: "anatomy",
        eyebrow: "Core teams, researchers, and builders",
        headline: "Ethereum has a recognizable set of actor groups, but they do different jobs and none of them is the single owner of the network.",
        description:
          "The ecosystem has human shape once you separate research, client implementation, and application building. These groups overlap in practice, but they contribute at different layers and depend on each other to move the network forward.",
        frameLabel: "Who does what in the Ethereum ecosystem",
        segments: [
          {
            label: "Research and stewardship",
            title: "Core researchers and foundation-style teams explore protocol direction",
            body: "Researchers study upgrades, tradeoffs, and security assumptions. Stewardship groups often fund work, coordinate discussion, and help keep long-term priorities visible, but they do not control the chain by decree.",
          },
          {
            label: "Client teams",
            title: "Independent client teams turn protocol ideas into production software",
            body: "Execution and consensus clients implement Ethereum's rules in code, test upgrades, fix bugs, and ship releases that validators and node operators can run. Multiple teams matter because client diversity reduces reliance on one codebase.",
          },
          {
            label: "Builders",
            title: "Application builders, tooling teams, and educators make the ecosystem usable",
            body: "Wallet teams, app developers, infrastructure providers, educators, and community organizers turn protocol capability into things people can actually use. They also surface pain points that feed back into future research and client work.",
          },
        ],
        notes: [
          "Ethereum has influential institutions and teams, but not one central operator with unilateral control.",
          "Client teams are distinct from researchers: one group studies and proposes, the other implements and ships network software.",
          "Builders give the ecosystem its visible products, but those products still depend on the protocol and client layers underneath.",
        ],
      },
      {
        number: "07.2",
        layout: "pipeline",
        eyebrow: "How the ecosystem coordinates change",
        headline: "Ethereum changes through rough coordination: ideas are debated socially, specified technically, implemented by multiple teams, and only then activated on the network.",
        description:
          "No single leader flips a master switch for Ethereum. Change usually starts in public discussion, matures through research and EIPs, moves into independent client implementation and testing, and reaches the chain only if enough operators choose to adopt the upgrade together.",
        stages: [
          {
            title: "Discussion and problem framing",
            body: "A pain point, security concern, or design opportunity is debated across calls, forums, research posts, and community conversations. Social alignment starts here: people need to agree that the problem is real and worth changing.",
          },
          {
            title: "Research and EIP design",
            body: "Researchers and contributors turn the idea into a more precise proposal, often through an Ethereum Improvement Proposal. Tradeoffs, security assumptions, and compatibility questions are made explicit before anyone treats the change as ready.",
          },
          {
            title: "Client implementation and testing",
            body: "Independent client teams implement the proposal in code, compare behavior across clients, and test whether the upgrade works safely in practice. This is where social intent has to survive engineering reality.",
          },
          {
            title: "Adoption and network upgrade",
            body: "Validators, node operators, infrastructure providers, and apps choose whether to run software that includes the change. If enough of the ecosystem upgrades in coordination, the new rules become part of Ethereum's live network.",
          },
        ],
        notes: [
          "Ethereum governance is social and technical together: discussion matters, but implementation and adoption matter too.",
          "EIPs help structure change, but they do not force the network to accept an idea automatically.",
          "Network upgrades succeed because many independent actors coordinate on the same new software, not because one company commands them to.",
        ],
      },
    ],
  },
  {
    number: "08",
    title: "Gas & transaction fees",
    children: ["Why gas exists", "Fee market and user experience"],
    overview: {
      eyebrow: "Chapter 08",
      headline: "Gas is how Ethereum prices scarce computation and block space.",
      intro:
        "Fees are not just an annoyance layered on top of the network. They are part of how Ethereum meters execution, limits congestion, and decides which transactions get included when many users want the same shared resources at once.",
      pillars: [
        {
          title: "Computation is scarce",
          body: "Every contract call uses processing, storage access, and limited block capacity. Gas turns that resource use into a measurable cost instead of letting demand grow without limits.",
        },
        {
          title: "Fees manage contention",
          body: "When more users compete for the same block space, fees help prioritize what gets included first. The fee market is how the network handles congestion without a central scheduler.",
        },
        {
          title: "Users feel the tradeoff",
          body: "Wallets surface gas as a practical choice about speed, timing, and cost. This chapter connects protocol-level resource pricing to the real transaction experience users see on screen.",
        },
      ],
      callout: "Gas is Ethereum's resource meter: it prices execution so shared computation stays bounded and prioritizable.",
      footer: "From scarce block space to fee markets and wallet-level user experience",
    },
    childContent: [
      {
        number: "08.1",
        layout: "anatomy",
        eyebrow: "Why gas exists",
        headline: "Gas exists so Ethereum can measure resource usage before the network commits shared computation and storage.",
        description:
          "Gas is not an arbitrary surcharge added after the fact. It is the unit Ethereum uses to meter how much work a transaction asks the network to do, so scarce block space and state growth are allocated with rules instead of guesswork.",
        frameLabel: "Why Ethereum meters execution",
        segments: [
          {
            label: "What gas measures",
            title: "Computation, storage access, and state changes",
            body: "Different EVM operations consume different amounts of gas because they place different demands on the network. A simple transfer, a contract call, and writing new data to storage do not all cost the same amount of work.",
          },
          {
            label: "Why it matters",
            title: "Spam resistance and bounded shared resources",
            body: "If execution were free, attackers could flood the network with pointless computation or huge storage writes. Gas makes every action carry a resource cost, which discourages spam and keeps block capacity available for users willing to pay for real demand.",
          },
          {
            label: "What it is not",
            title: "Not the full fee formula by itself",
            body: "Gas tells Ethereum how much work an action requires. The actual amount a user pays depends on fee-market pricing layered on top of that meter, which is the next slide's topic rather than this one.",
          },
        ],
        notes: [
          "Gas is a protocol meter first and a wallet cost second.",
          "The network uses gas to allocate scarce computation and storage more fairly under congestion.",
          "Keep the distinction clear: gas describes workload, while total fees depend on market pricing.",
        ],
      },
      {
        number: "08.2",
        layout: "ledger",
        eyebrow: "Fee market and user experience",
        headline: "When block space is crowded, users compete with fees, and that competition changes both transaction cost and waiting time.",
        description:
          "Ethereum does not have a central scheduler deciding whose transaction matters most. When demand rises above available block space, wallets turn the fee market into a user choice: pay more for faster inclusion, wait longer, or come back when congestion eases.",
        comparison: [
          {
            label: "Lighter demand",
            title: "Plenty of room keeps transaction costs calmer",
            body: "When blocks are not heavily contested, users do not need to outbid each other aggressively. Wallet estimates tend to look more stable, and ordinary transactions are more likely to land quickly without much tuning from the sender.",
          },
          {
            label: "Crowded demand",
            title: "Competition pushes fees up and slower bids wait",
            body: "When NFT mints, market volatility, or popular app activity crowd the network, more transactions chase the same limited block space. Users willing to pay higher fees are more likely to be included first, while lower bids can sit pending until demand cools or the sender reprices.",
          },
        ],
        flow: [
          "A wallet estimates the current fee market and suggests a price for the user's desired speed.",
          "The signed transaction enters the network and competes with other pending transactions for limited block space.",
          "Validators usually include the transactions that offer more attractive fees first when demand is high.",
          "The result is user-visible: higher costs during congestion and longer waiting times for lower-fee transactions.",
        ],
      },
    ],
  },
  {
    number: "09",
    title: "Wallets & Keys / EOA",
    children: ["EOAs, seed phrases, and signing", "Custody models and wallet UX"],
    overview: {
      eyebrow: "Chapter 09",
      headline: "Wallets are how users control blockchain accounts: they manage keys, produce signatures, and define who actually holds custody.",
      intro:
        "A wallet is the interface between a person and the chain. On Ethereum, that means understanding externally owned accounts, the private key material behind them, and the tradeoff between controlling your own keys or delegating that responsibility to someone else.",
      pillars: [
        {
          title: "Control",
          body: "An externally owned account is controlled by private key material. The wallet helps the user access that account, inspect activity, and authorize actions, but the underlying authority comes from the keys.",
        },
        {
          title: "Signing",
          body: "Transactions and messages are not approved by a company account page. They are authorized with cryptographic signatures, which is why seed phrases, backups, and device security matter so much.",
        },
        {
          title: "Custody",
          body: "Some wallets leave the keys entirely with the user, others keep them with an exchange or service, and many products sit somewhere in between. The UX tradeoff is convenience versus direct control.",
        },
      ],
      callout: "The wallet is the user's control surface, but the real power lies in who can produce a valid signature.",
      footer: "From EOAs and seed phrases to self-custody, custodians, and wallet tradeoffs",
    },
    childContent: [
      {
        number: "09.1",
        layout: "anatomy",
        eyebrow: "EOAs, seed phrases, and signing",
        headline: "An Ethereum wallet gives you access to an externally owned account, but the real authority comes from the secret material that can produce valid signatures.",
        description:
          "For beginners, the key mental model is simple: the account is the public identity on-chain, the seed phrase or private key is the recovery secret behind it, and signing is the act that proves control without revealing that secret to the network.",
        frameLabel: "Three layers of wallet control",
        segments: [
          {
            label: "EOA",
            title: "An externally owned account is a user-controlled address on Ethereum",
            body: "An EOA has an address, can hold ETH and tokens, and can start transactions. Unlike a smart-contract account, it does not run its own code. It acts because someone with the right key material authorizes an action on its behalf.",
          },
          {
            label: "Seed phrase",
            title: "The seed phrase is a human backup for deriving wallet keys",
            body: "Most modern wallets give the user a recovery phrase that can regenerate the private keys for that wallet. It is not something you share in normal use. It is a backup secret, and anyone who gets it can usually recreate the same wallet control on another device.",
          },
          {
            label: "Signing",
            title: "A signature proves control without exposing the private key itself",
            body: "When you send a transaction or approve a message, the wallet uses the private key to create a signature. Nodes and applications can verify that signature against the public address, which is why the network can trust the authorization without ever seeing the secret.",
          },
        ],
        notes: [
          "The wallet app is the interface; the EOA is the on-chain account that others can see and interact with.",
          "The recovery phrase is for backup and restoration, not for routine transaction flow or customer support.",
          "Signing is the core act of authorization: it is how a user proves, \"I control this account,\" without publishing the secret.",
        ],
      },
    ],
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
