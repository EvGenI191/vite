import './style.scss'
import './style.css'

let name = prompt(`введите свое имя`)
alert(`«Привет,${name}`)

let years = Number(prompt(`в каком году вы родились?`));
let year 
year = 2023
let yeaar = year - years
alert(`Вам,${yeaar}`);

let long = Number(prompt(`Введите длину стороны квадрата: `))
let perim = long * 4
alert(`Периметр квадрата равен,${perim}`)

let radius = Number(prompt(`Введите радиус окружности: `))
let square = Math.PI * radius ** 2
alert(`Площадь окружности:`+ square)

let mile = Number(prompt(`Введите расстояние между объектами: `))
let time = Number(prompt(`Введите время за которое хотите добраться до место назначения: `))
let speed = mile / time
alert(`Вам нужно двигатся с этой скоростью,${speed},km/h`)

const rate = 0.91016
let dolar = Number(prompt(`Введите количество долларов для обмена:`))
let evro = dolar * rate
alert(`По текущему курсу валют вы получите ${evro} евро`)

const GB_fl = 1024
let flash = Number(prompt(`Введите объем вашей флешки:`))
let size = Math.trunc(flash * 1000 / GB_fl)
if(size < 0){
    alert(`Не достаточно памяти на флешке`)
}
else{
    alert(`На флешку поместится ${size} файлов`)
}

