import React from 'react'
import ProductCard from '../UI/ProductCard';

const ProductList = () => {
    const array = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex flex-row flex-wrap">
          {array.map((_item: any, idx: any) => (
            <div className="w-full sm:w-1/4 px-2 py-2" key={idx}>
              <ProductCard />
            </div>
          ))}
        </div>
  )
}

export default ProductList