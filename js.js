        document.addEventListener('DOMContentLoaded', function() {
            // Password check
            const passwordModal = document.getElementById('passwordModal');
            const welcomeScreen = document.getElementById('welcomeScreen');
            const mainContent = document.getElementById('mainContent');
            const passwordInput = document.getElementById('passwordInput');
            const submitPassword = document.getElementById('submitPassword');
            
            submitPassword.addEventListener('click', function() {
                if (passwordInput.value.toLowerCase() === '7/8') {
                    passwordModal.style.opacity = '0';
                    setTimeout(() => {
                        passwordModal.style.display = 'none';
                        welcomeScreen.style.display = 'flex';
                        
                        setTimeout(() => {
                            welcomeScreen.style.opacity = '0';
                            setTimeout(() => {
                                welcomeScreen.style.display = 'none';
                                mainContent.style.display = 'block';
                            }, 800);
                        }, 2500);
                    }, 500);
                } else {
                    passwordInput.value = '';
                    passwordInput.placeholder = 'Try again, my love...';
                    passwordInput.style.borderColor = '#ff4d4d';
                    setTimeout(() => {
                        passwordInput.style.borderColor = '#ffb7c5';
                        passwordInput.placeholder = 'Our special word...';
                    }, 1500);
                }
            });
            
            // Allow Enter key to submit password
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    submitPassword.click();
                }
            });
            
            // Tab switching
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Update active tab
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding content
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === targetTab) {
                            content.classList.add('active');
                        }
                    });
                });
            });
            
            // Expandable love letter
            const loveLetter = document.getElementById('loveLetter');
            loveLetter.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
            
            // Add floating decorative elements
            function addFloatingElements() {
                for (let i = 0; i < 15; i++) {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '❤️';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.top = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 5 + 's';
                    document.body.appendChild(heart);
                }
                
                for (let i = 0; i < 5; i++) {
                    const teddy = document.createElement('div');
                    teddy.classList.add('teddy-bear');
                    teddy.innerHTML = '🧸';
                    teddy.style.left = Math.random() * 100 + '%';
                    teddy.style.top = Math.random() * 100 + '%';
                    teddy.style.animationDelay = Math.random() * 5 + 's';
                    document.body.appendChild(teddy);
                }
            }
            
            addFloatingElements();
        });





// gallar

// gallary




// card
setTimeout(() => {
    document.getElementById("myCard").classList.add("show");
}, 3000);

let music =document.getElementById("music");
let vid =document.getElementById("vid");
let vid1 =document.getElementById("vid1");
let vid2 =document.getElementById("vid2");
let vid3 =document.getElementById("vid3");
let ImgCard =document.getElementById("wrapper");
let ImgCard1 =document.getElementById("wrapper1");
let ImgCard2 =document.getElementById("wrapper2");
let ImgCard3 =document.getElementById("wrapper3");
let ImgCard4 =document.getElementById("wrapper4");
let ImgCard5 =document.getElementById("wrapper5");
let conB =document.getElementById("conB");

music.style.display="none";
vid.style.display="none";
vid1.style.display="none";
vid2.style.display="none";
vid3.style.display="none";
ImgCard.style.display="none";
ImgCard1.style.display="none";
ImgCard2.style.display="none";
ImgCard3.style.display="none";
ImgCard4.style.display="none";
ImgCard5.style.display="none";
btnFinal.style.display="none";
conB.style.display="none";

function btnclose(){
    document.getElementById("myCard").style.display="none";
    music.style.display="block"; 
    vid.style.display="block"; 
    vid1.style.display="block"; 
    vid2.style.display="block"; 
    vid3.style.display="block"; 
    ImgCard.style.display="block"; 
    ImgCard1.style.display="block"; 
    ImgCard2.style.display="block"; 
    ImgCard3.style.display="block"; 
    ImgCard4.style.display="block"; 
    ImgCard5.style.display="block"; 
    btnFinal.style.display="block";
    conB.style.display="block";


}

// card

window.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("Aud").play();
    }, 5000); // 3 ثواني
});

