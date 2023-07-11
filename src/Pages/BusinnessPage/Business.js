import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/reducers/BusinessRecentReducer';
import { fetchContentData } from '../../redux/reducers/BusinessContentReducer';
import ButtonTop from '../../Components/ButtonTop/ButtonTop';
import Background from '../../Components/Background/Background';
import Title from '../../Components/Title/Title';
import MostRecent from '../../Components/MostRecent/MostRecent';
import Content from '../../Components/PageContent/Content';
import image from '../../assets/images/secondary_background.jpg';

const Bussiness = () => {
  const {BusinessRecent}=useSelector(state=>state.businessRecent);
  const {BusinessContent}=useSelector(state=>state.businessContent);
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(fetchData());
     dispatch(fetchContentData());
  },[])

  const title=()=>{
    return  <>Lastest Business <br/>News</>
  }
  return (
    <section className='bussiness-content' style={{backgroundColor:'#1a1919'}}>
       <Background image={image}/>
       <Title title={title}/>
       <MostRecent data={BusinessRecent} status={false}/>
       <Content data={BusinessContent}/>
       <ButtonTop/>
    </section>
  )
}
export default Bussiness;
