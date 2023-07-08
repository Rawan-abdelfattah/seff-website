import React from 'react'
import './NewsPage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ButtonTop from '../../components/ButtonTop/ButtonTop'
import ShowNewsPage from '../../components/Show_News/Show_News'

const NewsPage = () => {
    return (

        <section className='business'>
            <Header />
            <ShowNewsPage />
            <ButtonTop />
            <Footer />
        </section>


    )
}

export default NewsPage