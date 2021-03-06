import React, {SelectHTMLAttributes} from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value:string;
        label:string;
    }>
}

/*...rest => é um spread operator, que permite
passar o restante das propriedades não
utilizadas anteriormente*/

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option value={option.value} key={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;