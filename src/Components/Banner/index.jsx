import { NavBar, Navbar } from "../NavBar";

export const Banner = (props) => {
  const { backgroundImage, title } = props;

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="gradient">
          <NavBar />
          <div className="h-[42vh] w-full">
            <div className="flex items-center justify-center h-full">
              <h1 className=" font-normal font-dmSerif md:text-6xl xxs:text-4xl leading-[69px]">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
