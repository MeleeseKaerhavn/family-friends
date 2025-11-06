import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

const detalje = () => {
    return ( 
      <div>
        <Header />
        <Link href="/">
        <h1>Detalje Page</h1>
        </Link>
        <Image
          src="https://placecats.com/neo_2/300/200"
          alt="placeholdercat"
          width={300}
        height={200}
        priority
        />

        
        <pet-scroller
            type='[]'
            age='[]'
            limit="24"
            
            status="adoptable"
            petlisttitle=""
            organization="ON662"
            apibase="https://api.petfinder.com"
            petfinderurl="https://www.petfinder.com"
            accesstoken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtd1NmUDQ1SEpPckFSS0RkVGM1M3JGSjNHVTJIdnk0SUxVSGR5Y3NnNGpURzRCVHIzdCIsImp0aSI6IkZ1OVZ0SkRvaWlBaUxjRE5sQWtTcUFFZngxZHFuT0ZxVVdoT3VQV2siLCJpYXQiOjE3NjI0MzQxMDgsIm5iZiI6MTc2MjQzNDEwOCwiZXhwIjo0OTE4MTA3NzA4LCJzdWIiOiIyMDI5NTgzNSIsInNjb3BlcyI6W119.TpoHDNMrHzohD8Fsblx0tDEUt6_c9nB4PtePjv3nuaNp1ruap4jEflZF40BvgHTVfQbWupIDXnF_lbvSPgF_UcHvON86JrxQSMWLVLrxfZth34VCT-_RTf7PKeM8DqGFpZdbykeCOjOFlCQi_nbF0fIk2Qaoq30Gx_nr9x2_tES3sn33OpP8agJRebMtmgA2idmFcWITrvyOUDaT39OIU9I1DzWUNG1C9jNTFk9lLfn_F5fSkQ7e2naD5iaelkqc-4yv5SBBau-LK7-JcXn2cnNx4Zrf1WHhuUsiW-6Fh5jG7e_0HcdmM6DKlDGBGsAgHpSi0E46BBKRzijFZdPq3g">
        </pet-scroller>

        <script src="https://www.petfinder.com/assets/widgets/scripts/main-widgets-web.js">
        </script>
    
      </div>
        
     );
}
 
export default detalje;