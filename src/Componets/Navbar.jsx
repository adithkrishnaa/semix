import logo from "../assets/Images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-black mt-5 md:mt-0 font-urbanist">
        <nav>
          <div className="flex xl:justify-between py-1  my-auto xl:py-1 px-2 xl:px-10">
            <div className="flex space-x-10 xl:space-x-20">
              <img
                className="w-20 h-8 my-auto xl:w-36"
                src={logo}
                alt="logo"
              />

              <div className="text-white text-xs  lg:text-base space-x-2 flex lg:space-x-5 my-auto">
                <button className="lg:p-2 px-2 p-1 border-primary whitespace-nowrap border-[1px] rounded-md">
                  About us
                </button>
                <button className="lg:p-2 px-2 border-primary whitespace-nowrap border-[1px] rounded-md">
                  Ask Question
                </button>
              </div>
            </div>

            <div className="text-white text-xs lg:text-base my-2 flex space-x-2 lg:space-x-4">
             
              <button className="hidden lg:block p-2 whitespace-nowrap bg-primary rounded-md">
                Apply Now
              </button>
              <button className="lg:p-2 py-1 px-2 border-primary whitespace-nowrap border-[1px] rounded-md">
                Login
              </button>
              <button className="lg:p-2 px-2  bg-primary whitespace-nowrap rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
