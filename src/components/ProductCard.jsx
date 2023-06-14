// import appDesign from "../assets/app-design";
// import graphicDesign from "../assets/graphic-design"
// import webDesign from "../assets/web-design"

export default function ProductCard({ title, description, category }) {

    return (
        <div className="flex product-card">
            <img src={"../public/" + category +"-design/desktop/image-" + title.split(' ').join('').replace('!','') + ".jpg"}/>
            <div className="ff-sanserif product-card-text-container flex">
                <h1 className="uppercase fs-S">{title}</h1>
                <h2 className="fs-body font-black">{description}</h2>
            </div>

        </div>
    )
}