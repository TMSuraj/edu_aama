import { Link } from "react-router-dom";

const ServiceCard = ({source,sname})=>{
    return(
        <div className="service-card">
            <div>
                <img src={source} />
            <h4>{sname}</h4>
            </div>
            <Link to="/services" >Learn More</Link>
        </div>
    );
}

export default ServiceCard;