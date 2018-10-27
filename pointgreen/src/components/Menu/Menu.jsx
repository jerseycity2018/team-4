import React, { PureComponent } from 'react';
import { Brand } from '..';

class Menu extends PureComponent {
    render(){
        return(
            <nav class="Menu">
                <Brand/>
                <ul>
                    <li>Feed</li>
                    <li>Impact</li>
                    <li>Wallet</li>
                    <li>More Puzzles</li>
                    <li>Settings</li>
                </ul>
            </nav>
        )
    }
}

export default Menu;
