


let questionSection = document.querySelector('.faqs')
let question = document.querySelectorAll('.faqs .question-container h4')
let aswer = document.querySelectorAll('.faqs .question-container p')


question.forEach(el=>{
    el.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('active')
    })
})


