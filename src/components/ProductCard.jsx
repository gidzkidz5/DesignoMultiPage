export default function ProductCard({ title, description, category }) {

    return (
        <div className="flex product-card">
            <img src={"../src/assets/" + category +"-design/desktop/image-" + title.split(' ').join('').replace('!','') + ".jpg"}/>
            <div className="ff-sanserif product-card-text-container flex">
                <h1 className="uppercase fs-S">{title}</h1>
                <h2 className="fs-body font-black">{description}</h2>
            </div>

        </div>
    )
}