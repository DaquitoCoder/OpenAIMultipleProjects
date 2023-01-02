import React from 'react';
import { useState, useEffect } from 'react';
import IdeaList from '../components/IdeaList';
import Loading from '../components/Loading';
import { critic } from '../assets/js/api';

function Ideas() {
  const [idea, setIdea] = useState('');
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  const resultado = {
    pros: "1. There is a large potential market for pizzerias in Colombia given the country's growing economy and population.\n\n2. Pizzerias can have a positive social impact by providing employment opportunities and contributing to the local economy.\n\n3. Pizzerias can be successful businesses due to Colombians' love of pizza and willingness to spend on quality food products.",
    cons: '1. The market for pizza in Colombia is relatively small and undeveloped compared to other countries, so there may be limited demand for a pizzeria.\n2. There could be difficulty sourcing ingredients needed to make authentic Italian pizza, which might limit the menu options or require raising prices.\n3. Start-up costs could be high due to importing equipment and building out a commercial kitchen space.\n4. Language barriers could present challenges when communicating with suppliers, customers, and employees. \n5 .The political and economic situation in Colombia is unstable, which could create difficulties in running a business there (e',
    state_of_the_art: "-Pizza Hut \n-Domino's \n-Little Caesars \n-Papa John's",
    pitch:
      'A pizzeria in Colombia would be an excellent business venture! The country has a vibrant culture and a large population that loves to eat pizza. The pizzeria could be located in a major city like Bogotá or Medellín, where there is a large demand for pizza. The pizzeria could offer a variety of pizzas, including vegan and gluten-free options. It could also offer delivery and catering services.',
    plan: '1. Executive Summary\n\n2. Products and Services\n\n3. Market Analysis\n\n4. Company and Management\n\n5. Financial Plan\n\n6. Risk and Exit Strategies',
    survey:
      'What is your favorite pizza topping?\n\nDo you like thin or thick crust pizza?\n\nWhat is your favorite pizza place?\n\nWhat would you like to see on the menu at a pizzeria in Colombia?\n\nDo you think a pizzeria in Colombia would be successful? Why or why not?',
    viability: 8,
    innovation: 8,
    resources: 6,
  };

  const flyin = {
    pros: '1. Increased mobility and accessibility: Flying cars would theoretically allow people to travel much further and faster than they can currently, making it easier for them to get around both cities and rural areas. This could have a particularly positive impact on those who live in remote or underserved communities.\n\n2. Reduced traffic congestion: If flying cars become popular, it could take some pressure off of traditional ground transportation infrastructure like roads and railways which are often congested during peak times. This could lead to shorter commute times and less frustration for everyone involved.\n\n3. Improved safety record: One potential benefit of flying cars is that they might be safer than traditional vehicles since there would be no risk of collisions with other objects on the ground (assuming they are operated properly). This could make them appealing not just to individuals but also to businesses who want to transport goods without worrying about damage en route.\n\n4) Environmental benefits: Electric-powered flying cars would produce zero emissions, which means they would help reduce pollution and combat climate change . Additionally, if fewer people need to drive because they can fly instead , this would also free up space on roadways – meaning even more environmental gains .  5) Economic opportunities : The development of flying car technology presents a major economic opportunity for countries or regions that are ableto capitalize on it . Not only will there be new jobs created in engineeringand manufacturing , but there is also the potential for significant export earnings as well – especially if electric - powered models prove popular globally',
    cons: '1. They could be incredibly noisy, disrupting both quality of life and wildlife.\n2. They could produce a lot of air pollution, exacerbating climate change and respiratory problems in cities.\n3. If they were to crash, they could cause serious damage to property and people on the ground below them.\n4. They would require a whole new infrastructure for takeoff and landing, which would be expensive to build and maintain.\n5  It’s unclear if flying cars would actually be faster than current modes of transportation once you factor in traffic patterns',
    state_of_the_art:
      '1. Airbus\n2. Audi\n3. BMW\n4. Daimler\n5. Ford\n6. GM\n7. Honda\n8. Hyundai\n9. Jaguar\n10. Mercedes-Benz\n11. Nissan\n12. Toyota\n13. Volkswagen\n14. Volvo',
    pitch:
      '"Flying cars" is an idea that has been around for a long time, but has yet to be realized. There are a number of reasons for this, including the technical challenges involved in making a car that can fly, and the regulatory hurdles that would need to be overcome. However, we believe that the time is right for flying cars, and we are excited to invest in a company that is working to make this a reality.\n\nFlying cars would have a number of advantages over',
    plan: '1. What problem does your flying car solve?\n\nOur flying car solves the problem of congested roads and limited parking.\n\n2. What is your flying car?\n\nOur flying car is a fully electric, autonomous flying car that can take off and land vertically.\n\n3. How does your flying car work?\n\nOur flying car uses electric motors to power its propellers and provide lift. It is controlled by a computer system that makes it easy to fly and navigate.\n\n4. What are the benefits of your flying car?\n\nOur flying car is quiet, efficient, and emissions-free. It can reduce traffic congestion and help people get around quickly and easily.\n\n5. What are the risks and challenges associated with your flying car?\n\nThe main risks and challenges associated with our flying car are regulatory and safety concerns. We are working closely with the relevant authorities to ensure that our flying car meets all safety standards.\n\n6. What is your business model?\n\nOur business model is based on selling flying cars to individuals and businesses. We are also exploring other opportunities such as providing flying car ridesharing services.\n\n7. How will you scale your business?\n\nWe plan to scale our business by expanding our production capacity and selling our flying cars in markets around the world.',
    survey:
      '1. Do you think that flying cars are a good idea?\n\n2. Why or why not?\n\n3. Do you think that flying cars would be safe?\n\n4. What concerns do you have, if any, about flying cars?\n\n5. Would you be interested in owning or renting a flying car?\n\n6. What do you think the benefits of flying cars would be?\n\n7. Are there any other comments or suggestions you have regarding flying cars?',
    viability: 2,
    innovation: 8,
    resources: 8,
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      // const response = await critic(idea);
      setResults(resultado);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setIdea(e.target.value);
  };

  let resultsSection = '';
  if (loading) {
    resultsSection = <Loading />;
  } else if (results) {
    resultsSection = <IdeaList results={resultado} />;
  }

  return (
    <div className='ideas'>
      <h1 className='ideas-title'>Ideas Consultant</h1>
      <div className='idea-search'>
        <form onSubmit={handleSubmit} className='form-search'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder="What's your idea?"
              aria-label="What's your idea?"
              aria-describedby='button-addon2'
              id='idea-search'
              onChange={handleChange}
              autoFocus={true}
            />
            <button
              className='btn btn-primary'
              type='submit'
              id='button-search-idea'
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className='container-fluid container-ideas'>{resultsSection}</div>
    </div>
  );
}

export default Ideas;
