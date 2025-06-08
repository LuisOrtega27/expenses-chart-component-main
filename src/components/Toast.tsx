import React from "react"

type ToastProps = {
    amount: number
}

function Toast( {amount}:ToastProps ){
    return(
        <p className="
                group/edit 
                invisible 
                group-hover/item:visible
                group-hover/item:top-[-45px]
                transition-[top]
                bg-Brown950
                text-red100
                font-bold
                p-1
                rounded-sm
                absolute
                top-[-20px]
                left-1/2
                translate-x-[-50%]
                z-10
            ">
            ${amount}
        </p>
    )
}

export {Toast}