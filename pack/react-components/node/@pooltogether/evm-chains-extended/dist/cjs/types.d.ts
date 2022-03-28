import { IChainData } from 'evm-chains';
export interface IChainExtraData {
    chainId: number;
    blockExplorerUrls: string[];
}
export interface IChainDataExtended extends IChainData, IChainExtraData {
    blockExplorerUrls: string[];
}
export interface IAddEthereumChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
    iconUrls?: string[];
}
//# sourceMappingURL=types.d.ts.map