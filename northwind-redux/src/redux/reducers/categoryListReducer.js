import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";
// * yazmamızın sebebi actionTypes ın içerisinde birden faxzla export var, * ile 
// hepsini ismiyle çağırabilicez.

export default function changeCategoryReducer(state = initialState.categories, action) {
    // iki şey veriyorduk biri aksiyonun ismi, diğeri statein ismi
    //initialState başlangıç stateleri tutuyor ordan state i getirdik
    //2. ise gelecek aksiyon
    switch (action.type) {
        case actionTypes.GET_CATEGORY_SUCCESS: // gelen actionTypes GET_CATEGORY_SUCCESS ise payload u döndğr
            return action.payload;
        default:
            return state;
    }
}