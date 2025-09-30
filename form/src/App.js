import {  useState } from "react";


export default function App() {



  const [fieldsValues,setFieldsValues] = useState([
    {type:"salary",value:"less than 500$"},
    {type:"name",value:""},
    {type:"phone",value:""},
    {type:"age",value:""},
    {type:"checkbox",value:false}

  ])


  const [isAllCompleted,setisALLcompeted] = useState(true)

  const [messageContainer, setMessageContainer] = useState([])





  function GiveValue(field_num){

        return fieldsValues.filter(obj=>obj.type===field_num)[0].value

  }


  function checkAllCompleted(prevFieldsValues){


      let AllFields = 0 ;
      prevFieldsValues.forEach(obj=>{

          if(obj.value.length >= 1 || typeof(obj.value)==="boolean"){
              AllFields ++ 
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



  function stopSubmit(e){

    e.preventDefault()

    checkAllFields()


  }


  function checkAllFields(){

    let fieldsErrors = []
    fieldsValues.forEach(field=>{

        if (field.type==="name" && !(/^[a-zA-Z]{4,}$/).test(field.value)) {
            fieldsErrors.push('you must enter at least four characters.')

        }else if (field.type==="age"   ){

            if(isNaN(field.value) ){
              fieldsErrors.push('You must enter a valid number for the age.')
            
            }else if(!(/^1[89]|2[09]|30$/).test(Number(field.value))){

                fieldsErrors.push('You must enter a number between 18 and 30 for age.')
            }


        }else if (field.type=== "phone" ){

              if(isNaN(field.value)){
                fieldsErrors.push('you must entre a valid number for the phone.')

              }else if ( !(/^[0-9]{8,}$/).test(Number(field.value))){

                  fieldsErrors.push('you must enter a series of phone numbers bigger than 8 caracters.')
              }

        }

    })


    if(fieldsErrors.length > 0){
        const elements = fieldsErrors.map((error,index)=>{
            if(index===0){
             
                return (<> <h2 className="font-bold text-xl">errors : </h2>  <h4 className="w-full text-center text-yellow-300 text-lg"  key={index}>{error}</h4> </>)

            }
            return <h4 className="w-full text-center text-yellow-300 text-lg"  key={index}>{error}</h4>
        })

        setMessageContainer(elements)

    }else{
      setMessageContainer([<h3 className="text-green-300 font-bold text-xl">infromations sent successfully</h3>])
    }

  }




  return (
      
        <div  className="relative w-[100vw]  md:w-[clamp(500px,70vw,700px)]  h-auto bg-gray-500  md:border-2 border-white     rounded-xl flex flex-col items-center p-4 "  >



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


                    <button type="submit" className="bg-green-900 text-green-400 py-3 px-5 text-md cursor-pointer rounded-xl border-2 hover:bg-green-800" disabled={isAllCompleted} >Submit</button>

            </form>


            <div className="absolute md:w-[clamp(300px,50vw,550px)] w-[90vw] top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 bg-warning  flex flex-col items-center justify-center gap-3 border-2 border-white rounded-xl p-4  backdrop-filter backdrop-blur-sm bg-white/10 " style={{display:messageContainer.length>0 ? "flex" : "none"}}>
                
                {messageContainer}
                <button className="bg-red-600 border-2 border-red-300 text-black py-2 px-5 rounded-2xl cursor-pointer hover:bg-red-400"  onClick={()=>setMessageContainer([])}>Close</button>
            </div>

            
        </div>




  );
  

}




