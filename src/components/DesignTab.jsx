import { Link } from "react-router-dom"
export default function DesignTab ({title}) {
    
    const arrow = ">"

    return (
        
        <div className="design-tab ff-sanserif uppercase font-white flex" id={title.toLowerCase()}>
            <div className="after" ></div>
            <Link to={"../" + title + "-design"}></Link>
            
            <h1 className="fs-M">{title} Design</h1>
            <h2 className="fs-btn" style={{letterSpacing: "5px"}}>VIEW PROJECTS <span className="red-arrow">{arrow}</span></h2>
         
        </div>
       
    )
}