import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNumberofloads = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Numberofloads, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly loads?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNumberofloads = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Numberofloads, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly loads?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Numberofloads = LazyLoading extends LazyLoadingDisabled ? EagerNumberofloads : LazyNumberofloads

export declare const Numberofloads: (new (init: ModelInit<Numberofloads>) => Numberofloads) & {
  copyOf(source: Numberofloads, mutator: (draft: MutableModel<Numberofloads>) => MutableModel<Numberofloads> | void): Numberofloads;
}

type EagerReamers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reamers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reamerssize: string;
  readonly reamersused: string;
  readonly reamersdamage: string;
  readonly reamerslost: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReamers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reamers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reamerssize: string;
  readonly reamersused: string;
  readonly reamersdamage: string;
  readonly reamerslost: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reamers = LazyLoading extends LazyLoadingDisabled ? EagerReamers : LazyReamers

export declare const Reamers: (new (init: ModelInit<Reamers>) => Reamers) & {
  copyOf(source: Reamers, mutator: (draft: MutableModel<Reamers>) => MutableModel<Reamers> | void): Reamers;
}

type EagerCouplings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Couplings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly couplingssize: string;
  readonly couplingsused: string;
  readonly couplingsdamage: string;
  readonly couplingslost: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCouplings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Couplings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly couplingssize: string;
  readonly couplingsused: string;
  readonly couplingsdamage: string;
  readonly couplingslost: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Couplings = LazyLoading extends LazyLoadingDisabled ? EagerCouplings : LazyCouplings

export declare const Couplings: (new (init: ModelInit<Couplings>) => Couplings) & {
  copyOf(source: Couplings, mutator: (draft: MutableModel<Couplings>) => MutableModel<Couplings> | void): Couplings;
}

type EagerShanks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Shanks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shankssize: string;
  readonly shanksused: string;
  readonly shanksdamage: string;
  readonly shankslost: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShanks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Shanks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly shankssize: string;
  readonly shanksused: string;
  readonly shanksdamage: string;
  readonly shankslost: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Shanks = LazyLoading extends LazyLoadingDisabled ? EagerShanks : LazyShanks

export declare const Shanks: (new (init: ModelInit<Shanks>) => Shanks) & {
  copyOf(source: Shanks, mutator: (draft: MutableModel<Shanks>) => MutableModel<Shanks> | void): Shanks;
}

type EagerSteels = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Steels, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly steelssize?: string | null;
  readonly steelsused?: string | null;
  readonly steelsdamage?: string | null;
  readonly steelslost?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySteels = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Steels, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly steelssize?: string | null;
  readonly steelsused?: string | null;
  readonly steelsdamage?: string | null;
  readonly steelslost?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Steels = LazyLoading extends LazyLoadingDisabled ? EagerSteels : LazySteels

export declare const Steels: (new (init: ModelInit<Steels>) => Steels) & {
  copyOf(source: Steels, mutator: (draft: MutableModel<Steels>) => MutableModel<Steels> | void): Steels;
}

type EagerBits = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bits, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bitssize?: string | null;
  readonly bitsused?: string | null;
  readonly bitsdamage?: string | null;
  readonly bitslost?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBits = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bits, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bitssize?: string | null;
  readonly bitsused?: string | null;
  readonly bitsdamage?: string | null;
  readonly bitslost?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bits = LazyLoading extends LazyLoadingDisabled ? EagerBits : LazyBits

export declare const Bits: (new (init: ModelInit<Bits>) => Bits) & {
  copyOf(source: Bits, mutator: (draft: MutableModel<Bits>) => MutableModel<Bits> | void): Bits;
}

type EagerDevelopmentdrilling = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Developmentdrilling, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly heading: string;
  readonly holes: string;
  readonly splitsetbolts: string;
  readonly tunnelprofilewidth: string;
  readonly tunnelprofileheight: string;
  readonly meshsheet: string;
  readonly scalinghours: string;
  readonly tunnelprofiledistance?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDevelopmentdrilling = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Developmentdrilling, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly heading: string;
  readonly holes: string;
  readonly splitsetbolts: string;
  readonly tunnelprofilewidth: string;
  readonly tunnelprofileheight: string;
  readonly meshsheet: string;
  readonly scalinghours: string;
  readonly tunnelprofiledistance?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Developmentdrilling = LazyLoading extends LazyLoadingDisabled ? EagerDevelopmentdrilling : LazyDevelopmentdrilling

export declare const Developmentdrilling: (new (init: ModelInit<Developmentdrilling>) => Developmentdrilling) & {
  copyOf(source: Developmentdrilling, mutator: (draft: MutableModel<Developmentdrilling>) => MutableModel<Developmentdrilling> | void): Developmentdrilling;
}

type EagerLoadinglocatins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Loadinglocatins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fromlocation: string;
  readonly development?: string | null;
  readonly loadinglocation?: string | null;
  readonly fromstockpile?: string | null;
  readonly toromfinger?: string | null;
  readonly bog?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLoadinglocatins = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Loadinglocatins, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fromlocation: string;
  readonly development?: string | null;
  readonly loadinglocation?: string | null;
  readonly fromstockpile?: string | null;
  readonly toromfinger?: string | null;
  readonly bog?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Loadinglocatins = LazyLoading extends LazyLoadingDisabled ? EagerLoadinglocatins : LazyLoadinglocatins

export declare const Loadinglocatins: (new (init: ModelInit<Loadinglocatins>) => Loadinglocatins) & {
  copyOf(source: Loadinglocatins, mutator: (draft: MutableModel<Loadinglocatins>) => MutableModel<Loadinglocatins> | void): Loadinglocatins;
}

type EagerPrestart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prestart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly odometerreading?: number | null;
  readonly enginehoursos?: number | null;
  readonly categeoryAfault?: string | null;
  readonly categeoryBfault?: string | null;
  readonly categeoryCfault?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrestart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prestart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly odometerreading?: number | null;
  readonly enginehoursos?: number | null;
  readonly categeoryAfault?: string | null;
  readonly categeoryBfault?: string | null;
  readonly categeoryCfault?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prestart = LazyLoading extends LazyLoadingDisabled ? EagerPrestart : LazyPrestart

export declare const Prestart: (new (init: ModelInit<Prestart>) => Prestart) & {
  copyOf(source: Prestart, mutator: (draft: MutableModel<Prestart>) => MutableModel<Prestart> | void): Prestart;
}

type EagerMetstruckplod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Metstruckplod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trucknumber: string;
  readonly enginehours?: string | null;
  readonly date: string;
  readonly operatorname: string;
  readonly hoursworked: string;
  readonly shift: string;
  readonly crew: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMetstruckplod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Metstruckplod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trucknumber: string;
  readonly enginehours?: string | null;
  readonly date: string;
  readonly operatorname: string;
  readonly hoursworked: string;
  readonly shift: string;
  readonly crew: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Metstruckplod = LazyLoading extends LazyLoadingDisabled ? EagerMetstruckplod : LazyMetstruckplod

export declare const Metstruckplod: (new (init: ModelInit<Metstruckplod>) => Metstruckplod) & {
  copyOf(source: Metstruckplod, mutator: (draft: MutableModel<Metstruckplod>) => MutableModel<Metstruckplod> | void): Metstruckplod;
}