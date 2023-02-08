import { useEffect } from "react";

export const DropdownMenu = (props) => {

//   useEffect(()=>{
// console.log(props?.choice, 'choiceeeeeeeeeee')
//   },[props.choice])
  return (
    <form action="/action_page.php">
      <label for="cars">Choose a Component:</label>
      <select
        name="language"
        id="cars"
        className="text-lg"
        onChange={(e) => props?.setChoice(e?.target?.value)}
      >
        <option value="styledComponents" className="text-base">
          Styled Components
        </option>
        <option value="Tailwind" className="text-base">
          Tailwind
        </option>
      </select>
    </form>
  );
};
