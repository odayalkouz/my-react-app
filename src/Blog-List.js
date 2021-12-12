const BlogList = ({blogs,title}) => {
    // const blogs=props.blogs;

    // const title=props.title;
    return(
        <div className="Blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by <b>{blog.author}</b></p>
                    <p>body{blog.body}</p>
                    <p>body{blog.body}</p>
                </div>
            ))}
        </div>
    )
};
export default BlogList;