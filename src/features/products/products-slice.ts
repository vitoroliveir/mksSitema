import { Products } from "@/types/products";
import { ProductsState } from "@/types/productsState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductsState = {
  products: [],
  qtd: 0,
  total: 0
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Products>) => {
      var test = false

      state.products.map((result) => {
        if (result.name == action.payload.name) {
          return test = true
        }
      })

      if (!test) {
        state.products.push(action.payload);
        state.qtd += 1
        state.total += Number(action.payload.price)
      }

    },
    removerProduct: (state, action: PayloadAction<Number>) => {
      const newProductArray: Array<Products> = []

      state.products.map((product) => {
        if (product.id !== action.payload) {
          newProductArray.push(product)
        } else {
          
          if (product.qtd != 0) {
            state.total -= Number(product.price) * product.qtd
          }

          if (state.qtd > 0) {
            state.qtd -= product.qtd
          }
        }
      });

      state.products = newProductArray


    },
    plusQtd: (state, action: PayloadAction<Number>) => {

      state.products.map((result) => {
        if (result.id == action.payload) {
          result.qtd += 1
          state.total += Number(result.price)
          return state.qtd += 1
        }
      })
    },
    minuQtd: (state, action: PayloadAction<Number>) => {

      state.products.map((product) => {
        if (product.id == action.payload) {
          state.total -= Number(product.price)
          if (state.qtd > 0) {
            state.qtd -= 1
          }
          
          return product.qtd -= 1

        }
      });
    },
  },
});

export const { addProduct, removerProduct, plusQtd, minuQtd } = productSlice.actions;
export const productReducer = productSlice.reducer;