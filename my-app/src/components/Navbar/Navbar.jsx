import React from "react";
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css"
import Searchbar from "../Searchbar/Searchbar";
import Feedback from "../Feedback/Feedback";

export default function Nav(){
    return(
        <div className={styles.navbar}>
        <Logo />
        <Searchbar search={"Search a song of your choice"} />
        <Feedback />
        </div>
    )
}


// responsive design basic code

// import React, { useState } from "react";
// import Logo from '../Logo/Logo';
// import Feedback from "../Feedback/Feedback";
// // import { BsSearch, BsList } from 'react-icons/bs'; // Bootstrap Icons
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './Navbar.module.css'; // Custom CSS file for additional styling
// import Searchbar from "../Searchbar/Searchbar"

// export default function Nav() {
//     const [searchVisible, setSearchVisible] = useState(false);

//     const toggleSearch = () => {
//         setSearchVisible(!searchVisible);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <Logo />
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <button className="btn btn-outline-primary" onClick={toggleSearch}>
//                             <Searchbar /> 
//                         </button>
//                         {searchVisible && (
//                             <div className="input-group mt-2">
//                                 <input type="text" className="form-control" placeholder="Search a song of your choice" />
//                                 <div className="input-group-append">
//                                     <button className="btn btn-primary" type="button">Go</button>
//                                 </div>
//                             </div>
//                         )}
//                     </li>
//                     <li className="nav-item">
//                         <button className="btn btn-outline-primary">
//                              <Feedback />
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }
