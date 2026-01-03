import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7E364E] mt-2.5 pt-12 px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Contact */}
        <div>
          <h4 className="text-white font-medium text-lg mb-3">Contact</h4>
          
          <p className="text-sm text-gray-100 mb-1">
            <strong>Address:</strong> 562 Wellington Road, Street 32
          </p>
          
          <p className="text-sm text-gray-100 mb-1">
            <strong>Phone:</strong> +01 2222 365
          </p>
          
          <p className="text-sm text-gray-100 mb-4">
            <strong>Hours:</strong> 10:00 - 12:00, Mon - Sat
          </p>

          <div>
            <h4 className="text-gray-100 font-medium mb-2">Follow Us</h4>
            <div className="flex gap-4 text-gray-100 text-lg">
              <FaFacebookF 
                className="cursor-pointer hover:scale-110 transition" 
                title="Facebook"
              />
              <FaInstagram 
                className="cursor-pointer hover:scale-110 transition" 
                title="Instagram"
              />
              <FaTwitter 
                className="cursor-pointer hover:scale-110 transition" 
                title="Twitter"
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-gray-100 font-medium text-lg mb-3">About</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-100">
            <Link to="/about" className="hover:text-[#e2adbe]">About Us</Link>
            <Link to="/contact" className="hover:text-[#e2adbe]">Contact Us</Link>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-gray-100 font-medium text-lg mb-3">My Account</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-100">
            <Link to="/login" className="hover:text-[#e2adbe]">Sign In</Link>
            <Link to="/orders" className="hover:text-[#e2adbe]">Orders</Link>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-100 font-medium text-lg mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-100">
            <Link to="/delivery" className="hover:text-[#e2adbe]">Delivery Info</Link>
            <Link to="/help" className="hover:text-[#e2adbe]">Help</Link>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-100 mt-10 pb-6 border-t border-gray-200 pt-6">
        © 2026 Sweet Bites Bakery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
























// import React from "react";
// import { Link } from "react-router-dom";
// // import { assets } from "../../assets/assets";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 pt-12 px-5">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

//         {/* Logo & Contact */}
//         <div>
//           {/* <img src={assets.logo} alt="Logo" className="w-40 mb-4" /> */}

//           <h4 className="text-gray-100 font-medium text-lg mb-3">
//             Contact
//           </h4>

//           <p className="text-sm text-gray-100 mb-1">
//             <strong>Address:</strong> 562 Wellington Road, Street 32
//           </p>

//           <p className="text-sm text-gray-100 mb-1">
//             <strong>Phone:</strong> +01 2222 365
//           </p>

//           <p className="text-sm text-gray-100 mb-4">
//             <strong>Hours:</strong> 10:00 - 12:00, Mon - Sat
//           </p>

//           <div>
//             <h4 className="text-gray-100 font-medium mb-2">
//               Follow Us
//             </h4>
//             <div className="flex gap-4 text-gray-100 text-lg">
//               <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
//               <FaInstagram className="cursor-pointer hover:scale-110 transition" />
//               <FaTwitter className="cursor-pointer hover:scale-110 transition" />
//             </div>
//           </div>
//         </div>

//         {/* About */}
//         <div>
//           <h4 className="text-gray-100 font-medium text-lg mb-3">
//             About
//           </h4>
//           <ul className="flex flex-col gap-2 text-sm text-gray-100">
//             <Link to="/about" className="hover:text-gray-100">About Us</Link>
//             {/* <Link to="/delivery" className="hover:text-gray-100">Delivery Info</Link>
//             <Link to="/privacy" className="hover:text-gray-100">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-gray-100">Terms & Conditions</Link> */}
//             <Link to="/contact" className="hover:text-gray-100">Contact Us</Link>
//           </ul>
//         </div>

//         {/* Account */}
//         <div>
//           <h4 className="text-gray-100 font-medium text-lg mb-3">
//             My Account
//           </h4>
//           <ul className="flex flex-col gap-2 text-sm text-gray-100">
//             {/* <Link to="/login" className="hover:text-gray-100">Sign In</Link>
//             <Link to="/cart" className="hover:text-gray-100">View Cart</Link>
//             <Link to="/wishlist" className="hover:text-gray-100">Wishlist</Link>
//             <Link to="/orders" className="hover:text-gray-100">Track Order</Link>
//             <Link to="/help" className="hover:text-gray-100">Help</Link> */}
//           </ul>
//         </div>

//         {/* App Install */}
//         {/* <div>
//           <h4 className="text-gray-100 font-medium text-lg mb-3">
//             Install App
//           </h4>

//           <p className="text-sm text-gray-100 mb-3">
//             From App Store or Google Play
//           </p>

//           <div className="flex gap-3 mb-4">
//             <img src={assets.app_store} alt="App Store" className="w-32 cursor-pointer" />
//             <img src={assets.play_store} alt="Play Store" className="w-32 cursor-pointer" />
//           </div>

//           <p className="text-sm text-gray-100 mb-2">
//             Secured Payment Gateways
//           </p>

//           <img src={assets.payment} alt="Payments" className="w-40" />
//         </div>
//       </div> */}

//       {/* Copyright */}
//       <div className="text-center text-sm text-gray-100 mt-10 pb-6">
//         © 2026 Sweet Bites Bakery. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



























