import React, { useEffect, useState } from 'react';

const RecomandDetailsHook = _id => {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/recomandBooks/${_id}`;
        // console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [_id]);
    return [service]

};

export default RecomandDetailsHook;