import React, { useContext, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import MovieInfoScreen from './screens/MovieInfoScreen';
import MoviesScreen from './screens/MoviesScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MovieInfoContext } from './context/MovieInfoContext';
//const App: () => Node = () => {
const Stack = createNativeStackNavigator();
const App = () => {
  const [movieTitle, setMovieTitle] = useState('')
  const movieTitleState = { movieTitle, setMovieTitle }
  return (
    <MovieInfoContext.Provider value={movieTitleState}>
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
          <Stack.Screen
            name="MovieInfo"
            component={MovieInfoScreen}

            options={{
              title: movieTitle,
              headerStyle: {
                backgroundColor: 'purple'
              },
            }}
          />
          {/* </ImageBackground> */}
        </Stack.Navigator>
      </NavigationContainer>
    </MovieInfoContext.Provider>
  );


};




export default App;
