const en = {
    na: "Not Available",
    blockReward: "Block Reward",
    transferReward: "Transfer Reward",
    mint: "Mint",
    burn: "Burn",
    transfer: "transfer",
    nullAddress: "Null Address",
    hash: "Hash",
    wif: "WIF",
    bytes: "Bytes",
    authLayout:{
        home:"Home",
        blocks:"Blocks",
        txs:"Transactions",
        tokens:"Tokens",
        contracts:"Contracts",
        address:"Addresses",
        committee:"Committee"
    },
    homePage:{
        totalBLocks:"Total Blocks",
        totalTxs:"Total Txs",
        totalTokens:"Total Tokens",
        totalCntrts:"Total Cntrts",
        totalAddrs:"Total Accts",
        totalCndidtes:"Total Cndidtes",
        recentBlocks:"Recent Blocks",
        recentTxs:"Recent Transactions",
        seeAll:"See All",
        txTable:{
            txID:"Transaction ID",
            size:"Size",
            time:"Time",
            gas:"Gas"
        }
    },
    blockinfo:{
        title:"Block List",
        time:"Time",
        bytes:"Bytes",
        size:"BlockSize",
        height:"Block Height",
        version:"Version Number",
        hash:"BlockHash",
        preHash:"PreHash",
        txns:"Tx Count",
        transfers:"Transfers",
        totalSysFee:"Total SystemFee",
        totalNetFee:"Total NetworkFee",
        txnsList:"Transaction List",
        nullPrompt: "This block has no transactions.",
        txTable:{
            txID:"Transaction ID",
            height:"Block Height",
            size:"Size",
            time:"Time",
            gas:"Gas"
        }
    },
    contract:{
        search:"Search by Contract Name",
        hash:"Hash",
        name:"Name",
        creator:"Creator",
        index:"Index",
        creatTime:"Create Time",
        available:"Not Available",
        update:"Updates",
        compiler:"Compiler",
        txns:"Tx Count",
        scCall:"Recent ScCalls",
        event:{
            title:"Recent Events",
            txID:"Transaction ID",
            eventName:"Event Name",
            vmState:"VM State",
            index:"Index",
            time:"Time"
        },
        conInfo:"Contract Info",
    },
    transactionList:{
        title: "Transaction List",
        transactionId:"Transaction ID",
        blockHeight:"Block Height",
        size:"Size",
        time:"Time",
        gasConsumed:"GAS Consumed",
        page:"Page"

    },
    transactionInfo:{
        txId:"Tx ID",
        time:"Time",
        blockHeight:"Block Height",
        size:"Size",
        version:"Version",
        blockHash:"Block Hash",
        sender:"Sender",
        netFee:"Network Fee",
        sysFee:"System Fee",
        signers:"Signers",
        account:"Account",
        scopes:"Scopes",
        witness:"Witnesses",
        invocation:"Invocation",
        verification:"Verification",
        script:"Script",
    },
    transferList:{
        title:"Nep17 Transfers",
        contract:"Contract",
        token:"Token",
        type:"Type",
        from:"From",
        fromBalance:"From Balance",
        to:"To",
        toBalance:"To Balance",
        amount:"Amount",
        reward:"Reward",
        burn:"Burn",
        transfer:"Transfer",
        nullAccount:"Null Account",
        nullBalance:"Null Balance"
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
        author: "Author"
    },
    tokenTx: {
        txid: "txid",
        type: "type",
        from: "from",
        to: "to",
        amount: "amount",
        time: "time",
        tokenID: "tokenid",
        nullPrompt: "This token has no transactions."
    },
    tokenHolder: {
        ranking: "Ranking",
        address: "Address",
        balance: "balance",
        percentage: "percentage",
        nullPrompt: "This token has no holders."
    },
    addressPage: {
        number: "No.",
        address: "address",
        neoBalance: "Neo Balance",
        gasBalance: "Gas Balance",
        createdTime: "Created Time",
        hash: "Hash",
        txnullPrompt: "This account has no transactions.",
        nep17nullPrompt: "This account has no NEP17 transfers.",
        nep11nullPrompt: "This account has no NEP11 transfers.",
        typeEnum: {
            normal: "Normal",
            committee: "Committee",
            candidate: "Candidate",
        },
        addressProfile: {
            title: "Account: ",
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
    NftTable: {
        title: "NEP11 Transfers",
        contract:"Contract",
        token:"Token",
        tokenId:"Token ID",
        type:"Type",
        from:"From",
        fromBalance:"From Balance",
        to:"To",
        toBalance:"To Balance",
        amount:"Amount",
        mint:"Mint",
        burn:"Burn",
        transfer:"Transfer",
        nullAccount:"Null Account",
    },
    CandidatesTable: {
        title:"Candidates",
        account:"Account",
        ranking: "Ranking",
        votes:"Votes",
        percentage:"Percentage",
    },

}
export default en
