import './style.scss'
import './style.css'

let name = prompt(`введите свое имя`);
alert(`«Привет,${name}`);

let years = prompt(`в каком году вы родились?`);
let year 
year = 2023
let yeaar = year - years
alert(`Вам,${yeaar}`);

let long = prompt(`Введите длину стороны квадрата`);
let perim = long * 4
alert(`Периметр квадрата равен,${perim}`);

let radius = numb(prompt(`Введите радиус окружности: `));
let square = Math.PI * radius ** 2;
alert(`Площадь окружности:`+ square);

let mile = prompt(`Введите расстояние между объектами`);
let time = prompt(`Введите время за которое хотите добраться до место назначения`);
let speed = mile / time
alert(`Вам нужно двигатся с этой скоростью,${speed},km/h`);
