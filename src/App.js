import React, { useState } from 'react';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Searchresults from './components/searchresults';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Savearea from './components/savearea';
import ls from 'local-storage'

function App() {

const [searchString, setsearchString] = useState('red')
const [listner, setlistner] = useState(true)

if(!ls.get('savedtweets')){
  ls.set('savedtweets',[])
}

const handleSearchStringSubmit=(x)=>{
  setsearchString(x)
}

const handleSavedTweetsUpdate=()=>{
  setlistner(!listner)
}

  return (
    <DndProvider backend={HTML5Backend}>
       <div className="App">
        <Navbar></Navbar>
        <div className="container" style={{paddingTop:25, marginTop:50}}>
        <div className="row">
        <Searchbar onSearchStringSubmit = {handleSearchStringSubmit}></Searchbar>
        </div>
        <div className="row" style={{marginTop:10}}>
        <div className="col-6"><Searchresults onSavedTweetsUpdated={handleSavedTweetsUpdate} searchString={searchString}/></div>
        <div className='col-6'><Savearea listner={listner} /></div>
        </div>
      </div>
    </div>
    </DndProvider>
  );
}

export default App;
