import { Link } from "react-router-dom";
import { BlackMenu, NavBarLogo } from "../../assets";
import { Drawer } from "antd";
import { useState } from "react";

const NavbarTitles = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },

  {
    title: "Home",
    link: "/",
  },
  {
    title: "Home",
    link: "/",
  },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className=" xl:w-3/4 xxs:w-11/12 py-4 m-auto ">
        <div className="flex items-center w-full justify-between">
          <div className="md:w-56 h-auto xxs:w-[9rem] xxs:h-auto">
            <a href="/">
              <img src={NavBarLogo} alt="Navbarlogo" />
            </a>
          </div>
          <div className="flex gap-6  text-base leading-5 xl:block xxs:hidden">
            <ul className="flex gap-12 mb-0">
              {NavbarTitles.map((item, index) => {
                return (
                  <>
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="text-base leading-[19px] font-montserrat text-navtextcolor  hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="xl:hidden">
            <button onClick={showDrawer}>
              <img
                src={BlackMenu}
                alt="menu"
                className="h-8 w-8 brightness-0 bg-invert "
              />
            </button>
            <Drawer
                title={
                  <img
                    src={NavBarLogo}
                    alt="TamkinLogo"
                    className="w-32 h-auto"
                  />
                }
              // headerStyle="display:none"
              className="customeDrower"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <ul className="flex flex-col xxs:gap-12 xxs:pl-4 xs:pl-0">
                {NavbarTitles.map((item, index) => {
                  return (
                    <>
                      <li key={index}>
                        <Link
                          to={item.link}
                          className="text-base leading-[19px] font-montserrat text-navtextcolor hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};
