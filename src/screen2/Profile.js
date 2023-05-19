import Drawerscreen1 from '../screen1/Drawerscreen1';

import App1 from '../pages/App1';

import App2 from '../pages/App2';

import App3 from '../pages/App3';

import App4 from '../pages/App4';

import App5 from '../pages/App5';

import Sidebar from '../screen1/Sidebar';

import Multistep2 from '../pages/Multistep';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const Profile = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />} >
      <Drawer.Screen name="Drawerscreen1" component={Drawerscreen1} />

       <Drawer.Screen name="Multistep2" component={Multistep2} />
      <Drawer.Screen name="App1" component={App1} />
      <Drawer.Screen name="App2" component={App2} />
      <Drawer.Screen name="App3" component={App3} />
      <Drawer.Screen name="App4" component={App4} />
      <Drawer.Screen name="App5" component={App5} />
    

      {/* <Drawer.Screen
        name="App1"
        component={App1}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="App2"
        component={App2}
        options={{
          headerShown: true,

          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen
        name="App3"
        component={App3}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="App4"
        component={App4}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="App5"
        component={App5}
        options={{headerShown: true}}
      /> */}
    </Drawer.Navigator>
  );
};

export default Profile;
