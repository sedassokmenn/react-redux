import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) { 
    return{type: actionTypes.GET_PRODUCTS_SUCCESS, payload:products}
    //yukardaki yapının aynısı
    
}

export function getProducts(){ //kategorilerinin tümünü getir
    return function(dispatch){ // getCategories fonk döndüren bir operasyonu içerisinde barındarak
        //dispatch parametressini gönderdirk. dispatch: yakalamak demek 
        let url="http://localhost:3000/products"
        return fetch(url) 
        .then(response=>response.json())  // gelen sonucu önce jsona çevir
        .then(result=>dispatch(getProductsSuccess(result))) ; 
        //her then bir önceki thenin sınucuyla ilgilenir.
    }
}
