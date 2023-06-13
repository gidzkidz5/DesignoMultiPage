import HomeTitle from "../components/HomeTitle";
import Values from "../components/Values";
import DesignPageTitle from "../components/DeisgnPageTitle";
import DesignTab from "../components/DesignTab";


export default function Home() {
    const DesignTitle = ['Web', 'App', 'Graphic'];

    return(
        <>
    
        <HomeTitle/>

        <div className="design-tab-parent-home">
        {DesignTitle.map((item) => {
            return(
            <DesignTab
              key={item}
              title={item}
            />)
          })}
        </div>
        
        <Values/>
    
        {/* <DesignPageTitle
          title="Web Design"
          info= "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        /> */}

        </>
        )
    
}