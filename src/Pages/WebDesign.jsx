import DesignPageTitle from "../components/DeisgnPageTitle";
import DesignTab from "../components/DesignTab";
import ProductCard from "../components/ProductCard";

export default function WebDesign() {

    const productArray = [
        {
            title: "Express",
            desc: "A multi-carrier shipping website for ecommerce businesses"
        },
        {
            title: "Transfer",
            desc: "Site for low-cost money transfers and sending money within seconds"
        },
        {
            title: "Photon",
            desc: "A state-of-the-art music player with high-resolution audio and DSP effects"
        },
        {
            title: "Builder",
            desc: "Connects users with local contractors based on their location"
        },
        {
            title: "Blogr",
            desc: "Blogr is a platform for creating an online blog or publication"
        },
        {
            title: "Camp",
            desc: "Get expert training in coding, data, design, and digital marketing"
        },
    ]
 
    return(
        <>
        <DesignPageTitle
            title = "Web Design"
            info = "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />
        <div id="web-design-page">
            {productArray.map((product) => {
                return(
                <ProductCard
                    category= "web"
                    title = {product.title}
                    description = {product.desc}
                />)
            })}
            
        </div>

        <div className="flex design-page-bot-container">
        <DesignTab
            title="App"
        />
        <DesignTab
            title="Graphic"
        />
        </div>
        </>

    )
}