import {Surface, TextInput, Button} from 'react-native-paper';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView,Alert} from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import {DataStore} from 'aws-amplify';
import {Developmentdrilling} from '../models';

const App4 = () => {

  const [showDropDown, setShowDropDown] = useState(false);

  const [showDropDown0, setShowDropDown0] = useState(false);

  const [showDropDown1, setShowDropDown1] = useState(false);

  const [showDropDown2, setShowDropDown2] = useState(false);

  const [showDropDown3, setShowDropDown3] = useState(false);

  const [showDropDown4, setShowDropDown4] = useState(false);

  const [showDropDown5, setShowDropDown5] = useState(false);

  const [heading, setHeading] = useState('');

  const [holes, setHoles] = useState('');

  const [bolts, setBolts] = useState('');

  const [meshsheet, setMeshsheet] = useState('');

  const [Scalinghours, setScalinghours] = useState('');

  const [tprofilewidth, setTprofilewidth] = useState('');

  const [tprofileheight, setTprofileHeight] = useState('');

  const [text, setText] = useState('');

  const headinglist = [
    {
      label: 'THOM_1050_ODN1',
      value: 'THOM_1050_ODN1',
    },
    {
      label: 'THOM_1050_ODN2',
      value: 'THOM_1050_ODN2',
    },
    {
      label: 'THOM_1050_ODN3',
      value: 'THOM_1050_ODN3',
    },
    {
      label: 'THOM_1050_ODN4',
      value: 'THOM_1050_ODN4',
    },
    {
      label: 'THOM_1050_ODN5',
      value: 'THOM_1050_ODN5',
    },
  ];

  const holeslist = [
    {label: '102mm', value: '102mm'},
    {
      label: '45mm',
      value: '45mm',
    },
  ];

  const splitbolts = [
    {
      label: '2.4m',
      value: '2.4m',
    },
    {
      label: '3.0m',
      value: '3.0m',
    },
    {
      label: '1.8m',
      value: '1.8m',
    },
  ];

  const meshsheetlist = [
    {
      label: '2.4*3m',
      value: '2.4*3m',
    },

    {
      label: '2.4*4.5m',
      value: '2.4*4.5m',
    },
    {
      label: '2.4*6m',
      value: '2.4*6m',
    },
  ];

  const scalinghours = [
    {
      label: '0-30min',
      value: '0-30min',
    },

    {
      label: '30-60min',
      value: '30-60min',
    },

    {
      label: '60-90min',
      value: '60-90min',
    },

    {
      label: '90-120min',
      value: '90-120min',
    },
    {
      label: '120-150min',
      value: '120-150min',
    },
    {
      label: '150-180min',
      value: '150-180min',
    },
    {
      label: '180-210min',
      value: '180-210min',
    },
    {
      label: '210-240min',
      value: '210-240min',
    },
    {
      label: '240-270min',
      value: '240-270min',
    },
    {
      label: '270-300min',
      value: '270-300min',
    },
    {
      label: '300-330min',
      value: '300-330min',
    },
    {
      label: '330-360min',
      value: '330-360min',
    },
  ];

  const profileheightlist = [
    {
      label: '5',
      value: '5',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '6',
      value: '6',
    },
  ];

  const profilewidthlist = [
    {
      label: '5',
      value: '5',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '6',
      value: '6',
    },
  ];

 
  // heading: String!
  // holes: String!
  // splitsetbolts: String!
  // tunnelprofilewidth: String!
  // tunnelprofileheight: String!
  // meshsheet: String!
  // scalinghours: String!
  // tunnelprofiledistance: String

  async function onClick() {
    const check = await DataStore.save(
      new Developmentdrilling({
        heading: heading,
        holes: holes,
        splitsetbolts:bolts,
        tunnelprofilewidth:tprofilewidth,
        tunnelprofileheight:tprofileheight,
        meshsheet:meshsheet,
        scalinghours:Scalinghours,
        tunnelprofiledistance:text

      }),
    );

    console.log(check);

    Alert.alert('development drilling Data Submitted...');

    setHeading('');
    setHoles('');
    setBolts('');
    setMeshsheet('');
    setScalinghours('');
    setTprofilewidth('');
    setTprofileHeight('');
    setText('');
   
  }


  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <DropDown
              label={'Heading'}
              mode={'outlined'}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={heading}
              setValue={text => setHeading(text)}
              list={headinglist}
            />

            <View style={styles.spacerStyle} />

            <DropDown
              label={'Holes'}
              mode={'outlined'}
              visible={showDropDown0}
              showDropDown={() => setShowDropDown0(true)}
              onDismiss={() => setShowDropDown0(false)}
              value={holes}
              setValue={text => setHoles(text)}
              list={holeslist}
            />

            <View style={styles.spacerStyle} />

            <DropDown
              label={'Split set bolts'}
              mode={'outlined'}
              visible={showDropDown1}
              showDropDown={() => setShowDropDown1(true)}
              onDismiss={() => setShowDropDown1(false)}
              value={bolts}
              setValue={text => setBolts(text)}
              list={splitbolts}
            />

            <View style={styles.spacerStyle} />

            <TextInput
              label="Tunnelprofiledistance"
              value={text}
              onChangeText={text => setText(text)}
              mode={'outlined'}
              keyboardType={'numeric'}
            />
            <View style={styles.spacerStyle} />

            <DropDown
              label={'Tunnelprofilewidth'}
              mode={'outlined'}
              visible={showDropDown4}
              showDropDown={() => setShowDropDown4(true)}
              onDismiss={() => setShowDropDown4(false)}
              value={tprofilewidth}
              setValue={text => setTprofilewidth(text)}
              list={profilewidthlist}
            />

            <View style={styles.spacerStyle} />

            <DropDown
              label={'tunnelprofileheight'}
              mode={'outlined'}
              visible={showDropDown5}
              showDropDown={() => setShowDropDown5(true)}
              onDismiss={() => setShowDropDown5(false)}
              value={tprofileheight}
              setValue={text => setTprofileHeight(text)}
              list={profileheightlist}
            />

            <View style={styles.spacerStyle} />

            <DropDown
              label={'Mesh sheet'}
              mode={'outlined'}
              visible={showDropDown2}
              showDropDown={() => setShowDropDown2(true)}
              onDismiss={() => setShowDropDown2(false)}
              value={meshsheet}
              setValue={text => setMeshsheet(text)}
              list={meshsheetlist}
            />
            <View style={styles.spacerStyle} />

            <DropDown
              label={'Scaling hours '}
              mode={'outlined'}
              visible={showDropDown3}
              showDropDown={() => setShowDropDown3(true)}
              onDismiss={() => setShowDropDown3(false)}
              value={Scalinghours}
              setValue={text => setScalinghours(text)}
              list={scalinghours}
            />
            <View style={styles.spacerStyle} />

            <Button
              style={{margin: 10, padding: 5, backgroundColor: 'white'}}
              mode={'outlined'}
              textColor={'black'}
              onPress={onClick}
              uppercase={true}>
              sync
            </Button>
          </ScrollView>
        </SafeAreaView>
      </Surface>
    </>
  );
};

export default App4;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#012E40',
    justifyContent: 'center',
    margin: 10,
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
    marginBottom: 10,
  },
  safeContainerStyle: {
    margin: 10,
    backgroundColor: '#FFFFFF',

    padding: 20,
    borderRadius: 30,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  inputBorder: {
    width: '30%',
    borderRadius: 3,
    borderColor: '#cacaca',
    borderWidth: 2,
  },
});
