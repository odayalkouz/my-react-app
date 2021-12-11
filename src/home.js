import {useState,useEffect} from "react";
import BlogList from "./Blog-List";
const Home=() =>{
    const[name,SetName]=useState("oday");
    const [blogs,setBlogs]=useState(null);
    const [isloading,setisloading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs")
                .then(res=>{
                    return  res.json()
                })
                .then((data)=>{
                    setBlogs(data);
                    setisloading(false)
                },[])
        },1000)
    },[]);
    return(
        <div className="home">
            {isloading && <div className="loading-container" >Loaging ....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs List" />}
           <button onClick={()=>SetName("alkouz")}>change name</button>
            <p>{name}</p>
        </div>
    );
}
export default Home;