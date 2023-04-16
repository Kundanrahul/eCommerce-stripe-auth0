import React from 'react';
import client from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  slug: string;
}

interface HomeProps {
  products: Product[];
  bannerData: any[];
}

const Home = ({ products, bannerData }: HomeProps) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>NEW ARRIVALS</h2>
      <p>Discount on all products till 30 april</p>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products: Product[] = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
