import {DataStore} from 'aws-amplify';
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Button, ScrollView, Alert} from 'react-native';

import {Metstruckplod} from './src/models';

const initialState = {
  trucknumber: '',
  enginehours: '',
  date: '',
  operatorname: '',
  hoursworked: '',
  shift: '',
  crew: '',
};

function App() {
  const [formState, updateFormState] = useState(initialState);
  //const [mets, setMets] = useState([]);

  //console.log('data', mets);

  async function onClick() {
    try {
      if (
        !formState.trucknumber &&
        !formState.enginehours &&
        !formState.date &&
        !formState.operatorname &&
        !formState.hoursworked &&
        !formState.shift &&
        !formState.crew
      )
        return;
      const check = await DataStore.save(new Metstruckplod({...formState}));
      console.log('check', check);
      updateFormState(initialState);
    } catch (err) {
      console.log(err);
    }
  }

  function onChangeText(key, value) {
    updateFormState({...formState, [key]: value});
  }

  // async function fetchContacts() {
  //   const data = await DataStore.query(Metstruckplod);
  //   setMets(data);
  // }

  // useEffect(() => {
  //   fetchContacts();
  //   const subscription = DataStore.observe(Metstruckplod).subscribe(() =>
  //     fetchContacts(),
  //   );
  //   return () => subscription.unsubscribe();
  // }, []);

  return (
    <ScrollView>
      <View style={container}>
        <Text style={heading}> MetsTruckplod </Text>
        <TextInput
          onChangeText={v => onChangeText('trucknumber', v)}
          placeholder="Truck Number"
          value={formState.trucknumber}
          style={input}
        />
        <TextInput
          onChangeText={v => onChangeText('enginehours', v)}
          placeholder="Engine Hours"
          value={formState.enginehours}
          style={input}
        />
        <TextInput
          onChangeText={v => onChangeText('date', v)}
          placeholder="Date"
          value={formState.date}
          style={input}
        />
        <TextInput
          onChangeText={v => onChangeText('operatorname', v)}
          placeholder="Operator name"
          value={formState.operatorname}
          style={input}
        />
        <TextInput
          onChangeText={v => onChangeText('hoursworked', v)}
          placeholder="Hours Worked"
          value={formState.hoursworked}
          style={input}
        />
        <TextInput
          onChangeText={v => onChangeText('shift', v)}
          placeholder="Shift"
          value={formState.shift}
          style={input}
        />
        <TextInput
          onChangeText={v => onChangeText('crew', v)}
          placeholder="Crew"
          value={formState.crew}
          style={input}
        />
        <Button onPress={onClick} title="Send" />

        {/* {mets.map((met) => (
            <View key={met.id} style={{border: '2px solid red'}}>
              <View style={contactBg}>
                <Text style={contactText}>Truck Number: {met.trucknumber}</Text>
                <Text style={contactText}>Engine Hours: {met.enginehours}</Text>
                <Text style={contactText}>Date: {met.date}</Text>
                <Text style={contactText}>Operator Name: {met.operatorname}</Text>
                <Text style={contactText}>Hours Worked: {met.hoursworked}</Text>
                <Text style={contactText}>Shift: {met.shift}</Text>
                <Text style={contactText}>Crew: {met.crew}</Text>
              </View>
            </View>
          ))} */}
      </View>
    </ScrollView>
  );
}
export default App;
const container = {
  flex: 1,
  justifyContent: 'center',
  padding: 10,
  paddingTop: 0,
  backgroundColor: 'grey',
};
const input = {marginBottom: 10, padding: 7, backgroundColor: '#ddd'};
//const contactBg = {backgroundColor: 'white',margin:30};
const heading = {
  fontWeight: 'normal',
  fontSize: 40,
  color: 'white',
  margin: 20,
};
//const contactText = {margin: 0, padding: 9, fontSize: 20};
