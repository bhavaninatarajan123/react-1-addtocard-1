
import './App.css';
import Card from './Card.js';

function App() {
 const user=[
    {
      product:"Banita alluring kurtis",
      image:"image/green.jpg",
      price:"$270",
      offer:"10% off",
      delivery:"free delivery",
      rating:4.0,
      reviews:"1649 reviews"
    },
    {
      product:"Aagyeyi petite kurtis",
      image:"image/pink.jpg",
      price:"$304",
      offer:"5% off",
      delivery:"free delivery",
      rating:4.0,
      reviews:"3089 reviews"
    },
    {
      product:"Aakarsha fashionable kurtis",
      image:"image/darkblue.jpg",
      price:"$239",
      offer:"10% off",
      delivery:"free delivery",
      rating:3.7,
      reviews:"66 reviews"
    },
    {
      product:"Trenty attractive kurtis",
      image:"image/purple2.jpg",
      price:"$347",
      offer:"10% off",
      delivery:"free delivery",
      rating:3.8,
      reviews:"2484 reviews"
    },
   
    {
      product:"Aakarsha sensational kurtis",
      image:"image/purple.jpg",
      price:"$425",
      offer:"10% off",
      delivery:"free delivery",
      rating:3.9,
      reviews:"1116 reviews"
    },
    {
      product:"Aishani attractive kurtis",
      image:"image/orange.jpg",
      price:"$448",
      offer:"10% off",
      delivery:"free delivery",
      rating:4.0,
      reviews:"21 reviews"
    },
    {
      product:"Aishani refined kurtis",
      image:"image/black.jpg",
      price:"$312",
      offer:"10% off",
      delivery:"free delivery",
      rating:4.0,
      reviews:"4368 reviews"
    },
    {
      product:"Aakarsha pretty kurtis",
      image:"image/purple2.jpg",
      price:"$347",
      offer:"10% off",
      delivery:"free delivery",
      rating:3.8,
      reviews:"452reviews"
    },
    {
      product:"Trenty  kurtis",
      image:"image/purple3.jpg",
      price:"$435",
      offer:"10% off",
      delivery:"free delivery",
      rating:3.9,
      reviews:"883 reviews"
    },
    {
      product:"Trenty attractive kurtis",
      image:"image/purple.jpg",
      price:"$551",
      offer:"10% off",
      delivery:"free delivery",
      rating:4.2,
      reviews:"126reviews"
    },
    {
      product:"Trenty refind kurtis",
      image:"image/black2.jpg",
      price:"$366",
      offer:"10% off",
      delivery:"free delivery",
      rating:4.1,
      reviews:"533 reviews"
    },
    {
      product:"festive special:abhisarik kurtis",
      image:"image/yellow2.jpg",
      price:"$409",
      offer:"10% off",
      delivery:"free delivery",
      rating:4.1,
      reviews:"1159 reviews"
    },
  ]
  return (
    <div>
      
      <Card data={user}/>
    
       
    </div>
  )
}

export default App;
