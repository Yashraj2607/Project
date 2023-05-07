import React from "react"
import "../styles/Home.css"
import Footer from "./Footer"
function Home(){
    return <>
       <img className="headimg" src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/785695e9-5e74-486e-98d5-27354a474246.jpg" alt="" />
        <h1 className="borad">A broad selection of courses</h1>
        <p className="online">Choose from 213,000 online video courses with new additions published every month</p>
        <div style={{display:"flex",justifyContent:"space-between",marginLeft:"75px",marginRight:"300px"}}>
            <p>Python</p>
            <p>Javascript</p>
            <p>Data Science</p>
            <p>C++</p>
            <p>PHP</p>
            <p> Excel</p>
            </div>
            <div className="expand">
            <h3>Expand your career opportunities with Python</h3>
            <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine</p>
             <button>Explore Python</button>
             <div className="card">
                <div>
                <img src="https://www.analyticsvidhya.com/wp-content/uploads/2014/12/image-process.jpg" alt="" />
                <p>The Complete Python Bootcamp From Zero to Hero in Python</p>
               <p>Jose Portilla</p>
                 <h5>$3,399</h5>
                </div>

                <div>
                <img src="https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png" alt="" />
                <p>The Complete Python Bootcamp From Zero to Hero in Python</p>
               <p>Jose Portilla</p>
                 <h5>$3,399</h5>
                </div>

                <div>
                <img src="https://uploads-ssl.webflow.com/5c19100c2b50073e6ee69da1/60d35967a853a1b14851703b_All%20the%20data%20(1).gif" alt="" />
                <p>The Complete Python Bootcamp From Zero to Hero in Python</p>
                <p>Jose Portilla</p>
                 <h5>$3,399</h5>
                 
                </div>

                <div>
                <img src="https://www.analyticsvidhya.com/wp-content/uploads/2014/12/image-process.jpg" alt="" />
                <p>The Complete Python Bootcamp From Zero to Hero in Python</p>
               <p>Jose Portilla</p>
                 <h5>$3,399</h5>
                </div>
               
             </div>
             <h3>Student are Viewing...</h3>
            </div>
            
            <div className="youtubeDiv">
               
            <iframe className="youtube" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>

<iframe className="youtube" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>

<iframe className="youtube" src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
            </div>
            <Footer/>
     
        </>
    
}

export default Home