import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilitis/fakedb";

const UseBooksOnSale = () => {
    const [booksOnSale, setbooksOnSale] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setbooksOnSale(data))
    }, [])

    const [recommendedBooks, setRecommendedBooks] = useState([]);


    useEffect(() => {
        fetch('recomendedBooks.json')
            .then(res => res.json())
            .then(data => setRecommendedBooks(data))
    }, [])




    const savedCart = getStoredCart();
    const initialCart = []
    console.log('savedCart', savedCart);
    for (const id in savedCart) {
        const addedProduct = booksOnSale.find(product => product.id === id);
        console.log(id, addedProduct);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    for (const id in savedCart) {
        const addedProduct = recommendedBooks.find(product => product.id === id);
        console.log(id, addedProduct);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    let total = 0;

    for (const product of initialCart) {
        total = total + product.price


    }






    return { booksOnSale: booksOnSale, initialCart: initialCart, total: total, recommendedBooks: recommendedBooks }



}
export default UseBooksOnSale;