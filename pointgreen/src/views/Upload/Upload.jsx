import React, {Component} from 'react'; 
import './Upload.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Menu } from '@material-ui/core';






class Upload extends Component {
    constructor(props){
        super(props); 
        this.state = {
            BadgeType : "",
        }
    }
    handleChange = event => {
        this.setState({ BadgeType: event.target.value });
      };

    render(){
        return(
            <div class="upload-form">
                <h3>Upload a Photo</h3>
                <form>
                    <InputLabel>Badge Type    </InputLabel>
                    <Select value={this.state.BadgeType} onChange={this.handleChange}>
                        <MenuItem value = "VeganMeal">VeganMeal</MenuItem>
                        <MenuItem value= "Compost">Compost</MenuItem>
                        <MenuItem value = "PublicTransport">PublicTransport</MenuItem>
                        <MenuItem value = "Recycle">Recycle</MenuItem>
                        <MenuItem value = "WindTurbine">WindTurbine</MenuItem>
                    </Select> <br/>
                    <Input type="url" placeholder="Img URL"/><br/>
                    <Button>Submit</Button>
                </form>
            </div>    
        )
    }
}

export default Upload; 