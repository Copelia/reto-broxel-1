// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'iamcorallium@gmail.com',
  from: 'iamcorallium@gmail.com',
  subject: 'Sending with SendGrid is not Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg).then(()=>{
    console.log('Enviado');
}).catch((error)=>{
    console.log('error', error);
});

// export default Email