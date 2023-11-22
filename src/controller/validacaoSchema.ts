import * as yup from 'yup';
export const usuarioSchema = yup.object().shape({
    nome: yup.string().required("O nome é obragatório").min(3, 'O nome deve ter pelo menos os 3 caracteres'),
    telefone: yup.string().matches(/^[0-9]+$/, 'Apenas números são permitidos').min(8,'Número de telefone inválidado'),
    email: yup.string().required('O e-mail é obrigatório').email('Deve ser o e-mail válido'),
    cpf: yup.string().matches(/^[0-9]{11}$/,'CPF iválido')
});