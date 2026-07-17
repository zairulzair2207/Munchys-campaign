let school = 45;
let student = 8300;
let fund = 120000;
let s = 0;
let st = 0;
let f = 0;
let timer = setInterval(function(){

if(s<school){
   s++;
   document.getElementById("school").innerHTML=s+"+";
}

if(st<student){
   st+=100;
   document.getElementById("student").innerHTML=st+"+";
}

if(f<fund){
   f+=2000;
   document.getElementById("fund").innerHTML="RM "+f;
}

if(s>=school && st>=student && f>=fund){
   clearInterval(timer);}
},40);


const popupData = {
    buy: {
        title: "🛒 Step 1: Buy & Enjoy!",
        desc: "Find Munchy's promotional campaign packs at your nearest supermarket! 🍪✨ Every single purchase directly contributes to our educational fund dedicated to supporting schools in need. 🛍️"
    },
    donate: {
        title: "❤️ Step 2: Automatic Donation",
        desc: "Don't worry, you don't have to pay extra! 💵❌ Munchy's will automatically channel 10% of the proceeds from every campaign pack sold straight into the school fund. Making charity effortless! 🤝"
    },
    support: {
        title: "🤝 Step 3: Supporting Schools",
        desc: "We collaborate closely with local schools to identify underserved and rural educational institutions that need immediate help. 🏫 This includes upgrading classrooms, improving clean water facilities, and providing digital learning tools! 💻📚"
    },
    impact: {
        title: "🎓 Step 4: Real Impact",
        desc: "Witness the transformation! 🌟 These funds are fully utilized to build smart classrooms, restock libraries, and create a brighter, happier learning environment for our future leaders! 👦🏻👧🏻🇲🇾"
    }
};



function openPosterModal(imageSrc) {
    var modal = document.getElementById('posterModal');
    var modalImg = document.getElementById('popupPosterImg');
    
    modalImg.src = imageSrc; 
    modal.style.display = 'flex'; 
}

function closePosterModal() {
    var modal = document.getElementById('posterModal');
    modal.style.display = 'none'; 
}

// Tutup modal secara automatik jika terklik kawasan luar gambar poster
window.onclick = function(event) {
    var modal = document.getElementById('posterModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
