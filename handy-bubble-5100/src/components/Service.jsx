import React, { useEffect, useState } from "react"
import "../styles/Services.css"

const getData = async (page) => {
    try {
      let res = await fetch(
        `http://localhost:8080/products`
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

    useEffect(() => {
        fetchAndUpdateData();
      }, [page]);
    
      const fetchAndUpdateData = async () => {
        try {
          setloading(true);
          const datas = await getData(page);
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
      console.log(posts)

    return <>
      <h1 className="Heading">All the Courses</h1>
      <div className="main">
        {posts.map((ele)=>(
           <div className="mapdiv">
            <img src={ele.image} alt="Yash" />
             
             <h5 style={{marginTop:"-5px"}}>Titlr:-{ele.title}</h5>
            
            <p style={{marginTop:"-18px"}}>Description:-{ele.message}</p>
            <button style={{marginBottom:"0px"}}>{ele.button}</button>
            <p style={{marginTop:"-1px"}}>Price:-{ele.price}</p>
           
           </div>
        ))}
      </div>
    </>
}

export default Service