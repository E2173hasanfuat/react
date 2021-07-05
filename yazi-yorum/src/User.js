import React from 'react';


const User = ({ kullanicilar, name, color }) => {
  console.log(kullanicilar, name, color);
  //[<div>merhab....</div>,<div>Merhababkd</div>,<div>Merhabab</div>]
  const renderedUsers = kullanicilar.map(kullanici => {
    return (
      <div key={kullanici.id}>
        Merhaba benim adim {kullanici.name}, {kullanici.age} yasindayim
      </div>
    );
  });
  return <>{renderedUsers}</>;
};
export default User;