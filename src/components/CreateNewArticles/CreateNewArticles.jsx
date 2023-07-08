import React from 'react';
import './CreateNewArticles.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../../assets/images/Upload icon.png';
const CreateNewArticles = () => {

    return (
        <div className='home-content'>
            <div className='overlay'>
                <div className="container">

                    <p>Create New Article</p>
                    <div className="line line-1 my-2"></div>
                    <p>6th June 2023</p>
                    <div className="content mt-4">
                        <div className="side-bar">
                        </div>
                        <div className="admin-information">
                            <div className="add-article-and-btn-publish">
                                <div>
                                    <h4>Add Article Details </h4>
                                    <div className="line line-2">
                                    </div>
                                </div>
                                <div className="edit-profile">
                                    <Button className='text-white text-uppercase btn-edit'>Publish</Button>{' '}
                                </div>
                            </div>
                            <div className="article-category">
                                <div>
                                    <h5>Article Titel</h5>
                                    <input className='input-article' type="text" />
                                </div>
                                <div>
                                    <h5>Category</h5>
                                    <input className='input-Category' type="text" />
                                </div>
                            </div>
                            <div className="article-contect">
                                <h5 className='my-4'>Content</h5>
                                <textarea className='Content-txt' name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <h5 className='mt-3'>Publishing Date</h5>
                            <input className='my-3 date-input' type="date" />
                            <h5 className='mb-3'>Upload Cover Photo</h5>
                            <div className="drog-drop">
                                <div className="drog-drop-content">
                                    <img src={icon} alt="Logo" />
                                    <h4 className='my-3'>Drog & drop files or <span>Browse</span></h4>
                                    <p className='text-secondary'>Supported formates : JPEG , PNG,GIF ,MP4 ,PDF,PSD,AL,Word,PPT</p>
                                </div>

                            </div>
                            <div className="cancle-save mt-3 ms-auto">
                                <Button className='text-white text-uppercase me-2 btn-cancle'>Cancel</Button>{' '}
                                <Button className='text-white text-uppercase btn-save'>Save</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CreateNewArticles;