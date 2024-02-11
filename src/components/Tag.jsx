import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {
  const [tag, setTag] = useState("Dog");

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-red-300 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-extrabold mt-[15px] text-red-900">Random {tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src= {gif} width="450" height="300"/>)
      }

      <input type="text" className="w-10/12 text-1g text-xl font-semibold text-blue-800 border-fuchsia-800  py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag} />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 border-fuchsia-800 rounded-lg font-bold mb-[15px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
