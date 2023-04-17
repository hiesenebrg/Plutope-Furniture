import { Avatar, Badge, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { logout } from "../redux/userRedux";

const Container = styled.div`
background-color: skyblue;
  height: 60px;
  margin-bottom:10px;
  padding:10px;
  ${mobile({ height: "50px" })}
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  font-family: Arial, Helvetica, sans-serif;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 30px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  width:35vw;
  display: flex;
  align-items: center;
  margin-left: 25px;
  
`;

const Input = styled.input`
margin-left:250px;
padding: 10px;
padding-right:200px;
  border: 2px solid black;
  border-radius: 8px;
  ${mobile({ width: "50px" ,margin:"0px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  font-family: Arial, Helvetica, sans-serif;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  font-family: Arial, Helvetica, sans-serif;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (e)=>{
    e.preventDefault();
    dispatch(logout());
    navigate('/login');
    return;
    
  }
  return (
    <Container>
      <Wrapper>
        
        <Left>
          <Link to="/" style={{textDecoration:"none" ,color:"black"}}>
          <Logo>PlutoPe Furnitures</Logo>
          </Link>
        </Left>
        <Center>
          
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        {!user?(<Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          
        </Right>):(
          <Right>
            <Avatar  sx={{ bgcolor: deepOrange[500] }}>{user.username[0].toUpperCase()}</Avatar>&nbsp;&nbsp;{user.username.toUpperCase()}&nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          </Right>
        )}
        
      </Wrapper>
    </Container>
  );
};

export default Navbar;
