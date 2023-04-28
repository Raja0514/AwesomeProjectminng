/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMetstruckplod = /* GraphQL */ `
  query GetMetstruckplod($id: ID!) {
    getMetstruckplod(id: $id) {
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
export const listMetstruckplods = /* GraphQL */ `
  query ListMetstruckplods(
    $filter: ModelMetstruckplodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetstruckplods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMetstruckplods = /* GraphQL */ `
  query SyncMetstruckplods(
    $filter: ModelMetstruckplodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMetstruckplods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
