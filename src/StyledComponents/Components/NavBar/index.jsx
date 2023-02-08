import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavBarLogo } from "../../../Tailwind/assets";
import { stack as Menu } from "react-burger-menu";
import { HamburgerIcon } from "../../../assets";

const Container = styled.div`
  width: 75%;
  padding: 1rem 0rem;
  margin: auto;
`;
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  width: 14rem;
  height: auto;
`;
const Logo = styled.img``;
const NavBarItemContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const NavItemWrapper = styled.ul`
  display: flex;
  gap: 3rem;
  margin-bottom: 0;
`;
const NavtitleContainer = styled.li``;
const NavLink = styled(Link)`
  font-size: 1rem;
  line-height: 19px;
  font-family: "Montserrat", sans-serif;
`;

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
  return (
    <>
      <div>
        {window.screen.width >  1024 ? 
        ( <Container>
            <NavbarContainer>
              <LogoContainer>
                <Logo src={NavBarLogo} />
              </LogoContainer>
              <NavBarItemContainer>
                <NavItemWrapper>
                  {NavbarTitles.map((item, index) => {
                    return (
                      <>
                        <NavtitleContainer>
                          <NavLink to={item.link}>{item.title}</NavLink>
                        </NavtitleContainer>
                      </>
                    );
                  })}
                </NavItemWrapper>
              </NavBarItemContainer>
            </NavbarContainer>
          </Container>):(
             <Menu customBurgerIcon={ <img src={HamburgerIcon} /> } right pageWrapId={"page-wrap"}>
             <a className="menu-item" href="/">
               Home
             </a>
             <a className="menu-item" href="/salads">
               Salads
             </a>
             <a className="menu-item" href="/pizzas">
               Pizzas
             </a>
             <a className="menu-item" href="/desserts">
               Desserts
             </a>
           </Menu>
          )
        }
        
      </div>
    </>
  );
};
