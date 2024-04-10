import React from 'react'
import Button from '../layouts/Button';
import img from '../assets/img/about.jpg'
const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p>
          We meticulously source specialty-grade beans from renowned coffee-growing regions worldwide.
          Our master roasters skillfully craft each batch to perfection, unlocking rich flavors and ar
          omas unique to our coffee.Grown in diverse climates and soils, our beans boast a spectrum of 
          flavors reflective of their origin's terroir.From meticulous washing to innovative fermentation,
           /bhgf6our beans undergo precise processing for optimal taste and quality.
          </p>
          <p>
          Our carefully curated blends blend complementary flavors to create a harmonious and memorable 
          coffee experience.Tailor your coffee experience with our array of brewing methods and flavor 
          enhancements, ensuring every cup is personalized to your taste.Behind every sip lies a capti
          vating narrative of our coffee's journey, inviting you to join us on a flavorful adventure 
          from bean to cup.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
