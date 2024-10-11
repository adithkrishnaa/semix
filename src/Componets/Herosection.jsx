import { IoIosSearch } from "react-icons/io";
import headerimg from "../assets/Images/headerimage.png";
import reg1 from "../assets/Images/Rectangle1.png";
import reg2 from "../assets/Images/Rectangle2.png";
import img1 from "../assets/Images/Group.png";
import img2 from "../assets/Images/Group1.png";
import img3 from "../assets/Images/Group2.png";
import img4 from "../assets/Images/Group3.png";


const Herosection = () => {
  return (
    <>
      <div className=" font-urbanist px-6">
        <div className="">
          <div className="mt-8 space-y-3">
            <h2 className="text-3xl font-bold">
              You bring the <span className="text-primary">knowledge</span>,
              we’ll make it unforgettable.
            </h2>
            <div className=" relative">
              <input
                className="w-full p-2 bg-primary  placeholder:text-white placeholder:pl-10 rounded-3xl"
                type="search"
                name="search"
                id="search"
                placeholder="What would you like to learn?"
              />
              <IoIosSearch
                className="text-white absolute top-2 left-4"
                size={21}
              />
            </div>
          </div>
          <div className="mx-auto">
            <img className="mx-auto" src={headerimg} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-8">
          <div className=" border-2 p-2 rounded-lg  shadow-lg">
            <div className="flex   justify-center">
              <img className="w-10 " src={reg1} alt="img" />
            </div>
            <h4 className="text-lg text-center">
              More than <span className="font-medium">4 million</span>
            </h4>
            <h5 className="text-primary text-center text-xl font-semibold">
              5-star reviews
            </h5>
          </div>
          <div className=" border-2 p-2 rounded-lg  shadow-lg">
            <div className="flex   justify-center">
              <img className="w-10 " src={reg2} alt="img" />
            </div>
            <h4 className="text-lg whitespace-nowrap text-center">
              65,000{" "}
              <span className="font-bold text-primary">expert tutors</span>
            </h4>
            <h5 className=" text-center text-xl font-semibold">
              in 300+ subjects
            </h5>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="bg-black  w-full  flex justify-around p-4 my-auto ">
          <img className="w-16 lg:w-40  my-auto " src={img1} alt="" />
          <img className="w-16 lg:w-40 my-auto" src={img2} alt="" />

          <img className="w-16 lg:w-40 my-auto" src={img3} alt="" />
          <img className="w-16 lg:w-40 my-auto" src={img4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
