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

          <Text style={{color: 'white', margin: 5}}>Engine Oil level</Text>
          <CheckBox
            value={formData.engine_coolantlevel}
            onValueChange={value =>
              setformData({
                ...formData,
                engine_coolantlevel: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Engine Coolantlevel</Text>
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
          <Text style={{color: 'white', margin: 5}}>
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
          <Text style={{color: 'white', margin: 5}}>Fuelleaks</Text>
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
          <Text style={{color: 'white', margin: 5}}>Fire Extinguisher</Text>

          <CheckBox
            value={formData.lockingpinsontray}
            onValueChange={value =>
              setformData({
                ...formData,
                lockingpinsontray: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Locking Pins Ontray</Text>
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
          <Text style={{color: 'white', margin: 5}}>Steering</Text>

          <CheckBox
            value={formData.tyrerims_wheelnuts}
            onValueChange={value =>
              setformData({
                ...formData,
                tyrerims_wheelnuts: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Tyrerims Wheelnuts</Text>
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
          <Text style={{color: 'white', margin: 5}}>Seatbelts</Text>

          <CheckBox
            value={formData.flag_opencutonly}
            onValueChange={value =>
              setformData({
                ...formData,
                flag_opencutonly: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Flag Opencutonly</Text>
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
          <Text style={{color: 'white', margin: 5}}>Foot Brake</Text>
          <CheckBox
            value={formData.park_brake}
            onValueChange={value =>
              setformData({
                ...formData,
                park_brake: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Park Brake</Text>
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
          <Text style={{color: 'white', margin: 5}}>Hom</Text>
          <CheckBox
            value={formData.brake_indicatorlights}
            onValueChange={value =>
              setformData({
                ...formData,
                brake_indicatorlights: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>
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
          <Text style={{color: 'white', margin: 5}}>Lights</Text>

          <CheckBox
            value={formData.flashing_light}
            onValueChange={value =>
              setformData({
                ...formData,
                flashing_light: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Flashing Light</Text>
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
          <Text style={{color: 'white', margin: 5}}>Reversing Alarm</Text>

          <CheckBox
            value={formData.twoway_radio}
            onValueChange={value =>
              setformData({
                ...formData,
                twoway_radio: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>twoway_radio</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#2c2c54',
    marginHorizontal: 10,
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
