import React from 'react';

import {View, Pressable, StyleSheet} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Multistep from './src/pages/Multistep';

import App1 from './src/pages/App1';

import App2 from './src/pages/App2';

import App3 from './src/pages/App3';

import App4 from './src/pages/App4';

import App5 from './src/pages/App5';

import App6 from './src/pages/App6';

import App7 from './src/pages/App7';

import App8 from './src/pages/App8';

import App9 from './src/pages/App9';

import App10 from './src/pages/App10';

import App11 from './src/pages/App11';

import App12 from './src/pages/App12';

import App13 from './src/pages/App13';

import App14 from './src/pages/App14';

import App15 from './src/pages/App15';

import App16 from './src/pages/App16';

import {useTheme, Text} from 'react-native-paper';

import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';

const Tab = createBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();

const Post = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Post component</Text>
    </View>
  );
};

const Home = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#040f13',
      }}>
      <Text variant="headlineLarge" style={{color: 'white'}}>
        Profile
      </Text>
    </View>
  );
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Post Room"
        component={Multistep}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Rooms1"
        component={App1}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Rooms2"
        component={App2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Rooms3"
        component={App3}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Rooms"
        component={App3}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

function Tabstack() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {color: 'white'},

        tabBarStyle: {backgroundColor: '#042940'},

        tabBarScrollEnabled: true,
        tabBarItemStyle: {fontSize: 15},
      }}>
      <Tab.Screen
        name="truckplod"
        component={App1}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Prestart"
        component={Multistep}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="location"
        component={App2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="number of Loads"
        component={App3}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="activity sheet"
        component={App10}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Jumpo plod"
        component={App12}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Prestart jumpo"
        component={Multistep}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="developement Drilling"
        component={App4}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="under ground support"
        component={App13}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="under Face Drilling"
        component={App14}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="consummbles"
        component={App11}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Bits" component={App5} options={{headerShown: false}} />
      <Tab.Screen
        name="Steels"
        component={App6}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Shanks"
        component={App7}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Couplings"
        component={App8}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Remers"
        component={App9}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Shift Summary"
        component={App15}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="End shift"
        component={App16}
        options={{headerShown: false}}
      />
    </TopTab.Navigator>
  );
}

// retrieves only the current value of 'user' from 'useAuthenticator'

const App = () => {
  const userSelector = context => [context.user];

  const {user, signOut} = useAuthenticator(userSelector);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#042940'},
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="TabStack"
          component={Tabstack}
          options={{
            title: 'Mining App',
            headerRight: () => (
              <Pressable onPress={signOut} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Logout</Text>
              </Pressable>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SecondComponent = () => {
  return (
    <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen name="Settings" component={SettingsScreen} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);

// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';

// import Stacknavigator from './src/navigation/Stacknavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stacknavigator />
//     </NavigationContainer>
//   );
// };

// export default App;

// import {DataStore} from 'aws-amplify';
// import React, {useState, useEffect} from 'react';
// import {Text, View, TextInput, Button, ScrollView, Alert} from 'react-native';

// import {Metstruckplod} from './src/models';

// const initialState = {
//   trucknumber: '',
//   enginehours: '',
//   date: '',
//   operatorname: '',
//   hoursworked: '',
//   shift: '',
//   crew: '',
// };

// function App() {
//   const [formState, updateFormState] = useState(initialState);
//   //const [mets, setMets] = useState([]);

//   //console.log('data', mets);

//   async function onClick() {
//     try {
//       if (
//         !formState.trucknumber &&
//         !formState.enginehours &&
//         !formState.date &&
//         !formState.operatorname &&
//         !formState.hoursworked &&
//         !formState.shift &&
//         !formState.crew
//       )
//         return;
//       const check = await DataStore.save(new Metstruckplod({...formState}));
//       console.log('check', check);
//       updateFormState(initialState);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   function onChangeText(key, value) {
//     updateFormState({...formState, [key]: value});
//   }

//   // async function fetchContacts() {
//   //   const data = await DataStore.query(Metstruckplod);
//   //   setMets(data);
//   // }

//   // useEffect(() => {
//   //   fetchContacts();
//   //   const subscription = DataStore.observe(Metstruckplod).subscribe(() =>
//   //     fetchContacts(),
//   //   );
//   //   return () => subscription.unsubscribe();
//   // }, []);

//   return (
//     <ScrollView>
//       <View style={container}>
//         <Text style={heading}> MetsTruckplod </Text>
//         <TextInput
//           onChangeText={v => onChangeText('trucknumber', v)}
//           placeholder="Truck Number"
//           value={formState.trucknumber}
//           style={input}
//         />
//         <TextInput
//           onChangeText={v => onChangeText('enginehours', v)}
//           placeholder="Engine Hours"
//           value={formState.enginehours}
//           style={input}
//         />
//         <TextInput
//           onChangeText={v => onChangeText('date', v)}
//           placeholder="Date"
//           value={formState.date}
//           style={input}
//         />
//         <TextInput
//           onChangeText={v => onChangeText('operatorname', v)}
//           placeholder="Operator name"
//           value={formState.operatorname}
//           style={input}
//         />
//         <TextInput
//           onChangeText={v => onChangeText('hoursworked', v)}
//           placeholder="Hours Worked"
//           value={formState.hoursworked}
//           style={input}
//         />
//         <TextInput
//           onChangeText={v => onChangeText('shift', v)}
//           placeholder="Shift"
//           value={formState.shift}
//           style={input}
//         />
//         <TextInput
//           onChangeText={v => onChangeText('crew', v)}
//           placeholder="Crew"
//           value={formState.crew}
//           style={input}
//         />
//         <Button onPress={onClick} title="Send" />

//         {/* {mets.map((met) => (
//             <View key={met.id} style={{border: '2px solid red'}}>
//               <View style={contactBg}>
//                 <Text style={contactText}>Truck Number: {met.trucknumber}</Text>
//                 <Text style={contactText}>Engine Hours: {met.enginehours}</Text>
//                 <Text style={contactText}>Date: {met.date}</Text>
//                 <Text style={contactText}>Operator Name: {met.operatorname}</Text>
//                 <Text style={contactText}>Hours Worked: {met.hoursworked}</Text>
//                 <Text style={contactText}>Shift: {met.shift}</Text>
//                 <Text style={contactText}>Crew: {met.crew}</Text>
//               </View>
//             </View>
//           ))} */}
//       </View>
//     </ScrollView>
//   );
// }
// export default App;
// const container = {
//   flex: 1,
//   justifyContent: 'center',
//   padding: 10,
//   paddingTop: 0,
//   backgroundColor: 'grey',
// };
// const input = {marginBottom: 10, padding: 7, backgroundColor: '#ddd'};
// //const contactBg = {backgroundColor: 'white',margin:30};
// const heading = {
//   fontWeight: 'normal',
//   fontSize: 40,
//   color: 'white',
//   margin: 20,
// };
// //const contactText = {margin: 0, padding: 9, fontSize: 20};

const styles = StyleSheet.create({
  container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
  todo: {marginBottom: 15},
  input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
  todoName: {fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  buttonText: {color: 'white', padding: 5, fontSize: 12},
});
