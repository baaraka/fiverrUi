import { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "john Doe",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="textLogo">Fiverr</span>
          </Link>

          <span className="dotLogo">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          <span>Sign In</span>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.unsplash.com/photo-1680167914371-2d7387f335e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/myGigs" className="link">
                        gig
                      </Link>
                      <Link to="/add" className="link">
                        add new gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    orders
                  </Link>
                  <Link to="/messages" className="link">
                    messages
                  </Link>
                  <Link to="/logout" className="link">
                    logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
