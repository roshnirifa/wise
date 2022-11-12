import { useEffect, useState } from "react";

const UseBooksOnSale = () => {
    const [booksOnSale, setbooksOnSale] = useState([]);


    useEffect(() => {
        fetch('booksOnsale.json')
            .then(res => res.json())
            .then(data => setbooksOnSale(data))
    }, [])




    return { booksOnSale }

}
export default UseBooksOnSale;