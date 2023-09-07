/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface GovernorVotesInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BALLOT_TYPEHASH"
      | "CLOCK_MODE"
      | "COUNTING_MODE"
      | "EXTENDED_BALLOT_TYPEHASH"
      | "cancel"
      | "castVote"
      | "castVoteBySig"
      | "castVoteWithReason"
      | "castVoteWithReasonAndParams"
      | "castVoteWithReasonAndParamsBySig"
      | "clock"
      | "eip712Domain"
      | "execute"
      | "getVotes"
      | "getVotesWithParams"
      | "hasVoted"
      | "hashProposal"
      | "name"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "proposalDeadline"
      | "proposalProposer"
      | "proposalSnapshot"
      | "proposalThreshold"
      | "propose"
      | "quorum"
      | "relay"
      | "state"
      | "supportsInterface"
      | "token"
      | "version"
      | "votingDelay"
      | "votingPeriod"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EIP712DomainChanged"
      | "ProposalCanceled"
      | "ProposalCreated"
      | "ProposalExecuted"
      | "VoteCast"
      | "VoteCastWithParams"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CLOCK_MODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COUNTING_MODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXTENDED_BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBySig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteWithReason",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteWithReasonAndParams",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteWithReasonAndParamsBySig",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "clock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotesWithParams",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashProposal",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalDeadline",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalProposer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [AddressLike[], BigNumberish[], BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "quorum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "relay",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CLOCK_MODE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "COUNTING_MODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXTENDED_BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteWithReason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteWithReasonAndParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteWithReasonAndParamsBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVotesWithParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalProposer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;
}

