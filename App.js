import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import SignIn from './screens/SignInScreen';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{title:"Welcome"}} />
          <Stack.Screen name="SignIn" component={SignIn} options={{title:"SignInScreen"}} />
          <Stack.Screen name="Welcome" component={Welcome} options={{title:"Welcome"}} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
