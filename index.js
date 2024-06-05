const form = document.forms.namedItem('form')
const inputs = form.querySelectorAll('.need')
const span = form.querySelectorAll('.span')
const text = form.querySelectorAll('.need-text')
const err = document.querySelector('.err')
const success = document.querySelector('.success')
form.onsubmit = (event) => {
    event.preventDefault()

    
    let isError = false
    
    inputs.forEach((inp) => {
        span.forEach((span) => {
            text.forEach((text) => {
                if (inp.value.length === 0) {
                    isError = true
                    inp.style.borderColor = 'red'
                    span.innerHTML = 'please fill the blank'
                    span.style.color = 'red'
                    text.style.color = 'red'
                    err.innerHTML = +(err.innerHTML += 1)
                    success.innerHTML = +(success.innerHTML -= 1)
                }
            })
        })
        
    })

    if (isError) {
        return
    }

    submit()
}


function submit() {
    const user = {}

    const fm = new FormData(form)

    fm.forEach((val, key) => user[key] = val)

    console.log(user);
}
