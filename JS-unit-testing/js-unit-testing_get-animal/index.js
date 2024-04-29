export function getAnimal(animalName) {
  if (animalName === "cats") {
    return `I totally love ${animalName}!`;
  }
  if (animalName === "dogs") {
    return `I like ${animalName}!`;
  } else {
    return `I do not like animals at all!`;
  }
}
