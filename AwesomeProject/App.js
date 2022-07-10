import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import MovieInfoScreen from './screens/MovieInfoScreen';
import MoviesScreen from './screens/MoviesScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import MovieInfoContext from './context/MovieInfoContext'
//const App: () => Node = () => {
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={{
            title: 'Movies',
            headerBackVisible: false,
            headerBackground: Colors.DarkBlue,
            headerStyle: {
              backgroundColor: 'purple'
            },
            headerTitleAlign: 'center'
          }}
        />
        < Stack.Screen
          name="MovieInfo"
          component={MovieInfoScreen}
          options={{ title: 'change to context' }}
        />
        {/* </ImageBackground> */}
      </Stack.Navigator>
    </NavigationContainer>
  );


};




export default App;
