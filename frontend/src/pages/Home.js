import React, { useEffect, useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Jumbotron from '../components/Jumbotron';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='jumbotron1' alt='antiques'>
        <Jumbotron
          text={[
            'Antiques',
            'Art',
            'Collectibles',
            'Vintage Items',
            '@',
            'Calivintiques.com',
          ]}
        />
      </div>
      <div className='content'>
        <Helmet>
          <title>Calivintiques</title>
        </Helmet>

        <br />

        <div className='box'>
          <p>
            ~ I hand picked all the items over years of collecting and
            descriptions are given to the best of my knowledge. ~
          </p>
        </div>
        <Row>
          <Col>
            {' '}
            <div className='products'>
              {loading ? (
                <LoadingBox />
              ) : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
              ) : (
                <Row>
                  {products.map((product) => (
                    <Col
                      key={product.slug}
                      sm={6}
                      md={4}
                      lg={3}
                      className='mb-3'
                    >
                      <Product product={product}></Product>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
