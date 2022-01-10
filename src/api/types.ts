export type ContractAbi = {
  abiEntries: AbiEntry[];
};

export interface AbiEntry {
  type: AbiEntryType;
  name: string;
  inputs: IOEntry[];
}

export interface EventAbiEntry extends AbiEntry {
  anonymous: boolean;
}

export interface FunctionAbiEntry extends AbiEntry {
  payable: boolean;
  stateMutability: FunctionState;
  constant: boolean;
  outputs?: IOEntry[];
}

export type IOEntry = {
  indexed?: boolean;
  internalType: keyof typeof InputTypeEnum;
  name: string;
  type: keyof typeof InputTypeEnum;
};

export enum AbiEntryType {
  event = 'event',
  function = 'function',
  constructor = 'constructor'
}

export enum FunctionState {
  pure = 'pure',
  view = 'view',
  payable = 'payable',
  nonpayable = 'nonpayable'
}

export enum InputTypeEnum {
  uint256 = 'uint256',
  address = 'address',
  bool = 'bool',
  bytes = 'bytes',
  bytes32 = 'bytes32',
  bytes64 = 'bytes64'
}
