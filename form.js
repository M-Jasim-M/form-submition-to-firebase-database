

function submitform() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let texturl = document.getElementById('texturl').value;
    let message = document.getElementById('message').value;

    if (name === '' || email == '' || phone === "") {

        window.alert('please fill the data')
    }

    else {

        let dataRef = db.collection('fulldata').doc();


        let data = {
            name,
            email,
            phone,
            texturl,
            message

        }

        dataRef.set(data).then(() => {
            window.alert("Add sucessfully")
        })


    }





}


