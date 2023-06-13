import LocationsIcons from "../components/LocationIcons";
export default function About() {

    return (
        
        <section id="about-card-parent">
        <div className="about-card-child about flex">
            <div id="first-img"></div>
            <div className="about-text-container ff-sanserif bg-peach">
                <h1 className="fs-L font-white">About Us</h1>
                <h2 className="fs-body font-white">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</h2>
            </div>
        </div>

        <div className="about-card-child flex right">
            <div id="second-img"></div>
            <div className="about-text-container ff-sanserif bg-lightpeach">
                <h1 className="fs-L font-peach">World-class talent</h1>
                <h2 className="fs-body font-black">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br/><br/>

                Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</h2>
            </div>
        </div>

       <LocationsIcons />

        <div className="about-card-child flex left">
            <div id="third-img"></div>
            <div className="about-text-container ff-sanserif bg-lightpeach">
                <h1 className="fs-L font-peach">The real deal</h1>
                <h2 className="fs-body font-black">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.<br/><br/>

                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</h2>
            </div>

        </div>
        </section>
        
    )
}