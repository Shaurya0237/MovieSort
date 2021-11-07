import React from 'react'

const menuCard = ({menuData}) => {
    const myStyle={
        width:"300px",
        height:'200px',
        };
    return (
        <div> 

            <section className="main-card--container">
            {menuData.map((currElem)=>{
               return(
                   
            <div className="card-container">
            <div className="card">
                <div className="card-body">
                
                
                <h2 className="card-title">{currElem.name}</h2>
                <span className="card-description subtle">
                {currElem.description}
                </span>
                <div className="card-read">Read</div>
                </div>
               <div className="centerImage"> <img src={currElem.image} alt="item images" className="card-media" style={myStyle}  /></div>
            </div>
            </div>
            
               ) 
            })}
             </section>
        
        </div>
    )
}

export default menuCard
