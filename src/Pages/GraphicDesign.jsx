import DesignPageTitle from "../components/DeisgnPageTitle";
import DesignTab from "../components/DesignTab";
import ProductCard from "../components/ProductCard";

export default function GraphicDesign() {

    const productArray = [
        {
            title: "Tim brown",
            desc: "A book cover designed for Tim Brown’s new release, ‘Change’"
        },
        {
            title: "Boxed Water",
            desc: "A simple packaging concept made for Boxed Water"
        },
        {
            title: "Science!",
            desc: "A poster made in collaboration with the Federal Art Project"
        }
    ]
 
    return(
        <>
        <DesignPageTitle
            title = "Graphic Design"
            info = "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        />
        <div id="web-design-page">
            {productArray.map((product) => {
                return(
                <ProductCard
                    category= "graphic"
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
            title="Web"
        />
        </div>
        </>

    )
}