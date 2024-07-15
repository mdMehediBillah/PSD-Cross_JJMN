import './SubscribeComponent.css';
import background from "../images/Subscribe-bg.jpg"

const SubscribeComponent = () =>
{
  return (
 <div className="relative w-full h-96 flex bg-opacity-95 justify-center items-center overflow-hidden">
      <img src={background} alt="Background" className="absolute top-0 left-0 w-full h-fit object-cover z-[-1]" />
      <div className="text-center p-5 rounded bg-opacity-0">
        <h1 className="text-2xl mb-2 text">Subscribe</h1>
        <p className="text-lg mb-4">Stay updated with the latest news and exclusive offers.</p>
        <div className="flex flex-row items-center">
          <input type="email" placeholder="Enter your email" className="p-2 border-none focus:outline-none focus:border-transparent text-black rounded w-full max-w-xs" />
          <button type="button" className="p-2 bg-yellow-500 text-black rounded hover:scale-110">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeComponent;