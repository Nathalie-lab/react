import "./Header.css";
import myImage from "./headerimg.png";
import cover from "./coverAlbum.webp"

function Header(props){
    return(
        <div className="headerImg">
            <img src={myImage} alt="image" id="headerImage"/> 
            <span>{props.artist}</span>
            <span id="line"></span>
            <h3>{props.nameAlbum}</h3>
            <img src={cover} alt="cover" id="cover"/>
        </div>
    )
};

export default Header;