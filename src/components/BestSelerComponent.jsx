const BestSelerComponent = () => {
  return (
    <>
      <div className="grid justify-items-center font-normal font-serif">
        <div>Best Seller</div>
      </div>
      <div className="grid justify-items-center font-normal font-serif">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos
          eligendi at recusandae Seller
        </div>
      </div>
      <div className="flex flex-row justify-items-center bg-transparent gap-y-8 py-8 gap-x-8 space-x-4 space-y-4">
        {
          <div className="rounded-full ">
            <img
              src="\src\images\Place-Your-Image-Here-(Double-Click-to-Edit)1.png"
              alt=""
            />{" "}
            <div className="font-normal font-serif">
              description of the image here
            </div>
          </div>
        }
        {
          <div className=" ">
            <img
              src="\src\images\Place-Your-Image-Here-(Double-Click-to-Edit)2.png"
              alt=""
            />{" "}
            <div className="font-normal font-serif">
              description of the image here
            </div>
          </div>
        }
        {
          <div className="">
            <div className="desc">
              {" "}
              <img
                src="\src\images\Place-Your-Image-Here-(Double-Click-to-Edit)3.png"
                alt=""
              />{" "}
            </div>
            <div className="font-normal font-serif">
              description of the image here
            </div>
          </div>
        }
      </div>
    </>
  );
};
export default BestSelerComponent;
