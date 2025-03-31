// Επιλογή στοιχείων του DOM
const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');

// Αρχικοποίηση του localStorage
const saveRecipes = (recipes) => {
  localStorage.setItem('recipes', JSON.stringify(recipes));
};

// Ανάκτηση των συνταγών από το localStorage
const loadRecipes = () => {
    return JSON.parse(localStorage.getItem('recipes')) || [];
};

// Διαγραφή συνταγής
const deleteRecipe = (index) => {
  const recipes = loadRecipes();
  recipes.splice(index, 1);
  saveRecipes(recipes);
  renderRecipes();
};

// Εμφάνιση συνταγών
const renderRecipes = () => {
  recipeList.innerHTML = '';
  const recipes = loadRecipes();

  recipes.forEach((recipe, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div>
        <strong>${recipe.title}</strong><br>
        ${recipe.ingredients}
        </div>
        <button onclick="deleteRecipe(${index})">Delete</button>
    `;
    recipeList.appendChild(li);
  });
};

// Υποβολή φόρμας
recipeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();

  if (title && ingredients) {
    addRecipe(title, ingredients);
    recipeForm.reset();
    }
});

// Αρχικό φόρτωμα συνταγών
document.addEventListener('DOMContentLoaded', renderRecipes);