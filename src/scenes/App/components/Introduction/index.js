import React from 'react'

export default function Introduction() {
  return (
    <>
      <div>
        <p>
          Веб-хранилище - это данные, хранящиеся локально в браузере
          пользователя. Разновидность <b>веб-хранилищ</b>:
        </p>
        <ul>
          <li>
            <b>LocalStorage;</b>
          </li>
          <li>
            <b>SessionStorage.</b>
          </li>
        </ul>
        <p>Формат: Ключ-значение(строки)</p>
        <p>
          <b>SessionStorage</b> – хранит данные в течение определённого
          промежутка времени (сессии). Закрытие вкладки или браузера приводит к
          удалению данных. При этом данные в SessionStorage сохраняются при
          обновлении страницы.
        </p>
        <p>
          <b>LocalStorage</b> – осуществляет хранение данных в течение
          неограниченного времени. Они сохраняются при перезагрузке браузера и
          компьютера. Их длительность хранения ничем не ограничена. Но, хоть эти
          данные могут храниться бесконечно в браузере, обычный пользователь
          может их очень просто удалить, например выполнив очистку истории (при
          включенной опции «файлы cookie и другие данные сайтов»).
        </p>
        <p>
          <b>Cookies</b> - это технология, позволяющая сайтам сохранять в
          браузере небольшую порцию данных (до 4Кбайт).
        </p>
      </div>
    </>
  )
}