
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BusModal } from './Components/BusModal';
import { DesinyConfirm } from './Pages/DesinyConfirm';
import { DestinySearch } from './Pages/DestinySearch';
import { RouteDirections } from './Pages/RouteDirections';
import { Home } from './Pages/Home';
import { OnLoad } from './Pages/OnLoad';
import { AllRoutesDisplay } from './Pages/AllRoutesDisplay ';



function App() {
  return (
    
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/onLoad"  component={OnLoad}/>
      <Route path="/search"  component={DestinySearch}/>
      <Route path="/searchConfirm"  component={DesinyConfirm}/>
      <Route path="/routesDisplay"  component={AllRoutesDisplay}/>
      <Route path="/routeDirections"  component={RouteDirections}/>
      <Route path="/onibus"  component={BusModal}/>
    </BrowserRouter>
     
      
      
                              
      
     
    
  );
}

export default App;
