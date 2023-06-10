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

const CategeoryB = ({formData, setformData}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={formData.gauges_warning_light}
            onValueChange={value =>
              setformData({
                ...formData,
                gauges_warning_light: value,
              })
            }
          />
          <Text style={{margin: 5, color: 'white'}}>Gauges Warning Light</Text>
          <CheckBox
            value={formData.mirrors}
            onValueChange={value =>
              setformData({
                ...formData,
                mirrors: value,
              })
            }
          />
          <Text style={{margin: 5, color: 'white'}}>Mirrors</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={formData.drive_belt_tensions}
            onValueChange={value =>
              setformData({
                ...formData,
                drive_belt_tensions: value,
              })
            }
          />
          <Text style={{margin: 5, color: 'white'}}>Drive Belt Tensions</Text>

          <CheckBox
            value={formData.water_leaks}
            onValueChange={value =>
              setformData({
                ...formData,
                water_leaks: value,
              })
            }
          />
          <Text style={{margin: 5, color: 'white'}}>Water Leaks</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={formData.major_oilleaks}
            onValueChange={value =>
              setformData({
                ...FormData,
                major_oilleaks: value,
              })
            }
          />
          <Text style={{margin: 5, color: 'white'}}>major_oilleaks</Text>

          <CheckBox
            value={formData.tyre_condition}
            onValueChange={value =>
              setformData({
                ...formData,
                tyre_condition: value,
              })
            }
          />
          <Text style={{margin: 5, color: 'white'}}>Tyre_Condition</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  scrollView: {
    backgroundColor: '#012E40',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
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

export default CategeoryB;
