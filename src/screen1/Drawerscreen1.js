import Tabscreen1 from './Tabscreen1';
import Tabscreen2 from '../screen2/Tabscreen2';

import React from 'react';

import {} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';



const Tab = createMaterialBottomTabNavigator();

const Drawerscreen1 = () => {
  return (

      <Tab.Navigator>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Tabscreen1} />
          <Tab.Screen name="Settings" component={Tabscreen2} />
        </Tab.Navigator>
      </Tab.Navigator>
    
  );
};

export default Drawerscreen1;
