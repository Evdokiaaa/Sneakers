import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 1,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.totalCount++;
    },
    decrement: (state) => {
      state.totalCount !== 1 ? state.totalCount-- : (state.totalCount = 1);
    },
    addItem: (state, action) => {
      action.payload.filter((item) => {
        // Проверяем, есть ли объект с таким же id в массиве state.items
        const existingItem = state.items.find(
          (cartItem) => cartItem.id === item.id
        );

        // Если объект не найден, то добавляем его в массив
        if (!existingItem) {
          state.items.push({
            ...item,
            quantity: state.totalCount,
          });
        } else {
          // Если такой товар есть, увеличиваем его кол - во
          existingItem.quantity += state.totalCount;
        }

        return null; // или что-то еще, возвращаемое из filter
      });

      state.totalCount = 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addItem, decrement, increment, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
