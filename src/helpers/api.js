import * as API from './base';

export default {
    getItemList() {
        return new Promise((resolve, reject) => {
            API.get({
                url: '/product',
            }).then((result) => {
                resolve(result.data ? result.data: [])
            }).catch((err) => {
                console.log('err', err.message)
                reject(err)
            })
        })
    },
    getProductDetail(id) {
        return new Promise((resolve, reject) => {
            API.get({
                url: `/product/${id}`,
            }).then((result) => {
                resolve(result.data ? result.data: [])
            }).catch((err) => {
                console.log('err', err.message)
                reject(err)
            })
        })
    }
}