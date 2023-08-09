import React from 'react'
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag=()=>{
//     const [gif, setGif] = useState("");
//     const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("");
//     async function fetchData() {
//       setLoading(true)
//       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  
//       const { data } = await axios.get(url);
//       console.log(data);
//       const imageSource = data.data.images.downsized_large.url;
//       setGif(imageSource);
//       console.log(imageSource);
//       setLoading(false);
//     }
  
//     useEffect(() => {
//       fetchData();
//     }, []);
//   function changeHandler(event){
// setTag(event.target.value);
//   }
  function changeHandler(event){
    setTag(event.target.value);
  }
  const { gif, loading, fetchData } = useGif(tag);
    return ( 
      <div className="w-1/2 h-[450px] bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-3xl uppercase underline font-bold">A Random Gif {tag}</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" />}
        {/* <img src={gif} width="450"></img> */}

        <input 
        className='width-10/14 bg-white text-xl py-2 rounded-lg font-bold' onChange={changeHandler} value={tag}/>
        <button
          onClick={() => fetchData(tag)}
          className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
        >
          Generate
        </button>
      </div>
    )
}
export default Tag;
