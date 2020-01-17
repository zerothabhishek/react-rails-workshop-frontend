import React, { useState, useEffect } from 'react';

const DataURL = "/3.json";

function fetchData(onReady) {
  fetch(DataURL)
    .then((res) => res.json())
    .then((data) => onReady(data))
    .catch(() => { console.log('Problem fetching data'); });
}

function MyEffect3(props) {

  const [userData, setUserData] = useState({});

  useEffect(function(){
    fetchData(function(data) {
      console.log(data);
      setUserData(data);
    })
  }, [userData.length])

  return (
    <>
      { userData.length === 0 ?
        <div>Loading...</div> :
        <DataJSX userData={userData} ></DataJSX>
      }
    </>
  );
}

const DataJSX = (props) =>
  <div className='MyEffect'>
    <div className="Name">
      {props.userData.name}
    </div>
    <div className="Weapon">
      {props.userData.weapon}
    </div>
  </div>;

export default MyEffect3;
