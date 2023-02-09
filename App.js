import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Todos from './screens/Todos'
import Settings from './screens/Settings'
import Landing from './screens/Landing'
import { Ionicons } from '@expo/vector-icons'
import store from './redux/store'
import { Provider } from 'react-redux'

export default function App() {

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator()

function MyBottomTab() {
  return (
  <BottomTabs.Navigator screenOptions={{
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  }}>
    <BottomTabs.Screen 
      name='Home' 
      component={Landing} 
      options={{
        tabBarIcon: (props) => <Ionicons {...props} name='home-outline' size={24} />

      }} 
    />
    <BottomTabs.Screen 
      name='Todos' 
      component={Todos} 
      options={{
        headerShown: true,
        tabBarIcon: (props) => <Ionicons {...props} name='list-outline' size={24} />,
      }}
    />
      <BottomTabs.Screen 
        name='Settings' 
        component={Settings} 
        options={{
          headerShown: true,
          tabBarIcon: (props) => <Ionicons {...props} name='settings-outline' size={24} />
        }} 
      />
  </BottomTabs.Navigator>
  )
}


  return (
    <Provider store = {store} >
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Landing' 
          screenOptions={{
            headerShown: false,
            headerShadowVisible:true,
            headerTintColor: '#444'
          }}
        >
          <Stack.Screen name='Landing' component={Landing} />
          <Stack.Screen name='Todos' component={MyBottomTab} />
          <Stack.Screen  name='Settings' component={MyBottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

