import {Navigate, Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'


export const RouteProtect = () => {
    const { auth }=useAuth()
  return (
    <>
    {auth.id ?(
        <Outlet/>
    ):(
        <Navigate to={'/login'}/>
    )}


    </>
  )
}
