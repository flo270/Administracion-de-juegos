import React, { useState , useEffect } from 'react'
import gameAxios from '../../configs/gameAxios'
import Loader from '../loader/Loader.jsx'

const Admin = ()=> {
  const [ games,setGames] = useState()
  const [loader,setLoader]=useState(false)
  const [flag,setFlag]= useState(false)

  const getGame= ()=>{
    gameAxios.get()
    .then(response=>{
      console.log(response.data)
    setGames(response.data)
    setLoader(true)
    })
  }
  getGame()
  useEffect(()=>{
  
  },[flag])

  const updateGame=(id)=>{
   gameAxios.update(`/${id}`)
  }
  const delateGame =()=>{

  }
  const createGame = ()=>{
    console.log('estamos por crear')
  }
  return (
    <div className="container">
        <h1>Panel de juegos</h1>
        <div className= " row mt-5 justify-content-center shadow">
          {
            loader
            ?
            <div>
              <button className='btn btn-success d-flex justify-contect-start' onChange={()=>{createGame()}}>Crear</button>
              <div className='row'>
              <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Juego</th>
                    <th scope="col">Detalle</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Destacado</th>
                    <th scope="col">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                   {/* {
                    games.map((game,id)=>{
                    <tr key= {id}>
                    <th scope="row">1</th>
                    <td>{game.image}</td>
                    <td>{game.title}</td>
                    <td>{game.details}</td>
                    <td>{game.price}</td>
                    <td>{game.prominent}</td>
                    <td>
                      <button className='btn btn-success' onClick={()=>{updateGame(game.id)}}>Modificar</button>
                      <button className='btn btn-danger'>Eliminar</button>
                    </td>
                  </tr>
                    })
                  } */}
                </tbody>
              </table>
              </div>
            </div>
            </div> 
            :
            <Loader/>
          }
        </div>
    </div>
  )
}

export default Admin