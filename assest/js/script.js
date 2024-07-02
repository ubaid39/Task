$(document).ready(function () {

    // For Name;

    $("#name").on('keyup', function () {
        let username = $(this).val();
        let nameRE = /^[a-z\s]{3,15}$/;
        if (!nameRE.test(username)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            });
            $(this).next("small").html("Please Enter Your Full Name!").css({
                "color": "red",
                "font-weight": "bold",
                "margin-bottom": ".7rem"

            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").hide();
        }
    });

    // For Email;
    $("#email").on('keyup', function () {
        let useremail = $(this).val();
        let emailRE = /^[\w]{3,17}[@][a-z]{5,8}[.][a-z]{3}$/;
        if (!emailRE.test(useremail)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Please Enter the Valid Pattern Of your Email!").css({
                "font-weight": "bold",
                "color": "red",
                "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").hide();
        }
    })

    //For Number;

    $("#phone").on('keyup', function () {
        let userphone = $(this).val();
        let phoneRE = /^[\d]{11,11}$/;
        if (!phoneRE.test(userphone)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Please Enter your Correct Phone Number").css({
                "font-weight": "bold",
                "color": "red",
                "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").hide();
        }
    });

    //For Password
    $("#password").on('keyup', function () {
        let userpassword = $(this).val();
        let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@$&%#*])[A-Z,a-z,\d,@$&%#*]{8,15}$/;
        // let passwordRE=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&*])[A-Za-z,\d,!@#$%&*]{8,15}$/;
        if (!passwordRE.test(userpassword)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Please Enter the Valid Pattern fo Password ABCabc@1223!").css({
                "font-weight": "bold",
                "color": "red",
                "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").hide();
        }
    });

    //For Confirm Password
    $("#confirm-password").on('keyup', function () {
        let userconfirmpass = $(this).val();
        let password = $("#password").val();
        if (!(userconfirmpass == password)) {
            $(this).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(this).next("small").html("Your Pssword doesn't Match!").css({
                "font-weight": "bold",
                "color": "red",
                "margin-bottom": ".7rem"
            })
        }
        else {
            $(this).css({
                "border": "1px solid #4e34b6",
                "border-radius": "2rem"
            })
            $(this).next("small").hide();
        }
    });

    // For EmptyInput
    function emptyinput(id) {
        if ($(id).val() == "") {
            $(id).css({
                "border": "1px solid red",
                "border-radius": "2rem"
            })
            $(id).next("small").html("Please fill Out this Field!").css({
                "font-weight": "bold",
                "color": "red",
                "margin-bottom": ".7rem"
            })
        }
    };

    $("#register").on("click", function () {
        let username = $('#name').val();
        let nameRE = /^[a-z\s]{3,15}$/;
        let useremail = $('#email').val();
        let emailRE = /^[\w]{3,17}[@][a-z]{5,8}[.][a-z]{3}$/;
        let userphone = $('#phone').val();
        let phoneRE = /^[\d]{11,11}$/;
        let password = $('#password').val();
        let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@$&%#*])[A-Z,a-z,\d,@$&%#*]{8,15}$/;
        let userconfirmpass = $('#confirm-password').val();

        if (!(username && useremail && userphone && password && userconfirmpass)) {
            emptyinput("#name");
            emptyinput("#email")
            emptyinput("#phone")
            emptyinput("#password")
            emptyinput("#confirm-password")
        }

        else if (!((nameRE.test(username)) && (emailRE.test(useremail)) && (phoneRE.test(userphone)) && (passwordRE.test(password)) && (userconfirmpass == password) )) {
            alert("Invalid Data Please follow the Valid Pattern!")
        }

        else if (username && useremail && password && userconfirmpass) {

            if (localStorage.getItem("details") == null) {
                localStorage.setItem("details", "[]");
            };
            let previewdta = JSON.parse(localStorage.getItem('details'))

            let objectData = {
                name: username,
                email: useremail,
                password: password,
                phone: userphone
            }
            previewdta.push(objectData);

            localStorage.setItem('details', JSON.stringify(previewdta));
            alert('Data has been submited Succesfully.....')
            location.assign('login.html')

        }

    });

        $("#login").on("click",function(){
            let useremail = $('#email').val();
            let emailRE = /^[\w]{3,17}[@][a-z]{5,8}[.][a-z]{3}$/;
            let password = $('#password').val();
            let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@$&%#*])[A-Z,a-z,\d,@$&%#*]{8,15}$/;
    
            if (!(useremail && password)){
                emptyinput("#email");
                emptyinput("#password");
            }

            else if ((!emailRE.test(useremail)) || (!passwordRE.test(password))){
                alert("Invalid data Please follow the valid data").css({
                    "font-weight": "bold",
                    "color": "red",
                    "margin-bottom": ".7rem"
                })
            }

            else if (useremail && password){
                let userDetail=JSON.parse(localStorage.getItem("details"));
                if(localStorage.getItem("details")==null){
                    alert("Register Your Acount First");
                    location.assign("register.html");
                }
                else{
                    let x=false;
                    for(let index in userDetail){
                        if(userDetail[index].email==useremail && userDetail[index].password==password){
                            alert("Logedin successfully");
                            window.location.href="dashboard.html?userId="+index;
                            x=true;
                        }
                    }

                    if(!x){
                        alert("Data doesn't Match").css({
                            "font-weight": "bold",
                            "color": "red",
                            "margin-bottom": ".7rem"
                        })
                    }
                    
                }
            }

        })

})