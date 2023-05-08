import React, { useEffect, useState } from "react"
import "../styles/Services.css"
import Footer from "./Footer";

const getData = async (page,search) => {
    try {
    let res = await fetch(
       `http://localhost:8080/products?&_page=${page}&&_limit=6?&q=${search}`
      );
  
      let data = await res.json();
      return data;
          
    
    } catch (error) {
      console.log(error);
    }
};



function Service(){
    
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setloading] = useState(true);
    const [isError, setError] = useState(false);
    const [search,setSearch] = useState("")
    const [price,setPrice]=useState("")

    console.log(search)
    useEffect(() => {
        fetchAndUpdateData();
      }, [page]);
    
      const fetchAndUpdateData = async () => {
        try {
          setloading(true);
          const datas = await getData(page,search);
          setPosts(datas);
          setloading(false);
        } catch (error) {
          console.log(error);
          setError(true);
          setloading(false);
        }
      };
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      if (isError) {
        return <h1>Something wrong happened</h1>;
      }
    
      let filtered = posts.filter((ele)=>{
        if((ele.title.toUpperCase().includes((search).toUpperCase())===true) && ele.price>=price ){
            return true
        }
        
        else{
            return false
        }

        // if(ele.price>=price){
        //     return true
        // }else{
        //     return false
        // }
      })


    //   let filtered1 = posts.filter((ele)=>{
    //     if(ele.price>=price){
    //         return true
    //     }else{
    //         return false
    //     }
    //   })

     console.log(price)
    //  console.log(filtered1.length)
      
    return <>
      <h1 className="Heading">All the Courses</h1>
       <div style={{display:"flex"}}>

       <div className="search">
      <input  placeholder="SearchByTitle" onChange={(e)=>setSearch(e.target.value)}/>
      <button >Submit</button>

      <select name="" id=""  style={{marginLeft:"150px"}} onChange={(e)=>setPrice(e.target.value)}>
            <option value="">Sort By Price</option>
            <option value="1000">Price Greater 1000</option>
            <option value="2000">Price Greater 2000</option>
            <option value="4000">Price Greater 4000</option>
        </select>
      </div>

      <div>
        {/* <select name="" id=""  style={{marginLeft:"150px"}}>
            <option value="">Sort By Price</option>
            <option value="Greater 1000">Greater 1000</option>
            <option value="Greater 2000">Greater 2000</option>
            <option value="Greater 4000">Greater 1000</option>
        </select> */}
      </div>

       </div>
       <hr />
      <div className="main">
        {  filtered.map((ele)=>(
           <div className="mapdiv" key ={ele.id}>
            <img src={ele.image} alt="Yash" />
             
             <h5 style={{marginTop:"-5px"}}>Titlr:-{ele.title}</h5>
            
            <p style={{marginTop:"-18px"}}>Description:-{ele.message}</p>
            <button onClick={()=>console.log("Yes")} style={{marginBottom:"0px"}}>{ele.button}</button>
            <p style={{marginTop:"-1px"}}>Price:-{ele.price}</p>
           
           </div>
        ))}
       
      </div>

      <div style={{marginLeft:"400px",marginTop:"10px",marginBottom:"10px"}}>

        
<div >
<button 
disabled={page === 1}
onClick={() => {
  setPage((prev) => prev - 1);
}}
>
PREV
</button>
<span>{page}</span>
<button  disabled={page === 4}
onClick={() => {
  setPage((prev) => prev + 1);
}}
>
NEXT
</button>
</div>
</div>
<Footer/>
    </>
}

export default Service