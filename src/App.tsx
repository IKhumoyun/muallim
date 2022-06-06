import React from 'react';
import { letters } from "./data/letters";
import {Tile} from "./components/tile";
import {Footer} from "./components/footer";
import './assets/styles/main.scss';

function App() {
  return (
    <div className="App">
      {
        letters.map(({title, symbol, audio}, index) => (
            <Tile
                index={index + 1}
                title={title}
                symbol={symbol}
                audio={audio}
                key={index}
            />
        ))
      }
      <Footer/>
    </div>
  );
}

export default App;
