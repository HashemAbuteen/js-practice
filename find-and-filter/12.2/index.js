const candyStore = {
    cand: [
      {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2
      },
      {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4
      },
    ],
    cashRegister: 200
  }
  
  function getCandy(candyStore, id) {
    return candyStore.candies.find(candy => candy.id === id);
  }
  
  function getPrice(candyStore, id) {
    const candy = candyStore.candies.find(candy => candy.id === id);
    return candy.price;
  }
  
  function addCandy(candyStore, id, name, price, amount) {
    candyStore.candies.push({ id, name, price, amount });
  }
  
  function buy(candyStore, id) {
    const candy = candyStore.candies.find(candy => candy.id === id);
    candyStore.cashRegister += candy.price;
    candy.amount--;
  }
  