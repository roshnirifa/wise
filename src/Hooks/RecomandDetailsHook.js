import React, { useEffect, useState } from 'react';

const RecomandDetailsHook = id => {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/recomandBooks/${id}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);
    return [service]

};

export default RecomandDetailsHook;