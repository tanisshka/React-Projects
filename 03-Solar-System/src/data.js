import MercuryImg from './assets/mercury.png';
import VenusImg from './assets/venus.jpg';
import EarthImg from './assets/earth-1.jpg';
import MarImg from './assets/mars.png';
import JupiterImg from './assets/Jupiter.jpeg';
import SaturnImg from './assets/saturn-back.jpg';
import UranusImg from './assets/uranus.jpg';
import NeptuneImg from './assets/neptune.jpg';

const planets = {
  Mercury:{
    title: "Mercury",
    image:MercuryImg,
    description: [
      "Smallest planet in the solar system",
      "Closest planet to the Sun",
      "No atmosphere to trap heat",
      "Extreme temperature changes between day and night",
      "Surface covered with craters similar to the Moon"
    ]
  },
  Venus:{
    title: "Venus",
    image:VenusImg,
    description: [
      "Second planet from the Sun",
      "Thick carbon dioxide atmosphere",
      "Strong greenhouse effect makes it the hottest planet",
      "Rotates very slowly and in the opposite direction",
      "Surface has volcanoes and rocky plains"
    ]
  },
  Earth:{
    title: "Earth",
    image:EarthImg,
    description: [
      "Third planet from the Sun",
      "Only known planet that supports life",
      "Has liquid water on its surface",
      "Oxygen-rich atmosphere protects life",
      "One natural satellite: the Moon"
    ]
  },
  Mars:{
    title: "Mars",
    image:MarImg,
    description: [
      "Known as the Red Planet due to iron oxide",
      "Thin atmosphere mostly made of carbon dioxide",
      "Evidence of ancient rivers and lakes",
      "Home to the largest volcano in the solar system",
      "Target for future human exploration"
    ]
  },
  Jupiter:{
    title: "Jupiter",
    image:JupiterImg,
    description: [
      "Largest planet in the solar system",
      "Gas giant composed mainly of hydrogen and helium",
      "Great Red Spot is a massive storm",
      "Has the strongest gravity of all planets",
      "More than 90 known moons"
    ]
  },
  Saturn:{
    title: "Saturn",
    image:SaturnImg,
    description: [
      "Second largest planet",
      "Famous for its bright ring system",
      "Gas giant with low density",
      "Rings are made of ice and rock particles",
      "Has dozens of moons including Titan"
    ]
  },
  Uranus:{
    title: "Uranus",
    image:UranusImg,
    description: [
      "Ice giant with a blue-green color",
      "Rotates on its side at nearly 98 degrees",
      "Methane gas gives it its color",
      "Very cold due to its distance from the Sun",
      "Has faint rings and many moons"
    ]
  },
  Neptune:{
    title: "Neptune",
    image:NeptuneImg,
    description: [
      "Farthest planet from the Sun",
      "Ice giant with deep blue color",
      "Strongest winds in the solar system",
      "Cold and dark environment",
      "Has a large moon called Triton"
    ]
  }
};

export default planets;
