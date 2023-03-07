
let main = document.createElement('main')
main.classList.add('container')

document.body.prepend(main)

let pName = document.createElement('h1')
pName.innerHTML = "Let`s do it"
main.append(pName)


let listBlock = document.createElement('div')
listBlock.className = "mainBlock"
main.append(listBlock)


let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

let text = document.createElement('input')
text.setAttribute('placeholder', 'Gonna do')
text.className = 'text'
firstDiv.append(text)

let setDate = document.createElement('input')

setDate.setAttribute('type','date')
firstDiv.append(setDate)


let addBtn = document.createElement('button')
addBtn.innerHTML = "ADD"
addBtn.id = 'btn'
firstDiv.append(addBtn)

const GeTo = () => {
  let res = document.createElement('div')
  let res2 = document.createElement('h1')
  res.className = 'res'
  res.append(res2)
  res2.className  = "h11"
  listBlock.append(res)
  res2.innerHTML = `${text.value}  ${setDate.value} <br>`
  let img = document.createElement('img')
  let img2 = document.createElement('img')
  img2.src = '1.png'
  img2.className = 'img2'
  img.className = 'img'
  img.src = '2.png'
  res.append(img)
  res.append(img2)
  img2.style.width = '30px'
  img.style.width = '30px'
  img2.style.marginTop = '5px'
  img.style.marginTop = '5px'
  res.style.height = '40px'
  res.style.marginTop = '10px'
  res2.style.display = 'flex'
  res2.style.justifyContent = 'center'
  res2.style.marginTop = '7px'
  res2.style.marginLeft = '5px'
  res.style.flexWrap = 'wrap'

img2.id = 'img2'
const LeTo = () =>{
res2.style.textDecoration ='line-through'
}
img2.addEventListener('click',LeTo)
const BeLe = () => {
  res.style.display = 'none'
}
img.addEventListener('click',BeLe)
}
btn.addEventListener('click',GeTo)

localStorage.setItem('form',GeTo)

if(localStorage.getItem('form')) {
  GeTo = JSON.parse(localStorage.getItem('GeTo'));
  for (let key in GeTo){
    form.elements[key].value = GeTo[key];
  }
}
