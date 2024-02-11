import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-purple-300 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="mt-[15px] text-3xl uppercase underline font-extrabold text-purple-900">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[15px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
