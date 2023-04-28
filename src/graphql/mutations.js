/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMetstruckplod = /* GraphQL */ `
  mutation CreateMetstruckplod(
    $input: CreateMetstruckplodInput!
    $condition: ModelMetstruckplodConditionInput
  ) {
    createMetstruckplod(input: $input, condition: $condition) {
      id
      trucknumber
      enginehours
      date
      operatorname
      hoursworked
      shift
      crew
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMetstruckplod = /* GraphQL */ `
  mutation UpdateMetstruckplod(
    $input: UpdateMetstruckplodInput!
    $condition: ModelMetstruckplodConditionInput
  ) {
    updateMetstruckplod(input: $input, condition: $condition) {
      id
      trucknumber
      enginehours
      date
      operatorname
      hoursworked
      shift
      crew
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMetstruckplod = /* GraphQL */ `
  mutation DeleteMetstruckplod(
    $input: DeleteMetstruckplodInput!
    $condition: ModelMetstruckplodConditionInput
  ) {
    deleteMetstruckplod(input: $input, condition: $condition) {
      id
      trucknumber
      enginehours
      date
      operatorname
      hoursworked
      shift
      crew
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
