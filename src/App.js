import logo from './logo.svg';
import './App.css';
import MySkills from './MySkills.jsx';
import NavbarMain from './navbar.jsx'

function App() {

  return (
    <div className="App">
      <div>
        <NavbarMain />
      </div>
      <div>
        <MySkills />
      </div>
    </div>


  );
}
export default App;
