import react from "react";
import Styled from "styled-components";

function NavBar() {
  return (
    <StyledNav>
      <header>
        <div className="header-container">
            <img src="https://static.thenounproject.com/png/2453700-200.png" alt="Dice Logo" />
          <div className="title-container">
            <h1>Dungeons & Dragons Helper</h1>
          </div>
        </div>
        <div className="userOptions">
          {
            // logic for buttons display
          }
          <div className="button">Login</div>
          <div className="button">Profile</div>
          <div className="button">Sign Out</div>
        </div>
      </header>
      <nav className="dropMenus">
        <div>Character Creation</div>
        <div>Campains</div>
        <div>Races</div>
        <div>Classes</div>
        <div>Regions</div>
        <div>Fractions</div>
        <div>Gods & Patrons</div>
      </nav>
    </StyledNav>
  );
}

export default NavBar;

const StyledNav = Styled.div`
  header {
    width: 100%;
    border: 1px solid black;
    display: flex;
      .header-container {
        width: 75%;
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        align-items: center; 
        img {
          width: 33%;
          border: 1px solid black;
          margin-bottom: 0px;
          max-width: 150px;

        }
        .title-container {
          width: 67%;


        }
      }
    .userOptions {
      width: 25%;
      border: 2px solid black;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center; 
    }
  }

  nav {
    border: 1px solid black;
    margin: .5%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`