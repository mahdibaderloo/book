import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <form>
        <input type="text" placeholder="جستجو..." />
        <button type="button">جستجو</button>
      </form>
      <Link to="/shopping-cart">
        <img src="" alt="" />
      </Link>
    </header>
  );
}
