import React  from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router'

const NavBar =() => (
<Menu>
   <Menu.Menu>
        <Menu.Item>
             ReduxGram
        </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position='right'>
        <Menu.Item>
            <Link to="/">
                Main
            </Link>
            
        </Menu.Item>
        <Menu.Item onClick={()=> {}}>
            Log In
        </Menu.Item>
    </Menu.Menu>
</Menu>   
);

export default NavBar;