const rating = document.querySelectorAll('.rate')
const askContainer = document.querySelector('.ask-rate')
const thankContainer = document.querySelector('.thank')
const submitBtn = document.querySelector('.submit-btn')
const ratingSpan = document.getElementById('rating-span')
let rate = 0

for(let i=0; i<rating.length; i++) {
    rating[i].addEventListener('click',()=>{
        rate = i+1;
        for(let j=0; j<rating.length; j++) {
            rating[j].classList.remove('active')
        }
        rating[i].classList.add('active')
    })
}



submitBtn.addEventListener('click',()=>{
    askContainer.classList.toggle('active-animation')
    thankContainer.classList.toggle('active-animation')
    ratingSpan.innerHTML = rate
})