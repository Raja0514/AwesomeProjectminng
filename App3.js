import React from 'react';
import {Text, View, Alert} from 'react-native';
import {Button} from 'react-native-paper';
const App3 = () => {
  const [counter, setCounter] = React.useState(0);

  const counterdata = () => {
    if (counter > 30) {
      Alert.alert('Loads are Exceed');
    } else {
      console.log('You have Done ' + '' + counter + ' ' + 'Loads Today');
      Alert.alert('Your Loads are submitted');
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2c2c54',
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 30,
            fontSize: 29,
            color: 'white',
          }}>
          Tottal Number of Loads: {counter}
        </Text>

        <View>
          <Button
            style={{marginBottom: 20, padding: 10}}
            labelStyle={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              padding: 10,
            }}
            mode="outlined"
            onPress={() => {
              setCounter(counter + 1);
            }}>
            +
          </Button>

          <Button
            labelStyle={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              padding: 10,
            }}
            style={{marginBottom: 20, padding: 10}}
            mode="outlined"
            onPress={() => {
              setCounter(0);
            }}>
            Reset
          </Button>
          <Button
            style={{marginBottom: 60, padding: 10}}
            labelStyle={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              padding: 10,
            }}
            mode="outlined"
            onPress={() => {
              if (counter > 0) setCounter(counter - 1);
            }}>
            -
          </Button>
          <Button
            style={{marginBottom: 20, padding: 10}}
            labelStyle={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              padding: 10,
            }}
            mode="contained"
            onPress={counterdata}>
            Submit
          </Button>
        </View>
      </View>
    </>
  );
};
export default App3;
