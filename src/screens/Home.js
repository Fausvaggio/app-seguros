import React from "react";
import { FormHome } from '../components/FormHome';
import { Header } from './Header';
import '../assets/css/main.css';
import img_woman from '../assets/img/img-woman.svg';

export const Home = () => {
    return (
        <div className="row container__main"> 
        <Header/>            
            <div className="row">
                <div className="col-sm-5 container__left">                    
                    <img src={img_woman} className="img__woman" alt=""/>
                    <div className="container__middle">
                        <span className="text__button__12 gray__1__title">¡Nuevo!</span>
                        <div className="title__04 gray__1__title">Seguro <span className="red__1__title">Vehicular Tracking</span></div>
                        <span className="text__paragraph__14 gray__2__paragraph">Cuéntanos donde le harás seguimiento a tu seguro.</span>
                    </div>
                    <div className="position__text__copy text__paragraph__12 gray__3__paragraph">(c) 2020 RIMAC Seguros y Reaseguros</div>
                </div>
                <div className="col-sm-7 container__right">                
                    <FormHome/>
                </div>
            </div>                       
        </div>
    )
}