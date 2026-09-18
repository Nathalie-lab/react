import "./Article.css";

function Article(props){

    function playSong(event){
       let audio = event.currentTarget.querySelector('audio'); 
       if(audio.paused){
            event.currentTarget.classList.add("activePlayer");
            audio.play();
       }else{
            event.currentTarget.classList.remove('activePlayer');
            audio.pause();
       }
    }
    
    
    return(
        <div onClick={playSong}>
            <div className="songs">
                <div id="duration">
                    <span>{props.id}. {props.title}</span>
                    <span>{props.duration}</span>
                </div>
                <audio src={props.audio} controls/>
            </div>
        </div>
    )
}

export default Article;