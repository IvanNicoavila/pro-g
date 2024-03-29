import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { 
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    Avatar
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";
  import { BsFillCartFill, BsArrowRightSquareFill } from "react-icons/bs";

const User = () => {
  const [error, setError] = useState()

  const navigate = useNavigate()

  const { loginWithGoogle, logout, user } = useAuth()
  console.log(user)
 
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle()
      navigate("/");
    }catch (error) {
      setError(error.message)
    }
  }

  const handleLogout = async() => {
    try {
      await logout()
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      { !user ?
        <Box mb='2' justify='center'>
          <Button bg='black' boxSize='40px' onClick= {handleGoogleSignIn}>
            <Avatar borderRadius='full' boxSize='40px' />
          </Button> 
        </Box> 
        :
        <Menu>
          <MenuButton>
            <Avatar borderRadius='full' boxSize='40px' name={user.displayName} src={user.photoURL} />
          </MenuButton>
          <MenuList bg='none' border='none' borderRadius='none'>
            <Box>
              <Link to='/carrito'>
                <Button 
                  size='sm' 
                  leftIcon={<BsFillCartFill/>} 
                  w='200px'
                  ml='4'
                  p='4'
                  className='style-button'
                >
                  Carrito
                </Button>
              </Link>   
            </Box>
            <Box>
              <Link to='/registro'>
                <Button
                  size='sm'
                  w='200px'
                  ml='4'
                  p='4' 
                  className='style-button'
                  onClick={handleLogout} 
                  leftIcon={<BsArrowRightSquareFill/>}
                >
                  Cerrar sesión
                </Button> 
              </Link>
            </Box>
          </MenuList>
        </Menu> 
      }
    </>
  )
}

export default User