import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type MemberInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MemberInfo {
  readonly id: string;
  readonly MemCode: number;
  readonly MemName?: string | null;
  readonly MemDiv?: number | null;
  readonly StartDate?: string | null;
  readonly EndDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MemberInfo, MemberInfoMetaData>);
  static copyOf(source: MemberInfo, mutator: (draft: MutableModel<MemberInfo, MemberInfoMetaData>) => MutableModel<MemberInfo, MemberInfoMetaData> | void): MemberInfo;
}