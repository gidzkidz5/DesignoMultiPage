export default function DesignPageTitle({title, info}) {
    
    return(
        <section className="ff-sanserif font-white design-page-title">
            <h1 className="fs-L">{title}</h1>
            <h2 className="fs-body">{info}</h2>
        </section>

    )
}