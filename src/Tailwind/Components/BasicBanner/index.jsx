import { NavBar } from "../NavBar";

export const BasicBanner = (props) => {
  const { backgroundImage, title } = props;

  return (
    <>
      <NavBar />

      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        id="embroidery"
      >
        <div className="banner_gradient_container">
          <div className="h-[45vh] w-full">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="font-bold font-montserrat xl:text-[60px] xl:leading-[72px] md:text-[70px] xxs:text-4xl ">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
