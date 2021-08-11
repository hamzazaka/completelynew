import "./Home.css";
import Header from "../../header/header";
import Posts from '../../posts/Posts'
import Sidebar from "../../sidebar/Sidebar.js";

export default function Home(){
    return(
        <>
        <Header/>
        <div className='home'>
        <Posts/>
        <Sidebar/>
        </div>
        </>
    )
}