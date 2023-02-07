import React from "react";
import {  ScrollToTopArrow } from "../../assets";
import useDocumentScrollThrottled from "../../helper/useDocumentScrollThrottled";

const ScrollButton = () => {
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop, previousScrollTop } = callbackData;
    if (currentScrollTop > 100) {
      document.getElementById("scroll_button").style.display = "block";
    } else if (currentScrollTop > 0 || currentScrollTop <= 100) {
      document.getElementById("scroll_button").style.display = "none";
    }
  });
  return (
    <a href="#">

    <div
      className="fixed hidden bottom-5 right-6 bg-primary rounded-md backdrop-blur	"
      id="scroll_button"
    >
      <div className=" bg-transparent flex justify-center items-center py-[25px] px-[20px] m-auto">
          <img src={ScrollToTopArrow} alt="scroll" className="w-[25px] h-[20px]" />
      </div>
    </div>
    </a>

  );
};
export default ScrollButton;
