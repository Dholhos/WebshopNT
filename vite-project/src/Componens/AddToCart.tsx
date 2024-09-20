import { useState } from "react"


const AddToCart = () => {
  const [counter, setCounter] = useState(0)

  function increase() {
    setCounter(counter + 1)
  }
  function decrease() {
    setCounter(counter - 1)
  }

  let alma: number;
  counter == 0 ? alma = 2 : alma = 4;
  return (
    <>
      {
        counter == 0 ?
          <div className="addBtn" onClick={increase}><i className="fa-solid fa-cart-plus"></i> Add To Cart{counter}</div> :
          <div className="addBtn used">
            <button onClick={decrease}><i className="fa-solid fa-minus"></i></button>
            {counter}
            <button onClick={increase}><i className="fa-solid fa-plus"></i></button>
          </div>
      }
    </>
  )
}

export default AddToCart