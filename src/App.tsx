
import { Header } from "./components/Header";
import { Graph } from "./components/Graph";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App() {

  type DataProp = { day: string,  amount: number };
  const [data, setData] = useState<DataProp[]>([])

  const [totalThisMonth, setTotalThisMonth] = useState<number>(0)

  // FETCHING DATA
  useEffect(() => {
    const fetchData = async () => {
      const URL = "assets/data/data.json";
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const dataJSON = await response.json();
        setData(dataJSON);
      } catch (error) {
        console.log(`The error was: ${error}`);
      }
    };
    fetchData();
  }, []);


  // TOTAL OF THIS MONTH
  useEffect(()=>{
    let sumThisMonth = 0
    data.map( item => sumThisMonth += item.amount )
    setTotalThisMonth(sumThisMonth)
  },[data])



  return (
    <>
      <div className='Container min-w-60 w-full max-w-85 flex flex-col'>

        <Header/>

        <Graph data={data}/>
        
        <Footer totalThisMonth={totalThisMonth} />
        
      </div>
    </>
  )
}

export default App
