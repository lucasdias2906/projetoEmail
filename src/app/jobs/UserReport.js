
export default {
    key : 'UserReport',
    options:{
        delay:5000
    },
    // enviar um email usando o npm nodemailer para fazer esse envio
    async handle({data}){

        const {user} = data
        
       console.log(user)
    }
}