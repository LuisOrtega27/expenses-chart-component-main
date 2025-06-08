import { useEffect } from "react"
import { Bar } from "./Bar"

type GraphProps = { 
    data: Array<{ day: string; amount: number }>
};


function Graph( { data } : GraphProps ) {

    useEffect(()=>{

    },[data])
    
    return(
        <main className="bg-white rounded-t-2xl text-Brown950 p-4 relative">

            <h1 className="font-bold text-2xl">Spending - Last 7 days</h1>

            <div className="GraphContainer grid grid-cols-7 gap-2 text-center">

                {
                    data.length > 0 && data.map(item => {
                        return <Bar key={item.day} dayName={item.day} amount={item.amount} />
                    })
                }
                
            </div>

          <hr className="border-red100 absolute bottom-0 left-1/2 translate-x-[-50%] w-4/5"/>
          
        </main>
    )
}
export {Graph}