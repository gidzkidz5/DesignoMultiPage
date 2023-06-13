import Button1 from "./Button1";

export default function HomeTitle() {
    return (
        <>
        <section className="header-container home-container flex">
            <div id="home-text">
                <div id="home-text-container">
                    <h1 className="ff-sanserif fs-L font-white">Award-winning custom designs and digital branding solutions</h1>
                    <h2 className="ff-sanserif fs-body font-white">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</h2>
                </div>
                <Button1
                    title="Learn More"
                    route="../about"
                />
            </div>

           
                <img id="img-phone" src="src\assets\home\desktop\image-hero-phone.png"/>
            

            <svg id="shadow-bg"width="640" height="639" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fill-rule="evenodd" opacity=".309"/></svg>
        </section>

        </>
    )
}