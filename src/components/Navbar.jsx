import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/">Home</a>  일반적 a tag 쓰면 페이지가 다시 로딩됨 */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {/* <a href="/dashboard">Dashboard</a> */}
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
