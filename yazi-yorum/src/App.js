import React from 'react';
import User from './User';
import {data} from './data';

function App() {
  return (
    <div>
      <User kullanicilar={data} name='Orhan' color='red' />
    </div>
  );
}
export default App;