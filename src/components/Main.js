import React, {Component} from 'react';
import { Divider } from 'semantic-ui-react';
import NavBar  from './NavBar'


class Main extends Component {
    render(){
        return (
            <div>
                <NavBar/>
                  <Divider hidden/>
                {React.cloneElement(this.props.children, this.props)}
             </div>
            )
        }
}
  
export default Main; 