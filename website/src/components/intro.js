import React from 'react';

const Intro = ({ show_intro }) => (
  <div style={{ 'display': show_intro ? 'block' : 'none'}}>
    <div className="heading">
      <h1 className="name">Panagiota Kiourti</h1>
    </div>
    <p className="paragraph">
      I am a 2nd-year PhD student in the department of Electrical and Computer Engineering at Boston University. I am part of the&nbsp; 
      <a href="http://sites.bu.edu/depend/">Dependable Computing Laboratory</a> 
      &nbsp;where I work with <a href="https://www.bu.edu/eng/profile/39799/">Professor Li</a>. 
      My research is primarily on Security of Machine Learning.
    </p>
    <p className="paragraph">
      I completed my undergraduate degree in the&nbsp;
      <a href="https://www.ece.ntua.gr/en">ECE</a> department of National Technical University of Athens (<a href="https://www.ntua.gr/en">NTUA</a>), Greece where I completed my thesis under the supervision of Professor &nbsp;
      <a href="https://www.ece.ntua.gr/en/staff/60">Theodora Vargarigou</a>.
    </p>
    <p className="paragraph">The correct pronounciation of my name is <span className="pronounciation">Pah-nah-yo-tah</span>, but you can call me <span className="nickname_inline">Penny</span>.</p>
  </div>
)

export default Intro;
