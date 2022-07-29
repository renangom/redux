const redux = require('redux')
const createStore  = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

//DEFININDO A ACTION
const CAKE_ORDERED = 'CAKE_ORDERED' 
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function restockCake(qty = 1){
    return{
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function orderIceCream(qty = 1) {
    return{
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// STATES
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

//DEFININDO O REDUCER
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case CAKE_RESTOCKED: return{
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        case ICECREAM_RESTOCKED: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams + action.payload
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
const unsubscribe = store.subscribe(() => {})
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.restockCake(2)
actions.orderIceCream()
actions.restockIceCream(5)
unsubscribe()