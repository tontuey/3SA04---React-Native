import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Interface from './components/Interface';
import Icon from './components/Icon';


export default function App() {
  return (        
    <Router>
      <Scene key='root'>
        <Scene key="Icon" component={Icon} />
        <Scene key="Interface" component={Interface} />
        
      </Scene>
    </Router>       
  );
}
