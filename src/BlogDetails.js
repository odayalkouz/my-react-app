import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails=()=> {
    const {id}=useParams();
    const {data,isloading,Erros}=useFetch("https://jsonplaceholder.typicode.com/photos/"+ id);
    return(
        <div className="blog-details">
            {Erros && <div>{Erros}</div>}
            {isloading && <div className="loading-container" >{isloading}....  Loaging  ....</div>}
            {data && (
                <article>
                    <h1>{data.id}</h1>
                    <h1>{data.title}</h1>
                    <img alt={data.title} src={data.url}/>
                </article>
            )}
        </div>
    )
};
export default BlogDetails;