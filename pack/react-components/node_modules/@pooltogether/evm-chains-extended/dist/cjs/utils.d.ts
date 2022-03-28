import { IChainDataExtended, IAddEthereumChainParameter } from './types';
export declare function getAllChains(): IChainDataExtended[];
export declare function getChain(chainId: number): IChainDataExtended;
export declare function getChainByChainId(chainId: number): IChainDataExtended;
export declare function formatNetworkForAddEthereumChain(network: IChainDataExtended): IAddEthereumChainParameter;
//# sourceMappingURL=utils.d.ts.map