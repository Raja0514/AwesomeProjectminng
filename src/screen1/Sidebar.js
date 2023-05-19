import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

const Sidebar = props => {
  return (
    <>
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.container}>
            <View style={[styles.userinfo, {flexDirection: 'row'}]}>
              <View style={{marginTop: 15, marginLeft: 10}}>
                <Avatar.Image source={require('../pages/user.jpg')} />
              </View>

              <View style={{marginLeft: 10, marginTop: 15}}>
                <Title style={styles.title}>Gian Frango</Title>

                <Caption style={styles.title}>METS-Truck Operator</Caption>
              </View>
            </View>

            <Drawer.Section style={{marginTop: 15}}>
              <DrawerItem
                label="PRESTART"
                onPress={() => props.navigation.navigate('Multistep2')}
              />
              <DrawerItem
                label="METSPLOD"
                onPress={() => props.navigation.navigate('App1')}
              />

              <DrawerItem
                label="LOADING_LOCATIONS"
                onPress={() => props.navigation.navigate('App2')}
              />
              <DrawerItem
                label="NUMBER OF LOADS"
                onPress={() => props.navigation.navigate('App3')}
              />

              <DrawerItem
                label="DEVELOPMENTDRILLING"
                onPress={() => props.navigation.navigate('App4')}
              />
              <DrawerItem
                label="DEVELOPMENTDRILLING"
                onPress={() => props.navigation.navigate('App5')}
              />
            </Drawer.Section>

            <Drawer.Section title="Prefernces">
              <TouchableRipple>
                <View style={styles.prefernces}>
                  <Text>Dark Mode</Text>
                  <Switch />
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        {/* Logout */}

        <Drawer.Section style={styles.bottomDrawer}>
          <Drawer.Item label="Sign Out " onPress={() => {}} />
        </Drawer.Section>
      </View>
    </>
  );
};
export default Sidebar;

const styles = StyleSheet.create({
  container: {},
  userinfo: {},
  title: {},
  bottomDrawer: {
    marginBottom: 15,
  },
  prefernces: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
