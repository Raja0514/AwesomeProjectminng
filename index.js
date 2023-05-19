/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import App1 from './src/pages/App1';
import App2 from './src/pages/App2';
import App3 from './src/pages/App3';
import App4 from './src/pages/App4';
import App5 from './src/pages/App5';
import Multistep from './src/pages/Multistep';
import {name as appName} from './app.json';
import {DataStore} from 'aws-amplify';
import '@azure/core-asynciterator-polyfill';
import {Amplify} from '@aws-amplify/core';
import config from './src/aws-exports';

import {Provider as PaperProvider} from 'react-native-paper';

Amplify.configure(config);

import {SQLiteAdapter} from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';
import Multistep1 from './src/pages/Multistep';
//import Multistep from './src/Mutistep';

DataStore.configure({
  storageAdapter: SQLiteAdapter,
});

//AppRegistry.registerComponent(appName, () => App);

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
