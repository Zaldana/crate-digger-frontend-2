// import React, { useContext } from 'react'
// import { SearchContext } from "../context/movieContext"
// import "./index.css"

// function AlbumSearchList() {

//     const { results, handleAlbumSelected } = useContext(AlbumSearchContext)

//     function showMoivieList() {
//         return results.map((item, index) => {
//             return (
//                 <li key={index} onClick={() => handleAlbumSelected(item)}>
//                     <img src={item.Poster} alt="album-cover" />
//                     {item.Title}
//                 </li>
//             )
//         })
//     };

//     return (
//         <div className="results">
//             {showMoivieList()}
//         </div>
//     )
// }

// export default AlbumSearchList