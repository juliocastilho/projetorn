import {AppRegistry} from 'react-native';
//import Navigator from './src/navigator';
import Login from './src/views/login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
