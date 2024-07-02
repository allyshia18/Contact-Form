let submitBtn = document.getElementById('btn');
submitBtn.addEventListener("click", function getName(event){
    event.preventDefault();
    updateContacts();
})

    function updateContacts(){
    let FullName = document.getElementById("name");
    document.getElementById("postFullName").innerHTML = FullName.value;

    let email = document.getElementById('email');
    document.getElementById("postEmail").innerHTML = email.value;

    let message = document.getElementById('message');
    document.getElementById("postMessage").innerHTML = message.value;



};

