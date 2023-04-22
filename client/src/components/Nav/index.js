import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/exercise">
              EXERCISE
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/fitshop">
              WORKOUT SHOP
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          🏋️FitFolio
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}
// { <section class="relative">
//   <nav class="flex justify-between bg-gray-100 border-b">
//     <div class="px-12 py-8 flex w-full items-center">
//       <a class="lg:mr-8 2xl:mr-20 text-3xl font-bold font-heading" href="#">
//         <img class="h-9" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto"/>
//       </a>
//       <div class="hidden xl:flex max-w-xs py-3 pl-8 pr-2 bg-white rounded-lg">
//         <svg class="w-8 h-10 mr-2" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M17.5 17.1309L12.5042 11.9551" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
//           <path d="M7.27524 13.8672C10.8789 13.8672 13.8002 10.945 13.8002 7.34033C13.8002 3.73565 10.8789 0.813477 7.27524 0.813477C3.67159 0.813477 0.750244 3.73565 0.750244 7.34033C0.750244 10.945 3.67159 13.8672 7.27524 13.8672Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
//         </svg>
//         <input class="w-full border-0 focus:ring-transparent focus:outline-none py-2" type="text" placeholder=""/>
//         <select class="pl-6 pr-6 border-0 border-l border-gray-100 focus:border-gray-100 focus:ring-transparent focus:outline-none cursor-pointer" name="" id="">
//           <option>All&nbsp;items</option>
//           <option>Collection</option>
//           <option>Option</option>
//         </select>
//       </div>
//       <ul class="hidden xl:flex px-4 mx-auto font-semibold font-heading">
//         <li class="mr-12"><a class="hover:text-gray-600" href="#">Category</a></li>
//         <li class="mr-12"><a class="hover:text-gray-600" href="#">Collection</a></li>
//         <li class="mr-12"><a class="hover:text-gray-600" href="#">Story</a></li>
//         <li><a class="hover:text-gray-600" href="#">Brand</a></li>
//       </ul>
//       <div class="hidden xl:flex items-center">
//         <a class="mr-10 hover:text-gray-600" href="#">
//           <svg width="23" height="20" viewbox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//           </svg>
//         </a>
//         <a class="flex items-center hover:text-gray-600" href="#">
//           <svg class="mr-3" width="23" height="23" viewbox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//             <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//           </svg>
//           <span class="inline-block w-6 h-6 text-center bg-white rounded-full font-semibold font-heading">3</span>
//         </a>
//       </div>
//     </div>
//     <button class="flex-shrink-0 hidden xl:block px-8 border-l">
//       <div class="flex items-center">
//         <img class="w-9 h-9 object-cover mr-2" src="yofte-assets/elements/avatar.svg" alt=""/>
//         <span class="mr-2 font-medium">Robert</span>
//         <span>
//           <svg width="10" height="6" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//           </svg>
//         </span>
//       </div>
//     </button>
//     <a class="xl:hidden flex mr-6 items-center text-gray-600" href="#">
//       <svg class="mr-2" width="23" height="23" viewbox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//         <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//       </svg>
//       <span class="inline-block w-6 h-6 text-center bg-white rounded-full font-semibold font-heading">3</span>
//     </a>
//     <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
//       <svg width="20" height="12" viewbox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="#8594A5"></path>
//       </svg>
//     </a>
//   </nav>
//   <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
//     <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
//     <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
//       <div class="flex items-center mb-8">
//         <a class="mr-auto text-3xl font-bold font-heading" href="#">
//           <img class="h-9" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto"/>
//         </a>
//         <button class="navbar-close">
//           <svg class="h-2 w-2 text-gray-500 cursor-pointer" width="10" height="10" viewbox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//           </svg>
//         </button>
//       </div>
//       <div class="flex mb-8 justify-between">
//         <button>
//           <div class="flex items-center">
//             <img class="w-9 h-9 object-cover mr-2" src="yofte-assets/elements/avatar.svg" alt=""/>
//             <span class="mr-2 font-medium">Robert</span>
//             <span>
//               <svg width="10" height="6" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M1.66797 1.66699L5.0013 5.00033L8.33464 1.66699" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//               </svg>
//             </span>
//           </div>
//         </button>
//         <div class="flex items-center">
//           <a class="mr-10" href="#">
//             <svg width="23" height="20" viewbox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//             </svg>
//           </a>
//           <a class="flex items-center" href="#">
//             <svg class="mr-3" width="23" height="23" viewbox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//               <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//             </svg>
//             <span class="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">3</span>
//           </a>
//         </div>
//       </div>
//       <input class="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none" type="search" placeholder="Search"/>
//       <ul class="text-3xl font-bold font-heading">
//         <li class="mb-8"><a href="#">Category</a></li>
//         <li class="mb-8"><a href="#">Collection</a></li>
//         <li class="mb-8"><a href="#">Story</a></li>
//         <li><a href="#">Brand</a></li>
//       </ul>
//     </nav>
//   </div>
// </section>
// }
export default Nav;
