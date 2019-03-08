// this mixin is not shared, each component that uses it will create its own copy
// if you want a global reference point for data/methods etc, then use an event bus or a normal javascript object that you import 
export const fruitMixin = {
    data: () => ({
        fruits: ["apple", "banana", "mango", "melon"],
        filterText: ""
    }),
    computed: {
        filteredFruits() {
            return this.fruits.filter(fruit => fruit.match(this.filterText));
        }
    },
    // if we provide a lifecycle hook in our mixin, and in our vue component, then both will get executed, even if they share the same name
    // the order lifecycle hooks get executed is: (1)global mixins (see main.js) (2)local mixins (3)component lifecycles
    created() {
        console.log('fruitMixin.js created')
    }
};