import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ spokes, df5110 }) => {
    return (
        <div>
            <ReactLoading type={spokes} color={df5110} height={'20%'} width={'20%'} />
        </div>
    );
};

export default Loading;