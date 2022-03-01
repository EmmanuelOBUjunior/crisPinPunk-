import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [punkDataList, setPunkDataList] = useState([])

  useEffect(() => {
    const getMyNFTs = async() =>{
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x04fabCE30fdb6460cDd33C25A25C29D9ec0da421&order_direction=ascending')
      console.log(openSeaData.data.assets)
    }
    return getMyNFTs()
  }, [])
  return (
    <div className='app'> 
      <Header/> 
      <CollectionCard id = {0} name = {'Shrek Punk'} traits = {[{'value': 7}]} image = 'https://lh3.googleusercontent.com/m-Ws730SPYfr1hhPi44UWd923AthhSYnetE8x32yJf1b4GPOTOwdsgK9yXN7naVm7Y884R7e7yTxzMjDGfwpZaRQmfgA4Zo5CXy_jg=w600' />
    </div>
   
  );
}

export default App;
