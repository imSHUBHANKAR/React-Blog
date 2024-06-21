import React, { useEffect, useState } from "react";
import './Feed.css';
import EditIcon from '@mui/icons-material/Edit';
import InputItems from './InputItems/InputItems';
import PhotoIcon from '@mui/icons-material/Photo';
import Posts from "../Posts/Posts";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


function Feed(){


   const [posts,setPosts]= useState([])
   console.log(posts)
   const [input,setInput]=useState('')


    //get the data from an api
    async function getPosts(){
        //this return a promise object
        const response= await fetch('https://dummyjson.com/posts')
        const data=await response.json()
        setPosts(data.posts)
        console.log(data)

    }
    useEffect(()=>{
        getPosts()
    },[])


    function addNewPost(e){
        e.preventDefault()
        //write the logic to add new new posts
        // alert('clicked')
        const copyArray=[...posts]

        copyArray.unshift({
            id:11,
            body:input,
            tags:['HTML','CSS','JavaScript'],
            name:'Peter',
            email:'peter@gmail.com',
            userId:10
        })
        setPosts(copyArray)
        setInput("")

    }





    return(
        
        <div className="feed_container">
            <div className="container">
                <div className="input_container">
                    <EditIcon className="edit_icon"/>
                    <form>
                        <input 
                        type='text' 
                        placeholder="Write a post"
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}/>
                        <button  onClick={addNewPost}>Post</button>
                    </form>
                </div>
                <div className="input_items">
                    <InputItems  
                    Icon={PhotoIcon}
                    title='Photo'
                    color='#60891f'
                    />
                </div>
            </div>
            {posts?.map((value) => (
                <Posts
                    key={value.id}
                    id={value.id}
                    message={value.body}
                    tags={value.tags}
                    name={value.name}
                    userId={value.userId}
                    likeCount={value.reactions}
                    email={value.email}
                />
            ))}




            {/* <div className="posts">
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                
            </div> */}
        </div>
    )
}
export default Feed;