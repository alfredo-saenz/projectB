export function createMenuObj(id, title, category, price, desc) {
    return {
      // id is needed when using map() for react.
      id: id,
      title: title,
      category: category,
      price: price,
      desc: desc,
    }
    
} 