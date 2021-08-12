import "./Home.css";
import Header from "../../header/header";
import Posts from '../../posts/Posts'
import Sidebar from "../../sidebar/Sidebar.js";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router";

export default function Home(){
    const [posts,setPosts]=useState([]);
    const {search}=useLocation();

    useEffect(()=>{
     const fetchPosts=async()=>{
        const res=await axios.get('/posts'+search);
        setPosts(res.data)
     }
     fetchPosts()
    },[search])
    return(
        <>
        <Header/>
        <div className='home'>
        <Posts posts={posts}/>
        <Sidebar/>
        </div>
        </>
    )
}