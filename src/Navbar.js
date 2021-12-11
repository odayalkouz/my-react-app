const Navbar= () => {
    return(
        <nav className="navbar">
            <h1>my react Blog</h1>
            <div>
                <a href="/">Home</a>
                <a href="/create"  style={{color:"blue",backgroundColor:"red",borderRadius:"8px"}}>New blog</a>
            </div>
        </nav>
    );
}
export default Navbar;