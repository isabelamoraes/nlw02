import React, {TextareaHTMLAttributes} from 'react';

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

/*...rest => é um spread operator, que permite
passar o restante das propriedades não
utilizadas anteriormente*/

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;