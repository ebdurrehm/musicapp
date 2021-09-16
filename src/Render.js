function Render (props){
    return(
        <div className="container-all">
    <div  className="container">
        <div className="keyboard-container1">
                    {props.key1}
        </div>
       
        <div  className="image">
          <img src={process.env.PUBLIC_URL + '/sounds/logo.png'} alt="equalizer"/>
         
        </div>
       
        <div className="keyboard-container1">
        {props.key2}
        </div>
        
    </div>
    <h1 className="hidden-message">Sorry, This application is not intended for mobile phones &#128533;</h1>
    <div id="logo">
    <i  className="fas fa-3x fa-music"></i><h1>Music maker</h1><i  className="fas fa-3x fa-music"></i>
    </div>
    <h1 className="hidden-message"> Created by Abdurrahim</h1>
    
</div>
    )
}
export default Render