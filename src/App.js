import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className='app'> 
      <Header/> 
      <CollectionCard id = {0} name = {'Shrek Punk'} traits = {[{'value': 7}]} image = 'https://lh3.googleusercontent.com/m-Ws730SPYfr1hhPi44UWd923AthhSYnetE8x32yJf1b4GPOTOwdsgK9yXN7naVm7Y884R7e7yTxzMjDGfwpZaRQmfgA4Zo5CXy_jg=w600' />
    </div>
   
  );
}

export default App;
