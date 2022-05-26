import React from 'react';
import Title from './comps/Title';
import UploadForm from "./comps/UploadForm"
import Images from "./comps/Images"
function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <Images/>
    </div>
  );
}

export default App;
