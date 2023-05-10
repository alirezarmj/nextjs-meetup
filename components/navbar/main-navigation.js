import { useTheme } from "next-themes";
import Link from "next/link"
import Logo from "./logo"
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsSun, BsMoon } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx'
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"

const MainNavigation = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false)

  const boxRef = useRef(null);
  // useEffect(() => {
  //   window.onclick = (event) => {
  //     if (
  //       event.target.contains(boxRef.current) &&
  //       event.target !== boxRef.current
  //     ) {
  //       setNav(false);
  //     }
  //   };
  // }, []);

  //Dark Mode Config
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="bg-gray-200 rounded-lg   text-base md:text-lg  lg:text-xl dark:bg-gray-600 p-2"
        >
          <BsSun />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="bg-gray-200 rounded-lg  text-base md:text-lg  lg:text-xl p-2 text-black"
        >
          <BsMoon />
        </button>
      );
    }
  };


  function allMeetupsHandler(e) {
    e.preventDefault();
    router.push("/")
    setNav(false)
  }

  function newMeetupHandler(e) {
    e.preventDefault();
    router.push("/new-meetup")
    setNav(false)
  }


  return (
    <div className="w-full h-[80px] sticky top-0 bg-pink-800">
      <div className="max-w-[1240px] h-full mx-auto  px-8 ">
        <div className="flex  justify-between items-center h-full w-full">
          <div className="flex gap-4">
            <Logo />
            {/* Dark Mode */}
            <div className="hidden md:flex hover:bg-gray-400 rounded-md duration-150">{renderThemeChanger()}</div>
          </div>
          <ul className="text-pink-300 md:flex gap-6 text-2xl hidden ">
            <Link className=" hover:text-white  duration-500  text-lg md:text-xl lg:text-2xl" href={"/"}>All Meetups</Link>
            <Link className=" hover:text-white duration-500 text-lg md:text-xl lg:text-2xl" href={"/new-meetup"}>Add New Meetup</Link>
          </ul>
          {/* Mobile Menu */}
          <div className="md:hidden block">
            <RxHamburgerMenu className="cursor-pointer" size={30} onClick={() => setNav(prev => !prev)} />
          </div>
          <div onClick={() => setNav(!nav)} className={nav ? "bg-black/60 z-10 top-0 left-0 absolute w-full h-screen md:hidden duration-500  ease-in-out" : "hidden"} />
          <div onClick={(e) => e.stopPropagation()} className={nav ? "h-screen w-[50%] z-10  left-0 top-0 absolute dark:bg-gray-800 bg-white flex flex-col p-4 md:hidden  duration-500 ease-in-out" : "h-screen absolute w-[40%] z-10 md:hidden duration-500  left-[-100%] top-0 "}>    {/* ref={boxRef} */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-black text-base  md:text-xl font-bold dark:text-white">Nextjs Meetups </h1>
              <RxCross2 className="cursor-pointer" size={30} onClick={() => setNav(prev => !prev)} />
            </div>
            <div className="text-pink-600 flex flex-col gap-10 sm:text-lg items-center  text-xs p-6  ">
              <button className="hover:bg-gray-500 hover:text-white/60 transition duration-150 px-4 py-2 rounded-md" onClick={e => allMeetupsHandler(e)} >All Meetups</button>
              <button  onClick={e => newMeetupHandler(e)} className="whitespace-nowrap  transition duration-150 px-4 py-2 hover:bg-gray-500  rounded-md hover:text-white/60" >Add New Meetup</button>
              {/* Dark Mode */}
              <div className="dark:text-white hover:bg-gray-500 hover:text-white/60   transition duration-150 " >{renderThemeChanger()}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainNavigation