import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import img_back from '../assets/img/back.svg';
import circle_minus from '../assets/img/circle-minus.svg';
import circle_plus from '../assets/img/circle-plus.svg';
import llanta_robada from '../assets/img/img-llanta-robada.svg';
import img_choque from '../assets/img/img-choque.svg';
import img_atropello from '../assets/img/img-atropello.svg';
import img_vehicular from '../assets/img/img-vehicular.svg';
import icon_check from '../assets/img/icon-check.svg';
const initFormValues = {
    base:20.00,    
    txtBase:'$20.00'   
}
const dataBool = {
    one:false,    
    two:false,    
    three:false,    
}
export const FormArmaPlan = () => {
    let history = useHistory();
    const {activeClient, autoClient} = useSelector(state => state.client);
    const [FormState, setFormState] = useState(initFormValues);
    const [BoolState, setBoolState] = useState(dataBool);
    const { base, txtBase } = FormState;
    const { one, two, three } = BoolState;

    const onAdd=(number,name)=>{        
        let result=parseFloat(base)+parseFloat(number); 
        result=result.toFixed(2);
        setBoolState({
            ...BoolState,
            'base':result,
            [name] : true,                
          });
          setFormState({
            ...FormState,
            'base':result,
            'txtBase':'$'+result                
          });
    }
    const onSus=(number,name)=>{
        let result=parseFloat(base)-parseFloat(number);  
        result=result.toFixed(2);
        setBoolState({
            ...BoolState,
            'base':result,
            [name] : false,                
          });
          setFormState({
            ...FormState,
            'base':result,
            'txtBase':'$'+result                
          });
    }
    return (
        <div className="row mt-5 pt-3">
            <div className="col container__1">
                <div className="mt-4 pl-128">
                    <div className="display__flex title__07 gray__3__paragraph">
                        <div className="title__08 circle__number_inactive">1</div>
                        <div>Datos del Auto</div>
                    </div>
                    <div className="line__dot"></div>
                    <div className="display__flex title__07 gray__1__title">
                        <div className="title__08 circle__number_active">2</div>
                        <div>Arma tu plan</div>
                        </div>
                </div>
            </div>
            <div className="col container__2">
                <div className="container__form__2">
                    <form>
                            <div className="custom__pointer text__regular__12 gray__3__paragraph mb-4" onClick={() => { history.push('/datos-auto') }}>
                                <img src={img_back} className="img_back" alt=""/>
                                Volver
                            </div>
                        <div className="title__05 gray__1__title ">Mira las coberturas</div>
                        <div className="title__07 gray__2__paragraph mb-24">Conoce las cobertuas para tu plan.</div>                        
                        <div className="row mb-24">
                            <div className="col">
                                <div className="container__384 container__gb__384">
                                    <div className="text__paragrah__12 gray__3__paragraph">Placa: {activeClient.txtPlaca}</div>
                                    <div className="title__06 gray__1__title">{autoClient.cboMarca} {autoClient.cboAnio}</div>                                
                                    <div>Editar</div>                                                               
                                </div> 
                                <div className="title__06 gray__1__title">Agregar o quitar coberturas</div>
                                <div className="container__384">                                
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item content__tabs active_tabs">
                                            <a className="nav__tabs title__09 Red_1_Rimac" href="#">Protege a tu auto</a>
                                        </li>
                                        <li className="nav-item content__tabs">
                                            <a className="nav__tabs title__09" href="#">Protege a los que te rodean</a>
                                        </li>
                                        <li className="nav-item content__tabs">
                                            <a className="nav__tabs title__09" href="#">Mejora tu plan</a>
                                        </li>                                
                                    </ul>                                                               
                                    <div className="accordion mt-32" id="accordionExample">
                                            <div className="row accordion-item border__none">
                                                <div className="col-sm-2"><img src={llanta_robada} className="img_back" alt="" /></div>
                                                <div className="col-sm-10">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button gray__1__title title__06"  data-bs-toggle="collapse" type="button" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            Llanta robada
                                                        </button>
                                                        {
                                                        (one)?<div className="mb-2 custom__pointer" onClick={()=>onSus(15.00,'one')}>
                                                        <img src={circle_minus} alt="" /> <span className="title__08  acian__2__hover">Quitar</span>
                                                        </div>:<div className="mb-2 custom__pointer" onClick={()=>onAdd(15.00,'one')}>
                                                        <img src={circle_plus} alt="" /> <span className="title__08  acian__2__hover">Agregar</span>
                                                        </div>
                                                        }
                                                        
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion__body text__paragraph__14 gray__2__paragraph">
                                                            He salido de casa a las cuatro menos cinco para ir a la academia de inglés de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, no llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más.
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <hr/>
                                            <div className="row accordion-item border__none">
                                                <div className="col-sm-2"><img src={img_choque} className="img_back" alt="" /></div>
                                                <div className="col-sm-10">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button gray__1__title title__06" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Choque y/o pasarte la luz roja
                                                        </button>
                                                        {
                                                        (two) ? 
                                                        <div className="mb-2 custom__pointer" onClick={()=>onSus(20.00,'two')}>
                                                        <img src={circle_minus} alt="" /> <span className="title__08  acian__2__hover">Quitar</span>
                                                        </div>
                                                        :
                                                        <div className="mb-2 custom__pointer" onClick={()=>onAdd(20.00,'two')}>
                                                        <img src={circle_plus} alt="" /> <span className="title__08  acian__2__hover">Agregar</span>
                                                        </div>
                                                        }
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion__body text__paragraph__14 gray__2__paragraph">
                                                            He salido de casa a las cuatro menos cinco para ir a la academia de inglés de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, no llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más.
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <hr/>
                                            <div className="row accordion-item border__none">
                                                <div className="col-sm-2"><img src={img_atropello} className="img_back" alt="" /></div>
                                                <div className="col-sm-10">
                                                    <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button gray__1__title title__06" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Atropello en la vía evitamiento
                                                    </button>
                                                    
                                                    {
                                                        (three)?<div className="mb-2 custom__pointer" onClick={()=>onSus(50.00,'three')}>
                                                        <img src={circle_minus} alt="" /> <span className="title__08  acian__2__hover">Quitar</span>
                                                        </div>:<div className="mb-2 custom__pointer" onClick={()=>onAdd(50.00,'three')}>
                                                        <img src={circle_plus} alt="" /> <span className="title__08  acian__2__hover">Agregar</span>
                                                        </div>
                                                        }
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion__body text__paragraph__14 gray__2__paragraph">
                                                        He salido de casa a las cuatro menos cinco para ir a la academia de inglés de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, no llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más.
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                
                                </div>                        
                            </div>
                            <div className="col">
                                <div className="row container__224">
                                    <div className="col-sm-6">
                                        <div className="title__05 gray__1__title">{txtBase}</div>
                                        <div className="text__paragrah__12 gray__2__paragraph">Mensuales</div>
                                    </div>
                                    <div className="col-sm-6"> <img src={img_vehicular} className="img_back" alt=""/></div>
                                    <hr className="phr"/>
                                    <div className="col-sm-12">
                                        <div className="title__07 gray__1__title mb-12">El precio incluye:</div>
                                        <div className="text__paragraph__14 gray__2__paragraph mb-8"><img src={icon_check} className="img_back" alt="" />Llanta de repuesto.</div>
                                        <div className="text__paragraph__14 gray__2__paragraph mb-8"><img src={icon_check} className="img_back" alt="" />Análisis de motor.</div>
                                        <div className="text__paragraph__14 gray__2__paragraph mb-8"><img src={icon_check} className="img_back" alt=""/>Aros gratis.</div>
                                    </div>                                    
                                        <button
                                            type='button' className="btn__custom btn__red btn__text__14 text__white"
                                            onClick={() => { history.push('/pagina-gracias') }}
                                        >
                                            LO QUIERO
                                        </button>
                                </div>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

