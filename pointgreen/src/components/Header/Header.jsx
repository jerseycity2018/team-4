import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
    render(){
        return(
            <nav class="Header">
                <div class="container">
                    <i class="material-icons">menu</i>
                    <span>PointGreen</span>
                </div>
            </nav>
        )
    }
}

export default Header;
