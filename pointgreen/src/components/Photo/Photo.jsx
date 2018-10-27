import React from 'react'; 

class Photo extends Component {
    constructor(props){
        super(props); 
        this.state = {
            url : props.url, 
            badge : props.badge, 
            votes : props.numVotes, 
            
        };   
    }

    render(){
        return(
            <div className={styles.info}>
            <h3>{photo.title}</h3>
            <p>{date}</p>
            <p><a href={photo.link}>{photo.link}</a></p>
            <p>tags: {photo.tags}</p>
        </div>
        )
    }
}