import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Patrimonio from './Patrimonio';
import AddPatrimonio from './AddPatrimonio'

const Stack = createNativeStackNavigator();

export default function StackPatrimonio() {
  return (
    <Stack.Navigator
      initialRouteName="Patrimonio"
      options={{
        headerShown: true
      }
      }
    >
      <Stack.Screen
        name="Patrimonio"
        component={Patrimonio}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddPatrimonio"
        component={AddPatrimonio}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}