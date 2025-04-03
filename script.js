
footerForm = document.getElementById('footerForm');
footerForm.addEventListener('submit', function(event){
    event.preventDefault();
    SupportModalForm(footerForm.FooterInput.value);
    return true;
})

function CheckFields(){
    var FIO = document.getElementById('exampleInputFIO').value
    var email = document.getElementById('exampleInputEmail1').value
    var phone = document.getElementById('exampleInputPhone').value
    if (FIO != '' & email != '' & phone != ''){
        document.getElementById('modal-title').textContent = 'Заказ успешно обработан'
    }
    else{
        document.getElementById('modal-title').textContent = 'Данные некорректны'
    }
    if (document.getElementById('SupportModalForm')){
        document.getElementById('SupportModalForm').remove();
    }
    console.log(FIO, email, phone);
    $('#modalInOrder').modal('modal::open')
}

function SupportModalForm(text){
    var modal = document.getElementById('modalCloseOpen');
    if (!document.getElementById('SupportModalForm')){
        modal.insertAdjacentHTML('beforebegin', '<form id="SupportModalForm"><div class="form-group" id="FIO-form" onsubmit="return false;"><ul><li style="list-style: none;"><input type="email" class="form-control" id="InputEmailFooter" aria-describedby="emailHelp" placeholder="email" onsubmit="false"></li></ul></div></form>');
    }
    document.getElementById('modal-title').textContent = 'Ваше обращение обработано, введите email чтобы мы могли с вами связаться'
    console.log(text)
    $('#modalInOrder').modal('show')
}