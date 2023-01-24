import React from 'react';
import Swiper from 'swiper';

const FeatureCard = ({ product, handleAddtoClick, booksOnSale }) => {
    const { id, name, price, img } = product
    return (
        <div>
            <div className="hero">
                <Swiper>
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt='' src={img} />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <h2>${price}</h2>
                            <button onClick={() => handleAddtoClick(booksOnSale)} className="btn btn-primary">Buy Now</button>
                            <button className="btn btn-info ml-5">Details</button>

                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default FeatureCard;