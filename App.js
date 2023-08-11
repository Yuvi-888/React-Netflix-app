import React from "react";
import Cards from "./components/Cards";
import sdata from './components/Sdata'

export default function App() {
  return (
    <>
    <h2 className="heading">Top Netflix Series To Binge</h2>

    {sdata.map((elements)=>{
      return(
        <Cards
        img={elements.img}
        title={elements.title}
        link={elements.link}
      />
      )
    })}
     
    </>
  );
}
