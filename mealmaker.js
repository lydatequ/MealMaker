const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this._courses.appetizers;
  }, 
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. and the total price is ${totalPrice} euros.`;
  }
};

menu.addDishToCourse('appetizers', 'tacos', 6.00);
menu.addDishToCourse('appetizers', 'rings', 4.00);
menu.addDishToCourse('appetizers', 'salad', 5.00);

menu.addDishToCourse('mains', 'steak with fries', 15.00);
menu.addDishToCourse('mains', 'bon fillet', 20.00);
menu.addDishToCourse('mains', 'quesadillas', 15.00);

menu.addDishToCourse('desserts', 'cheesecake', 9.00);
menu.addDishToCourse('desserts', 'lemonpie', 8.00);
menu.addDishToCourse('desserts', 'chocolate cake', 10.00);

const meal = menu.generateRandomMeal();
console.log(meal);

