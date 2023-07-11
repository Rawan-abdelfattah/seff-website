import React from 'react';
import './Title.css';

const Title = ({title}) => {
  return (
    <div className='general-title'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='text-uppercase text-white position-absolute'>{title()}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Title;
