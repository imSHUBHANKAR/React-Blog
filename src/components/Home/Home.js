import React from 'react';
import './Home.css';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import Marquee from "react-fast-marquee";






function Home() {
    return (
        <div className='Home-one'>
        <Marquee>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Marquee>
        <div className="container_home">
            
            
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
        </div>
    )
}

// function Home(){
//     return (
//         <div className="container_home">
//             <Sidebar />
//             <Feed />
//         </div>
//     )
// }

export default Home