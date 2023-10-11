// Отправка в телегу
const TOKEN = "6622272564:AAHtMID3nATVLV0p5l05woTaWtEgJ-YoF2o";
const CHAT_ID = "-1001923416379";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

document.getElementById("form_to_tg").addEventListener('submit', function(e){
    e.preventDefault();
            
    let message = `<b>Сообщение с сайта</b>\n`;
    message+= `<b>Имя отправителя: </b> ${ this.name.value }\n`;
    message+= `<b>Телега: </b> ${ this.tg.value }\n`;
    message+= `<b>Текст: </b> ${ this.text.value }\n`;

    axios.post(URI_API,{
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res)=>{
        this.name.value = "";
        this.tg.value = "";
        this.text.value = "";
        alert("Спасибо за сообщение, в скором времени я свяжусь с Вами!");
    })
    .catch((err)=>{
        console.warn(err);
        alert("Извините, но сервис не доступен, свяжитесь со мной любым другим способом!");
    })
    .finally(()=>{
        console.log('Отправка успешная');
    })

});

// "use strict"

// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);
//     const formArea = document.getElementById('contact');

//     async function formSend(e){
//         e.preventDefault();

//         let error = formValidate(form);

//         let formData = new FormData(form);
    
//         if(error === 0){
//             formArea.classList.add('_sending');
//             let response = await fetch('sendmail.php', {
//                method: 'POST',
//                body: formData

//             });
//             if(response.ok){
//                 let result = await response.json();
//                 alert(result.message);
//                 formPreview.innerHTML = '';
//                 form.reset();
//                 formArea.classList.remove('_sending');
//             }else{
//                 alert('Сервис пока не работает');
//                 formArea.classList.remove('_sending');
//             }

//         } else{
//             alert('Заполните обязательные поля или исправьте ошибки...');
//         }
//     }

//     function formValidate(form){
//         let error = 0;
//         let formReg = document.querySelectorAll('._req');

//         for(let index = 0; index < formReg.length; index++){
//             const input = formReg[index];
//             formRemoveError(input);

//             if(input.classList.contains('_email')){
//                 if(emailTest(input)){
//                     formAddError(input);
//                     error++;
//                 } 
//             } else if(input.value === ''){
//                 formAddError(input);
//                 error++;
//             }

//         }
//         return error;
//     }

//     function formAddError(input){
//         input.parentElement.classList.add('_error');
//         input.classList.add("_error");
//     }
//     function formRemoveError(input){
//         input.parentElement.classList.remove('_error');
//         input.classList.remove("_error");
//     }
//     // test email
//     function emailTest(input){
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);

//     }

// });