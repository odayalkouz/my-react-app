import{Link} from "react-router-dom";
import {useState} from "react";

const Navbar= () => {

    // const handleClick=(menuItem)=> {
    //     this.setState({ active: menuItem });
    // };

    const [active,setActive]=useState(" ");

    // const HandleClick=()=>{
    //     setActive("active");
    // };

    return(
        <nav className="navbar">
            <h1>my react Blog</h1>
            <div>
                <Link to="/home" id={active}>Home</Link>
                <Link to="/create" style={{color:"#FFF",backgroundColor:"red",borderRadius:"8px"}}>New blog</Link>
            </div>
        </nav>
    );
};
export default Navbar;