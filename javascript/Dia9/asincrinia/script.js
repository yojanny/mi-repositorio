"use strict"

"use strict"



const test = () => {
  console.log(1)

  setTimeout(() => {
    console.log(2)
  });

  setTimeout(() =>{
    console.log(3)
  }, 0)

  console.log(4)
  console.log(5)
}

test()

/*  
1 imrpimir 1
2 añadir 2
3 añadir 3
4 imprimir 4
5 imprimir 5
6 imprimir 2
7 imprimir 3
*/


