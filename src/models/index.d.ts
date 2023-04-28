import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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