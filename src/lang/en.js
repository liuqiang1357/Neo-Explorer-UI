const en = {
  home: "Welcome To NeoExplorer",
  na: "Not Available",
  blockReward: "Block Reward",
  networkFeeReward: "Network Fee Reward",
  feeBurn: "Transaction Fee Burn",
  transferReward: "Transfer Reward",
  mint: "Mint",
  burn: "Burn",
  transfer: "Transfer",
  nullAddress: "Null Address",
  nullBalance: "Null Balance",
  hash: "Hash",
  wif: "WIF",
  page: "Page",
  bytes: "Bytes",
  authLayout: {
    home: "Home",
    blocks: "Blocks",
    txs: "Transactions",
    tokens: "Tokens",
    contracts: "Contracts",
    address: "Addresses",
    committee: "Committee",
  },
  homePage: {
    totalBLocks: "Total Blocks",
    totalTxs: "Total Transactions",
    totalTokens: "Total Tokens",
    totalCntrts: "Total Contracts",
    totalAddrs: "Total Addresses",
    totalCndidtes: "Total Candidates",
    recentBlocks: "Recent Blocks",
    recentTxs: "Recent Transactions",
    seeAll: "See All",
    txTable: {
      txID: "Transaction ID",
      size: "Size",
      time: "Time",
      gas: "Gas",
    },
  },
  blockinfo: {
    title: "Block List",
    time: "Time",
    bytes: "Bytes",
    size: "Size",
    height: " Height",
    version: "Version Number",
    hash: "BlockHash",
    preHash: "PreHash",
    txns: "Tx Count",
    transfers: "Total Transfers",
    totalSysFee: "Total SystemFee",
    totalNetFee: "Total NetworkFee",
    txnsList: "Transaction List",
    trfsList: "Block Transfer List",
    nullPrompt: "This block has no transactions.",
    speaker: "Speaker",
    blockReward: "Block Reward",
    txTable: {
      txID: "Transaction ID",
      height: "Block Height",
      size: "Size",
      time: "Time",
      gas: "Gas",
    },
  },
  contract: {
    title: "Contract List",
    search: "Search by Contract Name",
    hash: "Hash",
    name: "Name",
    creator: "Creator",
    index: "Index",
    creatTime: "Create Time",
    time: "Create Time",
    available: "Not Available",
    update: "Updates",
    compiler: "Compiler",
    txns: "Tx Count",
    scCallTitle: "Recent ScCalls",
    txID: "transaction ID",
    sender: "Sender",
    method: "Method",
    callFlags: "callFlags",
    eventTitle: "Recent Events",
    eventName: "Event Name",
    vmState: "VM State",
    conInfo: "Contract Info",
    noScCall: "This Contract has no System Contract Calls.",
    noEvent: "This Contract has no events.",
  },
  transactionList: {
    title: "Transaction List",
    transactionId: "Transaction ID",
    blockHeight: "Block Height",
    size: "Size",
    time: "Time",
    gasConsumed: "GAS Consumed",
    page: "Page",
  },
  transactionInfo: {
    txId: "Tx ID",
    time: "Time",
    blockHeight: "Block Height",
    size: "Size",
    version: "Version",
    blockHash: "Block Hash",
    sender: "Sender",
    netFee: "Network Fee",
    sysFee: "System Fee",
    signers: "Signers",
    account: "Address",
    scopes: "Scopes",
    witness: "Witnesses",
    invocation: "Invocation",
    verification: "Verification",
    script: "Script",

    nep11: "Nep11 Transfers",
    nep17: "Nep17 Transfers",
  },
  transactionTransfer: {
    contract: "contract",
    token: "token",
    type: "type",
    from: "from",
    fromBalance: "from balance",
    to: "to",
    toBalance: "to balance",
    amount: "amount",
    tokenID: "tokenID",
  },
  transferList: {
    title: "Nep17 Transfers",
    contract: "Contract",
    token: "Token",
    type: "Type",
    from: "From",
    fromBalance: "From Balance",
    to: "To",
    toBalance: "To Balance",
    amount: "Amount",
    reward: "Reward",
    burn: "Burn",
    transfer: "Transfer",
    nullAccount: "Null Address",
    nullBalance: "Not Available",
  },
  tokensTable: {
    title: "Tokens List",
    hash: "Hash",
    name: "Name",
    symbol: "Symbol",
    standard: "Standard",
    holders: "Total Holders",
    prompt: "Search by Token Name",
  },
  tokenInfo: {
    symbol: "Token Symbol",
    decimal: "Decimal",
    standard: "Supported Standard",
    transferred: "First Transferred",
    supply: "Total Supply",
    holders: "Total Holders",
    recentTransfers: "Recent Transfers",
    topHolders: "Top Holders",
    contractInfo: "Contract Info",
    extra: "Extras",
    events: "Events",
    methods: "Methods",
    description: "Description",
    email: "Email",
    author: "Author",
  },
  tokenTx: {
    txid: "txid",
    type: "Transaction Type",
    from: "from",
    to: "to",
    amount: "amount",
    time: "time",
    tokenID: "tokenid",
    nullPrompt: "This token has no transactions.",
  },
  tokenHolder: {
    ranking: "Ranking",
    address: "Address",
    balance: "Balance",
    percentage: "percentage",
    nullPrompt: "This token has no holders.",
  },
  addressPage: {
    number: "No.",
    address: "Address",
    neoBalance: "Neo Balance",
    gasBalance: "Gas Balance",
    createdTime: "Created Time",
    hash: "Hash",
    accountsTable: "Address",
    txnullPrompt: "This address has no transactions.",
    nep17nullPrompt: "This address has no NEP17 transfers.",
    nep11nullPrompt: "This address has no NEP11 transfers.",
    typeEnum: {
      normal: "Normal",
      committee: "Committee",
      candidate: "Candidate",
    },
    addressProfile: {
      title: "Address",
      type: "Type",
      txNums: "Transactions",
      nep17Transfers: "NEP17 Transfers",
      nep11Transfers: "NEP11 Transfers",
      tokenBalance: "Token Balance",
      tx: "Transactions",
      nep17title: "NEP17 Transfers",
      nep11title: "NEp11 Transfers",
    },
  },
  candidate: {
    title: "Candidate List",
    address: "Address",
    rank: "Ranking",
    votes: "Votes",
    percentage: "Percentage",
  },
  NftTable: {
    title: "NEP11 Transfers",
    contract: "Contract",
    token: "Token",
    tokenId: "Token ID",
    type: "Type",
    from: "From",
    fromBalance: "From Balance",
    to: "To",
    toBalance: "To Balance",
    amount: "Amount",
    mint: "Mint",
    burn: "Burn",
    transfer: "Transfer",
    nullAccount: "Null Address",
    nullBalance: "Not Available",
  },
  search: {
    placeholder:
      "Search for Blocks, Transactions, Addresses, Tokens or Contracts",
    information:
      "Sorry! Your entry did not match any results in our database. Please check your entry",
    dataSupport: " Data formats we currently support:",
    block: "Block Hash (UInt256), Block Height (Int)",
    transaction: "Transaction ID (UInt256)",
    account: "Address Script Hash (UInt160), Address (WIF)",
    token: "Token / Contract Script Hash (UInt160)",
    button: "Back to Home Page",
  },
  pageNotFound: {
    information_s: "Sorry!",
    information_t: "The Page You Visited Is Not Available.",
    information_v: "Try visiting in a few minutes and check your path input.",
  },
};
export default en;
