import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu from './CustomSidebarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    }
},
{
    contentComponent: 
        CustomSidebarMenu
    
},
{
    initialRouteName: "Home"
})