export namespace EIP712DomainChangedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalCanceledEvent {
  export type InputTuple = [proposalId: BigNumberish];
  export type OutputTuple = [proposalId: bigint];
  export interface OutputObject {
    proposalId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalCreatedEvent {
  export type InputTuple = [
    proposalId: BigNumberish,
    proposer: AddressLike,
    targets: AddressLike[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    voteStart: BigNumberish,
    voteEnd: BigNumberish,
    description: string
  ];
  export type OutputTuple = [
    proposalId: bigint,
    proposer: string,
    targets: string[],
    values: bigint[],
    signatures: string[],
    calldatas: string[],
    voteStart: bigint,
    voteEnd: bigint,
    description: string
  ];
  export interface OutputObject {
    proposalId: bigint;
    proposer: string;
    targets: string[];
    values: bigint[];
    signatures: string[];
    calldatas: string[];
    voteStart: bigint;
    voteEnd: bigint;
    description: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalExecutedEvent {
  export type InputTuple = [proposalId: BigNumberish];
  export type OutputTuple = [proposalId: bigint];
  export interface OutputObject {
    proposalId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteCastEvent {
  export type InputTuple = [
    voter: AddressLike,
    proposalId: BigNumberish,
    support: BigNumberish,
    weight: BigNumberish,
    reason: string
  ];
  export type OutputTuple = [
    voter: string,
    proposalId: bigint,
    support: bigint,
    weight: bigint,
    reason: string
  ];
  export interface OutputObject {
    voter: string;
    proposalId: bigint;
    support: bigint;
    weight: bigint;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteCastWithParamsEvent {
  export type InputTuple = [
    voter: AddressLike,
    proposalId: BigNumberish,
    support: BigNumberish,
    weight: BigNumberish,
    reason: string,
    params: BytesLike
  ];
  export type OutputTuple = [
    voter: string,
    proposalId: bigint,
    support: bigint,
    weight: bigint,
    reason: string,
    params: string
  ];
  export interface OutputObject {
    voter: string;
    proposalId: bigint;
    support: bigint;
    weight: bigint;
    reason: string;
    params: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GovernorVotes extends BaseContract {
  connect(runner?: ContractRunner | null): GovernorVotes;
  waitForDeployment(): Promise<this>;

  interface: GovernorVotesInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BALLOT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  CLOCK_MODE: TypedContractMethod<[], [string], "view">;

  COUNTING_MODE: TypedContractMethod<[], [string], "view">;

  EXTENDED_BALLOT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  cancel: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  castVote: TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  castVoteBySig: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  castVoteWithReason: TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish, reason: string],
    [bigint],
    "nonpayable"
  >;

  castVoteWithReasonAndParams: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  castVoteWithReasonAndParamsBySig: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  clock: TypedContractMethod<[], [bigint], "view">;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  execute: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "payable"
  >;

  getVotes: TypedContractMethod<
    [account: AddressLike, timepoint: BigNumberish],
    [bigint],
    "view"
  >;

  getVotesWithParams: TypedContractMethod<
    [account: AddressLike, timepoint: BigNumberish, params: BytesLike],
    [bigint],
    "view"
  >;

  hasVoted: TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [boolean],
    "view"
  >;

  hashProposal: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "view"
  >;

  name: TypedContractMethod<[], [string], "view">;

  onERC1155BatchReceived: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

  proposalDeadline: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "view"
  >;

  proposalProposer: TypedContractMethod<
    [proposalId: BigNumberish],
    [string],
    "view"
  >;

  proposalSnapshot: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "view"
  >;

  proposalThreshold: TypedContractMethod<[], [bigint], "view">;

  propose: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      description: string
    ],
    [bigint],
    "nonpayable"
  >;

  quorum: TypedContractMethod<[timepoint: BigNumberish], [bigint], "view">;

  relay: TypedContractMethod<
    [target: AddressLike, value: BigNumberish, data: BytesLike],
    [void],
    "payable"
  >;

  state: TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  token: TypedContractMethod<[], [string], "view">;

  version: TypedContractMethod<[], [string], "view">;

  votingDelay: TypedContractMethod<[], [bigint], "view">;

  votingPeriod: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BALLOT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CLOCK_MODE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "COUNTING_MODE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "EXTENDED_BALLOT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cancel"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVote"
  ): TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteBySig"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteWithReason"
  ): TypedContractMethod<
    [proposalId: BigNumberish, support: BigNumberish, reason: string],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteWithReasonAndParams"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteWithReasonAndParamsBySig"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: BigNumberish,
      reason: string,
      params: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "clock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getVotes"
  ): TypedContractMethod<
    [account: AddressLike, timepoint: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVotesWithParams"
  ): TypedContractMethod<
    [account: AddressLike, timepoint: BigNumberish, params: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasVoted"
  ): TypedContractMethod<
    [proposalId: BigNumberish, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashProposal"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "proposalDeadline"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalProposer"
  ): TypedContractMethod<[proposalId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "proposalSnapshot"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "propose"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      description: string
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "quorum"
  ): TypedContractMethod<[timepoint: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "relay"
  ): TypedContractMethod<
    [target: AddressLike, value: BigNumberish, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "votingDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "EIP712DomainChanged"
  ): TypedContractEvent<
    EIP712DomainChangedEvent.InputTuple,
    EIP712DomainChangedEvent.OutputTuple,
    EIP712DomainChangedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalCanceled"
  ): TypedContractEvent<
    ProposalCanceledEvent.InputTuple,
    ProposalCanceledEvent.OutputTuple,
    ProposalCanceledEvent.OutputObject
  >;
  getEvent(
    key: "ProposalCreated"
  ): TypedContractEvent<
    ProposalCreatedEvent.InputTuple,
    ProposalCreatedEvent.OutputTuple,
    ProposalCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalExecuted"
  ): TypedContractEvent<
    ProposalExecutedEvent.InputTuple,
    ProposalExecutedEvent.OutputTuple,
    ProposalExecutedEvent.OutputObject
  >;
  getEvent(
    key: "VoteCast"
  ): TypedContractEvent<
    VoteCastEvent.InputTuple,
    VoteCastEvent.OutputTuple,
    VoteCastEvent.OutputObject
  >;
  getEvent(
    key: "VoteCastWithParams"
  ): TypedContractEvent<
    VoteCastWithParamsEvent.InputTuple,
    VoteCastWithParamsEvent.OutputTuple,
    VoteCastWithParamsEvent.OutputObject
  >;

  filters: {
    "EIP712DomainChanged()": TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
    EIP712DomainChanged: TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;

    "ProposalCanceled(uint256)": TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;
    ProposalCanceled: TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;

    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
    ProposalCreated: TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;

    "ProposalExecuted(uint256)": TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;
    ProposalExecuted: TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;

    "VoteCast(address,uint256,uint8,uint256,string)": TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
    VoteCast: TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;

    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)": TypedContractEvent<
      VoteCastWithParamsEvent.InputTuple,
      VoteCastWithParamsEvent.OutputTuple,
      VoteCastWithParamsEvent.OutputObject
    >;
    VoteCastWithParams: TypedContractEvent<
      VoteCastWithParamsEvent.InputTuple,
      VoteCastWithParamsEvent.OutputTuple,
      VoteCastWithParamsEvent.OutputObject
    >;
  };
}
