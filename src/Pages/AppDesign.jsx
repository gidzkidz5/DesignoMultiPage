import DesignPageTitle from "../components/DeisgnPageTitle";
import DesignTab from "../components/DesignTab";
import ProductCard from "../components/ProductCard";

export default function AppDesign() {

    const productArray = [
        {
            title: "Airfilter",
            desc: "Solving the problem of poor indoor air quality by filtering the air"
        },
        {
            title: "Eyecam",
            desc: "Product that lets you edit your favorite photos and videos at any time"
        },
        {
            title: "Faceit",
            desc: "Get to meet your favorite internet superstar with the faceit app"
        },
        {
            title: "Todo",
            desc: "A todo app that features cloud sync with light and dark mode"
        },
        {
            title: "Loopstudios",
            desc: "A VR experience app made for Loopstudios"
        }
        
    ]
 
    return(
        <>
        <DesignPageTitle
            title = "App Design"
            info = "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        />
        <div id="web-design-page">
            {productArray.map((product) => {
                return(
                <ProductCard
                    category = "app"
                    title = {product.title}
                    description = {product.desc}
                />)
            })}
            
        </div>

        <div className="flex design-page-bot-container">
        <DesignTab
            title="Web"
        />
        <DesignTab
            title="Graphic"
        />
        </div>
        </>

    )
}