import {View, Text} from 'react-native';

import {Button} from 'react-native-paper';

function App11({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#012E40',
      }}>
      <Text style={{color: 'white', margin: 10}}>Consumebles</Text>
      <Button mode="outlined" style={{margin: 10}} onPress={()=>navigation.navigate("Bits")}>
        Bits
      </Button>
      <Button mode="outlined" style={{margin: 10}} onPress={()=>navigation.navigate("Steels")}>
        Steels
      </Button>
      <Button mode="outlined" style={{margin: 10}} onPress={()=>navigation.navigate("Couplings")}>
        Couplings
      </Button>
      <Button mode="outlined" style={{margin: 10}} onPress={()=>navigation.navigate("Shanks")}>
        Shanks
      </Button>
      <Button mode="outlined" style={{margin: 10}} onPress={()=>navigation.navigate("Remers")}>
        Remers
      </Button>
    </View>
  );
}

export default App11;
