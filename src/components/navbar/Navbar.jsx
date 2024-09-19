import React, { useEffect, useState, useRef, useContext } from "react";
import { context } from "../../utils/context";
import "./navbar.css";
import { BsSun, BsSunFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
// import { BsFillMoonFill } from "react-icons/bs";
import {motion,AnimatePresence} from 'framer-motion'
import { links } from "../../utils/links";
import useScrollSpy from "react-use-scrollspy";
import logo from '../../assets/images/logo/logo-website4.jpg'
const Navbar = () => {
  const { sectionRefs } = useContext(context);
  const accordionRef = useRef();
  const menuIconRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeDarkMode, setActiveDarkMode] = useState(false);
  const [changedTheme, setChangedTheme] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [active, setActive] = useState(1);
  //  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: window.innerWidth > 768 ? -450 : -250,
    // offsetPx: -500,
  });

  //     const aaaa=(value)=>{

  // e.target.classList.add("bg-slate-500")
  // setActiveMenu(true)

  //     }

  function handleClickAnchor(id) {
    setActive(id);
    setShowAccordion(false);
  }

  useEffect(() => {
    const fixedNavbar = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setShowAccordion(false);
    };
    const resizeBrowser = () => {
      if (window.innerWidth > 768) {
        setShowAccordion(false);
      }
    };

    let clickHandler = (e) => {
      if (
        !accordionRef.current.contains(e.target) &&
        !menuIconRef.current.contains(e.target)
      ) {
        setShowAccordion(false);
      }
    };
    document.addEventListener("scroll", fixedNavbar);
    window.addEventListener("resize", resizeBrowser);
    document.addEventListener("mousedown", clickHandler);
  }, []);

  const changeDarkMode = () => {
    setChangedTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    setActiveDarkMode((prev) => !prev);
    setShowAccordion(false);
  };

  const showAccordionFunction = () => {
    setShowAccordion((prev) => !prev);
  };

  return (
    <>
      {/* // start navbar */}


      <motion.div
initial={{opacity:0,y:-100}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className={
          `flex  justify-between w-full h-16 absolute  md:top-0 transition duration-300  bg-transparent md:flex md:justify-between md:items-center z-[95] dark:text-slate-50 dark:bg-dark ` +
          (showNavbar ? " showFixedNavbar " : null)
        }
      >
        <div
          ref={menuIconRef}
          className="flex-[.2] h-full  flex justify-center z-50  items-center  md:hidden"
          onClick={showAccordionFunction}
        >
          {showAccordion ? (
            <FaWindowClose className="text-2xl" />
            ) : (
              <BsFillGrid3X3GapFill className="text-2xl" />
              )}
        </div>
        <div
          ref={accordionRef}
          className={
            `   md:flex-[.8] md:flex md:justify-center md:h-full relative transition duration-300 ` +
            (showAccordion
              ? " showAccordionClass dark:text-slate-50 dark:bg-dark "
              : "")
            }
        >
          <div
            className={` flex-[.05]  md:pr-0 md:flex-[.2] absolute top-20 md:top-0 md:static md:h-full md:flex  md:justify-center md:items-center    `}
          >
            <div
              className={
                ` opacity-0 bg-slate-300 right-2  w-12 h-5 md:right-0  md:opacity-100   rounded-3xl cursor-pointer  relative  ` +
                (showAccordion ? "showAccordionContent" : "")
              }
              onClick={changeDarkMode}
            >
              {activeDarkMode ? (
                <BsSun
                className={
                    `  w-6 h-6 absolute  font-bold translate-y-[-10%]  top-0  text-dark` +
                    (activeDarkMode ? " activeDarkModeClass " : null)
                  }
                />
              ) : (
                <BsSunFill
                  className={` w-6 h-6 absolute  right-0 translate-y-[-10%] top-0 font-bold  `}
                />
              )}
            </div>
          </div>
          <div
            className={
              `opacity-0 h-screen md:block absolute top-28  w-full md:static md:opacity-100 md:flex-[.8] md:h-full ` +
              (showAccordion ? "showAccordionContent" : "")
            }
          >
            <ul className=" list-disc [&>*:nth-child(1)]:border-t md:[&>*:nth-child(1)]:border-0  flex  flex-col md:pr-0 md:w-full md:gap-y-0 md:h-full md:flex-row md:mx-auto  md:justify-evenly md:items-center">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={` relative w-full  text-sm h-full   md:w-1/5 flex justify-right md:justify-center items-center  border-b   md:border-0 `}
                >
                  <a 
                    className={
                      `w-full h-3/4 flex justify-right py-2 pr-2 md:pr-0 items-center md:justify-center  ` +
                      (link.id === activeSection
                        ? "activeMenuItem dark:bg-[#0766AD]"
                        : "")
                    }
                    onClick={(e) => {
                      handleClickAnchor(link.id);
                    }}
                    href={link.path}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-[.5] h-full flex justify-center items-center md:flex-[.2]  transition duration-300 ">
          {/* <img src={logo} className="w-32 h-12 rounded" alt="" /> */}
        </div>
      </motion.div>
      {/* // end  navbar */}
                  
    </>
  );
};

export default Navbar;
