import { useContext, useState } from 'react';
import { places } from './components/cha_5/data.js';
import { getImageUrl } from './components/cha_5/utils.js';
import {sectionContext} from './components/cha_5/context.js';


// parent 


export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            console.log(e.target.checked)
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <sectionContext.Provider value={{imageSize}}>
                <List />
      </sectionContext.Provider>
    </>
  )

}


// components (childeren)

function List() {
    
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}




function Place({ place}) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}



function PlaceImage({ place}) {
  const  myContext = useContext(sectionContext)

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={myContext.imageSize}
      height={myContext.imageSize}
    />
  );
}
