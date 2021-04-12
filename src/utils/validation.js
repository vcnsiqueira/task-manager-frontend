export const VALIDATOR_REQUIRE = () => ({ type: "REQUIRE" });
export const VALIDATOR_FILE = () => ({ type: "FILE" });
export const VALIDATOR_MINLENGTH = val => ({ type: "MINLENGTH", val: val });
export const VALIDATOR_MAXLENGTH = val => ({ type: "MAXLENGTH", val: val });
export const VALIDATOR_MIN = val => ({ type: "MIN", val: val });
export const VALIDATOR_MAX = val => ({ type: "MAX", val: val });
export const VALIDATOR_EMAIL = () => ({ type: "EMAIL" });
export const VALIDATOR_SAMEVALUE = val => ({ type: "SAMEVALUE", val: val });

export const validate = (value, validators) => {
    let isValid = true;
    let message = [];
    for (const validator of validators) {
        if (validator.type === "REQUIRE") {
            isValid = isValid && value.trim().length > 0;
            if (!isValid) {
                message.push('Este campo não pode ser nulo!');
            };
        };
        if (validator.type === "MINLENGTH") {
            isValid = isValid && value.trim().length >= validator.val;
            if (!isValid) {
                message.push(`É necessário ter mais de ${validator.val} caracteres!`);
            };
        };
        if (validator.type === "MAXLENGTH") {
            isValid = isValid && value.trim().length <= validator.val;
            if (!isValid) {
                message.push(`É necessário ter menos de ${validator.val} caracteres!`);
            };
        };
        if (validator.type === "MIN") {
            isValid = isValid && +value >= validator.val;
            if (!isValid) {
                message.push(`O valor deve ser maior do que ${validator.val}!`);
            };
        };
        if (validator.type === "MAX") {
            isValid = isValid && +value <= validator.val;
            if (!isValid) {
                message.push(`O valor deve ser menor do que ${validator.val}!`);
            };
        };
        if (validator.type === "EMAIL") {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
            if (!isValid) {
                message.push(`Este não é um formato de e-mail válido!`);
            };
        };
        if (validator.type === "SAMEVALUE") {
            isValid = isValid && value === validator.val;
            if (!isValid) {
                message.push('Este campo deve ser igual a senha informada!')
            };
        };
    };
    return {isValid: isValid, message: message};
}