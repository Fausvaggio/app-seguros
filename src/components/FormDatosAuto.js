import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { autoAddNew} from '../actions/client';
import img_back from '../assets/img/back.svg';
import img_car from '../assets/img/img-car.svg';
import img_minus from '../assets/img/img-minus.svg';
import img_plus from '../assets/img/img-plus.svg';

const initFormValues = {
    cboAnio:'2019',
    cboMarca:'Wolkswagen',
    radIsGas:'',
    numMount:14300,
    txtMount:'$14,300'   
}

export const FormDatosAuto = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const {activeClient} = useSelector(state => state.client);
    const [FormState, setFormState] = useState(initFormValues);
    const { cboAnio, cboMarca, radIsGas, numMount, txtMount } = FormState;
    const min   = 12500;
    const max   = 16500;
    let cant    = 14300;
    const num   = 100;

    const handleSelectChange = ({target}) => {
        const {name,value} = target;
        setFormState({
          ...FormState,
          [name] : value
        });
        //console.log(activeClient.txtUser);
    };

    const handleInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
          ...FormState,
          [name] : value
        });
    };

    const handleCheckBoxChange = ({target}) => {
        const {name,value} = target;
        setFormState({
          ...FormState,
          [name] : value
        });
    };

    const onSust=()=>{                
        if(numMount>min){
            let result=numMount-num;  
            let text = result.toString().substr(0,2);
            let last = result.toString().substr(result.toString().length-3,3);
            setFormState({
                ...FormState,
                'numMount' : result,
                'txtMount' : '$'+text+','+last,
              });
        }            
    }
    const onAdd=()=>{
        if(numMount<max){
            let result=numMount+num;            
            let text = result.toString().substr(0,2);
            let last = result.toString().substr(result.toString().length-3,3);
            setFormState({
                ...FormState,
                'numMount' : result,
                'txtMount' : '$'+text+','+last,
              });
        }
    }

    const carAddNew = () => {
        try { 
            const request = {      
                'cboAnio'     : cboAnio,
                'cboMarca'   : cboMarca,
                'radIsGas'        : radIsGas,
                'numMount'            : numMount,
              };
              console.log(request);
             
             dispatch(autoAddNew(request)).then(()=>{
                history.push('/arma-plan');                 
             });    
                 
        } catch(err) {
            console.log("Error fetching data --> carAddNew", err);            
        }
      }

    return (
        <div className="row mt-5 pt-3">
            <div className="col container__1">
                <div className="mt-4 pl-128">
                    <div className="display__flex title__07 gray__1__title">
                        <div className="title__08 circle__number_active">1</div>
                        <div>Datos del Auto</div>
                    </div>
                    <div className="line__dot"></div>
                    <div className="display__flex title__07 gray__3__paragraph">
                        <div className="title__08 circle__number_inactive">2</div>
                        <div>Arma tu plan</div>
                        </div>
                </div>
            </div>
            <div className="col container__2">
                <div className="container__form__2">
                    <form>
                            <div className="custom__pointer text__regular__12 gray__3__paragraph mb-4" onClick={() => { history.push('/') }}>
                                <img src={img_back} className="img_back" alt=""/>
                                Volver
                            </div>
                        <div className="title__05 gray__1__title ">¡Hola <span className="red__1__title">{activeClient.txtUser}!</span></div>
                        <div className="title__07 gray__2__paragraph mb-24">Completa los datos de tu auto.</div>                        
                        <div className="row mb-24">
                            <div className="col container__384">
                                <div className="display__flex mb-16">            
                                    <select className="form-select form__flex__1"
                                    value={cboAnio}
                                    name="cboAnio"
                                    onChange={ handleSelectChange}
                                    >  
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>                            
                                    </select>
                                </div>
                                <div className="display__flex mb-16">            
                                    <select className="form-select form__flex__1"
                                    value={cboMarca}
                                    name="cboMarca"
                                    onChange={ handleSelectChange}
                                    >  
                                        <option value="Wolkwagen">Wolkwagen</option>
                                        <option value="Honda">Honda</option>                            
                                    </select>            
                                </div>
                            </div>
                            <div className="col container__224">
                                <div className="border__bottom mb-16">
                                    <div className="title__08 text__left mb-16">Ayuda</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="title__07 gray__1__title mb-16">¿No encuentras un modelo?</div>
                                        <span className="text__bold__10 acian__2__hover">Clic Aquí</span>
                                    </div>
                                    <div className="col-sm-4">
                                    <img src={img_car} className="img_back" alt=""/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row">            
                            <div className="row col container__384 border__bottom pb-40">
                                <div className="col"><span className="title__07 gray__1__title">¿Tu auto es a gas?</span></div>
                                <div className="col text__right">
                                    <div className="rad__form">
                                        <input className="form-check-input rad__green" type="radio" name="radIsGas" value="Si"                                            
                                            onChange={ handleCheckBoxChange}
                                        />&nbsp;
                                        <label className="title__07"> Sí</label>
                                    </div> 
                                    <div className="rad__form">                                       
                                        <input className="form-check-input rad__green" type="radio" name="radIsGas" value="No"                                            
                                            onChange={ handleCheckBoxChange}/>&nbsp;
                                        <label className="title__07"> No</label>
                                    </div>                                  
                                </div>
                            </div>                           
                        </div>
                        <div className="row">            
                            <div className="row col container__384 pt-40 pb-40">
                                <div className="col">
                                    <div className="text__paragraph__13 gray__1__title">Indica la suma asegurada</div>
                                    <div className="text__paragraph__11 gray__2__paragraph">MIN $12,500 | MAX $16,500</div>
                                </div>
                                <div className="col">
                                    <div className="border__element">
                                        <img src={img_minus} className="img__plus custom__pointer" alt="" onClick={onSust}/>
                                        <input type="text" className="form-control form__flex__1 border__none title__07 gray__1__title" value={txtMount}
                                    name="txtMount"
                                    onChange={ handleInputChange} readOnly="true"/>                               
                                        <img src={img_plus} className="img__plus custom__pointer" alt=""onClick={onAdd}/>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                        <pre>{JSON.stringify(FormState)}</pre>
                            <button
                                type='button' className="btn__custom btn__red btn__text__14 text__white"
                                onClick={carAddNew}
                            >
                                CONTINUAR
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

