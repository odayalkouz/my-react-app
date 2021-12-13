import {Link} from "react-router-dom";

const BlogList = ({blogs,title}) => {
    //const blogs=props.blogs;
    //const title=props.title;
    const HandleDelete=()=>{
        alert();
    }
    return(
        <div className="Blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>body{blog.body}</p>
                    </Link>
                    <a style={{background:"#f1356d",color:"#fff",padding:"6px;",clear:"both"}} onClick={HandleDelete}>Delete</a>
                </div>
            ))}
        </div>
    )
};
export default BlogList;