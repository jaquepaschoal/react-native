import { createStackNavigator, createAppContainer } from "react-navigation";

import Main from "./pages/main";

const RootStack = createStackNavigator({
  Main
});

const App = createAppContainer(RootStack);

export default App;
