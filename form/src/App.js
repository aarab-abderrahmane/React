import { use, useState } from "react";


function App() {



  const [fieldsValues,setFieldsValues] = useState([
    {type:"salary",value:"less than 500$"},
    {type:"name",value:""},
    {type:"phone",value:""},
    {type:"age",value:""},
    {type:"checkbox",value:false}

  ])


  const [isAllCompleted,setisALLcompeted] = useState(true)




  function GiveValue(field_num){

        return fieldsValues.filter(obj=>obj.type===field_num)[0].value

  }


  function checkAllCompleted(prevFieldsValues){


      let AllFields = 0 ;
      prevFieldsValues.forEach(obj=>{

          if(obj.value.length > 1 || typeof(obj.value)==="boolean"){
            console.log(obj)
              AllFields ++ 
              console.log(AllFields)
          }
          

      })

      setisALLcompeted(AllFields === 5 ? false : true )

  }


  function handleChange(field_num, new_value){


        const  newFieldValue = fieldsValues.map((obj)=>{

          if(obj.type===field_num){
              
              return ( {...obj,value: new_value.target.value} )

          }

          return obj

        })

        setFieldsValues(newFieldValue)
        checkAllCompleted(newFieldValue)

  }






  return (
      

        <div  className=" w-[100vw]  md:w-[clamp(500px,70vw,700px)]  h-auto bg-gray-500  md:border-2 border-white     rounded-xl flex flex-col items-center p-4">



            <h1 className="font-bold text-2xl text-stone-950 " >Requesting a loan </h1>

            <form onSubmit={stopSubmit}  className="flex flex-col w-[100%]  gap-4 p-2">

                    <label for="name">Name :</label>
                    <input id="name" 
                    onChange={(e)=>handleChange('name',e)}
                    value={GiveValue('name')} 
                    type="text" className="py-2 px-4 bg-gray-600 rounded-xl outline-none  border-gray-400 border-4"></input>

                    <label for="age">Age :</label>
                    <input id="age" 
                    onChange={(e)=>handleChange('age',e)}
                    value={GiveValue('age')} 
                    type="text" className="py-2 px-4 bg-gray-600 rounded-xl outline-none  border-gray-400 border-4"></input>

                    <label for="phone">Phone Number :</label>
                    <input id="phone" 
                    onChange={(e)=>handleChange('phone',e)}
                    value={GiveValue('phone')} 
                    type="text" className="py-2 px-4 bg-gray-600 rounded-xl outline-none  border-gray-400 border-4"></input>

                    <label for="ask" className="w-[100%] text-center">Are you employee ? </label>
                    <div className="text-center">
                        <input id="ask" type="checkbox" className="size-8"  checked={GiveValue('checkbox') ? true : false}  onClick={()=>handleChange('checkbox',{target:{value:!GiveValue('checkbox')}})} ></input>
                    </div>


                    <label for="salary">Salary :</label>
                    <select 
                    onChange={(e)=>handleChange('salary',e)}
                    id="salary" 
                    className="py-2 px-4 bg-gray-600 rounded-xl outline-none text-white border-gray-400 border-4">

                        <option  >less than 500$</option>
                        <option  >500-1000$</option>
                        <option   >bigger than 1000$</option>


                    </select>



                    <button type="submit" className="bg-green-900 text-green-400 py-3 px-5 text-md cursor-pointer rounded-xl border-2 hover:bg-green-800  " disabled={isAllCompleted } >Submit</button>
            </form>

            
        </div>


  );
}


function stopSubmit(e){

    e.preventDefault()
    console.log("is Submit..")

}


export default App;
