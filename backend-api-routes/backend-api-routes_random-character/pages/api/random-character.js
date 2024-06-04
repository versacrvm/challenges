import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geoHash: chance.geohash(),
    age: chance.age(),
  };
  response.status(200).json(character);
}
