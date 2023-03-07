import React from 'react';
import useBooks from '../../../Hooks/useBooks'
import UseAllBook from '../UseAllBook/UseAllBook';

const ManageBook = () => {
    const { books } = useBooks();
    return (
        <div >
            <h1 className='text-2xl text-center font-bold mb-5'>Manage Boooks</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Price</th>
                            <th>Writter</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    {
                        books.map((book) => <UseAllBook
                            key={book._id}

                            book={book}

                        ></UseAllBook>)
                    }

                </table>
            </div>
        </div>
    );
};

export default ManageBook;