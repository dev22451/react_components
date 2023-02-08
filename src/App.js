import "./App.css";
import { NavBar } from "./StyledComponents/Components/NavBar";
import { BasicBanner, Button, Footer } from "./Tailwind/Components";
import { BannerBg } from "./Tailwind/assets";
import ScrollButton from "./Tailwind/Components/ScrollButton";
import {
  Dropdown,
  DropdownMenu,
} from "./StyledComponents/Components/DropdownMenu";
import { useState } from "react";
import { Banner } from "./StyledComponents/Components";
import { ContactBg } from "./assets";
import { TailwindBanner } from "./Tailwind/Components";

function App() {
  const [choice, setChoice] = useState("");
  console.log(choice, "choice");
  return (
    <div className="App text-2xl font-bold">
      {/* <BasicBanner title="Home"/>
     <Banner backgroundImage={BannerBg}/>

    <Button backgroundColor="black"
    ButtonText="discover"

    />
     <Footer backgroundColor="black" 
     backgroundImage={BannerBg}
     /> */}
      <DropdownMenu setChoice={setChoice} choice={choice} />
      {/* <NavBar/> */}
      {/* <NavBar/> */}
      {choice === "Tailwind" ? (
        <TailwindBanner bg={BannerBg} title="Tailwind Contact" />
      ) : (
        <Banner imgUrl={ContactBg} title="Styled Contact" />
      )}
    </div>
  );
}

export default App;
