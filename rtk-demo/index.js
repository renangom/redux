const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/iceCream/icecreamSlice').icecreamActions

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {console.log('Updated State', store.getState())})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(icecreamActions.ordered(2))
store.dispatch(icecreamActions.ordered(2))
store.dispatch(icecreamActions.restocked(10))
unsubscribe()

