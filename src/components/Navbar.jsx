import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/">Home</a>  일반적 a tag 쓰면 페이지가 다시 로딩됨 */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {/* <a href="/dashboard">Dashboard</a> */}
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
