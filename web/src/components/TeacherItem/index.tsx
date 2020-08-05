import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/45246931?s=460&u=83d32f2fe8fd0132617441d8874a142826c0f411&v=4" alt="Isabela Moraes" />

                <div>
                    <strong>Isabela Moraes</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de matemática avançada.
                <br /><br />
                Apaixonada por calcular funções complexas e por mudar a vida das pessoas através de resultados.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;