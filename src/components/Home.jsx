import {_useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home(){
    return(
        <>
            <main className="main-container">
                <div className="div-main">
                    <h3 className="main-movie-title">
                        Solo Leveling
                    </h3>

                    <p className="main-movie-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At amet recusandae beatae omnis quas perferendis nulla ducimus, officiis id molestias aliquam ipsum rem, possimus rerum quibusdam, mollitia veritatis dolore. Repellendus.
                    </p>
                    <div className='main-buttons'>
                        <button className='main-button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg><span className='btn-assistir'>Assistir agora</span></button>
                        <button className='main-button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><span className='btn-assistir'>Mais informações</span></button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;