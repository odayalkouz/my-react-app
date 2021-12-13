import BlogList from "./Blog-List";
import useFetch from "./useFetch";
const Home=() =>{
const {data:blogs,isloading,Erros}=useFetch("http://localhost:8000/blogs");
    return(
        <div className="home">
            {Erros && <div>{Erros}</div>}
            {isloading && <div className="loading-container" >{isloading}.... Loaging ....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs List"/>}
        </div>
    );
};
export default Home;