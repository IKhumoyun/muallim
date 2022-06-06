import React from 'react';
import { letters } from "./data/letters";
import {Tile} from "./components/tile";

function App() {
  return (
    <div className="App">
      {
        letters.map(({title, symbol, audio}, index) => (
            <div>
              <Tile
                  index={index + 1}
                  title={title}
                  symbol={symbol}
                  audio={audio}
                  key={index}
              />
            </div>
        ))
      }
    </div>
  );
}

export default App;
