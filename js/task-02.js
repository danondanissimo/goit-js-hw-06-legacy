const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsBunch = document.querySelector('#ingredients');




const ingredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;

  });
};
      
const elementsList = ingredientsList(ingredients);

  ingredientsBunch.append(...elementsList);

console.log(ingredientsBunch);
