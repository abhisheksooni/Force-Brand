import React,{useState} from 'react'

function According_Menu() {

const [showing,Setshowing] = useState(false)

function showHandler (){
  Setshowing(true)
}
function hiddenHandler() {
  Setshowing(false)
}


 const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    question: "Dignissimos sequi architecto?",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
  },
  {
    question: "Voluptas praesentium facere?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
];



// onMouseLeave={()=>{Setshowing(false)}}  onClick={showHandler} onMouseEnter={showHandler}
  return (
    <div>
      <div className=" w-[400px]">
        <div  onPointerEnter={showHandler} onClick={showHandler} onPointerLeave={hiddenHandler} onMouseLeave={()=>{Setshowing(false)}} className="">
          <p>abhi</p>
        </div>
        <p className={`${showing?"":"hidden"} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero a esse animi, et eos consequuntur possimus. Iusto eum, sed rerum repellendus odio error vitae praesentium ipsam fuga, accusantium quidem.</p>
      </div>
    </div>
  )
}

export default According_Menu