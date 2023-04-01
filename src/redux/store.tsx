import React from 'react'
import {legacy_createStore,combineReducers,applyMiddleware,compose}from"redux"
import thunk from "redux-thunk"
import cartReducer from './cart/reducer'
import productReducer from './product/reducer'
import adminReducer from './admin/reducer'


const rootReducer=combineReducers({
  product:productReducer,
  cart:cartReducer,
  admin:adminReducer
})

export const store=legacy_createStore(rootReducer,compose(applyMiddleware(thunk)))

export type Appdispatch=typeof store.dispatch