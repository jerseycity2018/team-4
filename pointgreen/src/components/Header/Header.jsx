import React, { PureComponent } from 'react';
import { Brand } from '..';
import './Header.css';

class Header extends PureComponent {
    render(){
        return(
            <nav class="Header">
                <div class="container">
                    <i class="material-icons">menu</i>
                    <Brand/>
                </div>
            </nav>
        )
    }
}

export default Header;
