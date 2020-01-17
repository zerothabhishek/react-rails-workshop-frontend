import React, { useState, useEffect } from 'react';

const DataURL = "/3.json";

function fetchData(onReady) {
  fetch(DataURL)
    .then((res) => res.json())
    .then((data) => onReady(data))
    .catch(() => { console.log('Problem fetching data'); });
}

function MyEffect2(props) {

  const [userData, setUserData] = useState({});

  useEffect(function(){
    fetchData(function(data) {
      console.log(data);
      setUserData(data);
    })
  }, [userData.length])

  return (
    <div className='MyEffect'>
      <div className="Name">
        {userData.name}
      </div>
      <div className="Weapon">
        {userData.weapon}
      </div>
    </div>
  );
}

export default MyEffect2;
