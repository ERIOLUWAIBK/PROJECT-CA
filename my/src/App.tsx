import React from 'react';
import './App.css';
import HelloWorld10 from './componenets/HelloWorld10';
import HelloWorld11 from './componenets/HelloWorld11';
import HelloWorld12 from './componenets/HelloWorld12';


const App: React.FC = () => {
  return (
    <div className="Container">
     
      <div className="Column1">
          <HelloWorld10/>
      </div>
      <div className="Column1">
          <HelloWorld11/>
      </div>
      <div className="Column1">
          <HelloWorld12/>
      </div>
    </div>
  );
}

export default App;