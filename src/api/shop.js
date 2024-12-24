const productList = [
  {
    id: 1,
    name: 'iphone',
    price: 1000,
    description: 'iphone 13',
    count: 2,
  },
  {
    id: 2,
    name: 'xiaomi',
    price: 500,
    description: 'xiaomi',
    count: 5,
  },
];

export function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });
}

export function updateProduct(id, count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = [...productList];
      const product = list.find(item => item.id === id);
      product.count = count;
      resolve(list);
    }, 2000);
  });
}
