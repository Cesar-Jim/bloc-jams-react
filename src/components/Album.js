import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
   constructor(props) {
      super(props);

      const album = albumData.find( album => {
         return album.slug === this.props.match.params.slug
      });

      /*States*/
      this.state = {
         album: album,
         currentSong: album.songs[0],
         isPlaying: false,
         isHover: false
      };

      /*Audio element definition*/
      this.audioElement = document.createElement('audio');
      this.audioElement.src = album.songs[0].audioSrc;

   } /*Constructor ends*/


      /*play() method*/
      play() {
         this.audioElement.play();
         this.setState({ isPlaying: true});
      }


      /*pause() method*/
      pause() {
         this.audioElement.pause();
         this.setState({ isPlaying: false });
      }


      /*setSong() method*/
      setSong(song) {
         this.audioElement.src = song.audioSrc;
         this.setState({ currentSong: song });
      }


      /*handleSongClick() method*/
      handleSongClick(song) {
         const isSameSong = this.state.currentSong === song;

         if (this.state.isPlaying && isSameSong) {
            this.pause();
         } else {
            if (!isSameSong) {this.setSong(song);}
            this.play();
         }
      }


      //handleMouseEnter() method
      handleMouseEnter = () => {
         this.setState({isHover: true});
      }


      //handleMouseLeave() method
      handleMouseLeave = () => {
         this.setState({isHover: false});
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
                  {this.state.album.songs.map( (song, i) =>
                     <tr><span className="song" key={i} style={{backgroundColor: this.state.isHover ? "grey" : "white"}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={() => this.handleSongClick(song)}>
                        <td>{i + 1}</td>
                        <td key="title">{song.title}</td>
                        <td key="duration">{song.duration}</td>
                     </span></tr>
                  )}

               </tbody>
            </table>
         </section>
      );
   }
}

export default Album;
