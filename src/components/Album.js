import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
   constructor(props) {
      super(props);

      const album = albumData.find( album => {
         return album.slug === this.props.match.params.slug
      });

      // Initial state:
      this.state = {
         album: album,
         currentSong: album.songs[0],
         currentTime: 0,
         duration: album.songs[0].duration,
         isPlaying: false,
         isHovering: null,
         volume: 0.2,
         init: true // this state is only used for the initial state of the song list (all index numbers are displayed)
      };

      // audioElement definition
      this.audioElement = document.createElement('audio');
      this.audioElement.src = album.songs[0].audioSrc;
      this.audioElement.volume = this.state.volume;

   }  // constructor ends


      // play method
      play() {

         this.audioElement.play();
         this.setState({
            isPlaying: true,
            init: false
         });
      }


      // pause method
      pause() {

         this.audioElement.pause();
         this.setState({
            isPlaying: false
         });
      }


      // componentDidMount lifecycle method
      componentDidMount() {
         this.eventListeners = {
            timeupdate: e => {
               this.setState({ currentTime: this.audioElement.currentTime });
            },
            durationchange: e => {
               this.setState({ duration: this.audioElement.duration });
            }
           
         };
         this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
         this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
      }


      // componentWilUnmount lifecycle method
      componentWillUnmount() {
         this.audioElement.src = null;
         //this.audioElement = null;
         this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
         this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
      }


      // setSong method
      setSong(song) {

         this.audioElement.src = song.audioSrc;
         this.setState({ currentSong: song });
      }


      // handleSongClick method 
      handleSongClick(song) {

         const isSameSong = this.state.currentSong === song;

         if (this.state.isPlaying && isSameSong) {
            this.pause();

         } else {
            if (!isSameSong) {this.setSong(song);}
            this.play();
         }
      }


      // handlePrevClick method
      handlePrevClick() {
         const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
         const newIndex = Math.max(0, currentIndex - 1);
         const newSong = this.state.album.songs[newIndex];

         this.setSong(newSong);
         this.play();
      }


      // handleNextClick method
      handleNextClick() {
         const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
         const newIndex = Math.min(currentIndex + 1, this.state.album.songs.length - 1);
         const newSong = this.state.album.songs[newIndex];

         this.setSong(newSong);
         this.play();
      }


      // handleTimeChange method
      handleTimeChange(e) {
         const newTime = this.audioElement.duration * e.target.value;
    
         this.audioElement.currentTime = newTime;
         this.setState({ currentTime: newTime });
      }


      // formatTime method
      formatTime(timeInSec) {

         if (!isNaN(timeInSec)) {

            let minutes = Math.trunc(timeInSec / 60);
            let seconds = Math.floor(((timeInSec / 60) - Math.trunc(timeInSec / 60)) * 60);
            let zero = "0";

            seconds > 9 ? zero="" : zero="0";
            let formattedTime = minutes + ':' + zero + seconds;   // typeof string formatted to 'M:SS'

            return (formattedTime);
              
         } else {

            return ("-:--")
         }
      }


      // handleVolumeChange method
      handleVolumeChange(e) {
         const newVolume = e.target.value;

         this.setState({ volume: newVolume });
         this.audioElement.volume = e.target.value;
      }


      // handleMouseEnter method
      handleMouseEnter(index){
         
         this.setState ({
            isHovering: this.state.album.songs[index]
         });
      }
    
    
      // handleMouseLeave method
      handleMouseLeave() {

         this.setState({
            isHovering: null
         }); 
      }


      // handleIconsDisplay method
      handleIconsDisplay(song, index){

         if (!this.state.isHovering && this.state.isPlaying && this.state.currentSong === song){ 
               
            return(<span className="ion-pause"></span>);   // The currently playing song displays a "pause" button in place of the song number.
          
         } else if (this.state.currentSong === song && this.state.isPlaying) {
            
            return(<span className="ion-pause"></span>); // Holds pause icon
            
         } else if (this.state.isHovering === this.state.album.songs[index]) {
            
            return(<span className="ion-play"></span>); // When I hover over a song, it displays a "play" button in place of the song number.

         } else if (!this.state.isPlaying && this.state.currentSong === this.state.album.songs[index] && !this.state.init) {

            return(<span className="ion-play"></span>); // A paused song displays a "play" button in place of the song number.
         
         }  else {
         
            return(<span>{index + 1}</span>); // Returns the song index number + 1
         }
         
      }

   render() {
      return (
         <section className="album">
            <section id="album-info">
               <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
               <div className="album-details">
                  <h1 id="album-title">{this.state.album.title}</h1>
                  <h2 id="artist">{this.state.album.artist}</h2>
                  <div id="release-info">{this.state.album.releaseInfo}</div>
               </div>
            </section>
            <table id="song-list">
               <colgroup>
                  <col id="song-number-column" />
                  <col id="song-title-column" />
                  <col id="song-duration-column" />
               </colgroup>
               <tbody>
                  {this.state.album.songs.map( (song, index) =>
                     <tr className="song"
                        key={index} 
                        onClick={() => this.handleSongClick(song)} 
                        onMouseEnter={() => this.handleMouseEnter(index)}
                        onMouseLeave={() => this.handleMouseLeave()}
                     >   
                        <td>{this.handleIconsDisplay(song, index)}</td>
                        <td key="title">{song.title}</td>
                        <td key="duration">{song.duration}</td>
                     </tr>
                  )}
               </tbody>
            </table>
            <PlayerBar 
               isPlaying={this.state.isPlaying}
               volume={this.state.volume}
               currentSong={this.state.currentSong}
               currentTime={this.formatTime(this.audioElement.currentTime)}
               duration={this.formatTime(this.audioElement.duration)}
               handleSongClick={() => this.handleSongClick(this.state.currentSong)}
               handlePrevClick={() => this.handlePrevClick()}
               handleNextClick={() => this.handleNextClick()}
               handleTimeChange={(e) => this.handleTimeChange(e)}
               handleVolumeChange={(e) => this.handleVolumeChange(e)}
               formatTime={() => this.formatTime()}
            />
         </section>
      );
   }
}

export default Album;
