
function Header(){
    return(
        <header className='bg-red500 rounded-2xl flex justify-between items-center text-red100 p-4 mb-4'>
          
          <div>
            <h3>My balance</h3>
            <h2 className="font-bold text-xl">$921.48</h2>
          </div>

          <picture>
            <img src="../assets/images/logo.svg" alt="Logo" />
          </picture>

        </header>
    )
}

export {Header}