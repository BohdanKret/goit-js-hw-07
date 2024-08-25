const categoriesItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(elem => {
    const itemTitle = elem.querySelector("h2");
    console.log(`Category: ${itemTitle.textContent}`);

    const itemElements = elem.querySelectorAll("li");
    console.log(`Elements: ${itemElements.length}`);
});



