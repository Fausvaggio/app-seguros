import React from "react";
import img_rimac from '../assets/img/logo-rimac.svg';
import img_phone from '../assets/img/icon-phone.svg';
export const Header = () => {
    return (
        <div className="row header__standard">
                <div className="col header__logo">
                    <img src={img_rimac} className="img__rimac" alt=""/>
                </div>
                <div className="col header__info mt-3">
                    <span className="text__paragraph__12 gray__2__paragraph">¿Tienes alguna duda?</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={img_phone} className="img__phone" alt="" />
                    <span className="acian__2__hover text__paragraph__14"> (01) 411 6001</span>
                </div>
        </div>
    )
}