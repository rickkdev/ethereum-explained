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
          "Each new valid block is added to the end of the chain. As that happens, the older blocks move further into history and the shared record grows one step at a time.",
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
      {
        number: "02.8.1",
        title: "How a wallet actually sends a transaction",
        content: {
          layout: "anatomy",
          eyebrow: "Wallet transaction flow",
          headline: "A wallet sends a transaction in five simple steps: review, build, sign, verify, and broadcast.",
          description:
            "Use this slide as the mental model for a Bitcoin wallet such as Sparrow, Electrum, or a hardware-wallet companion app: the app shows the request, prepares the transaction, gets a signature, and sends the signed transaction to a Bitcoin node.",
          frameLabel: "From wallet click to node relay",
          segments: [
            {
              label: "Frontend",
              title: "1. Review the transaction in the wallet UI",
              bullets: [
                "Check the network, address, amount, and fee",
                "For contract calls, inspect the method or prompt",
                "This screen is your chance to catch bad data",
              ],
            },
            {
              label: "Builder",
              title: "2. The wallet builds the exact message",
              bullets: [
                "The wallet selects coins to spend and creates outputs",
                "It sets the destination, change address, and fee",
                "Those fields become the transaction to be signed",
              ],
            },
            {
              label: "Hot wallet",
              title: "3A. Hot wallet signing happens on your device",
              bullets: [
                "The private key stays in the browser or phone wallet",
                "The app unlocks it locally and creates the signature",
                "Fast and convenient, but the device is part of the risk",
              ],
            },
            {
              label: "Hardware wallet",
              title: "3B. Hardware wallet signing happens on a separate device",
              bullets: [
                "The computer sends an unsigned transaction to the hardware wallet",
                "You verify key details on the hardware wallet screen",
                "The device signs and returns only the signature",
              ],
            },
            {
              label: "Verification",
              title: "4. The signature proves control of the account",
              bullets: [
                "The private key is not revealed",
                "The signature is tied to the exact transaction data",
                "If someone changes the data later, the signature fails",
              ],
            },
            {
              label: "Broadcast",
              title: "5. The wallet sends the signed payload to a node",
              bullets: [
                "The wallet sends the signed transaction to a Bitcoin node or wallet server",
                "The node checks format, signatures, and whether the inputs are spendable",
                "If valid, the transaction enters the mempool and is relayed",
              ],
            },
          ],
          notes: [
            "What you review in the wallet should match the transaction fields being signed.",
            "Hot wallets keep signing on the connected device; hardware wallets move signing to a separate device.",
            "If the payload changes after signing, the node rejects it because the signature no longer matches.",
          ],
        },
      },
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
        layout: "hash-chain-motion",
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
        layout: "mining-motion",
        eyebrow: "Mining and halving",
        headline: "Mining adds new blocks through Proof of Work, and the block reward halves on a fixed schedule.",
        description:
          "This animation turns the static model into a loop: candidate blocks rise out of the mempool, miners race nonces against the target, one accepted block joins the chain, and the attached subsidy shrinks across halving eras.",
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
      {
        number: "03.2.1",
        title: "What the EVM is",
        content: {
          layout: "anatomy",
          eyebrow: "What the EVM is",
          headline: "The EVM is Ethereum's shared execution engine.",
          description:
            "Keep the idea simple: when a transaction calls contract code, every node uses the EVM to run the same instructions and check the same result.",
          frameLabel: "Three things to remember",
          segments: [
            {
              label: "Definition",
              title: "What it is",
              bullets: [
                "EVM means Ethereum Virtual Machine",
                "It is the environment that runs smart-contract code",
                "Every Ethereum node uses the same execution rules",
              ],
            },
            {
              label: "Role",
              title: "What it does",
              bullets: [
                "Takes a transaction and current state as input",
                "Executes the contract instructions",
                "Returns the state changes if execution is valid",
              ],
            },
            {
              label: "Why it matters",
              title: "Why it matters",
              bullets: [
                "All honest nodes should get the same result",
                "That shared result lets apps run on-chain",
                "This is why Ethereum can be more than payments",
              ],
            },
          ],
          notes: [
            "The EVM is not one server. It is a common execution model used by all nodes.",
            "Smart contracts run inside the EVM.",
            "Same input plus same rules should produce the same output.",
          ],
        },
      },
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
          "Ethereum does more than track transfers. It tracks accounts, balances, code, and storage, then uses the EVM to compute the next shared state.",
        frameLabel: "How Ethereum turns transactions into state changes",
        segments: [
          {
            label: "Accounts",
            title: "Every address maps to an account",
            bullets: [
              "EOAs can send transactions",
              "Contract accounts also hold code and storage",
              "Together they make up the current snapshot of Ethereum",
            ],
          },
          {
            label: "Shared state",
            title: "The chain stores one evolving state",
            bullets: [
              "ETH balances are part of it",
              "Token balances and contract variables are part of it",
              "Deployed contract code is part of it too",
            ],
          },
          {
            label: "EVM execution",
            title: "The EVM runs the transaction before state updates",
            bullets: [
              "Each node runs the same instructions",
              "Valid execution produces the same result everywhere",
              "That result becomes the next accepted state",
            ],
          },
        ],
        notes: [
          "A transaction is a request to change shared state, not just move coins.",
          "The EVM is the shared execution environment every node uses.",
          "Smart contracts are the code the EVM runs during those state changes.",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Smart Contracts",
    children: [
      "How contracts execute",
      "Common examples and risks",
    ],
    overview: {
      eyebrow: "Chapter 04",
      headline: "Smart contracts move application logic onto the chain, so the same code runs for everyone against the same shared state.",
      intro:
        "This chapter picks up the smart-contract idea directly: code is deployed on-chain, users call it through transactions, and the network executes the same rules for everyone.",
      pillars: [
        {
          title: "What changes from a normal app",
          bullets: [
            "Traditional apps run logic on one company backend",
            "Smart contracts put that logic on-chain",
            "Users are interacting with shared code, not a private server",
          ],
        },
        {
          title: "What smart contracts do",
          bullets: [
            "Store code and state at a contract address",
            "Run when a transaction calls a function",
            "Move assets, update storage, and enforce rules automatically",
          ],
        },
        {
          title: "Why they matter",
          bullets: [
            "Every node can verify the same execution",
            "Apps can work without one operator approving each action",
            "Bugs and upgrade choices become part of the risk surface",
          ],
        },
      ],
      callout: "Smart contracts are not magic agreements. They are software with explicit rules, predictable execution, and real failure modes.",
      footer: "From execution flow to practical examples, risks, and tradeoffs",
    },
    childContent: [
      {
        number: "04.1",
        layout: "process-diagram",
        eyebrow: "How contracts execute",
        headline: "One contract call moves through a simple on-chain process.",
        description:
          "Read this left to right: wallet request, contract call, EVM execution, then state update.",
        frameLabel: "Contract call flow",
        stages: [
          {
            title: "User wallet",
            bullets: [
              "Chooses an action",
              "Signs the transaction",
              "Sends it to the network",
            ],
          },
          {
            title: "Contract call",
            bullets: [
              "Targets a contract address",
              "Includes function data",
              "May include ETH value",
            ],
          },
          {
            title: "EVM execution",
            bullets: [
              "Nodes run the same code",
              "Current state is checked",
              "A result is computed",
            ],
          },
          {
            title: "State update",
            bullets: [
              "Balances may change",
              "Storage may change",
              "The new state becomes shared history",
            ],
          },
        ],
        notes: [
          "Same input and same state should produce the same result.",
          "If execution fails, the intended update does not happen.",
          "This is the core loop behind Ethereum applications.",
        ],
      },
      {
        number: "04.2",
        layout: "ledger",
        eyebrow: "Common examples and risks",
        headline: "Smart contracts can automate tokens, escrow, and voting, but the same automation makes bugs and governance mistakes matter immediately.",
        description:
          "Smart contracts are powerful because they automate shared rules. They are risky because the chain will also automate bad logic.",
        comparison: [
          {
            label: "Common examples",
            title: "Contracts make repeated coordination tasks explicit and automatic",
            bullets: [
              "Token contracts track balances and transfers",
              "Escrow contracts hold funds until conditions are met",
              "Governance contracts record votes and outcomes",
            ],
          },
          {
            label: "Common risks",
            title: "The chain executes flawed logic just as faithfully as correct logic",
            bullets: [
              "A bug can freeze or leak funds",
              "An exploit can abuse hidden edge cases",
              "An upgrade path can create governance risk",
            ],
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
          "CROPS matters because it shapes design choices. You can see the values in what the ecosystem builds and protects.",
        frameLabel: "From principle to concrete ecosystem choice",
        segments: [
          {
            label: "C + R",
            title: "Permissionless access and resistance to control",
            bullets: [
              "Wallets can usually connect without asking permission first",
              "The ecosystem resists chokepoints and single points of control",
              "Governance is cautious about giving one actor too much power",
            ],
          },
          {
            label: "O",
            title: "Open-source clients, standards, and exits",
            bullets: [
              "Clients, wallets, and SDKs are built in public",
              "ERC standards help different apps stay compatible",
              "Users and builders can inspect, fork, or switch tools",
            ],
          },
          {
            label: "P",
            title: "Privacy shows up as a design goal, even when it is incomplete",
            bullets: [
              "The chain is transparent, but privacy still matters",
              "The ecosystem pushes selective disclosure and ZK tools",
              "Good products ask users to reveal less, not more",
            ],
          },
          {
            label: "S",
            title: "Security-first culture slows down high-risk change",
            bullets: [
              "Critical systems go through audits and review",
              "Upgrades are debated carefully before rollout",
              "Protecting funds matters more than moving fast",
            ],
          },
        ],
        notes: [
          "Values show up in defaults, standards, and governance habits.",
          "Privacy is still incomplete, but it clearly shapes the roadmap.",
          "A useful question is: what did this value cause the ecosystem to build?",
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
          bullets: [
            "Exchange, borrowing, and settlement become separate protocols",
            "Users combine these pieces instead of using one bank product",
            "Finance becomes more legible and programmable",
          ],
        },
        {
          title: "Protocols can compose",
          bullets: [
            "One app can build on another",
            "Wallets, swaps, lending, and stablecoins can connect in one flow",
            "Shared state makes those connections possible",
          ],
        },
        {
          title: "Opportunity comes with protocol risk",
          bullets: [
            "Open access does not remove risk",
            "Code flaws and oracle failures still matter",
            "Liquidations and poor market design can cascade",
          ],
        },
      ],
      callout: "DeFi is best understood as reusable financial infrastructure: legible, programmable, and sometimes fragile.",
      footer: "From core primitives to composability, failure modes, and practical fit",
    },
    childContent: [
      {
        number: "06.1",
        layout: "anatomy",
        eyebrow: "Swaps, lending, stablecoins, and RWAs",
        headline: "Four DeFi primitives show up again and again: swaps, lending, stablecoins, and tokenized real-world assets.",
        description:
          "The easiest way to read DeFi is by function: exchange, credit, stable settlement, and yield-bearing assets linked to off-chain instruments.",
        frameLabel: "Reading core DeFi primitives by job to be done",
        segments: [
          {
            label: "Swaps",
            title: "Swap protocols let users trade one asset for another on-chain",
            bullets: [
              "They are the exchange layer of DeFi",
              "Users trade directly against on-chain liquidity",
              "Example: swap ETH for USDC",
            ],
          },
          {
            label: "Lending",
            title: "Lending markets turn posted collateral into borrowable liquidity",
            bullets: [
              "Users deposit assets into shared pools",
              "Borrowers lock collateral to access liquidity",
              "Suppliers earn yield while borrowers avoid selling",
            ],
          },
          {
            label: "Stablecoins",
            title: "Stablecoins provide the relatively steady unit that many DeFi workflows depend on",
            bullets: [
              "They try to track a steadier asset, usually the US dollar",
              "They help with pricing, collateral, and payments",
              "They reduce the need to hold only volatile assets",
            ],
          },
          {
            label: "RWAs",
            title: "RWA products bring real-world yield on-chain through tokenized assets",
            bullets: [
              "They represent claims linked to off-chain assets like Treasury bills or credit products",
              "Many are designed to pass through yield from those underlying assets",
              "They matter when users want blockchain access plus more familiar sources of return",
            ],
          },
        ],
        notes: [
          "Swaps answer exchange, lending answers credit, stablecoins answer settlement, and RWAs answer on-chain access to off-chain yield.",
          "These primitives can connect in one user flow: swap into collateral, borrow a stablecoin, or move funds into a yield-bearing RWA product.",
          "Thinking in protocol roles first makes later composability slides easier to teach than starting with brand names or token jargon.",
        ],
      },
      {
        number: "06.2",
        layout: "ledger",
        eyebrow: "Risks, composability, and real-world fit",
        headline: "DeFi is powerful because protocols can stack together, but that same composability can turn one weak link into a larger failure.",
        description:
          "On-chain finance is modular, which creates both useful combinations and new failure chains.",
        comparison: [
          {
            label: "Composability",
            title: "Protocols can plug into each other like financial Lego",
            bullets: [
              "A user can swap, lend, borrow, and move assets in one stack",
              "Shared standards make protocols easier to connect",
              "Visible on-chain state helps apps compose",
            ],
          },
          {
            label: "Fragility and fit",
            title: "Open finance still has sharp edges and does not fit every need",
            bullets: [
              "Bugs, liquidations, and oracle failures can hurt users",
              "Thin liquidity and MEV can make markets worse",
              "DeFi fits best when openness matters more than support or legal recourse",
            ],
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
          bullets: [
            "Some groups research upgrades",
            "Some maintain clients and core infrastructure",
            "Others build apps, tools, and education",
          ],
        },
        {
          title: "Social and technical layers",
          bullets: [
            "The chain runs on software",
            "Software choices come from research and discussion",
            "Governance is social coordination plus engineering",
          ],
        },
        {
          title: "What this chapter covers",
          bullets: [
            "First: who the main actor groups are",
            "Then: how ideas turn into upgrades",
            "All without one central controller",
          ],
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
          "The easiest way to read the ecosystem is by role: research, clients, and builders.",
        frameLabel: "Who does what in the Ethereum ecosystem",
        segments: [
          {
            label: "Research and stewardship",
            title: "Core researchers and foundation-style teams explore protocol direction",
            bullets: [
              "They study upgrades and tradeoffs",
              "They help coordinate long-term direction",
              "They do not control the chain by decree",
            ],
          },
          {
            label: "Client teams",
            title: "Independent client teams turn protocol ideas into production software",
            bullets: [
              "They implement Ethereum's rules in code",
              "They test upgrades and ship releases",
              "Multiple clients reduce reliance on one codebase",
            ],
          },
          {
            label: "Builders",
            title: "Application builders, tooling teams, and educators make the ecosystem usable",
            bullets: [
              "They build wallets, apps, and tooling",
              "They make the protocol usable in practice",
              "They surface pain points back to researchers and client teams",
            ],
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
          "Ethereum upgrades move from discussion to proposal to implementation to adoption.",
        stages: [
          {
            title: "Discussion and problem framing",
            bullets: [
              "A problem or opportunity is identified",
              "People debate it in calls, forums, and research posts",
              "Social alignment starts here",
            ],
          },
          {
            title: "Research and EIP design",
            bullets: [
              "The idea becomes more precise",
              "Often it is written as an EIP",
              "Tradeoffs and security assumptions are made explicit",
            ],
          },
          {
            title: "Client implementation and testing",
            bullets: [
              "Client teams implement the change in code",
              "Behavior is tested across multiple clients",
              "Engineering reality checks the original idea",
            ],
          },
          {
            title: "Adoption and network upgrade",
            bullets: [
              "Operators and apps choose whether to upgrade",
              "Enough coordinated adoption activates the change",
              "The new rules become part of the live network",
            ],
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
          bullets: [
            "Contract calls use processing and storage",
            "Block space is limited",
            "Gas turns resource use into a measurable cost",
          ],
        },
        {
          title: "Fees manage contention",
          bullets: [
            "Users compete for limited block space",
            "Fees help prioritize what gets included first",
            "This is how Ethereum handles congestion",
          ],
        },
        {
          title: "Users feel the tradeoff",
          bullets: [
            "Wallets turn gas into a user-facing choice",
            "Users trade off speed, timing, and cost",
            "Protocol pricing becomes a visible UX decision",
          ],
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
          "Gas is Ethereum's way of measuring how much work a transaction asks the network to do.",
        frameLabel: "Why Ethereum meters execution",
        segments: [
          {
            label: "What gas measures",
            title: "Computation, storage access, and state changes",
            bullets: [
              "Different EVM operations cost different amounts",
              "Transfers, contract calls, and storage writes are not equal",
              "Gas reflects the amount of requested work",
            ],
          },
          {
            label: "Why it matters",
            title: "Spam resistance and bounded shared resources",
            bullets: [
              "If execution were free, spam would be cheap",
              "Gas makes every action carry a cost",
              "That helps protect limited block capacity",
            ],
          },
          {
            label: "What it is not",
            title: "Not the full fee formula by itself",
            bullets: [
              "Gas is a workload meter",
              "It is not the full fee formula by itself",
              "What users pay also depends on the fee market",
            ],
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
        layout: "process-diagram",
        eyebrow: "Fee market and user experience",
        headline: "When block space is crowded, users compete with fees, and that competition changes both transaction cost and waiting time.",
        description:
          "Read this as the user-facing fee sequence: quote, broadcast, competition, inclusion, then final fee paid.",
        frameLabel: "How Ethereum fees become a user-visible cost",
        stages: [
          {
            title: "Wallet quote",
            bullets: [
              "The wallet estimates the current fee market",
              "It suggests a fee for the user's desired speed",
              "The user signs with those settings",
            ],
          },
          {
            title: "Broadcast",
            bullets: [
              "The signed transaction enters the network",
              "It waits with other pending transactions",
              "All are competing for limited block space",
            ],
          },
          {
            title: "Inclusion priority",
            bullets: [
              "Validators prefer more attractive fees",
              "Higher-fee transactions usually land sooner",
              "Lower-fee transactions may wait or need repricing",
            ],
          },
          {
            title: "Fee paid",
            bullets: [
              "Actual fee paid = gas used x effective gas price",
              "Gas used depends on the work actually done",
              "The final result is the cost the user sees",
            ],
          },
        ],
        notes: [
          "Crowded blocks make the competition more visible to users.",
          "The fee is not just a quote; it depends on gas actually used.",
          "Faster inclusion usually means paying a more competitive fee.",
        ],
      },
    ],
  },
  {
    number: "09",
    title: "Wallets & Keys / EOA",
    children: [
      "EOAs, seed phrases, and signing",
      "Custody models and wallet UX",
      {
        number: "09.3",
        title: "Multisignature wallets",
        content: {
          layout: "anatomy",
          eyebrow: "Multisignature wallets",
          headline: "A multisignature wallet requires more than one approval before funds or permissions can move.",
          description:
            "The core idea is simple: one key is not enough. Multiple signers must approve an action, which reduces single-key failure and makes shared treasury control more practical.",
          frameLabel: "Why multisig matters",
          segments: [
            {
              label: "How it works",
              title: "Multiple signers share control",
              bullets: [
                "A multisig wallet has several authorized signers",
                "A transaction needs a threshold such as 2-of-3 or 3-of-5",
                "One compromised key is not enough to move funds",
              ],
            },
            {
              label: "Why it matters",
              title: "It reduces single-key risk",
              bullets: [
                "It lowers the chance that one mistake drains everything",
                "It helps teams separate authority across people or devices",
                "It adds a review step before sensitive actions happen",
              ],
            },
            {
              label: "Why DeFi uses it",
              title: "It is common for treasuries, protocols, and admin control",
              bullets: [
                "DAOs and protocol teams use multisigs for treasury management",
                "Admin powers and upgrade controls are often placed behind multisigs",
                "In DeFi, multisigs help manage large shared pools more safely",
              ],
            },
          ],
          notes: [
            "A multisig improves security, but it also adds coordination overhead.",
            "The key question is how many signers are required and who they are.",
            "For DeFi, multisigs matter most wherever shared funds or admin powers exist.",
          ],
        },
      },
    ],
    overview: {
      eyebrow: "Chapter 09",
      headline: "Wallets are how users control blockchain accounts: they manage keys, produce signatures, and define who actually holds custody.",
      intro:
        "A wallet is the interface between a person and the chain. On Ethereum, that means understanding externally owned accounts, the private key material behind them, and the tradeoff between controlling your own keys or delegating that responsibility to someone else.",
      pillars: [
        {
          title: "Control",
          bullets: [
            "An EOA is controlled by private key material",
            "The wallet helps the user access and use that account",
            "The real authority comes from the keys",
          ],
        },
        {
          title: "Signing",
          bullets: [
            "Transactions are authorized with signatures",
            "The private key creates that signature",
            "Backups and device security matter because of this",
          ],
        },
        {
          title: "Custody",
          bullets: [
            "Some wallets leave keys with the user",
            "Others keep keys with a service",
            "The tradeoff is convenience versus direct control",
          ],
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
          "Keep the mental model simple: account, backup secret, then signature.",
        frameLabel: "Three layers of wallet control",
        segments: [
          {
            label: "EOA",
            title: "An externally owned account is a user-controlled address on Ethereum",
            bullets: [
              "It has an address on Ethereum",
              "It can hold ETH and tokens",
              "It acts when the user signs",
            ],
          },
          {
            label: "Seed phrase",
            title: "The seed phrase is a human backup for deriving wallet keys",
            bullets: [
              "It is a backup for wallet recovery",
              "It can regenerate the wallet's keys",
              "Anyone who gets it can usually take control",
            ],
          },
          {
            label: "Signing",
            title: "A signature proves control without exposing the private key itself",
            bullets: [
              "The wallet uses the private key to sign",
              "The network can verify the signature",
              "The private key itself is not revealed",
            ],
          },
        ],
        notes: [
          "The wallet app is the interface; the EOA is the on-chain account that others can see and interact with.",
          "The recovery phrase is for backup and restoration, not for routine transaction flow or customer support.",
          "Signing is the core act of authorization: it is how a user proves, \"I control this account,\" without publishing the secret.",
        ],
      },
      {
        number: "09.2",
        layout: "anatomy",
        eyebrow: "Custody models and wallet UX",
        headline: "Wallet design is really a custody decision: who holds signing power, how recovery works, and what tradeoffs the user accepts.",
        description:
          "Different wallet models shift control, recovery, and risk in different ways.",
        frameLabel: "Three common custody patterns",
        segments: [
          {
            label: "Self-custody",
            title: "The user controls the keys and bears the recovery burden",
            bullets: [
              "The user signs directly",
              "The user is responsible for backup and recovery",
              "Mistakes can become permanent loss",
            ],
          },
          {
            label: "Custodial",
            title: "A service controls the keys and offers account-style convenience",
            bullets: [
              "A company or exchange controls the keys",
              "The user gets easier onboarding and recovery",
              "The user depends on that service for access",
            ],
          },
          {
            label: "Hybrid",
            title: "Modern wallets split control across devices, policies, or recovery helpers",
            bullets: [
              "Control is split across devices or recovery helpers",
              "This can improve usability and resilience",
              "Users still need to understand the trust model",
            ],
          },
        ],
        notes: [
          "The practical question is not which model is morally superior. It is which party can sign, freeze, recover, or lose access.",
          "Better UX often means easier recovery and simpler onboarding, but those conveniences usually come from shifting some responsibility away from the user.",
          "Hybrid wallets can reduce operational risk, yet they should still be explained in terms of trust assumptions rather than as \"magic\" security.",
        ],
      },
    ],
  },
  {
    number: "10",
    title: "Consensus",
    children: [
      "Proof of Work vs Proof of Stake",
      "Proof of Stake summary",
      {
        number: "10.3",
        title: "How to participate in staking",
        content: {
          layout: "anatomy",
          eyebrow: "How to participate in staking",
          headline: "There are two common ways to participate in Ethereum staking: run your own validator, or join a staking provider.",
          description:
            "Strictly speaking, only the first option means you personally run a node. The second option means you join a service that handles the validator operations for you.",
          frameLabel: "Two common paths into Ethereum staking",
          segments: [
            {
              label: "Run your own node",
              title: "Solo staking means you run the validator yourself",
              bullets: [
                "You need 32 ETH to activate a validator",
                "You need a machine connected to the internet and running reliably",
                "You manage the software, keys, uptime, and slashing risk yourself",
              ],
            },
            {
              label: "Join a provider",
              title: "Staking providers let you participate without running the full setup",
              bullets: [
                "Common options include Lido and Coinbase",
                "They handle validator operations for the user",
                "This is easier, but adds provider and custody tradeoffs",
              ],
            },
            {
              label: "Financial gain",
              title: "The reward is usually a modest yield, not an outsized return",
              bullets: [
                "The gain comes from staking rewards paid by the protocol",
                "As of April 20, 2026, Lido shows about 2.4% APR and Coinbase lists about 1.89% APY for ETH",
                "Rates change over time and provider fees can reduce what the user receives",
              ],
            },
          ],
          notes: [
            "Solo staking gives more control, but also more responsibility.",
            "Joining a provider lowers the technical barrier, but you take on provider risk.",
            "For small holders, pooled staking is usually the more practical path because solo staking requires 32 ETH.",
          ],
        },
      },
    ],
    overview: {
      eyebrow: "Chapter 10",
      headline: "Ethereum changed from Proof of Work to Proof of Stake on September 15, 2022.",
      intro:
        "This opener keeps the idea simple before the deeper slides. Ethereum used to rely on miners racing to find a valid hash. After the Merge on September 15, 2022, it moved to Proof of Stake, where validators stake ETH and are selected more like a protocol-controlled draw to propose blocks.",
      pillars: [
        {
          title: "What changed",
          bullets: [
            "Ethereum originally used Proof of Work",
            "On September 15, 2022, it switched to Proof of Stake",
            "This change is commonly called the Merge",
          ],
        },
        {
          title: "Main practical difference",
          bullets: [
            "Proof of Work relied on mining hardware and electricity",
            "Proof of Stake relies on validators staking ETH",
            "The switch greatly reduced Ethereum's energy use",
          ],
        },
        {
          title: "Rough intuition",
          bullets: [
            "In Proof of Work, miners keep hashing until one finds a valid result",
            "That winning miner can propose the next block",
            "In Proof of Stake, a validator is selected more like a lucky draw and can earn rewards for honest participation",
          ],
        },
      ],
      callout: "At a high level, Ethereum moved from proving work with energy to securing the chain with staked capital.",
      footer: "From the Merge overview to Proof of Work vs Proof of Stake and deeper security tradeoffs",
    },
    childContent: [
      {
        number: "10.1",
        layout: "consensus-motion",
        eyebrow: "Proof of Work vs Proof of Stake",
        headline: "Proof of Work and Proof of Stake solve the same problem differently: who may extend the chain, and what resource an attacker must control to cheat.",
        description:
          "Both models aim to make honest block production easier than rewriting history, but they use different scarce inputs. Proof of Work leans on computation, hardware, and electricity, while Proof of Stake leans on locked capital and the risk of losing that stake for bad behavior.",
        frameLabel: "Two consensus paths resolving the same candidate block",
        lanes: [
          {
            label: "Proof of Work",
            title: "Block producers compete with energy and hardware",
            resourceLabel: "Security resource",
            resourceValue: "Hashes, ASICs, electricity",
            resourceBody:
              "Miners spend real-world energy and hardware cycles to keep searching for a valid block hash below the target.",
            candidateLabel: "Nonce race starts",
            candidateBody:
              "A miner assembles a candidate block and keeps changing the nonce while hashing over and over.",
            signalLabel: "Hash attempts",
            acceptedLabel: "Winning block verified",
            acceptedBody:
              "Once one miner finds a valid solution, the rest of the network checks that work and accepts the block if it follows the rules.",
            steps: [
              "Miners gather transactions into one candidate block",
              "Hardware races nonces until one valid hash appears",
              "Nodes verify the work and extend the accepted chain",
            ],
          },
          {
            label: "Proof of Stake",
            title: "Validators participate by bonding capital to the protocol",
            resourceLabel: "Security resource",
            resourceValue: "Bonded stake, proposer/attester votes",
            resourceBody:
              "Validators lock capital into the protocol, then the system selects proposers and attesters who risk penalties for bad behavior.",
            candidateLabel: "Round begins",
            candidateBody:
              "A selected proposer builds the block while other validators prepare to attest to the same history.",
            signalLabel: "Stake-backed votes",
            acceptedLabel: "Stake confirms history",
            acceptedBody:
              "When enough stake-backed attestations support the same block, the network treats that history as the accepted path forward.",
            steps: [
              "Validators post stake and the protocol assigns roles",
              "One proposer builds the block while attesters vote",
              "Enough stake-backed attestations advance accepted history",
            ],
          },
        ],
        summary:
          "Both models answer the same coordination question, but the expensive thing an attacker must control is different: ongoing computation in Proof of Work versus slashable stake and validator influence in Proof of Stake.",
        notes: [
          "The teaching comparison is not 'old versus new.' It is 'what scarce resource secures the next block?'",
          "Proof of Work spends energy continuously to earn one valid block; Proof of Stake locks capital and uses role-based voting to advance history.",
          "Both still rely on the wider network to verify the block and keep one canonical chain.",
        ],
      },
      {
        number: "10.2",
        layout: "anatomy",
        eyebrow: "Proof of Stake summary",
        headline: "Proof of Stake is simple at a high level: validators lock ETH, help confirm blocks, earn rewards, and can be penalized for harmful behavior.",
        description:
          "This slide is just the summary after `10.1`: stake ETH, get selected for roles, participate honestly, and risk penalties if you break important rules.",
        frameLabel: "Four simple ideas in Proof of Stake",
        segments: [
          {
            label: "Stake",
            title: "Validators lock ETH to join",
            bullets: [
              "Validators put ETH at stake in the protocol",
              "That stake gives them a role in consensus",
              "Security comes from capital being locked and at risk",
            ],
          },
          {
            label: "Selection",
            title: "The protocol picks validators for jobs",
            bullets: [
              "One validator may be chosen to propose a block",
              "Other validators attest to what they saw",
              "This is more like protocol selection than a mining race",
            ],
          },
          {
            label: "Rewards",
            title: "Honest participation can earn rewards",
            bullets: [
              "Validators earn rewards for doing their job correctly",
              "That includes following protocol rules",
              "The system uses rewards to encourage honest behavior",
            ],
          },
          {
            label: "Slashing",
            title: "Clearly bad behavior can be penalized",
            bullets: [
              "Slashing means part of a validator's stake can be taken away",
              "It is meant for serious harmful behavior",
              "The point is to make attacks expensive and visible",
            ],
          },
        ],
        notes: [
          "Proof of Stake is secured by staked capital rather than constant energy burn.",
          "Selection, rewards, and slashing are the main ideas to remember.",
          "A simple '51% attack' story does not fit cleanly here: an attacker would need enormous stake, and attacking with it risks slashing, exposure, and damage to the value of the same ETH they locked.",
        ],
      },
    ],
  },
  {
    number: "11",
    title: "Security & OPSEC",
    children: ["Common attack surfaces", "Practical safety habits"],
    overview: {
      eyebrow: "Chapter 11",
      headline: "Security in crypto is partly technical, but a lot of it is behavioral discipline.",
      intro:
        "The last chapter shifts from how blockchains work to how people get hurt using them. Wallets, apps, links, approvals, and recovery flows all create attack surface, so good OPSEC means treating routine clicks and disclosures as part of your threat model.",
      pillars: [
        {
          title: "Threats are layered",
          body: "Losses do not come only from protocol bugs. They also come from phishing, malicious approvals, fake support, device compromise, and rushed decision-making.",
        },
        {
          title: "Habits matter",
          body: "Separate wallets, careful signing, skeptical link hygiene, and recovery planning are practical defenses that reduce the blast radius of mistakes.",
        },
        {
          title: "What this chapter covers",
          body: "We first map common attack surfaces around wallets and apps, then close with concrete safety habits that beginners can apply immediately.",
        },
      ],
      callout: "OPSEC is not paranoia. It is the routine practice of making theft, coercion, and mistakes harder.",
      footer: "From phishing and approvals to wallet hygiene and safer daily practice",
    },
    childContent: [
      {
        number: "11.1",
        layout: "anatomy",
        eyebrow: "Common attack surfaces",
        headline: "Most everyday crypto losses happen at the user edge: fake prompts, bad approvals, and compromised environments turn one routine click into real asset loss.",
        description:
          "The goal is not to memorize every scam variant. It is to recognize the recurring surfaces where attackers meet the user: social engineering that gets a signature, permissions that grant too much power, and devices or sites that cannot be trusted to show the truth.",
        frameLabel: "Three attack surfaces to watch for",
        segments: [
          {
            label: "Phishing and impersonation",
            title: "Fake sites, spoofed support, and urgent messages try to redirect trust before the user notices",
            body: "Attackers clone wallet or exchange pages, impersonate project teams in chat, or push users into rushed recovery flows and 'security checks.' The common pattern is social pressure plus a believable interface that gets the user to reveal secrets or sign on the wrong site.",
          },
          {
            label: "Malicious approvals",
            title: "A wallet signature or token approval can grant more power than the screen title suggests",
            body: "Not every dangerous action is a direct transfer. Users can sign approvals, permit messages, or opaque contract interactions that let an attacker move tokens later. The risk surface is the permission itself: once granted, the drain can happen after the original click.",
          },
          {
            label: "Compromised devices and sites",
            title: "If the device or web environment is hostile, even careful users can be shown the wrong thing",
            body: "Malware, browser extensions, clipboard hijacking, DNS poisoning, and tampered Wi-Fi or websites can alter addresses, inject wallet prompts, or present fake transaction details. Good OPSEC treats the device and browsing setup as part of the wallet's security boundary, not as neutral background.",
          },
        ],
        notes: [
          "Attackers usually win by getting trust or permission first, then using that access later.",
          "Phishing steals attention, malicious approvals steal authority, and compromised environments steal visibility into what is really happening.",
          "The next slide should turn these threat patterns into repeatable habits rather than vague fear.",
        ],
      },
      {
        number: "11.2",
        layout: "anatomy",
        eyebrow: "Practical safety habits",
        headline: "Good OPSEC is a set of repeatable habits: separate risk, verify before signing, and protect recovery like it is the final backdoor.",
        description:
          "This closing slide should feel usable tomorrow morning, not merely cautionary. The goal is to give everyday users a short set of behaviors they can repeat across wallets, devices, and apps to reduce the chance that one rushed click becomes permanent loss.",
        frameLabel: "Three habits that prevent many avoidable losses",
        segments: [
          {
            label: "Compartmentalize",
            title: "Use different wallets and balances for different jobs",
            body: "Keep a smaller day-to-day wallet for experiments, approvals, and new apps. Keep long-term holdings in a separate wallet with fewer interactions. Separation limits blast radius when one device, site, or signature goes wrong.",
          },
          {
            label: "Verify every action",
            title: "Slow down before links, addresses, signatures, and approvals",
            body: "Open important sites from trusted bookmarks, read wallet prompts carefully, verify recipient addresses, and revoke permissions you no longer need. The safest habit is to treat every signature as a permission request, not as a routine click-through.",
          },
          {
            label: "Protect recovery",
            title: "Secure seed phrases, devices, and update paths before an emergency",
            body: "Store recovery secrets offline, do not share them with support or websites, keep devices patched, and plan how trusted people or locations would help you recover access if hardware fails. Good recovery planning reduces panic, which is when attackers often win.",
          },
        ],
        notes: [
          "Separate storage from exploration so one mistake does not expose everything.",
          "Assume every signature and approval changes authority until you verify otherwise.",
          "If recovery is weak, the wallet is weak even when the interface looks polished.",
        ],
      },
    ],
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
