/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "mymodule.mymodule";

export interface MsgCommitment {
  creator: string;
  from: string;
  coinA: string;
  toATimelock: string;
  blockheight: string;
  toBHashlock: string;
  hashcode: string;
  coinlock: string;
}

export interface MsgCommitmentResponse {}

const baseMsgCommitment: object = {
  creator: "",
  from: "",
  coinA: "",
  toATimelock: "",
  blockheight: "",
  toBHashlock: "",
  hashcode: "",
  coinlock: "",
};

export const MsgCommitment = {
  encode(message: MsgCommitment, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.coinA !== "") {
      writer.uint32(26).string(message.coinA);
    }
    if (message.toATimelock !== "") {
      writer.uint32(34).string(message.toATimelock);
    }
    if (message.blockheight !== "") {
      writer.uint32(42).string(message.blockheight);
    }
    if (message.toBHashlock !== "") {
      writer.uint32(50).string(message.toBHashlock);
    }
    if (message.hashcode !== "") {
      writer.uint32(58).string(message.hashcode);
    }
    if (message.coinlock !== "") {
      writer.uint32(66).string(message.coinlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCommitment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCommitment } as MsgCommitment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.coinA = reader.string();
          break;
        case 4:
          message.toATimelock = reader.string();
          break;
        case 5:
          message.blockheight = reader.string();
          break;
        case 6:
          message.toBHashlock = reader.string();
          break;
        case 7:
          message.hashcode = reader.string();
          break;
        case 8:
          message.coinlock = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCommitment {
    const message = { ...baseMsgCommitment } as MsgCommitment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = String(object.coinA);
    } else {
      message.coinA = "";
    }
    if (object.toATimelock !== undefined && object.toATimelock !== null) {
      message.toATimelock = String(object.toATimelock);
    } else {
      message.toATimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = String(object.blockheight);
    } else {
      message.blockheight = "";
    }
    if (object.toBHashlock !== undefined && object.toBHashlock !== null) {
      message.toBHashlock = String(object.toBHashlock);
    } else {
      message.toBHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = String(object.hashcode);
    } else {
      message.hashcode = "";
    }
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = String(object.coinlock);
    } else {
      message.coinlock = "";
    }
    return message;
  },

  toJSON(message: MsgCommitment): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.coinA !== undefined && (obj.coinA = message.coinA);
    message.toATimelock !== undefined &&
      (obj.toATimelock = message.toATimelock);
    message.blockheight !== undefined &&
      (obj.blockheight = message.blockheight);
    message.toBHashlock !== undefined &&
      (obj.toBHashlock = message.toBHashlock);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
    message.coinlock !== undefined && (obj.coinlock = message.coinlock);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCommitment>): MsgCommitment {
    const message = { ...baseMsgCommitment } as MsgCommitment;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = object.coinA;
    } else {
      message.coinA = "";
    }
    if (object.toATimelock !== undefined && object.toATimelock !== null) {
      message.toATimelock = object.toATimelock;
    } else {
      message.toATimelock = "";
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = object.blockheight;
    } else {
      message.blockheight = "";
    }
    if (object.toBHashlock !== undefined && object.toBHashlock !== null) {
      message.toBHashlock = object.toBHashlock;
    } else {
      message.toBHashlock = "";
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = object.hashcode;
    } else {
      message.hashcode = "";
    }
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = object.coinlock;
    } else {
      message.coinlock = "";
    }
    return message;
  },
};

const baseMsgCommitmentResponse: object = {};

export const MsgCommitmentResponse = {
  encode(_: MsgCommitmentResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCommitmentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCommitmentResponse } as MsgCommitmentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCommitmentResponse {
    const message = { ...baseMsgCommitmentResponse } as MsgCommitmentResponse;
    return message;
  },

  toJSON(_: MsgCommitmentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCommitmentResponse>): MsgCommitmentResponse {
    const message = { ...baseMsgCommitmentResponse } as MsgCommitmentResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Commitment(request: MsgCommitment): Promise<MsgCommitmentResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Commitment(request: MsgCommitment): Promise<MsgCommitmentResponse> {
    const data = MsgCommitment.encode(request).finish();
    const promise = this.rpc.request(
      "mymodule.mymodule.Msg",
      "Commitment",
      data
    );
    return promise.then((data) =>
      MsgCommitmentResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
