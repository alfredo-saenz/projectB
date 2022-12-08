export function createMenuObj(id, img, name, description, price) {
    return {
      // id is needed when using map() for react.
      id: id,
      img: img,
      name: name,
      description: description,
      price: price,
    }
    
} 