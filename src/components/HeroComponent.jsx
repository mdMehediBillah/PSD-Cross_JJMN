import NavComponent from "./NavComponent";
import heroImage from "../images/HeroImage.png";
import './HwCss.css'

const HeroComponent = () => {
  return <>
 
  <div className="relative h-[1000px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}>
         <NavComponent/>
        <div>
        <div className="flex mt-20">
      <div className="flex-1"></div>
      <div className="flex-1 p-4 mt-10">
      <h1 className="mb-4 text-left hw_oriental_title mt-20 text-yellow-400 drop-shadow-custom sm:text-4xl md:text-8xl">
        Title Here
      </h1>
      <p className="mr-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>
      <div className="my-10 ml-4 flex">
          <button className="h-12 w-56 rounded-xl bg-yellow-400 px-4 py-2 text-center font-OpenSans text-xl font-extrabold text-[#776c64] opacity-90 focus:border-2 focus:border-[#776c64] focus:outline-none">
            ORDER NOW
          </button>
        </div>
      
      </div>
    </div>
          <div className="relative ml-10 flex flex-col items-start justify-center sm:w-full md:w-1/2">
</div>
          
        </div>
  </div>;
  </>;
};

export default HeroComponent;
