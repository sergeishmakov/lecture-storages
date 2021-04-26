import React from 'react'
import Console from '../../../../components/Console'

const example1 = `localStorage.setItem("test", "Hello, World!")
const value = localStorage.getItem("test")
console.log("value")`

const example2 = `localStorage.removeItem("test")
// localStorage.setItem("test", "Hello, World!")
// localStorage.clear()
console.log(localStorage.getItem("test"))`

export default function LocalStorage() {
  return (
    <>
      <ul>
        <li>Хранит данные бессрочно.</li>
        <li>
          Очищается только с помощью JavaScript или очистки кэша браузера.
        </li>
        <li>
          Хранит данные объёмом до 5 МБ, это самый большой объём из трёх
          вариантов хранилища.
        </li>
        <li>Не поддерживается старыми браузерами, например, IE 7 и ниже.</li>
        <li>
          Работает по правилу ограничения домена (same origin policy). То есть
          сохранённые данные доступны только для одного источника.
        </li>
      </ul>
      <br />
      <h3>Значение:</h3>
      <p>
        Объект <u>Storage</u>, который используется для доступа к текущему
        локальному хранилищу.
      </p>
      <h3>Пример ипользования:</h3>
      <Console initialValue={example1} />
      <h3>Очистка:</h3>
      <Console initialValue={example2} />
    </>
  )
}
