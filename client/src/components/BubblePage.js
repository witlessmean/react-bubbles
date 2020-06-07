import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    
      axiosWithAuth().get('api/colors').then((response) => {
        console.log( 'bubblepage response', response)
          setColorList(response.data)
      }).catch((error) => {
        console.log('bubblepage error log', error)
      }
      )
    return axiosWithAuth()
  }, [])
  
  
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

