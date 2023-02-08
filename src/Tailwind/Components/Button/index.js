export const Button = (props) => {
  const { ButtonText, Icon, backgroundColor } = props;
  return (
    <>
      <button
        className={`bg-${backgroundColor} rounded lg:w-56 text-center lg:text-lg  lg:py-[21px] lg:px-[54px] xxs:py-[15px] xxs:px-[20px]  flex justify-evenly items-center xxs:w-40 xxs:text-[15px]`}
      >
        {" "}
        <span className="text-primary whitespace-nowrap lg:text-xl lg:leading-[27px] md:text-base font-semibold ">
          {ButtonText}
        </span>
        <div className="h-auto flex">{Icon ? Icon : null}</div>
      </button>
    </>
  );
};
