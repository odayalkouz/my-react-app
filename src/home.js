import {useState,useEffect} from "react";
import BlogList from "./Blog-List";
const Home=() =>{
    const[name,SetName]=useState("oday")
    const [blogs,setBlogs]=useState([
        {title:"title1",author:"ahmad",body:"lorem ipsum ....",id:"0"},
        {title:"title2",author:"oday",body:"lorem ipsum ....",id:"1"},
        {title:"title3",author:"oday",body:"lorem ipsum ....",id:"2"}
    ])
    const HandleDeletelist=(id) => {
        const NewBlog=()=>blogs.filter((blog)=>blog.id != id);
        setBlogs(NewBlog)
    }
    useEffect(()=>{
        console.log("use effect run");
        console.log(blogs);
    },[name])
    return(
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs List" HandleDeletelist={HandleDeletelist} />
           <button onClick={()=>SetName("alkouz")}>change name</button>
            <p>{name}</p>
        </div>
    );
}
export default Home