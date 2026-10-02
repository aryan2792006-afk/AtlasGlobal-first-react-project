import CountryRealData from "../diffApi/CountryRealData.json";
import FlagApi from "../diffApi/FlagApi";

function CountryCard(){
   return(<>
   <div className="countryCard">
   {CountryRealData.map((ele)=>{
    const{id,name,capital,population,flag}=ele;
    return(<>
    <div key={id}>
 
 <div className="cardForCountry">   

       <p>Name: <span>{name}</span> </p>
       <p>Capital: <span>{capital}</span> </p>
       <p>Population:<span>{population}</span></p>
       <p>Code: <span>{flag}</span> </p>
       <br />
       <div><FlagApi flag={flag}></FlagApi></div>
       <hr />
    
         </div>
    </div>
    </>)

    
        
    
   })}
   </div>
   </>)
}
export default CountryCard;