import { useState } from "react";



function Counter (){
  let [count, setCount] =  useState(0);
    return ( <section>
        <h1> Llevas {count} clicks</h1>

        <button onClick={()=> {setCount(count + 1);
        
        }}>Incrementar</button>
    </section>
    );
}

export default Counter;