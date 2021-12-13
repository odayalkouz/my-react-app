import BlogList from "./Blog-List";
import useFetch from "./useFetch";
const Home=() =>{
const {data:blogs,isloading,Erros}=useFetch("https://jsonplaceholder.typicode.com/posts");
    return(
        <div className="home">
            {Erros && <div>{Erros}</div>}
            {isloading && <div className="loading-container" >{isloading}   .Loaging ....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs List"/>}
        </div>
    );
};
export default Home;