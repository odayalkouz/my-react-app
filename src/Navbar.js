import{Link} from "react-router-dom";

const Navbar= () => {
    return(
        <nav className="navbar">
            <h1>my react Blog</h1>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/create"  style={{color:"blue",backgroundColor:"red",borderRadius:"8px"}}>New blog</Link>
            </div>
        </nav>
    );
};
export default Navbar;