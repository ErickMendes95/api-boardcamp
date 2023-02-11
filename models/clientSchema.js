import joi from 'joi';
import validator from 'cpf-cnpj-validator';

export const clientSchema = joi.object.extend(validator)({
    name: joi.string().required(),
    phone: joi.string().min(10).max(11).pattern(/^[0-9]+$/).required(),
    cpf: joi.document().cpf().required(),
    birthday: joi.date().format("YYYY-MM-DD")
})