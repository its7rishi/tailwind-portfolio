import ToggleBtn from "./ToggleBtn";

const Header = ({ handleToggleMode }) => {
  return (
    <header className="fixed top-0 z-30 w-full">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="hover:font-bold" href="#home">
                  HOME
                </a>
              </li>
              <li>
                <a className="hover:font-bold" href="#skills">
                  SKILLS
                </a>
              </li>
              <li>
                <a className="hover:font-bold" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <a className="hover:font-bold" href="#blogs">
                  BLOGS
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Saptarshi M</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:font-bold" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#skills">
                SKILLS
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#blogs">
                BLOGS
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-6">
          <ToggleBtn handleToggleMode={handleToggleMode} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
