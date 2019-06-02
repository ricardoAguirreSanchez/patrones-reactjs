import React from 'react';
import Cita from './Cita';

const Listador = (props) => {
    return (
        <div className="card">
            <div className="card-body">            
                <h2>Listador</h2>
                {(props.citas).map((unaCita) => 
                    <Cita key={unaCita.id} dato={unaCita} borraCita={props.borraCita}></Cita>)}
            </div>
        </div>
        
    );
};

export default Listador;