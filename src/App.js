import React from 'react';
import './App.css';
import VideoComp from './components/VideoComp'
import SearchComponent from './components/SearchComponent'




function App() {


  return (
    <div className='container-fluid bg-light text-center'>
        <SearchComponent/>
        <VideoComp/>
        
    </div>
  );
}

export default App;
