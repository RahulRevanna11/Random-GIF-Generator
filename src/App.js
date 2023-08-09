import logo from './logo.svg';
import './App.css';
import Tag from './component/Tag';
import Random from './component/Random';

function App() {
  return (
    <div className='w-full h-screen flex flex-col back relative items-center overflow-x-hidden' >
       <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold ">RANDOM GIFS</h1>
        <div className='flex flex-col flex flex-col w-full items-center gap-y-10 mt-[30px]'>  
         <Random/>
         <Tag/>
        </div>
       
    </div>
  );
}

export default App;
