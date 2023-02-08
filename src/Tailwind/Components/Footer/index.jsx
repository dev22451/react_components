import React from "react";
import { NavBarLogo } from "../../assets";
import { AbouLinks, GetStarted, HowitWorks, SocialIcons } from "../constant";
import ScrollButton from "../ScrollButton";

export const Footer = (props) => {
  const { backgroundColor, backgroundImage } = props;
  console.log(props, ">>>>>>>>>>");
  return (
    <div>
      <div className="w-full border-t-[10px] border-solid  border-primary ">
        <footer
          className={`bg-${backgroundColor} opacity-100 w-full text-white `}
        >
          <div className=" ">
            <div
              style={{backgroundImage:`url(${backgroundImage})`}}
              className="xl:w-[75%] xxs:w-[90%]  bg-no-repeat bg-cover bg-center m-auto"
            >
              <div className="grid lg:grid-cols-4 xxs:grid-cols-1 md:gap-3 md:grid-cols-2 xxs:gap-4 md:py-24  xxs:pd-0 xxs:py-8 ">
                <div>
                  <div className="lg:h-28 xxs:h-28">
                    <a href="/">
                      <div className="w-56">
                        <img src={NavBarLogo} alt="NavBarLogo" />
                      </div>
                    </a>
                  </div>
                  <ul className=" text-left md:text-sm font-montserrat md:leading-5 xl:w-[86%] lg:w-full md:w-4/5 xxs:w-full	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </ul>
                  <div className="flex flex-row items-center m-auto xxs:py-4">
                    <ul className="p-0 mb-0 flex">
                      {SocialIcons.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className="my-3 mr-3 facebook ">
                              <a
                                href={item.link}
                                aria-label="Facebook"
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer"
                              >
                                {item.icon}
                              </a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="md:pt-0 xxs:pt-8">
                  <div className="lg:h-24 xxs:h-16">
                    <h1 className="font-semibold font-dmSerif text-xl text-left text-white leading-6">
                      About us
                    </h1>
                  </div>
                  <ul className="font-normal text-left text-base font-montserrat leading-5">
                    <ul className=" text-left text-base font-montserrat leading-5 flex flex-col gap-6">
                      {AbouLinks.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={item.link}
                              className="text-white leading-4 hover:text-primary font-montserrat text-base"
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </ul>
                </div>
                <div className="md:pt-0 xxs:pt-8">
                  <div className="lg:h-24 xxs:h-16">
                    <h1 className="font-semibold font-dmSerif text-xl text-left text-white leading-6">
                      How it Works
                    </h1>
                  </div>
                  <ul className=" text-left text-base font-montserrat leading-5 flex flex-col gap-6">
                    {HowitWorks.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={item.link}
                            className="text-white leading-4 hover:text-primary font-montserrat text-base"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="md:pt-0 xxs:pt-8">
                  <div className="lg:h-24 xxs:h-16">
                    <h1 className="font-semibold font-dmSerif text-xl text-left text-white leading-6">
                      Get Started{" "}
                    </h1>
                  </div>
                  <ul className=" text-left text-base font-montserrat leading-5 flex flex-col gap-6">
                    {GetStarted.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={item.link}
                            className="text-white leading-4 hover:text-primary font-montserrat text-base"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <hr className="w-full" />
              <div className=" font-montserrat w-full flex justify-center  font-normal py-4 leading-5 md:flex md:flex-row  md:text-left  md:text-base xxs:flex xxs:flex-col xxs:text-center ">
                <div className="lg:flex">
                  <span>Copyright @ 2022</span>&nbsp;
                  <a
                    href="/"
                    className="text-white font-bold hover:text-white"
                    aria-label="Tamkin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tamkin
                  </a>
                  &nbsp;
                  <p className="">All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
