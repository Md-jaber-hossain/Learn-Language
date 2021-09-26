import logo from './logo.svg';
// import react bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import the Header and Home component
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
