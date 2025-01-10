const plus = document.getElementById('plus');
const task = document.getElementById('task');
const btn = document.getElementById('btn');
const _inp = document.querySelector('#todo>.inp')
const _list = document.getElementById('list')


// openAdd

let flag = 0
plus.addEventListener('click', () => {
    if (flag % 2 == 0) {
        _inp.style.height = '50px'
    } else {
        _inp.style.height = '0px'
    }
    flag++
})

// openAdd

// addRow

let num = 0

btn.addEventListener('click', () => {
    if (task.value != '') {
        let _li = document.createElement('li')
        _li.classList.add('row')
        _li.innerHTML =
            `
        <span onclick ="_edit(this)" class="material-symbols-outlined">edit</span>
        <input type='checkbox' class='check' onclick=_select(this) id="para${num}"></input>
        <label for="para${num}">${task.value}</label>
        <input type="text" class="hidden" >
        <button class="hidden" onclick="_change(this)">change</button>
        <span onclick ="_del(this)" class="material-symbols-outlined">delete</span>
        `
        _li.children[2].addEventListener('mousedown', () => {
            _li.children[2].addEventListener('mousemove', myMove)
        })

        _li.children[2].addEventListener('mouseout', () => {
            _li.children[2].removeEventListener('mousemove', myMove)

        })
        _list.appendChild(_li)
        task.value = ''
        task.focus()
    }
    num++
})



let oldClick = 0

function myMove(e) {
    let x = e.offsetX
    if ((x - 1) > oldClick) {
        e.target.parentElement.style.transform = 'translateX(50px)'
    } else if ((x + 1) < oldClick) {
        e.target.parentElement.style.transform = 'translateX(-50px)'
    } else {
        e.target.parentElement.style.transform = 'translateX(0px)'
    }
    oldClick = x

}

// addRow


// check

function _select(s) {
    if (s.checked) {
        s.nextElementSibling.style.textDecoration = 'line-through'
        s.nextElementSibling.style.textShadow = '0px 0px 5px rgba(255, 255, 255, 0.8)'

    } else {
        s.nextElementSibling.style.textDecoration = 'none'
        s.nextElementSibling.style.textShadow = 'none'
    }
}

// check
// delete

function _del(s) {
    if (confirm('are u sure??')) {
        s.parentElement.remove()
    } else {
        s.parentElement.style.transform = 'translateX(0px)'
    }
}
// delete

// edit
function _edit(b) {
    let labelvalue = b.nextElementSibling.nextElementSibling.innerHTML
    b.nextElementSibling.nextElementSibling.value = ''
    b.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hidden')
    b.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('sty')
    b.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hidden')
    b.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('change')
    b.nextElementSibling.nextElementSibling.nextElementSibling.value = labelvalue
}

function _change(s) {
    s.previousElementSibling.previousElementSibling.innerHTML = s.previousElementSibling.value
    s.previousElementSibling.classList.add('hidden')
    s.previousElementSibling.classList.remove('sty')
    s.classList.remove('change')
    s.classList.add('hidden')
    s.parentElement.style.transform = 'translateX(0px)'
}

// edit
//img
i =0
 const img = document.getElementById('me')
 const contact = document.getElementById('contact')
 img.addEventListener('click', ()=>{
    if( i%2 == 0){
        contact.style.transform='translateY(40vh)translateX(330px)'
    }else{
        contact.style.transform='translateY(40vh)translateX(430px)'
    }
    i++
 })

//img

