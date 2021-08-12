  
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Your Personal Programming Blog</span>
        <span className="headerTitleLg">HASH MAP</span>
      </div>
      <img
        className="headerImg"
        src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
        alt=""
      />
    </div>
  );
}