
type FooterProps = {
  totalThisMonth: number
}

function Footer( {totalThisMonth}:FooterProps ){
    return(
        <footer className="bg-white flex justify-between items-center rounded-b-2xl p-4 ">

          <div>
            <h3 className="text-brown400 text-sm">Total this month</h3>
            <h2 className="text-Brown950 text-4xl font-bold">${totalThisMonth}</h2>
          </div>

          <div className="text-end">
            <h3 className="text-Brown950 font-bold">+2.4%</h3>
            <h3 className="text-brown400 text-sm">from last month</h3>
          </div>
          
        </footer>
    )
}

export {Footer}