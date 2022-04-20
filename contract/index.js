/**
* @Author: luoob
* @Last Modified by: luoob
* @Introduction: 合约配置信息
*/

const TOKEN_ABI = require('./abi/token_abi.json')
const PLEDGE_API = require('./abi/pledge_abi.json')
const RECEIVE_ABI = require('./abi/receive_abi.json')

// 代币合约信息
const tokenContract = {
    abi: TOKEN_ABI,
    address: '0x3782b4b0ad3e103443f43650f1a893d0fdf4c04d',
}

// 质押合约信息
const pledgeContract = {
    abi: PLEDGE_API,
    address: '0x9c7a6be4f4a4fad3c05f4e393610c0465d87bd55',
}

// 领取合约信息(百万坐庄)
const receiveContract = {
    abi: RECEIVE_ABI,
    address: '0xa4823ba2fe84cf6c0362ed428befcb308af7738f',
}

module.exports = {
    tokenContract,
    pledgeContract,
    receiveContract
}
