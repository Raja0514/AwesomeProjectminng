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
          <Text style={{color: 'white', margin: 5}}>Gauges Warning Light</Text>
          <CheckBox
            value={formData.mirrors}
            onValueChange={value =>
              setformData({
                ...formData,
                mirrors: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Mirrors</Text>
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
          <Text style={{color: 'white', margin: 5}}>Drive Belt Tensions</Text>

          <CheckBox
            value={formData.water_leaks}
            onValueChange={value =>
              setformData({
                ...formData,
                water_leaks: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Water Leaks</Text>
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
          <Text style={{color: 'white', margin: 5}}>major_oilleaks</Text>

          <CheckBox
            value={formData.tyre_condition}
            onValueChange={value =>
              setformData({
                ...formData,
                tyre_condition: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Tyre_Condition</Text>
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

export default CategeoryB;
