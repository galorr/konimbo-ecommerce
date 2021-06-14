import axios from "axios"

export function getAllProducts({ commit }) {
    let url = "https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08";
    axios.get(url).then((response) => {
        commit("setStoreProducts", response.data);
    }).catch(error => {
        console.log(error);
    });
}

export function getProducts({ commit }, category ) {
        commit("setProducts", category);
}

export function productDetails({ commit }, id) {
        commit("setProduct", id);
}

export function addCart({ commit, getters }, payload) {
    let cart = getters.cart
    let data = payload.product
    data["quantity"] = payload.quantity
    cart.push(data)
    commit("setCart", cart)
}

export function removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}
