import React from 'react';
import '../../Styles/Feature/Feature.css';
import Content from '../../Components/Content/Content';
import Offer from '../../Components/Offer/Offer'
import Intros from '../../Data/Feature/Intro.json'
import H1 from '../../Components/Header/H1'
import Previews from '../../Data/Feature/preview.json';
import Offers1 from '../../Data/Feature/Offer1.json'
import Offers2 from '../../Data/Feature/Offer2.json'

import IMG from '../../Assets/Images/demo_phone.png'

import task from "../../Assets/Images/Preview/boost_profile.png"
import chat from "../../Assets/Images/Preview/boost_profile.png"
import profile from "../../Assets/Images/Preview/boost_profile.png"

Previews[0].image = task
Previews[1].image = chat
Previews[2].image = profile


function Feature() {

    return (
        <>

        <Content   {...Intros}  image={IMG} />

    <div className="feature_offer_section">
         <H1  H1Size={"medium"} page={"feature"} section={"offer"} />
         <div className="feature_offers">
           <div className="feature_offer_box">
            {Offers1.map(offer1 =>{
              return (
                 <Offer key={offer1.id}  {...offer1} />
              )
               })}
           </div>
           <div className="feature_offer_box">
             {Offers2.map(offer2 =>{
                return (
                 <Offer  key={offer2.id} {...offer2} />
               )
                })}
           </div>
        </div>
    </div>

        {Previews.map(preview =>{
            return (
              <Content key={preview.id}  {...preview} />
            )
             })}

        </>
    );
  }
  
  export default Feature;
  