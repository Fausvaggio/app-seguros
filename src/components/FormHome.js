import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { clientAddNew} from '../actions/client';

const initFormValues = {
    cboTypeDocument:'1',
    txtNumberDocument:'',
    txtCellphone:'',
    txtPlaca:'',
    chkAccept:false
}

export const FormHome = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [FormState, setFormState] = useState(initFormValues);    
    const [errors, setErrors] = useState({
        data:''
      }); 
    const { cboTypeDocument, txtNumberDocument, txtCellphone, txtPlaca, chkAccept } = FormState;
    
    const handleSelectChange = ({target}) => {
        const {name,value} = target;
        setFormState({
          ...FormState,
          [name] : value
        });
    };

    const handleInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
          ...FormState,
          [name] : value
        });
    };

    const handleCheckBoxChange = ({target}) => {
        const {name,checked} = target;
        setFormState({
          ...FormState,
          [name] : checked
        });
    };

    const ValidateFirstForm = (values) => { 
        let errorsForm={};       
        if (!values.cboTypeDocument.trim()) {
            errorsForm.cboTypeDocument = 'Campo obligatorio';
        }
        if (!values.txtNumberDocument.trim()) {
            errorsForm.txtNumberDocument = 'Campo obligatorio';
        }
        if (!values.txtCellphone.trim()) {
            errorsForm.txtCellphone = 'Campo obligatorio';
        } 
        if (!values.txtPlaca.trim()) {
            errorsForm.txtPlaca = 'Campo obligatorio';
        } 
        if (!values.chkAccept) {
            errorsForm.chkAccept = 'Campo obligatorio';            
        }         
        return errorsForm;   
    }

    const onSendSave = () => {        
        const request = {      
          'cboTypeDocument'     : cboTypeDocument,
          'txtNumberDocument'   : txtNumberDocument,
          'txtCellphone'        : txtCellphone,
          'txtPlaca'            : txtPlaca,
          'chkAccept'           : chkAccept,
          'txtUser'           : ''
        };
        const errors=ValidateFirstForm(request);               
        if (Object.keys(errors).length === 0 ) {            
            userAddNew(request);                   
            setErrors({data:''});  
        }
        else{                      
          setErrors(errors); 
        }        
    };

    const userAddNew = (request) => {
        try { 
             dispatch(clientAddNew(request)).then(()=>{
                history.push('/datos-auto');                 
             });     
                 
        } catch(err) {
            console.log("Error fetching data --> userAddNew", err);            
        }
      }

    return (        
            <div className="container__form">
                <form>
                    <div className="title__05 gray__1__title mb-24">Déjanos tus datos</div>
                    <div className="display__flex">            
                        <select className="form-select title__07  form__flex__02"
                        value={cboTypeDocument}
                        name="cboTypeDocument"
                        onChange={ handleSelectChange }
                        >  
                            <option value="1">DNI</option>
                            <option value="2">CE</option>                            
                        </select>
                        <input type="text" className="form-control input__Text__16px gray__3__paragraph form__flex__08" placeholder="Nro. de doc"
                        value={txtNumberDocument}
                        name="txtNumberDocument"
                        onChange={ handleInputChange }
                        />                                 
                    </div>                      
                    <div className="mb-16">{errors.txtNumberDocument && <div className="invalid__feedback">{errors.txtNumberDocument}</div>}</div>
                    <div className="display__flex">            
                        <input type="text" className="form-control input__Text__16px gray__3__paragraph form__flex__1"  placeholder="Celular"
                        value={txtCellphone}
                        name="txtCellphone"
                        onChange={ handleInputChange }
                        />            
                    </div>
                    <div className="mb-16">{errors.txtCellphone && <div className="invalid__feedback">{errors.txtCellphone}</div>}</div>
                    <div className="display__flex">            
                        <input type="text" className="form-control input__Text__16px gray__3__paragraph form__flex__1"  placeholder="Placa"
                        value={txtPlaca}
                        name="txtPlaca"
                        onChange={ handleInputChange }
                        />            
                    </div>
                    <div className="mb-16">{errors.txtPlaca && <div className="invalid__feedback">{errors.txtPlaca}</div>}</div>
                    <div className="display__flex">            
                        <div className="form-check display__flex">
                            <input className="form-check-input chk__green" type="checkbox" 
                            name="chkAccept"
                            onChange={ handleCheckBoxChange }
                            />
                            <label className="form-check-label pl-10 text__paragraph__12 gray__2__paragraph">
                                Acepto la <span className="font__400__underline">Política de Protección de Datos Personales</span> y los <span className="font__400__underline">Términos y Condiciones.</span>
                            </label>
                        </div>            
                    </div>
                    <div className="mb-16">{errors.chkAccept && <div className="invalid__feedback">{errors.chkAccept}</div>}</div>                    
                    <div className="display__flex mb-16">                                    
                            <button
                                type='button' className="btn__custom btn__red btn__text__14 text__white"
                                onClick={onSendSave}
                            >
                                COTÍZALO
                            </button>      
                    </div>
                </form>
            </div>
    )
}
