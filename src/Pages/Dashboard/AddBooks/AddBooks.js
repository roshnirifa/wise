import React from 'react';

const AddBooks = () => {
    const handleAddProducts = event => {
        event.preventDefault();
        const name = event.target.productName.value;
        const writter = event.target.writterName.value;
        const price = event.target.price.value;
        const quantity = event.target.quantiy.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        // console.log(productName, price, quantiy, description);
        const url = 'http://localhost:5000/books';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, writter, price, quantity, img, description
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert('Book added succssfully')
                event.target.reset();


            });

    }
    return (


        <div >
            <h1 className='text-center text-3xl  font-bold my-6'>Add a Book</h1>
            <form onSubmit={handleAddProducts} className="px-48 mb-10">
                <label >Book Name:</label>
                <input type="text" placeholder="product name" name='productName' class="input input-bordered w-full  mb-3" /> <br />
                <label >Writter Name:</label>
                <input type="text" placeholder="Writter name" name='writterName' class="input input-bordered w-full  mb-3" /> <br />
                <label >Price:</label>
                <input type="number" placeholder="price" name='price' class="input input-bordered w-full mb-3" /> <br />
                <label >Quantity:</label>
                <input type="number" placeholder="quantity" name='quantiy' class="input input-bordered w-full mb-3" /> <br />
                <label >Description:</label>
                <input type="text" placeholder="description" name='description' class="input input-bordered w-full mb-3" /> <br />
                <label >Img:</label>
                <input type="text" placeholder="img url" name='img' class="input input-bordered w-full  mb-3" /> <br />
                <input className='btn btn-primary w-full ' type="submit" value='add' />
            </form>
        </div>


    );
};

export default AddBooks;