import { Link } from "react-router-dom";


export default function Button1({title,route}) {
    return (
        <button className="btn uppercase"><Link to={route}><span className="ff-sanserif fs-btn">{title}</span></Link></button>
    )

}