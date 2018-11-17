import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
   constructor(props) {
      super(props);

      const album = albumData.find( album => {
         return album.slug === this.props.match.params.slug
      });

      // States
      this.state = {
         album: album,
         currentSong: album.songs[0],
         isPlaying: false,
         isHover: false
      };

      // Audio element definition
      this.audioElement = document.createElement('audio');
      this.audioElement.src = album.songs[0].audioSrc;

   } // Close constructor


      // play method definition
      play() {
         this.audioElement.play();
         this.setState({
            isPlaying: true
         });
      }


      // pause method definition
      pause() {
         this.audioElement.pause();
         this.setState({
            isPlaying: false,
         });
      }


      // setSong method definition
      setSong(song) {
         this.audioElement.src = song.audioSrc;
         this.setState({ currentSong: song });
      }


      // handleSongClick method definition
      handleSongClick(song) {
         const isSameSong = this.state.currentSong === song;

         if (this.state.isPlaying && isSameSong) {
            this.pause();

         } else {
            if (!isSameSong) {this.setSong(song);}
            this.play();
         }
      }


      handleMouseEnter = (song, index) => {
         console.log('Hover IN');
         this.setState({
            isHover: true
         });

         const msg = "ion-play";

         return(
            msg
         );
         
      }

      handleMouseLeave() {
         console.log('Hover OUT');
         this.setState({
            isHover: false
         });
         
      }

      // //handleMouseEnter() method
      // handleMouseEnter = (song, index) => {
      //    this.setState({isHover: true});
      // }


      // //handleMouseLeave() method
      // handleMouseLeave = () => {
      //    this.setState({isHover: false});
      // }


      // displayIcon(song, index) {
      //
      //    if (this.state.isHover && !this.state.isPlaying && !this.state.isPaused) { // Playing:N Paused:N Hover:Y
      //       return (
      //          <span className="ion-play"></span>
      //       );
      //    }else{
      //       return (
      //          <span>{index + 1}</span>
      //       );
      //    }
      // }


   render() {
      var msg = "";

      if (this.state.isHover && !this.state.isPlaying) {
         msg = "ion-play";
      }

      if (this.state.isPlaying) {
         msg = "ion-pause";
      }

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
                     onMouseEnter={() => this.handleMouseEnter(song, index)}
                     >
                        <td className={msg}>{index + 1}</td>
                        <td key="title">{song.title}</td>
                        <td key="duration">{song.duration}</td>
                     </tr>
                  )}
               </tbody>
            </table>
         </section>
      );
   }
}

export default Album;
