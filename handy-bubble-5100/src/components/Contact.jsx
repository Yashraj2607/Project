  function Contact(){
    return <div style={{background:" rgb(240, 239, 239)",marginTop:"-10px"}}>
    <h1 style={{textAlign:"center",marginTop:"0px"}}>Payment-Page</h1>
    <div style={{display:"flex",width:"550px",height:"320px",margin:"auto"
 ,border:"1px solid grey",marginTop:"-10px",    background: "linear-gradient(90deg, rgba(253,29,29,0.5803571428571428) 24%, rgba(252,176,69,0.5551470588235294) 74%)"
}}>

        <div style={{border:"1px solid grey",width:"200px"}}>
         <p style={{height:"30px", display:"flex", alignItems:"center",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>DEBIT/CREDIT CARD</p>
         <p style={{height:"30px",border:"1px solid grey", display:"flex", alignItems:"center",background:"grey"}}>UPI</p>
         <p style={{height:"30px",border:"1px solid grey", display:"flex", alignItems:"center",background:"grey"}}>WALLET</p>
         <p style={{height:"30px",border:"1px solid grey", display:"flex", alignItems:"center",background:"grey"}}>Net Banking</p>
        

        
        </div>

        <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      ,width:"350px",height:"270px",margin:"20px"
    }}>
            
      <p> Enter Card Details</p>  
    <input placeholder="card-details"/>
    <br />
    <input placeholder="Name On Card"/>
    <br />
    <input placeholder="Expiry(MM/YY)"/>
    <input placeholder="cvv"/>
    <br />
    <input type="checkbox" name="" id="" />
    <label>Securely save this card for faster payments.</label>
    <br />
    <p>This transaction you make is totally secure. We don't save
your CVV number.</p>
    <button>Pay now</button>
    </div>
    </div>
    
    </div>
  }

  export default Contact