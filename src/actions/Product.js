export const SET_PRODUCT_LIST = ''
export const SET_PRODUCT_DETAIL = ''


export const setProductListAction = (lists) => {
    return {
        payload: lists,
        type: SET_PRODUCT_LIST
    }
}

export const setProductDetail = (productDetail) => {
    return {
        payload: productDetail,
        type: SET_PRODUCT_DETAIL 
    }
}