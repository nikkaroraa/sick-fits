import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div classname="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);


export default Header;