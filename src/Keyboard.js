import React from "react"

class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            style: {
            backgroundColor: 'crimson',
            boxShadow: '3px 3px 5px black',
            borderRadius: '3px'

            }
        }
        this.play = this.play.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }
    //which key is pressed and whic music should be played
   handleKey(event){
       //select items which its id = event's key
      if (event.key===this.props.id){
          this.play();
          //change state props
          this.setState({
              style:{
                backgroundColor: 'orange',
                boxShadow: '0 3px orange',
                height: 77,
                marginTop: 18,    
              }
          })
          //after 500 milliseconds change state again
          setTimeout(()=>(this.setState({
            style:{
                backgroundColor: 'crimson',
            
            boxShadow: '3px 3px 5px black'
            },
            
        })), 500);   
      }
             
   }
  
    play(event){
        //create new audio object  and assaign it parametr as parent props value
      const sound = new Audio(this.props.src);
      sound.play();
    }
    //when component rendering , create event listener
    componentDidMount(){
        document.addEventListener("keydown",this.handleKey);
    }
    //when component destroyed from DOM remove eventlistener
    componentWillUnmount(){
        document.removeEventListener("keydown",this.handleKey);
    }

    render(){
        return( 
        <div className="keyboard"  
            style={this.state.style}
             onClick={this.play}>
            <h1>{this.props.id}</h1>

        </div>     

        )
    }
}

export default Keyboard