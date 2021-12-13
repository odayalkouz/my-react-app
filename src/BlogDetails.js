import {useParams ,useHistory} from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails=()=> {
    const {id}=useParams();
    const {data,isloading,Erros}=useFetch("http://localhost:8000/blogs/"+ id);
    const history=useHistory();
    const HandleDelete1=()=>{
        fetch("http://localhost:8000/blogs/"+id,{
            method:"DELETE",
        }).then(()=> {
            console.log("Blog is deleted");
            history.push("/")
        });
    };
    return(
        <div className="blog-details">
            {Erros && <div>{Erros}</div>}
            {isloading && <div className="loading-container" >{isloading}....  Loaging  ....</div>}
            {data && (
                <article>
                    <h1>{data.id}</h1>
                    <h1>{data.title}</h1>
                    <img alt={data.title} src={data.url}/>
                    <button onClick={HandleDelete1} style={{background:"#f1356d",color:"#fff",padding:"6px;",clear:"both"}}>Delete</button>
                </article>
            )}
        </div>

        )
};
export default BlogDetails;