import React from "react";

const Footer = () => {
  return (
    <div >
       {/* <hr class="border-t-1 border-gray-400 my-4"></hr> */}
      <footer className="grid grid-cols-4 gap-4 p-4 border ">
        <div>
          <div className="font-semibold">Products</div>
          <ul className="text-gray-600 text-sm mt-4">
            <li>Flutter</li>
            <li>React</li>
            <li>Android</li>
            <li>Ios</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Design to code</div>
          <ul className="text-gray-600 text-sm mt-4">
            <li>Figma plugin</li>
            <li>Templates</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Comparision</div>
          <ul className="text-gray-600 text-sm mt-4">
            <li>DhiWise vs flutter</li>
            <li>DhiWise vs anima</li>
            <li>DhiWise vs bubble</li>
            <li>DhiWise vs retool</li>
            <li>DhiWise vs Figma dev mode</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="text-gray-600 text-sm mt-4">
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms of services</li>
            <li>services</li>
            <li>Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
