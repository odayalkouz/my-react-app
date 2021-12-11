import {useState,useEffect} from "react";

const useFetch= (url) =>{
    const[name,setName]=useState("oday");
    const [data,setData]=useState(null);
    const [isloading,setisloading]=useState(true);
    const [Erros,setErros]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res=>{
                    console.log(res);
                    if(!res.ok){
                        throw Error("coud not fetch")
                    }
                    return  res.json()
                })
                .then((data)=>{
                    setData(data);
                    setisloading(false);
                    setErros(null)

                },[])
                .catch(err=>{
                    setisloading(false);
                    // console.log(err.message);
                    setErros(err.message)
                })
        },1000)
    },[url]);
    return {data,isloading,Erros}
}
export default useFetch;