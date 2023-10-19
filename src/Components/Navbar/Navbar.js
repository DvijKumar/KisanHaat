import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import logo from "../../Assests/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const ESC_KEY_CODE = "Escape";

  const NavigationMenu = (props) => {
    const { navOpen, navIsAnimating, closeNav } = props;

    const keyPressHandler = ({ key }) => {
      if (key === ESC_KEY_CODE && navOpen) {
        closeNav();
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", keyPressHandler);
      return () => {
        window.removeEventListener("keydown", keyPressHandler);
      };
    }, [navOpen]);

    const classes = `${navOpen ? " active" : ""}${
      navIsAnimating ? " is-animating" : ""
    }`;

    return (
      <div className={`navigation-menu${classes}`}>
        <div className="wrap">
          <div className="cols">
            <div className="col col-left col-links">
              <ul className="links">
                <li className="link">
                  <a
                  // href="https://en.wikipedia.org/wiki/David_Bowie"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // aria-label="Navigates to"
                  >
                    About Kisan Haat
                  </a>
                </li>
                <li className="link">
                  <a
                  // href="https://images.nasa.gov/"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // aria-label="Navigates to"
                  >
                    Products
                  </a>
                </li>
                <li className="link">
                  <a
                  // href="https://www.nasa.gov/audience/foreducators/stem-on-station/ditl_eating"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // aria-label="Navigates to"
                  ></a>
                </li>
                <li className="link">
                  <a
                  // href="https://en.wikipedia.org/wiki/Mission_control_center"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // aria-label="Navigates to"
                  >
                    Contact Ground Control
                  </a>
                </li>
                <li className="link">
                  <a
                  // href="https://en.wikipedia.org/wiki/Mission_control_center"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // aria-label="Navigates to"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-right col-image">
              <img className="kisanhaatlogo" src={logo} alt="logo1.png" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Header = (props) => {
    const { navOpen, navIsAnimating, toggleNavHandler } = props;

    return (
      <header className="header">
        <div className="wrap">
          {/* <div className='logo'>
            <img src={logo} alt='logo1.png' />
          </div> */}
          <button
            className={`nav-button${navIsAnimating ? " is-animating" : ""}`}
            type="button"
            aria-label="Toggle Navigation"
            onClick={(event) => toggleNavHandler(event)}
          >
            <span className={`label--nav-closed${!navOpen ? " active" : ""}`}>
              menu
            </span>
            <span className={`label--nav-open${navOpen ? " active" : ""}`}>
              close
            </span>
          </button>
        </div>
      </header>
    );
  };

  class App extends React.Component {
    state = {
      navOpen: false,
      navIsAnimating: false,
    };

    toggleNav = (event) => {
      event.preventDefault();
      const { navOpen } = this.state;

      this.setState({
        navIsAnimating: true,
      });

      if (navOpen) {
        document.body.classList.remove("nav-open");
      } else {
        document.body.classList.add("nav-open");
      }

      setTimeout(() => {
        this.setState((prevState) => ({
          navIsAnimating: false,
          navOpen: !prevState.navOpen,
        }));
      }, 500);
    };

    closeNav = () => {
      document.body.classList.remove("nav-open");
      this.setState({
        navOpen: false,
      });
    };

    render() {
      const { navOpen, navIsAnimating } = this.state;

      return (
        <div className="layout">
          <Header
            navOpen={navOpen}
            toggleNavHandler={(event) => this.toggleNav(event)}
            navIsAnimating={navIsAnimating}
          />
          <NavigationMenu
            navOpen={navOpen}
            navIsAnimating={navIsAnimating}
            closeNav={(event) => this.closeNav(event)}
            toggleNavHandler={(event) => this.toggleNav(event)}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("app"));
};

export default Navbar;
