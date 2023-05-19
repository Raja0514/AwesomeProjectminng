import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

const CategeoryA = ({formData, setformData}) => {

  

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
          

          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.engine_oillevel}
              onValueChange={value =>
                setformData({
                  ...formData,
                  engine_oillevel: value,
                })
              }
            />

            <Text style={{ margin: 5,color:'white'}}>Engine Oil level</Text>
            <CheckBox
              value={formData.engine_coolantlevel}
              onValueChange={value =>
                setformData({
                  ...formData,
                  engine_coolantlevel: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>Engine Coolantlevel</Text>
          </View>

          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.powersteering_fluidlevel}
              onValueChange={value =>
                setformData({
                  ...formData,
                  powersteering_fluidlevel: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>
              Powersteering Fluidlevel
            </Text>

            <CheckBox
              value={formData.fuelleaks}
              onValueChange={value =>
                setformData({
                  ...formData,
                  fuelleaks: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>Fuelleaks</Text>
          </View>

          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.fireextinguisher}
              onValueChange={value =>
                setformData({
                  ...formData,
                  fireextinguisher: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>Fire Extinguisher</Text>

            <CheckBox
              value={formData.lockingpinsontray}
              onValueChange={value =>
                setformData({
                  ...formData,
                  lockingpinsontray: value,
                })
              }
            />
            <Text style={{margin: 5,color:'white'}}>Locking Pins Ontray</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.steering}
              onValueChange={value =>
                setformData({
                  ...formData,
                  steering: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>Steering</Text>

            <CheckBox
              value={formData.tyrerims_wheelnuts}
              onValueChange={value =>
                setformData({
                  ...formData,
                  tyrerims_wheelnuts: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>Tyrerims Wheelnuts</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.seatbelts}
              onValueChange={value =>
                setformData({
                  ...formData,
                  seatbelts: value,
                })
              }
            />
            <Text style={{margin: 5,color:'white'}}>Seatbelts</Text>

            <CheckBox
              value={formData.flag_opencutonly}
              onValueChange={value =>
                setformData({
                  ...formData,
                  flag_opencutonly: value,
                })
              }
            />
            <Text style={{margin: 5,color:'white'}}>Flag Opencutonly</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.foot_brake}
              onValueChange={value =>
                setformData({
                  ...formData,
                  foot_brake: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>Foot Brake</Text>
            <CheckBox
              value={formData.park_brake}
              onValueChange={value =>
                setformData({
                  ...formData,
                  park_brake: value,
                })
              }
            />
            <Text style={{margin: 5,color:'white'}}>Park Brake</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.hom}
              onValueChange={value =>
                setformData({
                  ...formData,
                  hom: value,
                })
              }
            />
            <Text style={{margin: 5,color:'white'}}>Hom</Text>
            <CheckBox
              value={formData.brake_indicatorlights}
              onValueChange={value =>
                setformData({
                  ...formData,
                  brake_indicatorlights: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>
              Brake Indicator Lights
            </Text>
          </View>

          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.lights}
              onValueChange={value =>
                setformData({
                  ...formData,
                  lights: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>Lights</Text>

            <CheckBox
              value={formData.flashing_light}
              onValueChange={value =>
                setformData({
                  ...formData,
                  flashing_light: value,
                })
              }
            />
            <Text style={{margin: 5,color:'white'}}>Flashing Light</Text>
          </View>

          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={formData.reversing_alarm}
              onValueChange={value =>
                setformData({
                  ...formData,
                  reversing_alarm: value,
                })
              }
            />
            <Text style={{margin: 5,color:'white'}}>Reversing Alarm</Text>

            <CheckBox
              value={formData.twoway_radio}
              onValueChange={value =>
                setformData({
                  ...formData,
                  twoway_radio: value,
                })
              }
            />
            <Text style={{ margin: 5,color:'white'}}>twoway_radio</Text>
          </View>
          <View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* <Button
          onPress={() => setToggleButton1(toggleButton => !toggleButton)}
          title="Save"
        /> */}
      {/* {toggleButton1 && (
        <>
          {Object.entries(formData).map(([key, value]) => {
            return value && console.log(key);
          })}
        </>
      )} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
    
  },
  scrollView: {
    backgroundColor: '#A68F97',
    marginHorizontal: 10,
    borderRadius:10,
    padding:5,

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
    
  },
  text: {
    fontSize: 42,
  },

  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default CategeoryA;
