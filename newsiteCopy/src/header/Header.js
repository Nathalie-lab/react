import "./Header.css";
import oldParis from "./oldParis.jpg";
import newParis from "./newParis.png"


function Header(){
    return (
        <header className="App-header">
            <h1>Paris is My Dream City</h1>
            <h2>~France~</h2>
            <h3>Year Foundation: 52 BC</h3>
            <div class="imgHeader">
                <img src={oldParis} alt="old" />
                <img src={newParis} alt="new" />
            </div>
        </header>
    )
};

export default Header;