import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Card, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

import { listProductDetails } from '../actions/productActions'
function ProductScreen(props) {
    const dispatch = useDispatch()


    const params = useParams()
    const productDetail = useSelector(state => state.productDetail)
    const { loading, error, product } = productDetail
    useEffect(() => {

        console.log(params)
        dispatch(listProductDetails(params.id))

    }


        , [params, dispatch])

    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            price:${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            description:{product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        price
                                    </Col>
                                    <Col>${product.price}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status
                                    </Col>
                                    <Col>{product.countInStock ? 'in stock' : 'out of stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>

            </Row>
        </>
    )
}



export default ProductScreen

