import React from 'react';
import User from './User';
const data = [
  {
    id: 1,
    name: 'Celalettin',
    age: 35,
  },
  {
    id: 2,
    name: 'Hasan',
    age: 33,
  },
  {
    id: 3,
    name: 'Ahmet',
    age: 34,
  },
];
function App() {
  return (
    <div>
      <User kullanicilar={data} name='Orhan' color='red' />
    </div>
  );
}
export default App;