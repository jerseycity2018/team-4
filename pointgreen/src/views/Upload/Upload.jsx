import React, {Component} from 'react'; 
import './Upload.css';

class Upload extends Component {
    render(){
        return(
            <div class="upload-form">
                <h3>Upload a Photo </h3>
                <form>
                    <input type="text" value="Badge Type"/><br/>
                    <input type="text" value="Img URL "/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>    
        )
    }
}

export default Upload; 