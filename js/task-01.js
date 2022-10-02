const categoriesList = document.querySelector("#categories");
const amount = categoriesList.children;
console.log(`Number of categories:${amount.length}`);

[...amount].forEach((item) => {
  console.log(`Category:${item.querySelector("h2").textContent}`);
  console.log(`Elements:${item.querySelectorAll("li").length}`);
});
