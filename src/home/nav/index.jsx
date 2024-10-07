import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const handleClickToHomePage = () => {
    navigate("/homepage");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#87a79c" }}>
      <div className="container-md">
        <a
          className="navbar-brand text-white"
          onClick={handleClickToHomePage}
          style={{ cursor: "pointer" }}
        >
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
