// import { useContext } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import { AuthContext } from "../../../providers/AuthProvider";
// // import useCart from "../../../hooks/useCart";
// // import useAdmin from "../../../hooks/useAdmin";

// const NavBar = () => {
//   // const { user, logOut } = useContext(AuthContext);
//   // const [isAdmin] = useAdmin();
//   // const [cart] = useCart();

//   const user = "Arif";
//   const isAdmin = true;
//   const cart = true;

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const navOptions = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/menu">Our Menu</Link>
//       </li>
//       <li>
//         <Link to="/order/salad">Order Food</Link>
//       </li>
//       {isAdmin ? (
//         <li>
//           <Link to="/dashboard/adminhome">Dashboard</Link>
//         </li>
//       ) : (
//         <li>
//           <Link to="/dashboard/userhome">Dashboard</Link>
//         </li>
//       )}
//       <li>
//         <Link to="/dashboard/mycart">
//           <button className="btn gap-2">
//             <FaShoppingCart></FaShoppingCart>
//             <div className="badge badge-secondary">+{cart?.length || 0}</div>
//           </button>
//         </Link>
//       </li>
//       {user ? (
//         <>
//           <button onClick={handleLogOut} className="btn btn-ghost">
//             LogOut
//           </button>
//         </>
//       ) : (
//         <>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <>
//       {/* max-w-screen-xl */}
//       <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white ">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {navOptions}
//             </ul>
//           </div>
//           <a className="btn btn-ghost normal-case text-xl">Bistro Delight</a>
//         </div>
//         <div className="navbar-center hidden lg:flex -my-4 ">
//           <ul className="menu menu-horizontal px-1 flex  items-center">
//             {navOptions}
//           </ul>
//         </div>
//         {/* <div className="navbar-end">
//           <a className="btn">Get started</a>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default NavBar;

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = "Arif";
  const isAdmin = true;
  const cart = true;

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <div className="flex items-center ">
      <div className="flex items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Our Menu</Link>
        </li>
        <li>
          <Link to="/order/salad">Order Food</Link>
        </li>
        {isAdmin ? (
          <li>
            <Link to="/dashboard/adminhome">Dashboard</Link>
          </li>
        ) : (
          <li>
            <Link to="/dashboard/userhome">Dashboard</Link>
          </li>
        )}
        <li>
          <Link to="/dashboard/mycart">
            <button className="btn glass btn-sm gap-2 bg-transparent border-none ">
              <FaShoppingCart color="white" size={24}></FaShoppingCart>
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
          </Link>
        </li>
      </div>
      <div>
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* max-w-screen-xl */}
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl  font-thin">
            <p className="flex items-center">
              <span className="font-bolder text-red-600 text-2xl">B</span>istro
            </p>
            <p className="flex items-center">
              <span className="font-bolder text-red-600 text-2xl">D</span>elight
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex -my-4 ">
          <ul className="menu menu-horizontal px-1 flex  items-center">
            {navOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
