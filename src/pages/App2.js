import {Surface, Button} from 'react-native-paper';

import React, {useState} from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View, Alert} from 'react-native';

import DropDown from 'react-native-paper-dropdown';

import {DataStore} from 'aws-amplify';

import {Loadinglocatins} from '../models';

const App2 = () => {

  const [showDropDown, setShowDropDown] = useState(false);

  const [showDropDown1, setShowDropDown1] = useState(false);

  const [showDropDown2, setShowDropDown2] = useState(false);

  const [showDropDown3, setShowDropDown3] = useState(false);

  const [showDropDown4, setShowDropDown4] = useState(false);

  const [showDropDown5, setShowDropDown5] = useState(false);

  const [showDropDown6, setShowDropDown6] = useState(false);

  const [showDropDown7, setShowDropDown7] = useState(false);

  const [loader,setloader]=useState('')

  const[act,setact]=useState('');

  const [location, setLocation] = useState('');

  const [sd, setsd] = useState('');

  const [loading, setLoading] = useState('');

  const [stockpile, setStockpile] = useState('');

  const [romfinger, setRomfinger] = useState('');

  const [material, setMaterial] = useState('');

  const loadinglist = [
    {label: 'Walters 1040 S1', value: 'Walters 1040 S1'},
    {label: 'Walters 1040 S2', value: 'Walters 1040 S2'},
    {label: 'Walters 1040 S3', value: 'Walters 1040 S3'},
    {label: 'Walters 1040 S4', value: 'Walters 1040 S4'},
    {label: 'Burswood 1240 ODN1', value: 'Burswood 1240 ODN1'},
    {label: 'Burswood 1240 ODN2', value: 'Burswood 1240 ODN2'},
    {label: 'Burswood 1240 ODN3', value: 'Burswood 1240 ODN3'},
    {label: 'Burswood 1240 ODN4', value: 'Burswood 1240 ODN4'},
  ];

  const sdevelopment = [
    {label: 'Walters 1040 S1', value: 'Walters 1040 S1'},
    {label: 'Walters 1040 S2', value: 'Walters 1040 S2'},
    {label: 'Walters 1040 S3', value: 'Walters 1040 S3'},
    {label: 'Walters 1040 S4', value: 'Walters 1040 S4'},
    {label: 'Burswood 1240 ODN1', value: 'Burswood 1240 ODN1'},
    {label: 'Burswood 1240 ODN2', value: 'Burswood 1240 ODN2'},
    {label: 'Burswood 1240 ODN3', value: 'Burswood 1240 ODN3'},
    {label: 'Burswood 1240 ODN4', value: 'Burswood 1240 ODN4'},
  ];

  const stockpilelist = [
    {label: 'Walters 1040 S1', value: 'Walters 1040 S1'},
    {label: 'Walters 1040 S2', value: 'Walters 1040 S2'},
    {label: 'Walters 1040 S3', value: 'Walters 1040 S3'},
    {label: 'Walters 1040 S4', value: 'Walters 1040 S4'},
    {label: 'Burswood 1240 ODN1', value: 'Burswood 1240 ODN1'},
    {label: 'Burswood 1240 ODN2', value: 'Burswood 1240 ODN2'},
    {label: 'Burswood 1240 ODN3', value: 'Burswood 1240 ODN3'},
    {label: 'Burswood 1240 ODN4', value: 'Burswood 1240 ODN4'},
  ];

  const romfingerlist = [
    {label: 'Green', value: 'Green'},
    {label: 'Red', value: 'Red'},
    {label: 'yellow', value: 'Yellow'},
  ];

  const locations = [
    {
      label: 'stope',
      value: 'stope',
    },
    {
      label: 'Development',
      value: 'Development',
    },
  ];

  const materiallist = [
    {label: 'Ore', value: 'Ore'},
    {label: 'waste', value: 'waste'},
    {label: 'High grade', value: 'High grade'},
    {label: 'Low grade', value: 'low grade'},
  ];

  const activity = [
    {
      label: 'Hauling',
      value: 'Hauling',
    },
    {
      label: 'Hauling1',
      value: 'Hauling1',
    },
   
  ];

  const loaderlist = [
    {
      label: 'loader1',
      value: 'loader1',
    },
    {
      label: 'loader2',
      value: 'loader2',
    },
   
  ];

  // const insertvalue = () => {
  //   return Alert.alert('Loading Locations Submitted.....');
  // };

  // fromlocation: String!
  // development: String
  // loadinglocation: String
  // fromstockpile: String
  // toromfinger: String
  // bog: String

  async function onClick() {
    const check = await DataStore.save(
      new Loadinglocatins({
        fromlocation: location,
        development: sd,
        loadinglocation: loading,
        fromstockpile: stockpile,
        toromfinger: romfinger,
        bog: material,
      }),
    );

    console.log(check);

    Alert.alert('Loading locations data are submitted...');

    setLocation('');
    setsd('');
    setLoading('');
    setStockpile('');
    setRomfinger('');
    setMaterial('');
  }

  return (
    <Surface style={styles.containerStyle}>
      <SafeAreaView>
        <ScrollView>
          <DropDown
            label={'From Location'}
            mode={'outlined'}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={location}
            setValue={setLocation}
            list={locations}
          />

          <View style={styles.spacerStyle} />
          <DropDown
            label={'Stope/Development'}
            mode={'outlined'}
            visible={showDropDown1}
            showDropDown={() => setShowDropDown1(true)}
            onDismiss={() => setShowDropDown1(false)}
            value={sd}
            setValue={setsd}
            list={sdevelopment}
          />
          <View style={styles.spacerStyle} />
          <DropDown
            label={'Actvity Type'}
            mode={'outlined'}
            visible={showDropDown6}
            showDropDown={() => setShowDropDown6(true)}
            onDismiss={() => setShowDropDown6(false)}
            value={act}
            setValue={setact}
            list={activity}
          />

          <View style={styles.spacerStyle} />
          <DropDown
            label={'Loading Location'}
            mode={'outlined'}
            visible={showDropDown2}
            showDropDown={() => setShowDropDown2(true)}
            onDismiss={() => setShowDropDown2(false)}
            value={loading}
            setValue={setLoading}
            list={loadinglist}
          />
          <View style={styles.spacerStyle} />
          <DropDown
            label={'From Stockpile'}
            mode={'outlined'}
            visible={showDropDown3}
            showDropDown={() => setShowDropDown3(true)}
            onDismiss={() => setShowDropDown3(false)}
            value={stockpile}
            setValue={setStockpile}
            list={stockpilelist}
          />
          <View style={styles.spacerStyle} />
          <DropDown
            label={'To ROM Finger'}
            mode={'outlined'}
            visible={showDropDown4}
            showDropDown={() => setShowDropDown4(true)}
            onDismiss={() => setShowDropDown4(false)}
            value={romfinger}
            setValue={setRomfinger}
            list={romfingerlist}
          />
          <View style={styles.spacerStyle} />

          <DropDown
            label={'Bog(Material)Type'}
            mode={'outlined'}
            visible={showDropDown5}
            showDropDown={() => setShowDropDown5(true)}
            onDismiss={() => setShowDropDown5(false)}
            value={material}
            setValue={setMaterial}
            list={materiallist}
          />

          <View style={styles.spacerStyle} />
          <DropDown
            label={'Loader ID'}
            mode={'outlined'}
            visible={showDropDown7}
            showDropDown={() => setShowDropDown7(true)}
            onDismiss={() => setShowDropDown7(false)}
            value={loader}
            setValue={setloader}
            list={loaderlist}
          />

          <View style={styles.spacerStyle} />
          <View style={styles.spacerStyle} />

          <Button
            mode="outlined"
            uppercase="true"
            textColor={'black'}
            style={{margin: 10, padding: 5, backgroundColor: 'white'}}
            onPress={onClick}>
            sync
          </Button>
          <View style={styles.spacerStyle} />
        </ScrollView>
      </SafeAreaView>
    </Surface>
  );
};

export default App2;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#012E40',
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
