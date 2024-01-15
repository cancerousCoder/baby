let name = prompt("Whattt is your name??")
const no = document.getElementById("no");
const aud = new Audio('/resource/song.mp3')

let margin = Math.floor(Math.random() * 200)

no.addEventListener("mouseover", (e)=>{
    margin = Math.floor(Math.random() * 200)
    if (margin%2==0){
        no.style.top=`${-margin}px`
        no.style.left=`${margin}px`
    }else{
        no.style.top=`${margin}px`
        no.style.left=`${-margin}px`
    }
})

function change(){
    if(name=="nandini" || name == "Nandini"){
        document.getElementById("gif").classList.remove('gifA')
        document.getElementById("gif").classList.add('gifB')
        no.style.display="none";
        aud.play();
        document.getElementById("question").innerText="I loveee you moreeee ❤️🥹"
    }else{
        document.getElementById("gif").classList.remove('gifA')
        document.getElementById("gif").innerText = "hell no!!"
    }
}