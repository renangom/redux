const redux = require('redux')
const produce = require('immer').produce

const initialState = {
    name: 'Vishwas',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
    },
}

const STREET_UPDATED = 'STREET_UPDATED'
function updateStreet(street) {
    return{
        type: STREET_UPDATED,
        payload: street
    }
}

const streetReducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED: 
            //SEM O IMMER
            // return{
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // }

            // COM O IMMER, USAMOS O PRODUCE, QUE RECEBE NOSSO ESTADO ATUAL, E UMA FUNÇÃO QUE RECEBE UMA CÓPIA
            // DO NOSSO ESTADO
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default: {
            return state
        }
    }
}

const store = redux.createStore(streetReducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {console.log('Updated State', store.getState())})
store.dispatch(updateStreet('José Zola'))
store.dispatch(updateStreet('Simonelli Zola'))
unsubscribe()