import React, { useState } from 'react';

import InputText from '../../components/core/InputText';
import Button from '../../components/core/Button';

const Login = () => {

    const [isLoginMode, setIsLoginMode] = useState(false);
    const [state, setState] = useState({
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [inputError, setInputError] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    const [errorMessages, setErrorMessages] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const inputHandler = event => { // this function handles the changes in every input of the form
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value,
        });
    };

    return ( 
        <> 
            <div>
                <h2>{isLoginMode ? 'Login' : 'Registrar'}</h2>
                <hr/>
                <form>
                    {!isLoginMode &&
                        <InputText label="Nome" name="name" value={state.name} error={inputError.name} errorMessage={errorMessages.name} onChange={inputHandler}/>
                    }
                    <InputText label="E-mail" name="email" value={state.email} error={inputError.email} errorMessage={errorMessages.email} onChange={inputHandler}/>
                    <InputText label="Senha" name="password" value={state.password} error={inputError.password} type="password" errorMessage={errorMessages.password} onChange={inputHandler}/>
                    {!isLoginMode &&
                        <InputText label="Confirmar Senha" name="confirmPassword" value={state.confirmPassword} error={inputError.confirmPassword} errorMessage={errorMessages.confirmPassword} onChange={inputHandler}/> 
                    }
                    <Button type="submit">{isLoginMode ? 'Entrar' : 'Registrar'}</Button>
                    {isLoginMode ?
                        <p>Ainda não é cadastrado? Cadastre-se <span>aqui</span></p> :
                        <p>Já possui cadastro? Faça o <span>login</span></p>
                    }
                </form>
            </div>
        </>
    );
};

export default Login;