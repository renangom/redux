const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/iceCream/icecreamSlice')


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    }
})

module.exports = store