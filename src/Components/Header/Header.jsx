import { Link } from "react-router-dom";
const Header = () => {

  return (
    <header className="header">
      <h1>My Demo Application</h1>
      <nav>
        <ul>
         <li>
         <Link to="/">Home</Link>
         </li>
         <li>
         <Link to="/about">About</Link>
         </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;