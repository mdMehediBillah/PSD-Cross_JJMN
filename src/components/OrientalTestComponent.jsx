import "./OrientalTestComponent.css";
import orientalBgUrl from "../images/bg_oriental.png";
import orientalFoodUrl from "../images/Place-Your-Image-Here-(Double-Click-to-Edit)20.png";
const OrientalTestComponent = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-start text-white "
      style={{
        backgroundImage: `url(${orientalBgUrl})`,
      }}
    >
      <div className="flex container mx-auto items-center gap-20 pt-16 justify-around max-w-screen-lg">
        <div>
          <img
            src={orientalFoodUrl}
            alt="Oriental Food Photo"
            className="bg-gray-200 rounded-full mx-w-[450px] max-h-[450px]"
          />
        </div>
        <div className="w-6/12 pt-8">
          <h3 className="text-[#ffd500] text-5xl font-extrabold mb_oriental_title mb-3">
            Oriental Taste
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            sit libero odit sequi quas,
          </p>
          <button className="bg-[#ffd500] uppercase px-12 py-3 text-gray-900 font-bold text-[16px] rounded mt-12">
            Order Now
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-[#ffd500] text-5xl font-extrabold mb_oriental_title pt-32 text-center mt-16">
          Statistics
        </h1>
        <div className="w-7/12 max-w-[800px] mx-auto pt-8">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero
            pariatur amet, autem consequuntur quos est necessitatibus tempora
            excepturi inventore labore consectetur tempore. Iusto iste est,
            delectus unde quasi id.,
          </p>
        </div>
      </div>
      <div className="flex gap-8 container mx-auto justify-center mt-16 max-w-screen-lg ">
        <div className="w-44 h-44 bg-gray-100 rounded-full flex flex-col justify-center items-center border-4 border-gray-50 bg-transparent">
          <h3 className="text-[#ffd500] text-5xl font-bold text-center">123</h3>
          <p className="text-gray-100 text-2xl font-semibold text-center uppercase">
            Outlets
          </p>
        </div>
        <div className="w-44 h-44 bg-gray-100 rounded-full flex flex-col justify-center items-center border-4 border-gray-50 bg-transparent">
          <h3 className="text-[#ffd500] text-5xl font-bold text-center">100</h3>
          <p className="text-gray-100 text-2xl font-semibold text-center uppercase">
            Chef
          </p>
        </div>
        <div className="w-44 h-44 bg-gray-100 rounded-full flex flex-col justify-center items-center border-4 border-gray-50 bg-transparent">
          <h3 className="text-[#ffd500] text-5xl font-bold text-center">100</h3>
          <p className="text-gray-100 text-2xl font-semibold text-center uppercase">
            Menu
          </p>
        </div>
        <div className="w-44 h-44 bg-gray-100 rounded-full flex flex-col justify-center items-center border-4 border-gray-50 bg-transparent">
          <h3 className="text-[#ffd500] text-5xl font-bold text-center">30</h3>
          <p className="text-gray-100 text-2xl font-semibold text-center uppercase">
            Country
          </p>
        </div>
      </div>
      <div className="flex container mx-auto items-center gap-20 pt-24 pb-20 mt-48 justify-around max-w-screen-lg">
        <div className="w-6/12 pt-8">
          <h3 className="text-[#ffd500] text-6xl font-extrabold mb_oriental_title mb-12">
            Chicken grill
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            sit libero odit sequi quas,
          </p>
          <button className="bg-[#ffd500] uppercase px-12 py-3 text-gray-900 font-bold text-[16px] rounded mt-12">
            Order Now
          </button>
        </div>
        <div>
          <img
            src={orientalFoodUrl}
            alt="Oriental Food Photo"
            className="bg-gray-200 rounded-full mx-w-[450px] max-h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OrientalTestComponent;
