import react from "react";
import Styled from "styled-components";

function NavBar() {
  return (
    <StyledNav>
      <header>
        <div class="header-container">
          <div class="logo">
            <img src="https://static.thenounproject.com/png/2453700-200.png" alt="Dice Logo" />
          </div>
          <div class="title-container">
            <h1>Dungeons & Dragons Helper</h1>
          </div>
        </div>
        <div class="userOptions">
          {
            // logic for buttons display
          }
          <div class="button">Login</div>
          <div class="button">Profile</div>
          <div class="button">Sign Out</div>
        </div>
      </header>
      <nav class="dropMenus">
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
    display: flex;
    .header-container {
      display: flex;
      flex-direction: row;

    }
    img {

    }
  }

  nav {
    margin: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`