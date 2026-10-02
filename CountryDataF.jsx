import countryData from "../diffApi/CountryData.json";

function CountryDataF(){
  return(
         <>
         <div className="main-country-div">
              {countryData.map((ele)=>{
                
              const {id,countryName,population,interestingFact,capital}=ele;
            return(<>
               <div className="card" key={id}>
      
               <div>
          <h1>{countryName}</h1>
           <p><span>Capital:</span>{capital}</p>
           <p><span>population:</span>{population}</p>
           <p><span>intersting Fact:</span>{interestingFact}</p>


          </div>
   

   </div>
</>)

    
    })}
    </div>
    </>
  )  
   
}
export default CountryDataF;