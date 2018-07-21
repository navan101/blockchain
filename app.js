const Block = require('./models/block')
const Transaction = require('./models/transaction')
const BlockChain = require('./models/blockchain')

const CILCoin = new BlockChain();
CILCoin.addBlock({ sender: "Bruce wayne", reciver: "Tony stark", amount: 100 });
CILCoin.addBlock({ sender: "Harrison wells", reciver: "Han solo", amount: 50 });
CILCoin.addBlock({ sender: "Tony stark", reciver: "Ned stark", amount: 75 });
console.log(JSON.stringify(CILCoin, null, 4));