let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");

    if (ul.className == "showData") {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
})

// card js
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

crd.forEach(function (curValue) {
    curValue.addEventListener("click", function () {
        itemPage.style.display = "flex";
        container.style.display = "none";

        let imgSrc = curValue.firstElementChild.src;
        itemImg.src = imgSrc;

        let buyText = document.querySelector(".buyText");
        buyBtn.addEventListener("click", function () {
            document.querySelector(".buyPage").style.display = "block";
            buyText.innerHTML = `
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
                </select> <br>
                `
            let button = document.createElement("button");
            button.innerText = "Submit";
            buyText.appendChild(button);

            button.addEventListener("click", function () {
                let name = document.getElementById("name");
                let address = document.getElementById("address");
                let num = document.getElementById("num");

                if (name.value == "" && address.value == "" && num.value == "") {
                    alert("Please Enter Detail")
                } else {
                    alert("Your Response Recorded");
                    document.querySelector(".buyPage").style.display = "none";
                }
            })

            let cross = document.querySelector(".cross");
            cross.addEventListener("click", function () {
                document.querySelector(".buyPage").style.display = "none";
            })
        })
    })
})

// connect
function connect() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');

    } else {
        alert('Please fill in all fields.');
    }
}
