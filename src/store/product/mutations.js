
export function setStoreProducts(state, val) {
    state.categories = [];
    val.forEach(element => {
     if(   state.categories.indexOf(element.store_category_title)===-1){
     state.categories.push(element.store_category_title); 
     }
    });
    state.storeProducts = val
}

export function setProducts(state, category) {
    state.products = [];
    state.storeProducts.forEach(element => {
        if(element.store_category_title === category){
        state.products.push(element); 
        }
       });
}

export function setProduct(state, id) {
    state.product = {};
    state.storeProducts.forEach(element => {
        if(element.title === id){
        state.product = element; 
        }
       });
}

export function setLoad(state, val) {
    state.uploadingData = val
}

export function setCart(state, val) {
    state.cart = val
}
