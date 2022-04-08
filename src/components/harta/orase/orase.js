import { Link } from "react-router-dom"
import { useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faMapLocation } from "@fortawesome/free-solid-svg-icons"

const RefreshPage = ()=>{
  window.location.reload();
}
const Orase = ({loc}) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const orase = {
      Bacau:{
          oras: "Bacau",
          text1: "Young Island",
          linn1: "https://www.google.ro/maps/place/Insula+de+Agrement+Bac%C4%83u/@46.5572299,26.9229081,15.04z/data=!4m8!1m2!2m1!1scomic+con+bucharest!3m4!1s0x40b571f1c64c4629:0x49f807b34a214717!8m2!3d46.5632601!4d26.9246252?hl=ro",
          lin1: "https://www.instagram.com/youngislandfestival/", 
          linn2: "https://www.google.ro/maps/place/Open+Air+Blues+in+the+garden+festival/@46.3686646,26.4840658,14.75z/data=!4m5!3m4!1s0x40b5192d17ad8c55:0x4201c3b2bfd65368!8m2!3d46.3648102!4d26.4468009?hl=ro",
          linn3: "https://www.google.ro/maps/place/ZidArt+,,Fellinart%22/@46.5721835,26.9096594,17z/data=!4m5!3m4!1s0x40b56fb10a2ef357:0x9bbf9f08413e02b3!8m2!3d46.5743738!4d26.9083762?hl=ro",
          text2: "Blues in the garden",
          lin2: "https://www.instagram.com/blues_in_the_garden_festival/",
          text3: "ZidART",
          lin3: "https://www.instagram.com/zidart_streetartfestival/",       
      },
      Cluj:{
        oras: "Cluj-Napoca",
        text1: "Untold",
        lin1: "https://www.instagram.com/untoldfestival/",
        linn1: "https://www.google.ro/maps/place/Untold+Festival+Arena/@46.7633367,23.567651,14.75z/data=!4m9!1m2!2m1!1suntold!3m5!1s0x47490e8f42ccbdaf:0x80f11f1844c5af47!8m2!3d46.7676882!4d23.573158!15sCgZ1bnRvbGRaCCIGdW50b2xkkgEIZmVzdGl2YWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlZYelJMVVdoblJSQUI?hl=ro",
        text2: "Electic Castel",
        linn2: "https://www.google.ro/maps/place/Castelul+B%C3%A1nffy/@46.8525843,23.5636673,11z/data=!4m9!1m2!2m1!1selectric+castle+2022!3m5!1s0x4749a1f4ba81c311:0xa1a95390a1e5df3b!8m2!3d46.910314!4d23.8110047!15sChRlbGVjdHJpYyBjYXN0bGUgMjAyMloWIhRlbGVjdHJpYyBjYXN0bGUgMjAyMpIBE2hpc3RvcmljYWxfbGFuZG1hcmuaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTmhPRFo2TkhKblJSQUI?hl=ro",
        lin2: "https://www.instagram.com/electriccastle/",
        text3: "Tiff Romania",
        linn3: "https://www.google.ro/maps/@46.771095,23.5966361,19.67z?hl=ro",
        lin3: "https://www.instagram.com/tiffromania/",   
      },
      Bucuresti:{
        oras: "Bucuresti",
        text1: "Saga Festival",
        linn1: "https://www.google.ro/maps/place/Saga+Festival/@44.4940232,26.0838431,17z/data=!3m1!4b1!4m5!3m4!1s0x40b203641825f405:0x7d60eb62058e681!8m2!3d44.4940272!4d26.0859698?hl=ro",
        lin1: "https://www.instagram.com/saga_festival/",
        linn2: "https://www.google.ro/maps/place/Summer+Well/@44.5624299,25.9384023,17z/data=!3m1!4b1!4m5!3m4!1s0x40b20f91a5415e9f:0x979b291a59b7b877!8m2!3d44.5624227!4d25.9405692?hl=ro",
        text2: "Summer Well",
        linn3: "https://www.google.ro/maps/place/Romexpo/@44.4538947,26.0763996,13z/data=!4m9!1m2!2m1!1scomic+con+bucharest!3m5!1s0x40b202381d23cfaf:0x80ccadadef58f6a0!8m2!3d44.4762267!4d26.0650938!15sChNjb21pYyBjb24gYnVjaGFyZXN0WhUiE2NvbWljIGNvbiBidWNoYXJlc3SSARtleGhpYml0aW9uX2FuZF90cmFkZV9jZW50ZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTTJOazQzYzNGUlJSQUI?hl=ro",
        lin2: "https://www.instagram.com/summer_well_festival/",
        text3: "Comic Con",
        lin3: "https://www.instagram.com/comiccon.romania/",   
      },
      Constanta:{
        oras: "Constanta",
        text1: "Neversea",
        lin1: "https://www.instagram.com/neverseafestival/",
        text2: "Beach, Please!",
        linn1: "https://www.google.ro/maps/place/Plaja+Neversea/@44.1815451,28.6534289,17.25z/data=!4m5!3m4!1s0x40bae5648247b8d9:0x82db4a1da77bb0b8!8m2!3d44.1821893!4d28.6554045?hl=ro",
        lin2: "https://www.instagram.com/beachpleasero/",
        linn2: "https://www.google.ro/maps/place/Costine%C8%99ti+907090/@43.9592184,28.6202858,14z/data=!3m1!4b1!4m13!1m7!3m6!1s0x4734f3d3b9367e5b:0x7c35bc1c79f8c604!2sCostine%C8%99ti!3b1!8m2!3d47.8035009!4d26.4584601!3m4!1s0x40bb274d7a3809b5:0x89fa5880e0dd6a74!8m2!3d43.9569662!4d28.6380959?hl=ro",
        linn3: "https://www.google.ro/maps/place/dichis'n'Blues/@45.1770263,28.7993291,17z/data=!3m1!4b1!4m5!3m4!1s0x40b7594426448a37:0x614212fb9242fd1b!8m2!3d45.1770093!4d28.8015694?hl=ro",
        text3: "Dichis'n'Blues",
        lin3: "https://www.instagram.com/dichis.n.blues/",   
      },
      Iasi:{
        oras: "Iasi",
        text1: "Senzoria",
        lin1: "https://www.instagram.com/senzoria.iasi/",
        text2: "Rocanotherworld",
        lin2: "https://www.instagram.com/rocanotherworld/",
        text3: "Afterhills",
        lin3: "https://www.instagram.com/afterhills/",   
        linn2: "https://www.google.ro/maps/place/Rocanotherworld/@47.147039,27.5825846,12.63z/data=!4m9!1m2!2m1!1zZmVzdGl2YWwgbMOibmfEgyBJYciZaQ!3m5!1s0x40cafb12e04b0d85:0x246ad94397099a51!8m2!3d47.17501!4d27.5589422!15sChZmZXN0aXZhbCBsw6JuZ8SDIElhyJlpkgEIZmVzdGl2YWw?hl=ro",
        linn3: "https://www.google.ro/maps/place/Afterhills+SRL/@47.155089,27.5895347,14.75z/data=!4m11!1m2!2m1!1safterhills!3m7!1s0x40cafbe15b25b377:0x43370f33573e445e!8m2!3d47.1600712!4d27.6100764!9m1!1b1!15sCgphZnRlcmhpbGxzkgEIZmVzdGl2YWw?hl=ro",
        linn1: "https://www.google.ro/maps/place/SENZORIA/@47.147039,27.5825846,12.63z/data=!4m9!1m2!2m1!1zZmVzdGl2YWwgbMOibmfEgyBJYciZaQ!3m5!1s0x40cafd88e457d269:0xcb6d2889b42f5046!8m2!3d47.1872783!4d27.599163!15sChZmZXN0aXZhbCBsw6JuZ8SDIElhyJlpkgEIZmVzdGl2YWw?hl=ro",
      },
      Brasov:{
        oras: "Brasov",
        text1: "Rockstadt",
        lin1: "https://www.instagram.com/rockstadtextremefest.official/",
        text2: "OktoberFest",
        lin2: "https://www.instagram.com/explore/tags/oktoberfestbrasov/",
        text3: "Rezistenta Fagaras",
        lin3: "https://www.instagram.com/rezistentafagaras/",  
        linn2: "https://www.google.ro/maps/place/Oktoberfest/@45.658961,25.5362076,13z/data=!4m6!1m2!2m1!1zZmVzdGl2YWwgbMOibmfEgyBCcmHImW92!3m2!1s0x40b35b9ed65717cf:0x89497b6402650ff8!15sChhmZXN0aXZhbCBsw6JuZ8SDIEJyYciZb3ZaGiIYZmVzdGl2YWwgbMOibmfEgyBicmHImW92kgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMmRtOWlUa1ozRUFF?hl=ro",
        linn3: "https://www.google.ro/maps/place/Rezistenta+Fagaras+-+Bike+Fest/@45.8739182,24.9735538,17z/data=!3m1!4b1!4m5!3m4!1s0x474ca194638be3db:0x57d83146e24ec071!8m2!3d45.8739182!4d24.9757425?hl=ro",
        linn1: "https://www.google.ro/maps/place/Rockstadt/@45.658961,25.5362076,13z/data=!4m9!1m2!2m1!1zZmVzdGl2YWwgbMOibmfEgyBCcmHImW92!3m5!1s0x40b35b7f8819c8dd:0x6e2c1ad0a5a4db4f!8m2!3d45.6480593!4d25.6076015!15sChhmZXN0aXZhbCBsw6JuZ8SDIEJyYciZb3ZaGiIYZmVzdGl2YWwgbMOibmfEgyBicmHImW92kgEDcHVi?hl=ro", 
      },
      Suceava:{
        oras: "Suceava",
        text1: "Festivalul Medieval",
        lin1: "https://www.instagram.com/explore/tags/festivalulmedievalsuceava/",
        text2: "Bucovina Rock",
        lin2: "https://www.instagram.com/bucovinarockcastle/",
        text3: "GastroFest",
        lin3: "https://www.instagram.com/gastrofestbucovina/",  
        linn2: "https://www.google.ro/maps/place/Centrul+Cultural+Bucovina/@47.6430514,26.2418017,16.25z/data=!4m5!3m4!1s0x4734fc2c0940a819:0xc6e3727bb5a7b6fd!8m2!3d47.6438684!4d26.2448462?hl=ro",
        linn3: "https://www.google.ro/maps/@47.6419509,26.2479098,15z?hl=ro",
        linn1: "https://www.google.ro/maps/place/Cetatea+de+Scaun+a+Sucevei/@47.6446469,26.2781239,14.58z/data=!4m5!3m4!1s0x4734fc386e30cc81:0xdc5f668387f2fd9e!8m2!3d47.6451162!4d26.2702433?hl=ro", 
      },
      Oradea:{
        oras: "Oradea",
        text1: "Retro Summer",
        lin1: "https://www.instagram.com/retrosummerfestival/",
        text2: "Streer Food Festival",
        lin2: "https://www.instagram.com/streetfoodfestivalromania/",
        text3: "Tiff Oradea",
        lin3: "https://www.instagram.com/tiffromania/",   
        linn2: "https://www.google.ro/maps/@47.0525616,21.9353405,16.5z?hl=ro",
        linn3: "https://www.google.ro/maps/place/TIFF+@+Oradea/@47.0550095,21.9262238,17z/data=!3m1!4b1!4m5!3m4!1s0x474647a78d241f5d:0x275551d80952eb5a!8m2!3d47.0550095!4d21.9284125?hl=ro",
        linn1: "https://www.google.ro/maps/place/VD+Event+Production/@47.0560068,21.9133939,14z/data=!4m9!1m2!2m1!1sretro+summer+festival!3m5!1s0x40252cc72c097ca5:0x516fa942b52f22a7!8m2!3d47.0666434!4d21.908015!15sChVyZXRybyBzdW1tZXIgZmVzdGl2YWxaFyIVcmV0cm8gc3VtbWVyIGZlc3RpdmFskgEYZXZlbnRfbWFuYWdlbWVudF9jb21wYW55?hl=ro",
      },
      Timisoara:{
        oras: "Timisioara",
        text1: "Vest Fest",
        lin1: "https://www.instagram.com/vestfest.ro/",
        text2: "Flight Festival",
        lin2: "https://www.instagram.com/flight_festival/",
        text3: "Diskoteka",
        linn2: "https://www.google.ro/maps/place/Flight+Festival/@45.7672883,21.207836,13z/data=!4m9!1m2!2m1!1sVest+Fest+timisoara!3m5!1s0x474567d23be5df8d:0x8d40a9c64a00840!8m2!3d45.7874294!4d21.1966201!15sChNWZXN0IEZlc3QgdGltaXNvYXJhkgEVb3V0ZG9vcl9tb3ZpZV90aGVhdHJl?hl=ro",
        linn3: "https://www.google.ro/maps/place/Diskoteka+Festival+2019/@45.7410542,21.2083257,13z/data=!4m9!1m2!2m1!1stimisoara+festival!3m5!1s0x47455def4635ee4b:0x1b9d306cb7542ebb!8m2!3d45.7410542!4d21.2433446!15sChJ0aW1pc29hcmEgZmVzdGl2YWySAQhmZXN0aXZhbA?hl=ro",
        linn1: "https://www.google.ro/maps/@45.7539323,21.2253046,14.5z?hl=ro",
        lin3: "https://www.instagram.com/diskotekamusicfestival/",   
      },
      Arad:{
        oras: "Arad",
        text1: "Open Air",
        lin1: "https://www.instagram.com/aradopenair/",
        text2: "Garana Jazz",
        lin2: "https://www.instagram.com/garanajazzfestival/",
        text3: "Festivalul Vinului",
        lin3: "https://www.instagram.com/explore/tags/festivalulvinuluiarad/", 
        linn2: "https://www.google.ro/maps/place/G%C4%83r%C3%A2na+Jazz+Festival/@45.2187108,22.0969072,17z/data=!3m1!4b1!4m5!3m4!1s0x4751d731e026fc73:0x5bdff98a091a484e!8m2!3d45.2187108!4d22.0990959?hl=ro",
        linn3: "https://www.google.ro/maps/search/festivalul+vinului+arad/@46.1818554,21.3094683,17z?hl=ro",
        linn1: "https://www.google.ro/maps/place/Aeroportul+Interna%C8%9Bional+Arad/@46.1639845,21.2832949,14.5z/data=!4m9!1m2!2m1!1sopen+air+festival+arad!3m5!1s0x47459882b343f89b:0x23d10446c4e8c9da!8m2!3d46.1718933!4d21.2766659!15sChZvcGVuIGFpciBmZXN0aXZhbCBhcmFkIgIYAVoTIhFhaXIgZmVzdGl2YWwgYXJhZJIBFWludGVybmF0aW9uYWxfYWlycG9ydJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSeExUaHhTRmhuRUFF?hl=ro",  
      },
      Sibiu:{
        oras: "Sibiu",
        text1: "ARTmania",
        lin1: "https://www.instagram.com/artmania_live/",
        text2: "Obor fest",
        lin2: "https://www.instagram.com/oborfest/",
        text3: "Open Air Blues",
        lin3: "https://www.instagram.com/openairbluesfest/",  
        linn2: "https://www.google.ro/maps/place/Obor+FEST/@45.5805407,23.8118403,10z/data=!4m9!1m2!2m1!1sfestival+l%C3%A2ng%C4%83+Sibiu!3m5!1s0x474c671279e6619f:0xfb970a880b066c64!8m2!3d45.8158191!4d24.1501966!15sChZmZXN0aXZhbCBsw6JuZ8SDIFNpYml1kgEOYW11c2VtZW50X3Bhcms?hl=ro",
        linn3: "https://www.google.ro/maps/place/Open+Air+Blues+Festival/@45.366964,23.7608703,9.5z/data=!4m9!1m2!2m1!1sfestival+l%C3%A2ng%C4%83+Sibiu!3m5!1s0x474d1bf03344229b:0x51e595a7fe3c4acd!8m2!3d45.3449859!4d24.2421569!15sChZmZXN0aXZhbCBsw6JuZ8SDIFNpYml1WhgiFmZlc3RpdmFsIGzDom5nxIMgc2liaXWSAQhmZXN0aXZhbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNNE1ITm1ZVTVuRUFF?hl=ro",
        linn1: "https://www.google.ro/maps/place/Pia%C8%9Ba+Mare/@45.7965215,24.1168083,13z/data=!4m9!1m2!2m1!1sArtmania+sibiu!3m5!1s0x474c6790c39bee75:0xfd3736b1aeb5172e!8m2!3d45.7965215!4d24.1518272!15sCg5BcnRtYW5pYSBzaWJpdVoQIg5hcnRtYW5pYSBzaWJpdZIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSVmJITlhiMFJCRUFF?hl=ro", 
      },
    }
  return (
    <>
      <div className="container home-page">
        <Link to="/" className="arrow left" onClick={<RefreshPage />}></Link>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>{orase[loc]["oras"]}</span>
            <br />
            <span className={`${letterClass} _12`}>{orase[loc]["text1"]}</span>
            <span className={`${letterClass} _12`}></span>
            <span className={`${letterClass} _13`}><a href={orase[loc]["lin1"]}><FontAwesomeIcon icon={faInstagram} color="#ffd700" /></a></span>
            <span className={`${letterClass} _12`}></span>
            <span className={`${letterClass} _13`}><a href={orase[loc]["linn1"]}><FontAwesomeIcon icon={faMapLocation} color="#ffd700" /></a></span> <br />
            <span className={`${letterClass} _12`}>{orase[loc]["text2"]}</span>
            <span className={`${letterClass} _12`}></span>
            <span className={`${letterClass} _14`}><a href={orase[loc]["lin2"]}><FontAwesomeIcon icon={faInstagram} color="#ffd700" /></a></span>
            <span className={`${letterClass} _12`}></span>
            <span className={`${letterClass} _13`}><a href={orase[loc]["linn2"]}><FontAwesomeIcon icon={faMapLocation} color="#ffd700" /></a></span> <br />
            <span className={`${letterClass} _13`}>{orase[loc]["text3"]}</span>
            <span className={`${letterClass} _12`}></span>
            <span className={`${letterClass} _14`}><a href={orase[loc]["lin3"]}><FontAwesomeIcon icon={faInstagram} color="#ffd700" /></a></span> 
            <span className={`${letterClass} _12`}></span>
            <span className={`${letterClass} _13`}><a href={orase[loc]["linn3"]}><FontAwesomeIcon icon={faMapLocation} color="#ffd700" /></a></span> <br />
          </h1>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
export default Orase