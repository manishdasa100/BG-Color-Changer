import { memo, useContext, useState } from 'react'
import { BgColorContext, SetBgColorContext } from './Context'

function App() {

  const [bgColor, setBgColor] = useState('')

  return <div style={{height:'100vh', width:'100vw', position:'relative', background:bgColor}}>
    <p style={{textAlign:'center'}}>Click on any color to change the background</p>
    <BgColorContext.Provider value={bgColor}>
      <SetBgColorContext.Provider value={setBgColor}>
        <PalletsComponent/>
      </SetBgColorContext.Provider>
    </BgColorContext.Provider>
  </div> 
  
}

const PalletsComponent =  memo(function PalletsComponent() {

  console.log("Pallets component rerendered")

  return <div style={{background:'white', display:"inline-block", padding:'5px 8px 5px 8px', position:'absolute', top:'90%', left:'50%', transform:'translate(-50%, 0%)', borderRadius:'5px', boxShadow:'0px 5px 20px 1px grey'}}>
    <Pallet color={'red'}/>
    <Pallet color={'yellow'}/>
    <Pallet color={'green'}/>
    <Pallet color={'blue'}/>
    <Pallet color={'black'}/>
    <Pallet color={'purple'}/>
    <Pallet color={'orange'}/>
  </div>

})

function Pallet({color}) {

  console.log("Pallet rerendered")

  const setBgColor = useContext(SetBgColorContext)

  function changeBg() {
    setBgColor(color)
  }

  return <div style={{background:color, margin:'4px',padding:'4px 10px', display:'inline-block', borderRadius:'10px', cursor:'pointer'}} onClick={changeBg}>
    {color}
  </div>
}

export default App
