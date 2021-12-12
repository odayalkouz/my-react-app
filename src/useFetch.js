import {useState,useEffect} from "react";

const useFetch= (url) =>{
    const[name,setName]=useState("oday");
    const [data,setData]=useState(null);
    const [isloading,setisloading]=useState(true);
    const [Erros,setErros]=useState(null);
    useEffect(()=>{
        const abortCont= new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
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
                    if(err.name==="AbortError"){
                        console.log("abroted")
                    }
                    else {
                        setisloading(false);
                        // console.log(err.message);
                        setErros(err.message)
                    }

                })
        },1000);
        return()=>abortCont.abort();
    },[url]);
    return {data,isloading,Erros}
}
export default useFetch;