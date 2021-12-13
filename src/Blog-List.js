import {Link} from "react-router-dom";
import {useParams ,useHistory} from "react-router-dom";
import useFetch from "./useFetch";


const BlogList = ({title,blogs}) => {
    const {id}=useParams();
    const {data,isloading,Erros}=useFetch("http://localhost:8000/blogs/"+ id);
    const history=useHistory();
    const HandleDeletes1=()=>{
        alert("A");
        fetch("http://localhost:8000/blogs/"+id,{
            method:"DELETE",
        }).then(()=> {
            alert("B");
            console.log("Blog is deleted");
            history.push("/");
        });
    };
    //const blogs=props.blogs;
    //const title=props.title;
    // const HandleDelete=()=>{
    //     alert();
    // }
    return(
        <div className="Blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>body{blog.body}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
};
export default BlogList;