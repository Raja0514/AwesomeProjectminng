import React from 'react';
import {Text, View, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {DataStore} from 'aws-amplify';
import {Numberofloads} from '../models';
const App3 = () => {
  const [counter, setCounter] = React.useState(0);

  // const counterdata = () => {
  //   if (counter > 30) {
  //     Alert.alert('Loads are Exceed');
  //   } else {
  //     console.log('You have Done ' + '' + counter + ' ' + 'Loads Today');
  //     Alert.alert('Your Loads are submitted');
  //   }
  // };

  async function onClick() {
    if (counter > 30) {
      Alert.alert('Loads are Exceed');
    } else {
      const check = await DataStore.save(
        new Numberofloads({
          loads: counter,
        }),
      );
      Alert.alert('Your Loads are submitted');
    }

    setCounter(0);
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A68F97',
          margin: 10,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 17,
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 30,
            fontSize: 29,
            color: 'white',
          }}>
          Loads: {counter}
        </Text>

        <View>
          <Button
            style={{marginBottom: 20, padding: 5, backgroundColor: '#7A577A'}}
            labelStyle={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              padding: 5,
            }}
            mode="contained"
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
              padding: 5,
            }}
            style={{marginBottom: 20, padding: 5, backgroundColor: '#7A577A'}}
            mode="contained"
            onPress={() => {
              setCounter(0);
            }}>
            Reset
          </Button>
          <Button
            style={{marginBottom: 10, padding: 5, backgroundColor: '#7A577A'}}
            labelStyle={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              padding: 5,
            }}
            mode="contained"
            onPress={() => {
              if (counter > 0) setCounter(counter - 1);
            }}>
            -
          </Button>
          <Button
            style={{margin: 10, padding: 5, backgroundColor: '#7A577A'}}
            labelStyle={{
              fontSize: 20,

              textAlign: 'center',
              padding: 10,
            }}
            mode="contained"
            onPress={onClick}>
            synchronization
          </Button>
        </View>
      </View>
    </>
  );
};
export default App3;
