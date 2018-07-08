import { StackNavigator, DrawerNavigator } from 'react-navigation';
import mainComponent from '../Components/mainComponent';
import loginComponent from "../Components/login"


const Router = StackNavigator({
	mainComponent: { screen: mainComponent, navigationOptions: { header:null, headerTitle: null }},
           loginComponent: { screen: loginComponent, navigationOptions: { header:null, headerTitle: null }},
          //kukuriwi
}  );
export default Router;
