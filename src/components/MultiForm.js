import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
//import Prestart1 from './Prestart';
import CategeoryA from './CategeoryA';
import CategeoryB from './CategeoryB';
import CategeoryC from './CategeoryC';
import {Surface} from 'react-native-paper';
import {DataStore} from 'aws-amplify';

import {Prestart} from '../models/schema';

const CategeoryAfault = {
  engine_oillevel: false,
  engine_coolantlevel: false,
  powersteering_fluidlevel: false,
  fuelleaks: false,
  fireextinguisher: false,
  lockingpinsontray: false,
  steering: false,
  tyrerims_wheelnuts: false,
  seatbelts: false,
  flag_opencutonly: false,
  foot_brake: false,
  park_brake: false,
  hom: false,
  brake_indicatorlights: false,
  lights: false,
  flashing_light: false,
  reversing_alarm: false,
  twoway_radio: false,
};

const categeoryBfault = {
  gauges_warning_light: false,
  mirrors: false,
  drive_belt_tensions: false,
  water_leaks: false,
  major_oilleaks: false,
  tyre_condition: false,
};

const categeoryCfault = {
  Minor_oil_leaks: false,
  wipers_washers: false,
  first_aid_kit: false,
  damage: false,
  vechile_housekeeping: false,
  air_conditioner: false,
  fuel_level: false,
};
const prestart = {
  odometerreading: '',
  enginehoursos: '',
};

const Form = () => {
  const [formData, setformData] = useState(prestart);

  console.log(formData);

  const [formData1, setformData1] = useState(CategeoryAfault);

  console.log(formData1);

  const [formData2, setformData2] = useState(categeoryBfault);

  console.log(formData2);

  const [formData3, setformData3] = useState(categeoryCfault);

  console.log(formData3);

  const [screen, setScreen] = useState(0);

  const Formtitle = [
    'Categeory A Faults',
    'Categeory B Faults',
    'Categeory C Faults',
  ];

  async function click() {}
  const Screendisplay = () => {
    if (screen === 0) {
      return <CategeoryA formData={formData1} setformData={setformData1} />;
    } else if (screen === 2) {
      return <CategeoryB formData={formData2} setformData={setformData2} />;
    } else {
      return <CategeoryC formData={formData3} setformData={setformData3} />;
    }
  };

  return (
    <Surface style={styles.containerStyle}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                fontSize: 25,
                color: '#323050',
              }}>
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
                <Text style={{fontSize: 14, color: 'white'}}>Previous</Text>
              </Pressable>

              <Pressable
                style={styles.button}
                onPress={() => {
                  if (screen === Formtitle.length - 1) {
                    const value1 = formData.odometerreading;

                    const value2 = formData.enginehoursos;

                    console.log('Odameter Reading :', value1);

                    console.log('Enginehourssos :', value2);

                    let arr = [];
                    for (var key in formData1) {
                      if (formData1[key] === true) {
                        arr.push(key);
                      }
                    }
                    let data = {
                      check: arr.toString(),
                    };

                    console.log('A Categeory faults are :', data.check);

                    let arr1 = [];
                    for (var key in formData2) {
                      if (formData2[key] === true) {
                        arr1.push(key);
                      }
                    }
                    let data1 = {
                      check: arr1.toString(),
                    };

                    console.log('B Categeory faults are :', data1.check);

                    let arr2 = [];
                    for (var key in formData3) {
                      if (formData3[key] === true) {
                        arr2.push(key);
                      }
                    }
                    let data2 = {
                      check: arr2.toString(),
                    };

                    console.log('C Categeory faults are :', data2.check);

                    DataStore.save(
                      new Prestart({
                        odometerreading: value1,
                        enginehoursos: value2,
                        categeoryAfault: data.check,
                        categeoryBfault: data1.check,
                        categeoryCfault: data2.check,
                      }),
                    );

                    //console.log("results are ",final);

                    // console.log('fault', check);

                    // const data0=Object.entries(formData).map(([key,value])=>value);

                    // console.log("Categeory A Fault :",data0)

                    // console.log("______________________________________")

                    // const data1=Object.entries(formData1).map(([key,value])=>key);

                    // console.log("Categeory B Fault :",data1)

                    // console.log("____________________________________")

                    // const data2=Object.entries(formData2).map(([key,value])=>key);

                    // console.log("Categeory C Fault :",data2)

                    // console.log("________________________________________")

                    // const data3=Object.entries(formData3).map(([key,value])=>key);

                    // console.log("Categeory A Fault :",data3)

                    // console.log("______________________________________")

                    // const data2=Object.entries(formData2).map(([key,value])=>{
                    //   console.log(key)
                    // })

                    // const data3=Object.entries(formData2).map(([key,value])=>{
                    //   console.log(key)
                    // })

                    //               const data=[];
                    // if(!formData[key]){
                    //                data.push(key)
                    //                 }
                    //               }
                    //               for(let key in formData){

                    // console.log(data);
                    // console.log(Object.values(formData).map((element)=>!element));

                    // console.log('------------------');
                    // console.log('prestart :', formData);

                    // console.log('------------------');
                    // console.log('Afault:', formData1);

                    // console.log(Object.values(formData1).map(value => value));

                    // console.log('------------------');

                    // console.log('Bfault :', formData2);
                    // console.log('------------------');
                    // console.log(
                    //   'neeeew',
                    //   Object.values(formData2).map(element => !element),
                    // );
                    // console.log('Cfault :', formData3);
                    // console.log('------------------');
                    // console.log(Object.values(formData3).map(element => !element));

                    Alert.alert('Pre Start Checklist submitted....');
                  } else {
                    setScreen(currentscreen => currentscreen + 1);
                  }
                }}>
                <Text style={{fontSize: 14, color: 'white'}}>
                  {screen === Formtitle.length - 1 ? 'sync' : 'Next'}
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Surface>
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
    backgroundColor: '#012E40',
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginLeft: 20,
    textAlign: 'center',
    margin: 20,
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
});
