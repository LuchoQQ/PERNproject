import { NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/react'


const MenuLink = ({name, path}) => {
  return (
      <Box>
          <NavLink to={path}>{name}</NavLink>
      </Box>
  )
}

export default MenuLink
