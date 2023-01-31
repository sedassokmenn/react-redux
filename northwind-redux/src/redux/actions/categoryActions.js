import * as actionTypes from "./actionTypes"

export function changeCategory(category){//bir kategoriye tıkladığpımızda çalışacak event,
    //category şeklinde bir parametre gönderdik.
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
    //bu aksiyon bir obje döndürüyor, tipi actionTypes'ın CHANGE_CATEGORY'si ve payload u ise gönderilen
    //categorynin kendisidir.
    //yani, bu işlemi yaptığımız zaman reducerda CHANGE_CATEGORY yi gördüğü anda biz state payload da görünen 
    //şekilde set etmiş olacaz.
}

export function getCategoriesSuccess(categories) { 
    return{type: actionTypes.GET_CATEGORY_SUCCESS, payload:categories}
    //yukardaki yapının aynısı
    
}

export function getCategories(){ //kategorilerinin tümünü getir
    return function(dispatch){ // getCategories fonk döndüren bir operasyonu içerisinde barındarak
        //dispatch parametressini gönderdirk. dispatch: yakalamak demek 
        let url="http://localhost:3000/categories"
        return fetch(url) 
        .then(response=>response.json())  // gelen sonucu önce jsona çevir
        .then(result=>dispatch(getCategoriesSuccess(result))) ; 
        //her then bir önceki thenin sınucuyla ilgilenir.
    }
}