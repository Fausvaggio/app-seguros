import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import { Home } from "../screens/Home";
import { DatosAuto } from "../screens/DatosAuto";
import { ArmaPlan } from "../screens/ArmaPlan";
import { PaginaGracias } from "../screens/PaginaGracias";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route exact path="/datos-auto">
            <DatosAuto />
          </Route> 
          <Route exact path="/arma-plan">
            <ArmaPlan />
          </Route> 
          <Route exact path="/pagina-gracias">
            <PaginaGracias />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
