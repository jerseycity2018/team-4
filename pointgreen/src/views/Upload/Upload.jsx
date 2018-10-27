import React, {Component} from 'react'; 
import './Upload.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';



class Upload extends Component {
    render(){
        return(
            <div class="upload-form">
                <h3>Upload a Photo </h3>
                <form>
                    <Input type="text" placeholder="Badge Type"/><br/>
                    <Input type="url" placeholder="Img URL"/><br/>
                    <Button>Submit</Button>
                </form>
            </div>    
        )
    }
}

export default Upload; 