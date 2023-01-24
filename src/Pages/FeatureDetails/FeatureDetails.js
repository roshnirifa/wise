import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FeatureDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>This is feature details {id} </h1>
            <h1>This is feature details </h1>
        </div>
    );
};

export default FeatureDetails;