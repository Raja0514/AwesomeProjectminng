
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

const CategeoryC = ({formData, setformData}) => {

 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={formData.Minor_oil_leaks}
            onValueChange={value =>
              setformData({
                ...formData,
                Minor_oil_leaks: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Minor_oil_leaks</Text>


          <CheckBox

            value={formData.wipers_washers}
            onValueChange={value =>
              setformData({
                ...formData,
                wipers_washers: value,
              })
            }
          />

          <Text style={{color: 'white', margin: 5}}>Wipers Washers</Text>

        </View>

        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={formData.first_aid_kit}
            onValueChange={value =>
              setformData({
                ...formData,
                first_aid_kit: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>First Aid Kit</Text>

          <CheckBox
            value={formData.vechile_housekeeping}
            onValueChange={value =>
              setformData({
                ...formData,
                vechile_housekeeping: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Vechile Housekeeping</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={formData.air_conditioner}
            onValueChange={value =>
              setformData({
                ...formData,
                air_conditioner: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>Air Conditioner</Text>

          <CheckBox
            value={formData.fuel_level}
            onValueChange={value =>
              setformData({
                ...formData,
                fuel_level: value,
              })
            }
          />
          <Text style={{color: 'white', margin: 5}}>fuel_level</Text>
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

export default CategeoryC;
