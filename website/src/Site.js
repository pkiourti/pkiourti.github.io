import React, { Component } from 'react';
import { NavBar, ImgCard, Intro, Papers } from './components';
import profile from './pkiourti.jpg';
import './App.css';

export default class Site extends Component {
  constructor(props) {
    super(props)

    this.goToIntro = this.goToIntro.bind(this)
    this.state = {
      show_icon: false,
      show_intro: true,
      show_papers: false,
    }
  }

  goToIntro() {
    this.setState({ show_intro: true, show_papers: false })
  }

  goToPapers() {
    this.setState({ show_papers: true, show_intro: false })
  }

  render() {
    return (
      <div>
        <NavBar 
          show_intro={this.state.show_intro}
          show_papers={this.state.show_papers}
          goToIntro={() => this.goToIntro()}
          goToPapers={() => this.goToPapers()}
        />
        <div className="card" style={{ 'display': this.state.show_intro ? 'block': 'none' }}>
          <div className="card-body"> 
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <ImgCard 
                    profile={profile} 
                    github={this.state.show_icon}
                  />
                </div>
                <div className="col-md-8">
                  <Intro show_intro={this.state.show_intro}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ 'display': this.state.show_papers ? 'block': 'none' }}>
          <div className="card-body"> 
            <div className="container">
              <h1 className="heading">List of Papers</h1>
              <Papers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
