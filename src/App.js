import './App.css';
import NavBarResponsive from "./components/AppBar";
import {Button} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <h1 className="siteTitle">LOS ROSTADEROS</h1>
        <NavBarResponsive/>
        <div className="welcome">
            <p>Herzlich willkommen auf <p className="welcomeTitle">LOS ROSTADEROS</p></p>
            <Button className="welcomeButton">Mehr Infos</Button>
        </div>

    </div>
  );
}

export default App;
