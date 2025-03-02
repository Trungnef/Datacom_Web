import logo from "../logo.svg";
export default function Header() {
  return (
    <div className="">
      <div className="grid grid-cols-3 items-center">
        <img src={logo} alt="Logo" className="w-24 m-4 ml-10" />
        <ul className="flex items-center m-4 mr-8 justify-between font-thin">
          <li>Products</li>
          <li>Company</li>
          <li>Hot</li>
          <li>Favorites</li>
          <li>Blog</li>
        </ul>
        <span className="flex items-center m-4 mr-10 justify-end gap-2">
          <img src={logo} alt="Logo" className="w-8" />
          <img src={logo} alt="Logo" className="w-8" />
          <img src={logo} alt="Logo" className="w-8" />
          <img src={logo} alt="Logo" className="w-8" />
        </span>
      </div>
    </div>
  );
}
