import { useEffect, useState } from "react"

const usePractice = () => {
    const [practice, setPractice] = useState([]);

    useEffect(() => {
        fetch('recomendedBooks.json')
            .then(res => res.json())
            .then(data => setPractice(data))
    }, [])
    return { practice }
}