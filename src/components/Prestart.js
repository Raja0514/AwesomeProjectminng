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
              value={formData.enginehourseos}
              onChangeText={enginehourseos => setformData({...formData,enginehourseos})}
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
    backgroundColor: '#2c2c54',
    marginTop:85,

    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
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
