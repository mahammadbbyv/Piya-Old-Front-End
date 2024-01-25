import Card from "./Card"
import "./styles/Main.css"
import drugs from '../assets/drugs.png'
import location from '../assets/location.png'
import pharmacy from '../assets/pharmacy.png'
import caduceus from '../assets/caduceus.png'
import restore from '../assets/restore.png'
function Main(){
    return (
        <main>
            <div className="landing-container">
                <img className="landing-icon" src={restore}/>
                <div className="landing-text">
                    <h2 className="landing-title">About</h2>
                    <p className="landing-content"></p>
                </div>
            </div>

            <div className="cards-container">
                <div className="cards">
                    <h1 className="cards-title">Our Services</h1>
                    <div className="cards-grid">
                        <Card title={"Medicine Availability"} text={"Discover the availability of specific medicine in nearby pharmacies. Save time and effort by knowing where to find what you need."} imgUrl={drugs}/>
                        <Card title={"Pharmacy Locations"} text={"Explore the locations of pharmacies on an interactive map. Find the nearest pharmacy and get directions to it easily."} imgUrl={location}/>
                        <Card title={"Pharmacy Details"} text={"Learn more about pharmacies, their services, and facilities. Be informed decisions based on comprehensive information."} imgUrl={pharmacy}/>
                        <Card title={"Health Resources"} text={"Access a wealth of health-related information and resources. Stay informed and make proactive choices for your well-being."} imgUrl={caduceus}/>
                        <Card title={"Medicine Availability"} text={"Discover the availability of specific medicine in nearby pharmacies. Save time and effort by knowing where to find what you need."} imgUrl={drugs}/>
                        <Card title={"Pharmacy Locations"} text={"Explore the locations of pharmacies on an interactive map. Find the nearest pharmacy and get directions to it easily."} imgUrl={location}/>
                        <Card title={"Pharmacy Details"} text={"Learn more about pharmacies, their services, and facilities. Be informed decisions based on comprehensive information."} imgUrl={pharmacy}/>
                        <Card title={"Health Resources"} text={"Access a wealth of health-related information and resources. Stay informed and make proactive choices for your well-being."} imgUrl={caduceus}/>
                        <Card title={"Medicine Availability"} text={"Discover the availability of specific medicine in nearby pharmacies. Save time and effort by knowing where to find what you need."} imgUrl={drugs}/>
                        <Card title={"Pharmacy Locations"} text={"Explore the locations of pharmacies on an interactive map. Find the nearest pharmacy and get directions to it easily."} imgUrl={location}/>
                        <Card title={"Pharmacy Details"} text={"Learn more about pharmacies, their services, and facilities. Be informed decisions based on comprehensive information."} imgUrl={pharmacy}/>
                        <Card title={"Health Resources"} text={"Access a wealth of health-related information and resources. Stay informed and make proactive choices for your well-being."} imgUrl={caduceus}/>
                        <Card title={"Medicine Availability"} text={"Discover the availability of specific medicine in nearby pharmacies. Save time and effort by knowing where to find what you need."} imgUrl={drugs}/>
                        <Card title={"Pharmacy Locations"} text={"Explore the locations of pharmacies on an interactive map. Find the nearest pharmacy and get directions to it easily."} imgUrl={location}/>
                        <Card title={"Pharmacy Details"} text={"Learn more about pharmacies, their services, and facilities. Be informed decisions based on comprehensive information."} imgUrl={pharmacy}/>
                        <Card title={"Health Resources"} text={"Access a wealth of health-related information and resources. Stay informed and make proactive choices for your well-being."} imgUrl={caduceus}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main