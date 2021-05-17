import React from "react";
import { Header } from './Header';
import img_final from '../assets/img/img-final.svg';
export const PaginaGracias = () => {
    return (
        <div className="row container__main"> 
        <Header/>            
            <div className="row">
                <div className="col-sm-6 ">                    
                    <img src={img_final} className="" alt=""/>
                                        
                </div>
                <div className="col-sm-6">                
                    <div className="container__final">                        
                        <div className="title__04 gray__1__title"><span className="red__1__title">¡Te damos la bienvenida!</span>Cuenta con nosotros para proteger tu vehículo</div>
                        <span className="text__paragraph__14 gray__2__paragraph">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo.</span><br/>
                        <span className="text__paragraph__14 gray__2__paragraph">joel.sanchez@gmail.com</span>
                    </div>
                    <div className="display__flex mb-16">                                    
                            <button type='button' className="btn__custom btn__red btn__text__14 text__white">
                                COMO USAR MI SEGURO
                            </button>      
                    </div>
                </div>
            </div>                       
        </div>
    )
}