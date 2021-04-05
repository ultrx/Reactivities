import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '15px'}}/>
            Republic of Gamers Shop
            </Menu.Item> 
        <Menu.Item name="Products" />
        <Menu.Item>
            <Button onClick={openCreateForm} positive content='Add Product'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
