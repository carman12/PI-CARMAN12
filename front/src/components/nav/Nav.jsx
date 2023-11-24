import SearchBar from "../searchbar/SearchBar";
import Button from "../button/Button";

const Nav = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <Button link="/home" text="Home" />
      <Button link="/" text="Logout" />
      <Button link="/about" text="About" />
      <Button link="/favorites" text="Favorites" />
    </nav>
  );
};
export default Nav;
