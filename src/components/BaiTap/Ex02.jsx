import React from 'react'

function Ex02() {
  let inputFirst = +prompt("Hay nhap so thu nhat");
  let inputSecond = +prompt("Hay nhap so thu nhat");
  return (
    <div>Hello
      <h3>Tong cua {inputFirst} + {inputSecond} = {inputFirst + inputSecond}</h3>
    </div>
  )
}

export default Ex02