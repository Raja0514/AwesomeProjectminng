import {Surface, TextInput, Button, Text} from 'react-native-paper';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, Alert} from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import {DataStore} from 'aws-amplify';
import {Metstruckplod} from './src/models';

const App1 = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [showDropDown3, setShowDropDown3] = useState(false);

  const [truck, setTruck] = useState('');

  const [hour, setHour] = useState('');

  const [text2, setText2] = useState('');

  const [text, setText] = useState('');

  const [text1, setText1] = useState('');

  const [shift, setShift] = useState('');

  const [crew, setCrew] = useState('');

  const truckList = [
    {
      label: 'Truck 1',
      value: 'Truck 1',
    },
    {
      label: 'Truck 2',
      value: 'Truck 2',
    },
    {
      label: 'Truck 3',
      value: 'Truck 3',
    },
    {
      label: 'Truck 4',
      value: 'Truck 4',
    },
    {
      label: 'Truck 5',
      value: 'Truck 5',
    },
  ];

  const hours = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '5',
      value: '5',
    },
    {
      label: '6',
      value: '6',
    },
    {
      label: '7',
      value: '7',
    },
    {
      label: '8',
      value: '8',
    },
    {
      label: '9',
      value: '9',
    },
    {
      label: '10',
      value: '10',
    },
    {
      label: '11',
      value: '11',
    },
    {
      label: '12',
      value: '12',
    },
  ];

  const Shifts = [
    {
      label: 'Day',
      value: 'Day',
    },

    {
      label: 'Night',
      value: 'Night',
    },
  ];

  const crewlist = [
    {label: 'A', value: 'A'},

    {
      label: 'B',
      value: 'B',
    },

    {
      label: 'C',
      value: 'C',
    },

    {
      label: 'D',
      value: 'D',
    },
  ];

  async function onClick() {
    const check = await DataStore.save(
      new Metstruckplod({
        trucknumber: truck,
        enginehours: text,
        date: text2,
        operatorname: text1,
        hoursworked: hour,
        shift: shift,
        crew: crew,
      }),
    );

    console.log(check);

    Alert.alert('MetTruckplod Data Submitted...');

    setHour('');
    setShift('');
    setText('');
    setText1('');
    setText2('');
    setTruck('');
    setHour('');
  }

  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <ScrollView style={styles.scrollView}>
            <DropDown
              label={'TruckNumber'}
              mode={'outlined'}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={truck}
              setValue={text => setTruck(text)}
              defaultValue={''}
              list={truckList}
            />

            <View style={styles.spacerStyle} />

            <TextInput
              label="Engine Hours SOS"
              value={text}
              onChangeText={text => setText(text)}
              mode={'outlined'}
              keyboardType={'numeric'}
            />
            <View style={styles.spacerStyle} />

            <TextInput
              label="Date"
              value={text2}
              onChangeText={text => setText2(text)}
              mode={'outlined'}
              keyboardType={'numeric'}
            />

            <View style={styles.spacerStyle} />
            <TextInput
              label="Operator Name"
              value={text1}
              onChangeText={text => setText1(text)}
              mode={'outlined'}
            />
            <View style={styles.spacerStyle} />

            <DropDown
              label={'Hours Worked'}
              mode={'outlined'}
              visible={showDropDown1}
              showDropDown={() => setShowDropDown1(true)}
              onDismiss={() => setShowDropDown1(false)}
              value={hour}
              setValue={text => setHour(text)}
              list={hours}
            />
            <View style={styles.spacerStyle} />
            <DropDown
              label={'Shift'}
              mode={'outlined'}
              visible={showDropDown2}
              showDropDown={() => setShowDropDown2(true)}
              onDismiss={() => setShowDropDown2(false)}
              value={shift}
              setValue={text => setShift(text)}
              list={Shifts}
            />
            <View style={styles.spacerStyle} />
            <DropDown
              label={'Crew'}
              mode={'outlined'}
              visible={showDropDown3}
              showDropDown={() => setShowDropDown3(true)}
              onDismiss={() => setShowDropDown3(false)}
              value={crew}
              setValue={text => setCrew(text)}
              list={crewlist}
            />
            <View style={styles.spacerStyle} />

            <View style={styles.spacerStyle} />

            <Button
              mode={'outlined'}
              textColor={'black'}
              uppercase={true}
              style={{margin: 10, padding: 5, backgroundColor: 'white'}}
              onPress={onClick}>
              SEND
            </Button>
          </ScrollView>
        </SafeAreaView>
      </Surface>
    </>
  );
};

export default App1;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#2c2c54',
    justifyContent: 'center',
    padding: 10,
  },
  spacerStyle: {
    marginBottom: 25,
  },
  safeContainerStyle: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
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
