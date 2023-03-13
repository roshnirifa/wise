import React from 'react';

const UseAllBook = ({ book }) => {
    const { _id, name, img, price, quantity, writter } = book;

    let deleteBooks = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this product');
        if (proceed) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();

                    }

                })
        }

    }

    return (
        <tbody>

            <tr>
                <td>{name}</td>
                <td><img src={img} style={{ width: '80px' }} alt="" /></td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{writter}</td>
                <td><button onClick={() => deleteBooks(_id)} class="btn btn-error">X</button></td>
            </tr>

        </tbody>
    );
};

export default UseAllBook;