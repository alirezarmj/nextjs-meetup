import Link from "next/link"
import Logo from "./logo"
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross2 } from 'react-icons/rx'
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"

const MainNavigation = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false)

  const boxRef = useRef(null);
  useEffect(() => {
    window.onclick = (event) => {
      if (
        event.target.contains(boxRef.current) &&
        event.target !== boxRef.current
      ) {
        setNav(false);
      }
    };
  }, []);

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
    <div className="w-full h-[80px] bg-pink-800">
      <div className="max-w-[1240px] h-full mx-auto  px-8 ">
        <div className="flex  justify-between items-center h-full w-full">
          <Logo />
          <ul className="text-pink-300 md:flex gap-6 text-2xl hidden ">
            <Link className=" hover:text-white  duration-500 hover:duration-500" href={"/"}>All Meetups</Link>
            <Link className=" hover:text-white duration-500 hover:duration-500" href={"/new-meetup"}>Add New Meetup</Link>
          </ul>
          {/* Mobile Menu */}
          <div className="md:hidden block">
            <RxHamburgerMenu className="cursor-pointer" size={30} onClick={() => setNav(prev => !prev)} />
          </div>
          <div className={nav ? "bg-black/60 z-10 top-0 left-0 absolute w-full h-screen md:hidden" : "hidden"}>
            <div ref={boxRef} className={nav ? "h-screen w-[50%] z-10  left-0 top-0 absolute bg-white flex flex-col p-4 md:hidden" : "h-screen absolute w-[40%] z-10 md:hidden left-[-100%] top-0 "}>
              <div className="flex justify-between items-center mb-8">
                <h1   className="text-black text-xl font-bold">React Meetups </h1>
                <RxCross2 className="cursor-pointer" size={30} onClick={() => setNav(prev => !prev)} />
              </div>
              <ul className="text-pink-600 flex flex-col gap-10 sm:text-lg items-center  text-xs p-6  ">
                <button onClick={e => allMeetupsHandler(e)} >All Meetups</button>
                <button onClick={e => newMeetupHandler(e)} className="whitespace-nowrap" >Add New Meetup</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNavigation