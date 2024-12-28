// DOM Elements
const recipeNameInput = document.getElementById('recipe-name');
const ingredientInput = document.getElementById('ingredient');
const showRecipeButton = document.getElementById('show-recipe');
const addIngredientButton = document.getElementById('add-ingredient');
const clearAllButton = document.getElementById('clear-all');
const recipeTitle = document.getElementById('recipe-title');
const ingredientList = document.getElementById('ingredient-list');
const languageToggle = document.getElementById('language-toggle');

// Texts in different languages
const texts = {
    ar: {
        enterRecipeName: 'يرجى إدخال اسم الوصفة.',
        enterIngredient: 'يرجى إدخال مكون.',
        recipeTitle: 'وصفة الطعام',
        ingredientLabel: 'مكون:',
        recipeNameLabel: 'اسم الوصفة:',
        showRecipe: 'عرض الوصفة',
        addIngredient: 'إضافة',
        clearAll: 'مسح الكل'
    },
    en: {
        enterRecipeName: 'Please enter the recipe name.',
        enterIngredient: 'Please enter an ingredient.',
        recipeTitle: 'Recipe',
        ingredientLabel: 'Ingredient:',
        recipeNameLabel: 'Recipe Name:',
        showRecipe: 'Show Recipe',
        addIngredient: 'Add',
        clearAll: 'Clear All'
    }
};

// Current language
let currentLanguage = 'ar';

// Event Listeners
showRecipeButton.addEventListener('click', () => {
    const recipeName = recipeNameInput.value.trim();
    if (recipeName) {
        recipeTitle.textContent = recipeName;
        recipeNameInput.value = '';
    } else {
        alert(texts[currentLanguage].enterRecipeName);
    }
});

addIngredientButton.addEventListener('click', () => {
    const ingredient = ingredientInput.value.trim();
    if (ingredient) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientList.appendChild(li);
        ingredientInput.value = '';
    } else {
        alert(texts[currentLanguage].enterIngredient);
    }
});

clearAllButton.addEventListener('click', () => {
    recipeTitle.textContent = '';
    ingredientList.innerHTML = '';
    recipeNameInput.value = '';
    ingredientInput.value = '';
});

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    updateLanguage();
});

function updateLanguage() {
    document.querySelector('h1').textContent = texts[currentLanguage].recipeTitle;
    document.querySelector('label[for="recipe-name"]').textContent = texts[currentLanguage].recipeNameLabel;
    document.querySelector('label[for="ingredient"]').textContent = texts[currentLanguage].ingredientLabel;
    showRecipeButton.textContent = texts[currentLanguage].showRecipe;
    addIngredientButton.textContent = texts[currentLanguage].addIngredient;
    clearAllButton.textContent = texts[currentLanguage].clearAll;
}

// Initialize language
document.addEventListener('DOMContentLoaded', updateLanguage);
