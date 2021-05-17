import React from "react";
import { FormArmaPlan } from "../components/FormArmaPlan";
import { Header } from "./Header";

export const ArmaPlan = () => {
    return (
        <div className="row container__main"> 
        <Header/>                        
        <FormArmaPlan/>                                  
    </div>
    )
}