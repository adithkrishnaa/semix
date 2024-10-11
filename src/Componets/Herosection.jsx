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
      <div className="font-urbanist px-6 lg:px-14">
        <div className="lg:flex">
          <div className="mt-8 lg:w-4/6 space-y-3">
            <h2 className="text-3xl lg:text-7xl lg:ml-20 lg:leading-[80px] lg:mt-16 font-bold">
              &quot;You bring the{" "}
              <span className="text-primary">knowledge</span>, we’ll make it
              unforgettable.&quot;
            </h2>
            <div className="relative">
              <input
                className="w-full lg:w-[590px] lg:left-80 lg:top-20 lg:absolute p-2 lg:p-[10px] bg-primary border-4 border-white shadow-lg placeholder:text-white placeholder:text-lg placeholder:pl-10 lg:placeholder:pl-16 rounded-3xl focus:outline-none"
                type="search"
                name="search"
                id="search"
                placeholder="What would you like to learn?"
              />
              <IoIosSearch
                className="text-white absolute top-3 left-4 lg:top-24 lg:left-[350px]"
                size={21}
              />
            </div>
          </div>
          <div className="mx-auto lg:w-2/6">
            <img className="mx-auto" src={headerimg} alt="Hero section image" />
          </div>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-4 mt-8">
          <div className="border-2 p-1 lg:w-72 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img className="w-10" src={reg1} alt="Review icon" />
            </div>
            <h4 className="text-lg lg:text-3xl text-center">
              More than{" "}
              <span className="font-medium lg:font-semibold">4 million</span>
            </h4>
            <h5 className="text-primary lg:text-3xl text-center text-xl font-semibold">
              5-star reviews
            </h5>
          </div>

          <div className="border-2 p-2 lg:w-72 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img className="w-10" src={reg2} alt="Tutor icon" />
            </div>
            <h4 className="text-lg lg:text-3xl whitespace-nowrap text-center">
              65,000{" "}
              <span className="font-bold text-primary">expert tutors</span>
            </h4>
            <h5 className="text-center lg:text-3xl text-xl font-semibold">
              in 300+ subjects
            </h5>
          </div>

          <div className="border-2 hidden lg:block p-2 lg:w-72 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img className="w-10" src={reg1} alt="Match icon" />
            </div>
            <h4 className="text-lg lg:text-3xl text-center">
              Find a great <span className="font-medium">match</span>
            </h4>
            <h5 className="text-primary lg:text-3xl text-center text-xl font-semibold">
              5-star reviews
            </h5>
          </div>
        </div>
      </div>

      {/* Logos section */}
      <div className="mt-10">
        <div className="bg-black w-full flex justify-around p-4 my-auto">
          <img className="w-20 lg:w-40 my-auto" src={img1} alt="Logo 1" />
          <img className="w-20 lg:w-40 my-auto" src={img2} alt="Logo 2" />
          <img className="w-20 lg:w-40 my-auto" src={img3} alt="Logo 3" />
          <img className="w-20 lg:w-40 my-auto" src={img4} alt="Logo 4" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
