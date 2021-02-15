import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './Components/head'
import Footer from './Components/footer'
import MainRouter from './MainRouter'

function App() {
  return (
    <div className="App">
      <NavBarr />
      
        <MainRouter />
     
      <Footer />
    </div>
  );
}

export default App;
