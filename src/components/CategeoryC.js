
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
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
          <Text style={{margin: 5,color:'white'}}>Minor_oil_leaks</Text>


          <CheckBox

            value={formData.wipers_washers}
            onValueChange={value =>
              setformData({
                ...formData,
                wipers_washers: value,
              })
            }
          />

          <Text style={{margin: 5,color:'white'}}>Wipers Washers</Text>

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
          <Text style={{margin: 5,color:'white'}}>First Aid Kit</Text>

          

         <CheckBox
            value={formData.damage}
            onValueChange={value =>
              setformData({
                 ...formData,
                damage: value,
              })
            }
          />
          <Text style={{margin: 5,color:'white'}}>damage</Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={formData.vechile_housekeeping}
            onValueChange={value =>
              setformData({
                ...formData,
                vechile_housekeeping: value,
              })
            }
          />
          <Text style={{margin: 5,color:'white'}}>Vechile Housekeeping</Text>

          <CheckBox
            value={formData.air_conditioner}
            onValueChange={value =>
              setformData({
                ...formData,
                air_conditioner: value,
              })
            }
          />
          <Text style={{margin: 5,color:'white'}}>air_conditioner</Text>


          
        </View>
        <View style={styles.checkboxWrapper}>
        <CheckBox
            value={formData.fuel_level}
            onValueChange={value =>
              setformData({
                ...formData,
                fuel_level: value,
              })
            }
          />
          <Text style={{margin: 5,color:'white'}}>fuel_level</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  scrollView: {
    backgroundColor: '#012E40',
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

export default CategeoryC;
