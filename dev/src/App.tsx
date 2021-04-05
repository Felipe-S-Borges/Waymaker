import React from 'react';
import { BusModal } from './Components/BusModal';
import { DesinyConfirm } from './Pages/DesinyConfirm';
import { DestinySearch } from './Pages/DestinySearch';
import { RouteDirections } from './Pages/RouteDirections';
import { Home } from './Pages/Home';
import { OnLoad } from './Pages/OnLoad';
import { RoutesDisplay } from './Pages/RoutesDisplay ';



function App() {
  return (
    <div className="App">
      {/*<OnLoad />*/}
      
      {/*<Home />*/}
      
      {/**<DestinySearch /> */}
      
      {/**<DesinyConfirm /> */}
      
      {/**<RoutesDisplay /> */}
      
      {/**  */}
      <RouteDirections />
      <BusModal />
     
      
      
      
    </div>
  );
}

export default App;
