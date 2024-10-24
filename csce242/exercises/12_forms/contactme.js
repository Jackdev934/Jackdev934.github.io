


       const sendEmail = async(json) => {
                    try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                        Accept:"application/json"
                    },
                    body:json
                });

                return response;
            } catch(error){
                console.log(error);
                result.innerHTML = "Sorry, your email couldn't be sent";
            } 
       };

    document.getElementById("conact-form").onsubmit = async(e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const result = document.getElementById("result");
        result.innerHTML = "Sending...";

        const httpResult = await sendEmail(json);

        if(httpResult.staus == 200){
            result.innerHTML = "email successfully sent";
        }
        else{
            result.innerHTML = "Sorry, your email wasn't sent";
        }
    }
