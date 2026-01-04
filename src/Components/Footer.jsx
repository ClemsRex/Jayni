import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaHome } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {

   const phoneNumber = "+2349123083660"; // Your phone number (international format)
    
  return (

    
        <footer 
        id="Footer" 
        className=" bg-[#7E364E] text-gray-100 items-center flex flex-col gap-5 mt-2.5 pt-16 px-5">
            <div className="cointaner mx-auto w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-20">

                {/* Get In Touch */}
                <div className="flex flex-col items-start gap-5">
                     <h2 className="text-gray-100 font-medium text-2xl mb-3">GET IN TOUCH</h2>

                        
                    <ul className="flex flex-col gap-2 text-sm text-gray-100 list-none">

                        <li className="flex items-center gap-2 hover:text-[#e2adbe] transition-colors font-medium" >
                            <FaHome />
                            <span>562 Wellington Road, Street 32</span>
                            
                        </li>
                        
                        <li> 
                            <a href="mailto:clementchukwu351@gmail.com" className="flex items-center gap-2 hover:text-[#e2adbe] transition-colors font-medium">
                            <CiMail />
                            <span>ClementChukwu351@gmail.com</span> 
                            </a> 
                        </li>

                        <li className="text-sm mb-4">
                            
                            <a 
                            href={`tel:${phoneNumber}`} 
                            className="flex items-center gap-2 hover:text-[#e2adbe] transition-colors font-medium"
                            title={`Call ${phoneNumber}`}
                            >
                            <FaPhone className="text-sm" />
                            <span>+2349123083660</span>
                            </a>

                        </li>

                        <li className=" flex gap-4 text-gray-100 text-lg mt-2 "> 
                            <FaFacebookF className="cursor-pointer hover:scale-110 transition"/>
                            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
                            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
                        </li>

                        
                        
                    </ul>
                    
                </div>

                {/* Company  */}
                <div  className="flex flex-col items-start gap-5">
                    <h2 className="text-gray-100 font-medium text-2xl mb-3">COMPANY</h2>
                    <ul className="flex flex-col gap-2 text-sm text-gray-100 list-none">
                        <li><Link to ="/" className="hover:text-[#e2adbe] transition-colors font-medium">Home</Link></li>
                        <li><Link to ="/about" className="hover:text-[#e2adbe] transition-colors font-medium" >About Us</Link></li>
                        <li><Link to ="/privacy" className="hover:text-[#e2adbe] transition-colors font-medium" >Privacy Power</Link></li>
                    </ul>

                </div>

                {/* Quick Links */}
                <div  className="flex flex-col items-start gap-5">
                   <h2 className="text-gray-100 font-medium text-2xl mb-3">Quick Links</h2>

                   <ul className="flex flex-col gap-2 text-sm text-gray-100 list-none">

                    <li><Link to ="/delivery" className="hover:text-[#e2adbe] transition-colors font-medium">Delivery Info</Link></li>

                    
                    <li><Link to ="/help"className="hover:text-[#e2adbe] transition-colors font-medium">Get Help</Link></li>


                   </ul>

                </div>
            </div>

            

            <div className="text-center text-sm text-gray-100 mt-10 pb-6 border-t border-gray-200 pt-6">
                © 2026 Jayni Cakes and Specials. All rights reserved.
            </div>



        </footer>





    // <footer id="Footer" className="bg-[#7E364E] mt-2.5 pt-12 px-5">
    //   <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
    //     {/* Contact */}
    //     <div>
    //       <h4 className="text-white font-medium text-lg mb-3">Contact</h4>
          
    //       <p className="text-sm text-gray-100 mb-1">
    //         <strong>Address:</strong> 562 Wellington Road, Street 32
    //       </p>
          
    //       <p className="text-sm text-gray-100 mb-1">
    //         <strong>Phone:</strong> +01 2222 365
    //       </p>
          
    //       <p className="text-sm text-gray-100 mb-4">
    //         <strong>Hours:</strong> 10:00 - 12:00, Mon - Sat
    //       </p>

    //       <div>
    //         <h4 className="text-gray-100 font-medium mb-2">Follow Us</h4>
    //         <div className="flex gap-4 text-gray-100 text-lg">
    //           <FaFacebookF 
    //             className="cursor-pointer hover:scale-110 transition" 
    //             title="Facebook"
    //           />
    //           <FaInstagram 
    //             className="cursor-pointer hover:scale-110 transition" 
    //             title="Instagram"
    //           />
    //           <FaTwitter 
    //             className="cursor-pointer hover:scale-110 transition" 
    //             title="Twitter"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* About */}
    //     <div>
    //       <h4 className="text-gray-100 font-medium text-lg mb-3">About</h4>
    //       <ul className="flex flex-col gap-2 text-sm text-gray-100">
    //         <Link to="/about" className="hover:text-[#e2adbe]">About Us</Link>
    //         <Link to="/contact" className="hover:text-[#e2adbe]">Contact Us</Link>
    //       </ul>
    //     </div>

    //     {/* My Account */}
    //     <div>
    //       <h4 className="text-gray-100 font-medium text-lg mb-3">My Account</h4>
    //       <ul className="flex flex-col gap-2 text-sm text-gray-100">
    //         <Link to="/login" className="hover:text-[#e2adbe]">Sign In</Link>
    //         <Link to="/orders" className="hover:text-[#e2adbe]">Orders</Link>
    //       </ul>
    //     </div>

    //     {/* Quick Links */}
    //     <div>
    //       <h4 className="text-gray-100 font-medium text-lg mb-3">Quick Links</h4>
    //       <ul className="flex flex-col gap-2 text-sm text-gray-100">
    //         <Link to="/delivery" className="hover:text-[#e2adbe]">Delivery Info</Link>
    //         <Link to="/help" className="hover:text-[#e2adbe]">Help</Link>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="text-center text-sm text-gray-100 mt-10 pb-6 border-t border-gray-200 pt-6">
    //     © 2026 Sweet Bites Bakery. All rights reserved.
    //   </div>
    // </footer>
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



























