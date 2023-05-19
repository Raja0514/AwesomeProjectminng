import {Surface, Button} from 'react-native-paper';

import React, {useState} from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View, Alert} from 'react-native';

import DropDown from 'react-native-paper-dropdown';

import { DataStore } from 'aws-amplify';

import {Steels} from '../models'

const App6 = () => {
  const [showDropDown1, setShowDropDown1] = useState(false);

  const [showDropDown2, setShowDropDown2] = useState(false);

  const [showDropDown3, setShowDropDown3] = useState(false);

  const [showDropDown4, setShowDropDown4] = useState(false);

  const [bitssize, setBitsize] = useState('');

  const [bitsused, setBitused] = useState('');

  const [bitsdamage, setBitdamage] = useState('');

  const [bitslost, setBitlost] = useState('');

  const Bitssizelist = [
    {
      label: '43m',
      value: '43m',
    },
    {
      label: '102m',
      value: '102m',
    },
  ];

  const Bitsusedlist = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '6', value: '5'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
  ];

  const BitsDamagelist = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '6', value: '5'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
  ];

  const Bitslostlist = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '6', value: '5'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
  ];

  // steelssize: String
  // steelsused: String
  // steelsdamage: String
  // steelslost: String


  async function onClick() {
    const check = await DataStore.save(
      new Steels({
        steelssize: bitssize,
        steelsused: bitsused,
        steelsdamage: bitsdamage,
        steelslost: bitslost,
      }),
    );

    console.log(check);

    Alert.alert('steels consumbles items added...');

    setBitsize('');
    setBitused('');
    setBitdamage('');
    setBitlost('');
  }


  return (
    <Surface style={styles.containerStyle}>
      <SafeAreaView>
        <ScrollView>
          <DropDown
            label={'Steels Size'}
            mode={'outlined'}
            visible={showDropDown1}
            showDropDown={() => setShowDropDown1(true)}
            onDismiss={() => setShowDropDown1(false)}
            value={bitssize}
            setValue={text => setBitsize(text)}
            list={Bitssizelist}
          />

          <View style={styles.spacerStyle} />
          <DropDown
            label={' Steels Used'}
            mode={'outlined'}
            visible={showDropDown2}
            showDropDown={() => setShowDropDown2(true)}
            onDismiss={() => setShowDropDown2(false)}
            value={bitsused}
            setValue={text => setBitused(text)}
            list={Bitsusedlist}
          />

          <View style={styles.spacerStyle} />
          <DropDown
            label={'Steels Damage'}
            mode={'outlined'}
            visible={showDropDown3}
            showDropDown={() => setShowDropDown3(true)}
            onDismiss={() => setShowDropDown3(false)}
            value={bitsdamage}
            setValue={text => setBitdamage(text)}
            list={BitsDamagelist}
          />
          <View style={styles.spacerStyle} />
          <DropDown
            label={'Steels Lost'}
            mode={'outlined'}
            visible={showDropDown4}
            showDropDown={() => setShowDropDown4(true)}
            onDismiss={() => setShowDropDown4(false)}
            value={bitslost}
            setValue={text => setBitlost(text)}
            list={Bitslostlist}
          />

          <View style={styles.spacerStyle} />

          <Button
            mode="outlined"
            uppercase="true"
            textColor={'black'}
            onPress={onClick}
            style={{margin: 10, padding: 5, backgroundColor: 'white'}}>
            synchronization
          </Button>
          <View style={styles.spacerStyle} />
        </ScrollView>
      </SafeAreaView>
    </Surface>
  );
};

export default App6;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#A68F97',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },

  spacerStyle: {
    marginBottom: 15,
  },
});
