import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // Inicializamos las habitaciones con cantidad 0
    venue: [
      { name: "Conference Room", cost: 1500, quantity: 0 },
      { name: "Auditorium Hall", cost: 5500, quantity: 0 },
      { name: "Presentation Room", cost: 3500, quantity: 0 },
      { name: "Large Meeting Room", cost: 1000, quantity: 0 },
      { name: "Small Meeting Room", cost: 800, quantity: 0 },
    ],
    // Inicializamos los complementos con cantidad 0
    addons: [
      { name: "Projectors", cost: 200, quantity: 0 },
      { name: "Speaker", cost: 35, quantity: 0 },
      { name: "Microphones", cost: 45, quantity: 0 },
      { name: "Whiteboards", cost: 80, quantity: 0 },
      { name: "Signage", cost: 80, quantity: 0 },
    ],
    // Inicializamos las comidas no seleccionadas
    meals: [
      { name: "Breakfast", cost: 50, selected: false },
      { name: "High Tea", cost: 25, selected: false },
      { name: "Lunch", cost: 65, selected: false },
      { name: "Dinner", cost: 70, selected: false },
    ],
    numberOfPeople: 0, // Número de personas por defecto
  },
  reducers: {
    incrementVenueQuantity: (state, action) => {
      const index = action.payload;
      if (state.venue[index]) {
        state.venue[index].quantity++;
      }
    },
    decrementVenueQuantity: (state, action) => {
      const index = action.payload;
      if (state.venue[index] && state.venue[index].quantity > 0) {
        state.venue[index].quantity--;
      }
    },
    incrementAddonQuantity: (state, action) => {
      const index = action.payload;
      if (state.addons[index]) {
        state.addons[index].quantity++;
      }
    },
    decrementAddonQuantity: (state, action) => {
      const index = action.payload;
      if (state.addons[index] && state.addons[index].quantity > 0) {
        state.addons[index].quantity--;
      }
    },
    toggleMealSelection: (state, action) => {
      const index = action.payload;
      if (state.meals[index]) {
        state.meals[index].selected = !state.meals[index].selected;
      }
    },
    updateNumberOfPeople: (state, action) => {
        state.numberOfPeople = Number(action.payload);
    }
  },
});

export const {
  incrementVenueQuantity,
  decrementVenueQuantity,
  incrementAddonQuantity,
  decrementAddonQuantity,
  toggleMealSelection,
  updateNumberOfPeople
} = cartSlice.actions;

export default cartSlice.reducer;