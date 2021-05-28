import {AppRegistry} from 'react-native';
//import Navigator from './src/navigator';
import login from './src/views/login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => login);
