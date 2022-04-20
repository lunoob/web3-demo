const Web3 = require('web3')
const { network } = require('../config')
const { pledgeContract } = require('../contract')

// 创建 web3 实例对象
const web3 = new Web3(new Web3.providers.HttpProvider(network))

// 创建合约对象
const pledge = new web3.eth.Contract(pledgeContract.abi, pledgeContract.address)

// 获取账户地址下的 token 余额
async function getZzBalance(address) {
    const result = await pledge.methods.getZzBanlance(address).call()
    console.log(result)
}

getZzBalance('0x7612859d07A6713f0aaf9Ba1e877FE30Dc2c500E')

// call 方法不需要 gas 费用
// send 方法需要 gas 费用或者支付一定数量的费用
// 狐狸钱包文档：https://docs.metamask.io/guide/
// web3js 文档：https://web3js.readthedocs.io/en/v1.7.3/