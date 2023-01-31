import React from 'react';
import UseBooksOnSale from '../UseBooksOnSale/UseBooksOnSale';

const Books = () => {
    const { booksOnSale } = UseBooksOnSale();

    console.log(booksOnSale.name);

    return (
        <div>
            <h1>this</h1>
            {
                booksOnSale.map(bookOnSale =>
                    <h1>{bookOnSale.img}</h1>


                )
            }
        </div>
    );
};

export default Books; <h1>THIS IS BOOKS</h1>