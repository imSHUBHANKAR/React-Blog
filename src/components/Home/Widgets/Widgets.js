import React from "react";
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



const newsArray=[
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'},
    {headlines:'Higher Chance Of Economy',link:'https://www.ndtv.com/india-news/higher-chance-of-economy-growing-below-6-5-per-cent-advisor-explains-3740756#pfrom=home-ndtv_bigstory'}
]

function Widgets(){

    const news = (headlines,link) =>(
        <a href={link} style={{textDecoration:'none'}} target='blank'>
                <div className="widgets">
                    <div className="widgets_left">
                        <FiberManualRecordIcon style={{height:10,width:10}}/>
                    </div>
                    <div className="widgets_right">
                        <p>{headlines}</p>
                    </div>
                </div>
        </a>

    )



    return(
        <div className="widgets_container">
            <div className="widgets_header">
                <h2>Latest News 📺</h2>
                <InfoIcon style={{color:'#7b2cbf'}}/>
                {/* <a href="#" style={{textDecoration:'none'}} target='_blank'>
                <div className="widgets">
                    <div className="widgets_left">
                        <FiberManualRecordIcon style={{height:10,widows:10}}/>
                    </div>
                    <div className="widgtes_right">
                        <p>Headline 1</p>
                    </div>
                </div>
                </a> */}
            </div>
            {newsArray.map((value,index)=>(
                    <div key={index} className='single_news'>
                        <h1>{news(value.headlines,value.link)}</h1>
                    </div>
                ))}
        </div>

    )
}

export default Widgets;