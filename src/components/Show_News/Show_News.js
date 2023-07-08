import React from 'react'
import './Show_News.css';
import pp from '../../assets/images/p.png'
import clock from '../../assets/images/clarity_clock-line.png'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


const ShowNewsPage = () => {
    return (

        <div className='News_content'>
            <Container className='px-4'>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-between '>
                            <p className='header text-white text-capitalize position-relative'>business </p>
                            <div className='d-md-none'>
                                <img src={clock} />
                                <p className='text-white d-inline-block ms-2 clickTime' > 2 h ago  </p>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between my-4'>
                            <h4 className='text-white text-uppercase secondHeader'>here's the fourth article</h4>
                            <div className='d-none d-md-block'>
                                <img src={clock} />
                                <p className='text-white d-inline-block ms-2  clickTime' > 2 h ago  </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='content_box mx-auto'>
                        <Col>
                            <div className='image_box text-center  mb-5 '>
                                <img src={pp} />
                            </div>

                            <div className='content_info my-5'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially
                                    unchanged.

                                </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                </p>
                            </div>

                        </Col>
                    </div>
                </Row>

            </Container>

            <div className='content_subscribe text-center  '>
                <Container>
                    <Row>
                        <Col sm={12} md={6} className='mx-auto my-5'>
                            <h3 className='text-white text-uppercase sub_title '>subscribe to our newsleletter</h3>
                            <p className='text-white my-3 sub_text '>Be the first to get latest news</p>
                            <div className='d-flex flex-column flex-lg-row mt-4 '>
                                <Form.Control className='input_sub my-2' size="lg" type="text" ></Form.Control>
                                <Button className=' btn_subscribe my-2' >subscribe</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>



    )
}

export default ShowNewsPage;