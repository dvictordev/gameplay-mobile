import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      {/* <Screen name="home" component={Home} /> */}
    </Navigator>
  );
}