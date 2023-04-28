import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Alert} from 'react-native';
import Prestart from './Prestart';
import CategeoryA from './CategeoryA';
import CategeoryB from './CategeoryB';
import CategeoryC from './CategeoryC';

const initialState = {
  
  //prestart

  odometerreading: '',
  enginehourseos: '',


  // categeroy A Fault

  engine_oillevel: true,
  engine_coolantlevel: true,
  powersteering_fluidlevel: true,
  fuelleaks: true,
  fireextinguisher: true,
  lockingpinsontray: true,
  steering: true,
  tyrerims_wheelnuts: true,
  seatbelts: true,
  flag_opencutonly: true,
  foot_brake: true,
  park_brake: true,
  hom: true,
  brake_indicatorlights: true,
  lights: true,
  flashing_light: true,
  reversing_alarm: true,
  twoway_radio: true,

  //categeory B Fault

  gauges_warning_light: true,
  mirrors: true,
  drive_belt_tensions: true,
  water_leaks: true,
  major_oilleaks: true,
  tyre_condition: true,

  //categeory C Fault

  Minor_oil_leaks: true,
  wipers_washers: true,
  first_aid_kit: true,
  damage: true,
  vechile_housekeeping: true,
  air_conditioner: true,
  fuel_level: true,
};

const Form = () => {
  const [formData, setformData] = useState(initialState);

  const [screen, setScreen] = useState(0);

  const Formtitle = [
    'Prestart Checklist',
    'Categeory A Faults',
    'Categeory B Faults',
    'Categeory C Faults',
  ];

  const Screendisplay = () => {
    if (screen === 0) {
      return <Prestart formData={formData} setformData={setformData} />;
    } else if (screen === 1) {
      return <CategeoryA formData={formData} setformData={setformData} />;
    } else if (screen === 2) {
      return <CategeoryB formData={formData} setformData={setformData} />;
    } else {
      return <CategeoryC formData={formData} setformData={setformData} />;
    }
  };

  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 30, fontSize: 35}}>
        {Formtitle[screen]}
      </Text>
      <View>{Screendisplay()}</View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          disabled={screen === 0}
          onPress={() => {
            setScreen(currentscreen => currentscreen - 1);
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Previous</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (screen === Formtitle.length - 1) {
              // console.log(Object.values(formData).map((element)=>!element));

              console.log(formData);
              //               const data=[];
              // if(!formData[key]){
              //                data.push(key)
              //                 }
              //               }
              //               for(let key in formData){

              // console.log(data);
              Alert.alert('Pre Start Checklist submitted....');
              setformData('');
            } else {
              setScreen(currentscreen => currentscreen + 1);
            }
          }}>
          <Text style={{color: 'white', fontSize: 20}}>
            {screen === Formtitle.length - 1 ? 'Submit' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#2c2c54',
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginLeft: 20,
    textAlign: 'center',
    margin: 20,
    borderRadius: 10,
  },
});
