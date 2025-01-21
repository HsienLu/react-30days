import { useEffect, useState } from "react"
interface Country {
    isoCode: string;
    country: string;
}
interface HolidayName {
    language: string;
    text: string;
}

interface Holiday {
    id: string;
    startDate: string;
    endDate: string;
    type: string;
    name: HolidayName[];
    regionalScope: string;
    temporalScope: string;
    nationwide: boolean;
    subdivisions?: { code: string; shortName: string }[];
}
function Day1(){
    const isoCode=[
        {
           "isoCode" : "AD",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Andorra"
              },
              {
                 "language" : "CA",
                 "text" : "Andorra"
              },
              {
                 "language" : "DE",
                 "text" : "Andorra"
              }
           ],
           "officialLanguages" : [
              "CA"
           ]
        },
        {
           "isoCode" : "AL",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Albania"
              },
              {
                 "language" : "SQ",
                 "text" : "Shqipëria"
              },
              {
                 "language" : "DE",
                 "text" : "Albanien"
              }
           ],
           "officialLanguages" : [
              "SQ"
           ]
        },
        {
           "isoCode" : "AT",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Austria"
              },
              {
                 "language" : "DE",
                 "text" : "Österreich"
              }
           ],
           "officialLanguages" : [
              "DE"
           ]
        },
        {
           "isoCode" : "BE",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Belgium"
              },
              {
                 "language" : "NL",
                 "text" : "België"
              },
              {
                 "language" : "FR",
                 "text" : "Belgique (la)"
              },
              {
                 "language" : "DE",
                 "text" : "Belgien"
              }
           ],
           "officialLanguages" : [
              "NL",
              "FR",
              "DE"
           ]
        },
        {
           "isoCode" : "BG",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Bulgaria"
              },
              {
                 "language" : "BG",
                 "text" : "България"
              },
              {
                 "language" : "DE",
                 "text" : "Bulgarien"
              }
           ],
           "officialLanguages" : [
              "BG"
           ]
        },
        {
           "isoCode" : "BY",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Belarus"
              },
              {
                 "language" : "BE",
                 "text" : "Беларусь"
              },
              {
                 "language" : "RU",
                 "text" : "Беларусь"
              },
              {
                 "language" : "DE",
                 "text" : "Belarus"
              }
           ],
           "officialLanguages" : [
              "BE",
              "RU"
           ]
        },
        {
           "isoCode" : "CH",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Switzerland"
              },
              {
                 "language" : "DE",
                 "text" : "Schweiz"
              },
              {
                 "language" : "FR",
                 "text" : "Suisse (la)"
              },
              {
                 "language" : "IT",
                 "text" : "Svizzera (la)"
              },
              {
                 "language" : "RM",
                 "text" : "Svizra (la)"
              }
           ],
           "officialLanguages" : [
              "DE",
              "FR",
              "IT",
              "RM"
           ]
        },
        {
           "isoCode" : "CZ",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Czechia"
              },
              {
                 "language" : "CS",
                 "text" : "Česko"
              },
              {
                 "language" : "DE",
                 "text" : "Tschechien"
              }
           ],
           "officialLanguages" : [
              "CS"
           ]
        },
        {
           "isoCode" : "DE",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Germany"
              },
              {
                 "language" : "DE",
                 "text" : "Deutschland"
              }
           ],
           "officialLanguages" : [
              "DE"
           ]
        },
        {
           "isoCode" : "EE",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Estonia"
              },
              {
                 "language" : "ET",
                 "text" : "Eesti"
              },
              {
                 "language" : "DE",
                 "text" : "Estland"
              }
           ],
           "officialLanguages" : [
              "ET"
           ]
        },
        {
           "isoCode" : "ES",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Spain"
              },
              {
                 "language" : "ES",
                 "text" : "España"
              },
              {
                 "language" : "CA",
                 "text" : "Espanya"
              },
              {
                 "language" : "EU",
                 "text" : "Espainia"
              },
              {
                 "language" : "GA",
                 "text" : "España"
              },
              {
                 "language" : "DE",
                 "text" : "Spanien"
              }
           ],
           "officialLanguages" : [
              "ES",
              "CA",
              "EU",
              "GL"
           ]
        },
        {
           "isoCode" : "FR",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "France"
              },
              {
                 "language" : "FR",
                 "text" : "France (la)"
              },
              {
                 "language" : "DE",
                 "text" : "Frankreich"
              }
           ],
           "officialLanguages" : [
              "FR"
           ]
        },
        {
           "isoCode" : "HR",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Croatia"
              },
              {
                 "language" : "HR",
                 "text" : "Hrvatska"
              },
              {
                 "language" : "DE",
                 "text" : "Kroatien"
              }
           ],
           "officialLanguages" : [
              "HR"
           ]
        },
        {
           "isoCode" : "HU",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Hungary"
              },
              {
                 "language" : "HU",
                 "text" : "Magyarország"
              },
              {
                 "language" : "DE",
                 "text" : "Ungarn"
              }
           ],
           "officialLanguages" : [
              "HU"
           ]
        },
        {
           "isoCode" : "IE",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Ireland"
              },
              {
                 "language" : "GA",
                 "text" : "Éire"
              },
              {
                 "language" : "DE",
                 "text" : "Irland"
              }
           ],
           "officialLanguages" : [
              "EN",
              "GA"
           ]
        },
        {
           "isoCode" : "IT",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Italy"
              },
              {
                 "language" : "IT",
                 "text" : "Italia"
              },
              {
                 "language" : "DE",
                 "text" : "Italien"
              }
           ],
           "officialLanguages" : [
              "IT"
           ]
        },
        {
           "isoCode" : "LI",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Liechtenstein"
              },
              {
                 "language" : "DE",
                 "text" : "Liechtenstein"
              }
           ],
           "officialLanguages" : [
              "DE"
           ]
        },
        {
           "isoCode" : "LT",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Lithuania"
              },
              {
                 "language" : "LT",
                 "text" : "Lietuva"
              },
              {
                 "language" : "DE",
                 "text" : "Litauen"
              }
           ],
           "officialLanguages" : [
              "LT"
           ]
        },
        {
           "isoCode" : "LU",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Luxembourg"
              },
              {
                 "language" : "LB",
                 "text" : "Lëtzebuerg"
              },
              {
                 "language" : "FR",
                 "text" : "Luxembourg (le)"
              },
              {
                 "language" : "DE",
                 "text" : "Luxemburg"
              }
           ],
           "officialLanguages" : [
              "LB",
              "FR",
              "DE"
           ]
        },
        {
           "isoCode" : "LV",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Latvia"
              },
              {
                 "language" : "LV",
                 "text" : "Latvija"
              },
              {
                 "language" : "DE",
                 "text" : "Lettland"
              }
           ],
           "officialLanguages" : [
              "LV"
           ]
        },
        {
           "isoCode" : "MC",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Monaco"
              },
              {
                 "language" : "FR",
                 "text" : "Monaco"
              },
              {
                 "language" : "DE",
                 "text" : "Monaco"
              }
           ],
           "officialLanguages" : [
              "FR"
           ]
        },
        {
           "isoCode" : "MD",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Moldova"
              },
              {
                 "language" : "RO",
                 "text" : "Moldova"
              },
              {
                 "language" : "DE",
                 "text" : "Moldau"
              }
           ],
           "officialLanguages" : [
              "RO"
           ]
        },
        {
           "isoCode" : "MT",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Malta"
              },
              {
                 "language" : "MT",
                 "text" : "Malta"
              },
              {
                 "language" : "DE",
                 "text" : "Malta"
              }
           ],
           "officialLanguages" : [
              "MT",
              "EN"
           ]
        },
        {
           "isoCode" : "NL",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Netherlands (the)"
              },
              {
                 "language" : "NL",
                 "text" : "Nederland"
              },
              {
                 "language" : "DE",
                 "text" : "Niederlande"
              }
           ],
           "officialLanguages" : [
              "NL"
           ]
        },
        {
           "isoCode" : "PL",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Poland"
              },
              {
                 "language" : "PL",
                 "text" : "Polska"
              },
              {
                 "language" : "DE",
                 "text" : "Polen"
              }
           ],
           "officialLanguages" : [
              "PL"
           ]
        },
        {
           "isoCode" : "PT",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Portugal"
              },
              {
                 "language" : "PT",
                 "text" : "Portugal"
              },
              {
                 "language" : "DE",
                 "text" : "Portugal"
              }
           ],
           "officialLanguages" : [
              "PT"
           ]
        },
        {
           "isoCode" : "RO",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Romania"
              },
              {
                 "language" : "RO",
                 "text" : "România"
              },
              {
                 "language" : "DE",
                 "text" : "Rumänien"
              }
           ],
           "officialLanguages" : [
              "RO"
           ]
        },
        {
           "isoCode" : "RS",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Serbia"
              },
              {
                 "language" : "SR",
                 "text" : "Србија"
              },
              {
                 "language" : "DE",
                 "text" : "Serbien"
              }
           ],
           "officialLanguages" : [
              "SR"
           ]
        },
        {
           "isoCode" : "SI",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Slovenia"
              },
              {
                 "language" : "SL",
                 "text" : "Slovenija"
              },
              {
                 "language" : "DE",
                 "text" : "Slowenien"
              }
           ],
           "officialLanguages" : [
              "SL"
           ]
        },
        {
           "isoCode" : "SK",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Slovakia"
              },
              {
                 "language" : "SK",
                 "text" : "Slovensko"
              },
              {
                 "language" : "DE",
                 "text" : "Slowakei"
              }
           ],
           "officialLanguages" : [
              "SK"
           ]
        },
        {
           "isoCode" : "SM",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "San Marino"
              },
              {
                 "language" : "IT",
                 "text" : "San Marino"
              },
              {
                 "language" : "DE",
                 "text" : "San Marino"
              }
           ],
           "officialLanguages" : [
              "IT"
           ]
        },
        {
           "isoCode" : "VA",
           "name" : [
              {
                 "language" : "EN",
                 "text" : "Vatican City"
              },
              {
                 "language" : "IT",
                 "text" : "Città del Vaticano"
              },
              {
                 "language" : "DE",
                 "text" : "Vatikanstadt"
              }
           ],
           "officialLanguages" : [
              "IT"
           ]
        }
     ]
    const country='NL'
    const validFrom='2025-01-01'
    const validTo='2025-12-31'
    const [countryList,setCountryList]=useState<Country[]>([])
    const [holidaysList,setHolodayList]=useState<Holiday[]>([])
    const [initOptionCountry,setinitOptionCountry]=useState("NL")
    useEffect(()=>{
        const countryList=isoCode.map(v=>{return({isoCode:v.isoCode,country:v.name[0].text})})
    
        setCountryList(countryList)
        fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${country}&validFrom=${validFrom}&validTo=${validTo}`,{
            method:'GET',

            
        }).then(res=>res.json())
        .then(data=>{
            setHolodayList(data)})
        .catch(err=>console.log(err))
    },[])
    const handleHolodayList=(country:any)=>{
        const countryList=isoCode.map(v=>{return({isoCode:v.isoCode,country:v.name[0].text})})
      
        setinitOptionCountry(country)
        setCountryList(countryList)
        fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${country}&validFrom=${validFrom}&validTo=${validTo}`,{
            method:'GET',

            
        }).then(res=>res.json())
        .then(data=>{ 
            setHolodayList(data)})
        .catch(err=>console.log(err))
    
    }
return(
    <>

        <h1>Day1</h1>
        
        <select name="countrySelect" id="countrySelect"
                onChange={(e)=>handleHolodayList(e.target.value)}
                value={initOptionCountry}
        >
            {
            countryList.map((v)=>{
                return(<option key={v.country} value={v.isoCode}>{v.country}</option>)
            })    
            }
        </select>
        <ul>
            {holidaysList.map((v)=>{
                return(
                    <div key={v.id}>
                        {v.startDate}~{v.endDate}:{v.name.find(name => name.language === 'EN')?.text}
                    </div>
                )
            })}
        </ul>


    </>
)
}

export default Day1