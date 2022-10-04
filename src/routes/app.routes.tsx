import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { MatchForm } from "../screens/MatchForm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="matchForm" component={MatchForm} />
    </Navigator>
  );
}
