import { Hero } from "../Hero";
import { AboutUs } from "../AboutUs";
import { HowItWorks } from "../HowItWorks";


export const Home = ()=>{

    return (
        <>{/* main content */}
                  <Hero></Hero>
        
                  {/* about */}
                  <AboutUs></AboutUs>
        
                  {/* How It Works */}
                  <HowItWorks></HowItWorks>      
        </>
    )
}