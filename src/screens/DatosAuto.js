import React from "react";
import { FormDatosAuto} from '../components/FormDatosAuto';
import { Header } from './Header';
import '../assets/css/main.css';

export const DatosAuto = () => {
    return (
        <div className="row container__main"> 
            <Header/>                        
            <FormDatosAuto/>                                  
        </div>
    )
}