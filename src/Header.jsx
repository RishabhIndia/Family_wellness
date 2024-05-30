function Header() {
  return (
    <>
      <div id="header_wrapper" className="header_wrapper mb-5">
        <div>
          <div
            id="header_heading_wrapper"
            className="header_heading_wrapper p-2"
          >
            <h1 className="text-3xl text-pink-700 mb-1">Family Wellness</h1>
            <p className="text-md  text-gray-700 "> Massage Therepy</p>
          </div>

          <nav>
            <ul className="flex text-white bg-gray-500 justify-between px-10">
              <li className="bg-pink-700 h-full py-1 px-10 cursor-pointer">
                Home
              </li>
              <li className="hover:bg-pink-700 h-full py-1 px-10 cursor-pointer">
                About
              </li>
              <li className="hover:bg-pink-700 h-full py-1 px-10 cursor-pointer">
                Services
              </li>
              <li className="hover:bg-pink-700 h-full py-1 px-10 cursor-pointer">
                FAQ{" "}
              </li>
              <li className="hover:bg-pink-700 h-full py-1 px-10 cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
