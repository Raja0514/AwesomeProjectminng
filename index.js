/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import Mutistep from './src/Mutistep';
import {name as appName} from './app.json';
import {DataStore} from 'aws-amplify';
import '@azure/core-asynciterator-polyfill';
import {Amplify} from '@aws-amplify/core';
import config from './src/aws-exports';
import {Provider as PaperProvider} from 'react-native-paper';

Amplify.configure(config);

import {SQLiteAdapter} from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';
import Multistep from './src/Mutistep';

DataStore.configure({
  storageAdapter: SQLiteAdapter,
});

//AppRegistry.registerComponent(appName, () => App);

export default function Main() {
  return (
    <PaperProvider>
    <App1/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
