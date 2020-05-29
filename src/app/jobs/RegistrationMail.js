import Mail from '../lib/Mail';

export default {
    key : 'RegistrationMail',
    // enviar um email usando o npm nodemailer para fazer esse envio
    async handle({data}){

        const {user} = data
        
        await Mail.sendMail({
            from: "Queue Test <queue@queuetest.com>",
            to: `${user.name} <${user.email}>`,
            subject: "Cadastro de USuario",
            html: `Ola, ${user.name}, bem-vindo ao sistema de fila :D`
        })
    }
}