import React, { useEffect, useState } from "react"

import { Toast } from "./Toast"

type BarProps = {
    dayName: string,
    amount: number
}


function  Bar( {dayName,amount} : BarProps ){

    const [currentDay, setCurrentDay] = useState("")
    
    useEffect(()=>{
        const date = new Date()
        const dateDay = date.getDay() - 1
        const week = ["mon","tue","web","thu","fri","sat","sun"]
        setCurrentDay(week[dateDay])
    },[])
    
    const myStyles = {
        height: `${amount}%`,
    }

    return(
        <div className="DayContainer  flex flex-col items-stretch">
            <div className="BarContainer relative h-30"> 
                <div className={`
                        Bar

                        ${
                            currentDay===dayName 
                            ? "bg-blue300 hover:bg-blue300/80"
                            : "bg-red500 hover:bg-red500/80"
                        }
                         
                        absolute 
                        bottom-0 
                        rounded-sm 
                        w-full
                        hover:cursor-pointer
                        group/item
                    `} style={myStyles}>
                        
                    <Toast amount={amount} />

                </div> 
            </div>
            <p className="Day text-brown400 text-xs">{dayName}</p>
        </div>
    )
}

export {Bar} 