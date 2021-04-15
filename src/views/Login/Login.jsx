import React, { useState, useContext } from 'react';

import { FullContainer, FormContainer, FormHeader, FormContent, Line } from './styled/Login.styled';

import { AuthContext } from '../../context/auth-context';
import { useForm } from '../../hooks/useFormHook';

import InputText from '../../components/core/InputText';
import Button from '../../components/core/Button';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_SAMEVALUE } from '../../utils/validation';

const Login = () => {

    const [isLoginMode, setIsLoginMode] = useState(true);
    const [passwordValue, setPasswordValue] = useState(''); // This state is used to validate the user password
    
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false,
        },
        password: {
            value: '',
            isValid: false,
        },
    }, false);

    const auth = useContext(AuthContext);

    const toggleLoginMode = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined,
                confirmPassword: undefined,
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false,
                },
                confirmPassword: {
                    value: '',
                    isValid: false,
                },
            }, false)
        };
        setIsLoginMode(prev => !prev);
    };

    const submitForm = event => {
        event.preventDefault();
        console.log("Submit"); // I have to put the logic of submission here
        auth.login();
    }

    return ( 
        <FullContainer> 
            <FormContainer>
                <FormHeader>{isLoginMode ? 'Login' : 'Registrar'}</FormHeader>
                <Line />
                <FormContent onSubmit={submitForm}>
                    {!isLoginMode &&
                        <InputText 
                            label="Nome" 
                            name="name" 
                            placeholder="Insira o seu nome" 
                            errorMessage={[]} 
                            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                            onInput={inputHandler}
                        />
                    }
                    <InputText 
                        label="E-mail" 
                        name="email" 
                        initialValue={formState.inputs.email.value} 
                        initialIsValid={formState.inputs.email.isValid} 
                        placeholder="Insira o seu e-mail" 
                        errorMessage={[]} 
                        validators={[VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                    />
                    <InputText 
                        label="Senha" 
                        name="password" 
                        initialValue={formState.inputs.password.value}
                        initialIsValid={formState.inputs.password.isValid}
                        placeholder="Digite a sua senha"
                        errorMessage={[]}
                        type="password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        changePassword={setPasswordValue}
                        onInput={inputHandler}
                    />
                    {!isLoginMode &&
                        <InputText 
                            label="Confirmar Senha" 
                            placeholder="Confirme a senha digitada"
                            type="password"
                            name="confirmPassword"
                            errorMessage={[]}
                            validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_SAMEVALUE(passwordValue)]}
                            onInput={inputHandler}
                        /> 
                    }
                    <div style={{marginTop: '20px', display:'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Button varian="contained" disabled={!formState.isValid} color="primary" type="submit" size="large">{isLoginMode ? 'Entrar' : 'Registrar'}</Button>
                    </div>
                    {isLoginMode ?
                        <p>Ainda não é cadastrado? Cadastre-se <span onClick={toggleLoginMode}>aqui</span></p> :
                        <p>Já possui cadastro? Faça o <span onClick={toggleLoginMode}>login</span></p>
                    }
                </FormContent>
            </FormContainer>
        </FullContainer>
    );
};

export default Login;