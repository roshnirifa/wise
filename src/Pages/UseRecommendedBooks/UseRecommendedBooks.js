import { useEffect, useState } from "react";

const UseRecommendedBooks = () => {
    const [recommendedBooks, setRecommendedBooks] = useState([]);


    useEffect(() => {
        fetch('recomendedBooks.json')
            .then(res => res.json())
            .then(data => setRecommendedBooks(data))
    }, [])




    return { recommendedBooks }

}
export default UseRecommendedBooks;