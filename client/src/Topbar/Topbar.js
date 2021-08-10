import './topbar.css'

export default function TopBar(){
   return(
       <div className='top'>
           <div className='topLeft'>
           <i className="topIcon fab fa-facebook-square"></i>
           <i className="topIcon fab fa-twitter-square"></i>
           <i className="topIcon fab fa-pinterest-square"></i>
           <i className="topIcon fab fa-instagram-square"></i>

           </div>
           <div className='topCenter'>
            <div className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>



            </div>
           </div>
           <div className='topRight'>
               <img className='topImg' src='https://dpssahiwal.edu.pk/wp-content/uploads/elementor/thumbs/dps-pic-scaled-ony6hsllxpuir4t5fewkp6n9l17mq58zxp4j2p96lc.jpeg' alt=''></img>
               <i className="topSearchIcon fas fa-search"></i>
           </div>
       </div>
   )
}