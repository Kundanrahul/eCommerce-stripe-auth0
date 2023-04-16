import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import MotionWrap from '@/MotionWrap/MotionWrap';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <MotionWrap>
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
    </div>
    </MotionWrap>
  )
}

export default Product