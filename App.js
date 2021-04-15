import React from 'react';
import { Image, Text } from 'react-native';
import Write from './Screens/Write';
import Read from './Screens/Read';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  'Write a Story':Write,
  'Read a Story':Read,
},
{
  defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ({})=>{
    const routeName = navigation.state.routeName;
    if(routeName === 'Write a Story'){
      return(
        <Image
          source={require('./assets/write.png')}
          style={{width : 40 , height : 40}}/>
      )
    }else{
      return(
        <Image
          source={require('./assets/read.png')}
          style={{width : 40 , height : 40}}/>
      )
    }
  }
})
}
)
const AppContainer=createAppContainer(TabNavigator);