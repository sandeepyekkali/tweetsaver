import React, { useState } from 'react';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Searchresults from './components/searchresults';


function App() {

const [searchString, setsearchString] = useState('red')

const handleSearchStringSubmit=(x)=>{
  setsearchString(x)
}

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container" style={{paddingTop:25, marginTop:50}}>
      <div className="row">
        <Searchbar onSearchStringSubmit = {handleSearchStringSubmit}></Searchbar>
        </div>
        <div className="row">
        <div className="col-6"><Searchresults searchString={searchString}/></div>
        <div className='col-6'><p>Saved</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
