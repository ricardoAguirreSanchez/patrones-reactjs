import React from 'react';

const Listador = (props) => {
    console.log(props.citas)
    return (
        <div>
            {/* {(props.citas).map((cita)=>
                <ul > Mascota: {cita.mascota} - Sintoma: {cita.sintoma}</ul>
            )} */}
            {Object.keys(props.citas).map((key) => 
                <ul key={key}>{props.citas[key].mascota}</ul>
            )}
        </div>
    );
};

export default Listador;