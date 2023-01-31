import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilitis/fakedb";

const UseBooksOnSale = () => {
    const [booksOnSale, setbooksOnSale] = useState([]);


    useEffect(() => {
        fetch('booksOnsale.json')
            .then(res => res.json())
            .then(data => setbooksOnSale(data))
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


    return { booksOnSale: booksOnSale, initialCart: initialCart }



}
export default UseBooksOnSale;