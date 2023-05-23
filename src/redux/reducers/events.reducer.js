
// create a reducer for todos 
const initialState = {
  events: [
    {id: 1, title: 'Ir al Cine', completed: false}, 
    {id: 2, title: 'Hacer compras', completed: false},     
  ]
}

const eventsReducer = (state = initialState, action) => {
  return state;
}

export default eventsReducer;
