import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import ScreenOne from '../screens/ScreenOne';
import ScreenThree from '../screens/ScreenThree';
import ScreenTwo from '../screens/ScreenTwo';

import {View, Image, Text, StyleSheet} from 'react-native';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          elevation: 0,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          height: 80,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#22252e',
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../images/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#eaedf4' : '#4a4e57',
                margin: 10,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e1e1e1' : '#d2bd43',
                borderRadius: 20,
                transform: [{rotate: '45deg'}],
              }}>
              <Image
                source={require('../images/hexagon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#22252e' : '#4a4e57',
                  margin: 10,
                  transform: [{rotate: '-45deg'}],
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../images/heart.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#eaedf4' : '#4a4e57',
                margin: 10,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
