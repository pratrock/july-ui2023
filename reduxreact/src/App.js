// import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksContainer from './components/HooksContainer';
import PhoneContainer from './components/PhoneContainer';
import LaptopContainer from './components/LaptopContainer';
import NewLaptopComponent from './components/NewLaptopComponent';
import UserContainer from './components/UserContainer';

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
      <header className="App-header">
         {/* <LaptopContainer/>
         <HooksContainer></HooksContainer>
         <PhoneContainer></PhoneContainer>
         <NewLaptopComponent></NewLaptopComponent>  */}
         <UserContainer></UserContainer>
      </header>
      </div>
    // </Provider>
  );
}

export default App;
