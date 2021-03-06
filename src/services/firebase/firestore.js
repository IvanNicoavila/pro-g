import { db } from './index'
import { getDocs, collection, query, where } from 'firebase/firestore'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
             const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
                resolve(products)
            }).catch(error => {
                reject(error)
            })    
    })
}

export const getOrders = (userId) => {

    return new Promise ((resolve,reject) => {

        const collectionRef = query(collection(db, 'orders'))

        getDocs(collectionRef)
            .then(response => {
                const orders = response.docs.map(doc => {
                    if(doc.data().buyer.id === userId) return { id: doc.id, ...doc.data() };
                })
                resolve(orders)
            }).catch(error => {
                reject(error)
            })    
    })
}





