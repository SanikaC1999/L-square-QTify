import React from "react";
import searchboximg from "../../assets/Search icon.svg"
import styles from "./searchbar.module.css"

export default function Searchbar({search}){
    return (
        <>
        <form className={styles.Searchbar}>
            <input placeholder={search}  className={styles.Searchinput} required/>
            <button type="submit" className={styles.searchbutton}>
                <img src={searchboximg} alt="searchimg" width={20} height={20}/>
            </button>
        </form>
        </>
    )
}



// responsive code 
// import React,{useState} from "react";
// import searchboximg from "../../assets/Search icon.svg"
// import styles from "./searchbar.module.css"

// export default function Searchbar({search}){
//     const [showInput, setShowInput] = useState(false);

//   const handleButtonClick = () => {
//     setShowInput(true);
//   };
//     return (
//         <>
//            <form className={styles.Searchbar}>
//         {showInput ? (
//           <input
//             placeholder={search}
//             className={styles.Searchinput}
//             required
//           />
//         ) : null}
//             <button type="submit" className={styles.searchbutton}  onClick={handleButtonClick}>
//                 <img src={searchboximg} alt="searchimg" width={20} height={20}/>
//             </button>
//         </form>
//         </>
//     )
// }