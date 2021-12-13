import {useState ,useEffect} from "react";
import {useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const Create=()=>{
    const {data:blogs}=useFetch("http://localhost:8000/blogs");


const [title,setTitle]=useState("");
const [body,setBody]=useState("");
const [author,setAuthor]=useState("empty");
const [isloading,setisloading]=useState(false);
const history=useHistory();

const HandleSubmit=(e)=>{
    e.preventDefault();
    const blog ={title,body,author};
    setisloading(true);
    console.log(blog);
    fetch("http://localhost:8000/blogs",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log("add new Blog....");
        setisloading(false);
        // history.go(-1)
        history.push("/");
    })
};
    return(
        <div className="create">
            <h1>Add New Blog</h1>
            <form onSubmit={HandleSubmit}>
                <label>blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>blog Body:</label>
                <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                <label>blog author:</label>
                <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value="..........">..........</option><option value="oday">oday</option>
                    <option value="ahmad">ahmad</option>
                </select>
                {!isloading && <button>Add Blog</button>}
                {isloading && <button disabled >Adding Blog</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
};
export default Create;