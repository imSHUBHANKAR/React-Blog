import React from "react";
import './Sidebar.css';

function Sidebar(){
    function recentItem (topic,link ) {
        return(
            <a style={{textDecoration:'none'}} href={link} target="">
                <div className="sidebar_recentItem">
                    <span className="sidebar_hash">#</span>
                    <p>{topic}</p>
                </div>
            </a>
        )
    }
    return(
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://media.istockphoto.com/id/490248242/photo/mock-up-poster-with-vintage-hipster-loft-interior-background.jpg?s=612x612&w=0&k=20&c=h1KKk7NCeWVE72OXiPgNQpRv_hQSbztn7b_x55hI6JE=" alt="Profile-Pic"/>
                <h2>Shubhankar User</h2>
                <h4>shubh@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you👽</p>
                    <p className="sidebar_statNumber">6,190</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post 📜</p>
                    <p className="sidebar_statNumber">4,020</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent :- 🙂</p>
                {recentItem("reactJs","https://reactjs.org/")}
{recentItem("programmingCPP","https://www.programiz.com/cpp-programming")}
{recentItem("softwareengineering","https://www.javatpoint.com/software-engineering")}
{recentItem("design","https://www.geeksforgeeks.org/system-design-tutorial/")}
{recentItem("developer","https://www.coursera.org/articles/software-developer-vs-software-engineer")}
            </div>
        </div>
        
    )
}

export default Sidebar