import {useState ,useEffect} from "react";

const Create=()=>{
const [title,setTitle]=useState("");
const [body,setBody]=useState("");
const [author,setAuthor]=useState("empty");

const HandleSubmit=(e)=>{
    e.preventDefault();
}
    return(
        <div className="create">
            <h1>Add New Blog</h1>
            <form onSubmit={HandleSubmit}>
                <label>blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>blog author:</label>
                <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value="..........">..........</option>
                    <option value="oday">oday</option>
                    <option value="ahmad">ahmad</option>
                </select>
                <button >Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
};
export default Create;