import React from 'react';
import { FcLikePlaceholder,FcLike, FcVideoCall } from "react-icons/fc";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineEllipsis } from "react-icons/ai";
import Numeral from "numeral";

const MelonItem = ({music}) => {
    const {id, rank,title,singer ,poster,like, done , state, album} = music
    return (
        <tr>
           <td> {rank} </td> 
           <td className="img">
               <img src={poster} alt="" width="50" />
               <p>
                   <span> {title} </span>
                   {singer}
               </p>
            </td> 
           <td>{album}</td> 
           <td className="like">
               <i><FcLikePlaceholder /></i>
               { Numeral(like).format(0,0)}
           </td> 
           <td><i><FcVideoCall/></i></td> 
           <td>
                 {/* state 값이 상승,하강,유지  */}
                 {state === '상승' && <i> <AiOutlineArrowUp  color="red"/> </i>}
                 { state === '하강' && <i> <AiOutlineArrowDown  style={{color:'blue'}}/> </i>}
                 { state === '유지' && <i> <AiOutlineEllipsis /> </i>}
                 <span style={{marginLeft:10}} > { state } </span>
            </td> 
        </tr>
    );
};

export default MelonItem;