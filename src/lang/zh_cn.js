module.exports = {
    na: "不适用",
    blockReward: "区块奖励",
    transferReward: "转账奖励",
    mint: "铸币交易",
    burn: "销币交易",
    transfer: "转账",
    nullAddress: "空地址",
    hash: "哈希",
    wif: "地址",
    page: "页",
    authLayout:{
        home:"主页",
        blocks:"区块",
        txs:"交易",
        tokens:"通证",
        contracts:"合约",
        address:"帐户",
        committee:"候选"
    },
    homePage:{
        totalBLocks:"区块总数",
        totalTxs:"交易总数",
        totalTokens:"通证总数",
        totalCntrts:"合约总数",
        totalAddrs:"帐户总数",
        totalCndidtes:"候选人",
        recentBlocks:"区块",
        recentTxs:"交易",
        bcTable:{
            hash:"区块哈希",
            height:"区块高度",
            txs:"交易数",
            size:"大小",
            time:"时间",
        },
        txTable:{
            txID:"交易哈希",
            size:"大小",
            time:"时间",
            gas:"Gas"
        },
    },
    tokensTable: {
        title: "通证列表",
        hash: "哈希",
        name: "名称",
        symbol: "符号",
        standard: "合约标准",
        holders: "持有人总数",
        prompt: "以通证名称搜索",
    },
    tokenInfo: {
        symbol: "通证符号",
        decimal: "小数位数",
        standard: "合约标准",
        transferred: "首次交易时间",
        supply: "总供给",
        holders: "持有人总数",
        recentTransfers: "近期转账",
        topHolders: "持有人地址",
        contractInfo: "合约信息",
        extra: "额外信息",
        events: "近期事件",
        methods: "合约方法",
        description: "描述信息",
        email: "邮箱",
        author: "合约作者"
    },
    tokenTx: {
        txid: "交易哈希",
        type: "交易类型",
        from: "转出账户",
        to: "转入账户",
        amount: "转账数额",
        time: "时间",
        tokenID: "通证ID",
    },
    tokenHolder: {
        ranking: "资产排名",
        address: "地址",
        balance: "余额",
        percentage: "资产占比",
    },
    addressPage: {
        number: "序号",
        address: "地址",
        neoBalance: "Neo余额",
        gasBalance: "Gas余额",
        createdTime: "创建时间",
        hash: "哈希形式",
        accountsTable: "地址",
        addressProfile: {
            title: "账户：",
            type: "类型",
            txNums: "交易数",
            nep17Transfers: "NEP17转账数",
            nep11Transfers: "NEP11转账数",
            tokenBalance: "通证余额",
            tx: "交易记录",
            nep17title: "NEP17转账记录",
            nep11title: "NEP11转账记录",
        }
    }

}
