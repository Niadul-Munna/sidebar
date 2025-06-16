import { IoChevronDownOutline } from "react-icons/io5";
import { FiLoader } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { ImStopwatch } from "react-icons/im";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { PiHeadphonesDuotone } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import DarkMode from "./DarkMode";

const SideMenu = () => {
  return (
    <>
      <div className="flex flex-row h-screen bg-slate-500 justify-center text-sm  dark:text-white ">
        <div className="w-52 rounded-xl dark:bg-slate-950 bg-white  flex flex-col justify-between  m-3 p-3  ">
          <div className="flex flex-col space-y-2 ">
            <a className="flex flex-row p-2 ">
              <div className="rounded-full bg-blue-600 w-5 h-5 flex justify-center items-center">
                <span className="text-white text-sm">
                  <FiLoader />
                </span>
              </div>
              <h1 className="flex flex-auto justify-between items-center ml-1">
                Flex Corporation
                <span className="text-slate-600 dark:text-white">
                  <IoIosArrowDown />
                </span>
              </h1>
            </a>
            <span className="border-b opacity-15"></span>
            <a className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-slate-700">
              <span className="text-slate-600 dark:text-white">
                <BiHomeAlt />
              </span>
              <div className="ml-1">Home</div>
            </a>
            <a className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-slate-700">
              <span className="text-slate-600 dark:text-white">
                <FiSearch />
              </span>
              <div className="ml-1"> Search</div>
            </a>
            <a className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-slate-700">
              <span className="flex-none text-slate-600 dark:text-white">
                <FiBell />
              </span>
              <div className="flex-auto ml-1"> Inbox </div>
              <div className="rounded-full bg-blue-200 dark:bg-white w-4 h-4 text-center text-xs font-semibold text-blue-700">
                3
              </div>
            </a>
            <div className="text-xs text-slate-500">Tools</div>

            <a className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-slate-700">
              <span className="text-slate-600 dark:text-white ">
                <ImStopwatch />
              </span>
              <div className="ml-1 ">Time Tracker</div>
            </a>

            <a className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-slate-700">
              <span className="text-slate-600 dark:text-white">
                <IoSpeedometerOutline />
              </span>
              <div className="ml-1">Work Load</div>
            </a>
            <a className="flex flex-row items-cente ">
              <div className="text-slate-600 dark:text-white">
                <IoChevronDownOutline />
              </div>
              <div className="flex flex-auto text-xs ml-2">Workspaces</div>
              <div className="text-slate-600 dark:text-white">
                <FiPlus />
              </div>
            </a>

            <div className="flex-auto ">
              <div className="flex-auto ml-5 space-y-4 ">
                <a className="flex flex-auto hover:bg-gray-100 dark:hover:bg-slate-700">
                  <div className="rounded-full bg-indigo-200 dark:bg-indigo-700 dark:text-white w-5 h-5 text-center  text-sm  text-indigo-700 font-semibold ">
                    P
                  </div>
                  <div className="ml-1">Product</div>
                </a>
                <a className="flex flex-auto hover:bg-gray-100 dark:hover:bg-slate-700">
                  <div className="rounded-full bg-blue-300 w-5 h-5 text-center text-sm font-semibold dark:bg-violet-600 dark:text-white text-blue-700">
                    M
                  </div>
                  <div className="ml-1">Marketing</div>
                </a>

                <a className="flex flex-auto hover:bg-gray-100 dark:hover:bg-slate-700">
                  <div className="rounded-full bg-green-200 w-5 h-5 text-center text-sm  dark:bg-green-800 dark:text-white font-semibold text-green-700">
                    H
                  </div>
                  <div className="ml-1">HR</div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-row items-center bg-gray-50 dark:bg-transparent h-12 border dark:border-gray-800	shadow rounded-lg p-2 ">
              <span className="text-yellow-400 dark:text-orange-400">
                <IoIosWarning />
              </span>
              <div className="flex flex-auto text-gray-600 text-xs p-1 dark:text-gray-300 ">
                7 days left in trial
              </div>
              <div className="text-blue-600  font-semibold text-xs ">
                Upgrade
              </div>
            </div>

            <a className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-slate-700">
              <div className="text-slate-600 dark:text-white">
                <PiHeadphonesDuotone />
              </div>
              <div className="ml-1">Support</div>
            </a>
            <a className="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-slate-700">
              <div className="text-slate-600 dark:text-white">
                <IoMoonOutline />
              </div>
              <div className="flex flex-auto ml-1">Dark Mode </div>
              <button
                id="DarkMode"
                onClick={DarkMode}
                className="bg-gray-400 dark:bg-blue-600 w-7 h-4 rounded-lg  items-center p-0.5"
              >
                <div className="w-3 h-3  dark:ml-3 rounded-full bg-white"></div>
              </button>
            </a>

            <a className="flex flex-row items-center">
              <img
                className="rounded-full w-8 h-8"
                src="https://randomuser.me/api/portraits/women/26.jpg"
                alt="UserPhoto"
              />

              <div className="text-xs ml-1">
                Niadul Islam
                <div className="text-xs text-slate-800 dark:text-white">
                  niadulislammunna@gmail.com
                </div>
              </div>
              <div className=" flex flex-auto justify-end text-xl text-slate-600 dark:text-white">
                <HiMiniChevronUpDown />
              </div>
            </a>
          </div>
        </div>

        <div className="w-16 rounded-lg dark:bg-slate-950  bg-white flex flex-col justify-between items-center p-5 m-4">
          <div className="flex flex-col justify-center items-center space-y-4  ">
            <a>
              <div className="rounded-full bg-blue-600 w-5 h-5 flex flex-col justify-center items-center">
                <span className="text-white text-sm  ">
                  <FiLoader />
                </span>
              </div>
            </a>
            <span className="border-b w-12 opacity-15 "></span>
            <a>
              <div className="text-slate-600 dark:text-white">
                <BiHomeAlt />
              </div>
            </a>
            <a>
              <div className="text-slate-600 dark:text-white">
                <FiSearch />
              </div>
            </a>
            <a>
              <div className="text-slate-600 dark:text-white">
                <FiBell />
              </div>
            </a>
            <span className="border-b opacity-15 w-8 "></span>
            <a>
              <div className="text-slate-600 dark:text-white">
                <ImStopwatch />
              </div>
            </a>
            <a>
              <div className="text-slate-600 dark:text-white">
                <IoSpeedometerOutline />
              </div>
            </a>
            <span className="border-b opacity-15 w-8 "></span>
            <a>
              <div className="rounded-full bg-indigo-200 w-5 h-5 text-center  text-sm dark:bg-indigo-700 dark:text-white font-semibold text-indigo-700 ">
                P
              </div>
            </a>
            <a>
              <div className="rounded-full bg-blue-300 w-5 h-5 text-center dark:bg-violet-600  dark:text-white text-sm font-semibold text-blue-700">
                M
              </div>
            </a>
            <a>
              <div className="rounded-full bg-green-200 w-5 h-5 text-center dark:bg-green-700 dark:text-white text-sm font-semibold text-green-700">
                H
              </div>
            </a>
          </div>
          <div className=" flex flex-col space-y-4 items-center">
            <a>
              <div className="text-slate-600 dark:text-white">
                <PiHeadphonesDuotone />
              </div>
            </a>
            <button>
              <div className="text-slate-600 dark:text-white">
                <IoMoonOutline />
              </div>
            </button>

            <a className="flex flex-col relative ">
              <img
                className="rounded-full max-w-8"
                src="https://randomuser.me/api/portraits/women/26.jpg"
                alt="UserPhoto"
              />
              <span className="flex flex-auto absolute bottom-0 right-0 items-center justify-center bg-white dark:bg-slate-950 dark:text-orange-400 w-4 h-4 rounded-full text-yellow-300">
                <IoIosWarning />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
