import { Avatar } from "@mui/material";
import React, { useState } from "react";
//import InputItems from "../Feed/InputItems/InputItems";
import "./Posts.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
//import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


function Posts({id,userId,name,tags,message,likeCount,email}){
    const [isLiked, setIsLiked] = useState(false)

    function handleLikeClick() {
        if (isLiked === true) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    return (
        <div className="posts_container">
            <div className="posts_header">
                <p>
                    <Avatar>{name ? name[0]:'J'}</Avatar>
                </p>
                <div className="posts_info">
                    <p className="posts_name">{name ? name : 'John'}</p>
                    <p className="posts_description">{email ?email:'abc@gmail.com'}</p>
                </div>
            </div>
            <div className="posts_body">
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>  */}
                <p>{message}</p>
            </div>
            <div className="posts_options">
                {/* <InputItems 
                Icon={ThumbUpOffAltIcon}
                title='Like' 
                />
                <InputItems 
                Icon={ThumbDownOffAltIcon}
                title='Dislike' 
                
                /> */}

                <div className='icons' onClick={handleLikeClick}>

                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                    <p>{isLiked ? likeCount + 1 : (likeCount === 0 ? "" : likeCount)}</p>

                </div>
            </div>
        </div>
    )
}

export default Posts;