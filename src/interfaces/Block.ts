interface BlockInterface {
  baseFeePerGas?: BigInt;
  difficulty?: number;
  extraData?: string;
  gasLimit?: BigInt;
  gasUsed?: BigInt;
  hash?: string;
  miner?: string;
  nonce?: string;
  number?: number;
  parentHash?: string;
  timestamp?: number;
}
