import React from 'react';

import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import {Surface, TextInput} from 'react-native-paper';

const Signup = ({formData, setformData}) => {
  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView >
          <ScrollView style={styles.scrollView}>
            <TextInput
              placeholder="Odometer Reading"
              value={formData.odometerreading}
              onChangeText={odometerreading =>
                setformData({...formData,odometerreading})
              }
              mode="outlined"
              keyboardType={'numeric'}
            />
            <View style={styles.spacerStyle} />

            <TextInput
              placeholder="Engine Hours in EOS"
              value={formData.enginehoursos}
              onChangeText={enginehoursos => setformData({...formData,enginehoursos})}
              mode="outlined"
              keyboardType={'numeric'}
            />
            <View style={styles.spacerStyle} />

            
          </ScrollView>
        </SafeAreaView>
      </Surface>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#A68F97',
    marginTop:5,
    margin:10,
    borderRadius:10,

    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
  },
  spacerStyle: {
    marginBottom: 25,
  },
  safeContainerStyle: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  inputBorder: {
    width: '100%',
    borderRadius: 6,
    borderColor: '#cacaca',
    borderWidth: 5,
  },
});
