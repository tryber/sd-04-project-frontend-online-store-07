// Requisições API
export async function getCategories() {
  return new Promise((resolve, reject) => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then(res => res.json())
    .then(data => resolve(data))
  })
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = '';
  if (categoryId && query) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (categoryId) url = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}`;
  if (query) url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(data => resolve(data))
  })
}
