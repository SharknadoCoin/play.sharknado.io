"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evm_chains_1 = require("evm-chains");
const chainsExtraData_1 = require("./chainsExtraData");
const additionalChains_1 = require("./additionalChains");
const mergeArrays = (params) => {
    const { mergeArray, existingArray, matchKey } = params;
    return mergeArray.map((mergeArrayItem) => {
        const match = existingArray.find((existingArrayItem) => existingArrayItem[matchKey] === mergeArrayItem[matchKey]);
        if (match) {
            return Object.assign(mergeArrayItem, match);
        }
        return mergeArrayItem;
    });
};
function getAllChains() {
    let allChains = [];
    try {
        const chainsData = evm_chains_1.getAllChains().concat(additionalChains_1.additionalChains);
        allChains = mergeArrays({
            mergeArray: chainsData,
            existingArray: chainsExtraData_1.chainsExtraData,
            matchKey: 'chainId'
        });
    }
    catch (e) {
        console.warn(e);
    }
    return allChains;
}
exports.getAllChains = getAllChains;
function getChain(chainId) {
    let chain;
    try {
        const chains = getAllChains();
        chain = chains.find((x) => x.chainId === chainId);
    }
    catch (e) {
        console.warn(e);
    }
    return chain;
}
exports.getChain = getChain;
function getChainByChainId(chainId) {
    return getChain(chainId);
}
exports.getChainByChainId = getChainByChainId;
function formatNetworkForAddEthereumChain(network) {
    let formattedNetwork = {
        chainId: `0x${network.chainId.toString(16)}`,
        chainName: network.name,
        nativeCurrency: network.nativeCurrency,
        rpcUrls: network.rpc,
        blockExplorerUrls: network.blockExplorerUrls
    };
    return formattedNetwork;
}
exports.formatNetworkForAddEthereumChain = formatNetworkForAddEthereumChain;
//# sourceMappingURL=utils.js.map