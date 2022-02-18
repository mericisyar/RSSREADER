import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from './Screens/FeedScreen';
import FeedDetailScreen from './Screens/FeedDetailScreen';

const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Haber Merkezi" component={FeedScreen} />
        <Stack.Screen name="Haberler" component={FeedDetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
