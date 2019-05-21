import React from 'react';
import './AboutPage.css'
import {Container, Row, Col} from 'reactstrap';
import SkillChart from '../../components/SkillChart/SkillChart'
import Slide from 'react-reveal/Slide';
import Scroller from '../../components/Scroller/Scroller'
const backEndSkills = [
  {type: "Oracle", level: 80},
  {type: "Sybase", level: 70},
  {type:"MySQL",level:70},
  {type:"PostgreSQL", level:75},
  {type:"MangoDB",level:75},
  {type:"Migration",level:70},
  {type:"Optimization",level:70}
];

const programmingLanguageSkills = [
  {type: "C", level: 70},
  {type: "C++", level: 80},
  {type:"Java",level:80},
  {type:"Python",level:90},
  {type:"Swfit",level:75},
  {type:"Verilog",level:75},
  {type:"Assembly", level:65},
];
const programmingLanguageColor = {
  "bar": "#EE82EE",
  "title": {
    "text": "#fff",
    "background": "#DA70D6"
  }
}

const frontEndSkills = [
  {type: "React", level: 70},
  {type: "Angular", level: 60},
  {type:"CSS",level:55},
  {type:"HTML",level:80},
  {type:"JavaScript",level:80},
  {type:"Photoshop",level:60},
  {type:"UI Design", level:60},
];

const frontEndColor={
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
}

class AboutPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="AboutPage">
      <Container>
      <Row id="AboutTitle">
      <Col><h1 id="aboutText" className="floating textRotate"><span>A</span><span>B</span><span>O</span><span>U</span><span>T</span></h1></Col>
      </Row>
      <Row id="IntroductionRow">
      <Col xs={12} md={6}><Slide left><img src={require('../../assets/image/selfie.gif')} alt="selfie" id="selfie" /></Slide> </Col>
      <Col xs={12} md={6}>
      <div id="selfIntro">
      <Slide right>
      <div id="quote"><blockquote><p className="quotation">
  "Jarvis, sometimes you gotta run before you can walk."</p>
  <cite > - Tony Stark</cite>  </blockquote></div>
     <div id="selfIntroText">
     <p>
     I am a <span className="highlight">Full Stack</span> developer in practice. I have huge passion towards life and anything related to computer.
     </p>
     <p>I built this site from <span className="highlight">scratch</span>.
     By scratch, I mean absolutely from scratch without no knowledge of React before and had so much <span className="highlight">fun</span> along the way.</p>
     <p>I am a statistic person so I believe the best way to show you who I am is to show you by <span className="highlight">graphs</span>.</p>
     </div>
     </Slide>
  </div>
      </Col>
      </Row>
      <Row id="StrengthRowImage">
      <Col></Col>
      <Col> </Col>
      <Col>  </Col>
      </Row>
      <Row id="StrengthCharts">
      <Col xs={12} md={4}><span id="strengthTab"> Front End </span><SkillChart skills={frontEndSkills}  colors={frontEndColor} animationDuration={1000}/></Col>
      <Col xs={12} md={4}> <span id="strengthTab">Back End</span><SkillChart skills={backEndSkills}  colors={{}} animationDuration={1000}/></Col>
      <Col xs={12} md={4}><span id="strengthTab">Programming Languages</span><SkillChart skills={programmingLanguageSkills}  colors={programmingLanguageColor} animationDuration={1000} /></Col>
      </Row>
      </Container>

        </div>
  );
  }
}

export default AboutPage;
