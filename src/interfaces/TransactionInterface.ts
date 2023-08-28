export interface TransactionInterface {
  accessList?: any[];
  blockHash?: string;
  blockNumber?: number;
  chainId?: number;
  confirmations?: number;
  creates?: any;
  data?: string;
  from?: string;
  gasLimit?: BigInt;
  gasPrice?: BigInt;
  hash?: string;
  maxFeePerGas?: BigInt;
  maxPriorityFeePerGas?: BigInt;
  nonce?: number;
  r?: string;
  s?: string;
  to?: string;
  type: number;
  v?: number;
  value?: BigInt;
  wait?: (confirmations?: number) => Promise<any>;
}
