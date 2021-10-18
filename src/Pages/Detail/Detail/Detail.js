import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = (props) => {
    const { id } = useParams();


    return (
        <div>
            <p>coming soon {id}</p>
        </div>
    );
};

export default Detail;