import TechTag from './icons/TechTag/TechTag';
import ReactSvg from "./icons/SVG/React";
import HtmlSvg from "./icons/SVG/HtmlSvg";
import JavascriptSvg from "./icons/SVG/JavaScriptSvg";
import RubySvg from "./icons/SVG/RubySvg";
import RailsSvg from "./icons/SVG/RailsSvg";
import HerokuSvg from "./icons/SVG/HerokuSvg";
import FigmaSvg from "./icons/SVG/FigmaSvg";
import SassSvg from "./icons/SVG/SassSvg";
import StyledComponentsSVG from './icons/SVG/StyledComponentsSVG';
import StimulusSvg from './icons/SVG/StimulusSvg';
import BootstrapSvg from './icons/SVG/BootstrapSvg';
import PostgreSvg from './icons/SVG/PostgreSvg';
import GitSvg from './icons/SVG/GitSvg';
import ExpressSvg from './icons/SVG/ExpressSvg';
import NodeSvg from './icons/SVG/NodeSvg';
import NotionSvg from './icons/SVG/NotionSvg';
import SlackSvg from './icons/SVG/Slacksvg';
import FirebaseSvg from './icons/SVG/FirebaseSvg';

import styled from 'styled-components';

const TechListStyle = styled.div`

  .tech-list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  .tech-card {
    text-align: center;
    background-color: rgba(255,87,88, 0);
    border-radius: 4px;
    padding: 12px;
    margin: 0 6px 20px 0;
    flex-basis: 30%;
    flex-grow: 1;
}

  .tech-card-box {
    display: flex;
    margin-top: 12px;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 0;
  }

  h5 {
    margin: 0 6px 0 0;
    text-transform: uppercase;
    color: var(--off-white);
    background-color: var(--dark-blue);
    border-radius: 4px;
  }

  .competencies-title {
    margin-left: 20px;

  }

  @media(min-width: 576px) {
      margin-left: 32px;
  }

  @media(min-width: 821px) {
    margin-left: 22px;

    .tech-list {
    flex-direction: row;
    }
  }
`

const TechList = (props) => {

  return (
    <TechListStyle>
    {/* <h3 className='section-title competencies-title'>Compétences techniques</h3> */}
    <div className='tech-list'>
    <div className='tech-card'>
      <h5>Front-end, design</h5>
        <div className='tech-card-box'>
        <TechTag SVG={<HtmlSvg height={18} width={18} />} name={'HTML'} key={1} />
        <TechTag SVG={<JavascriptSvg height={18} width={18} />} name={'JavaScript'} fillColor="#FF5758" key={2} />
        <TechTag SVG={<ReactSvg height={18} width={18} />} name={'React'} key={3} />
        <TechTag SVG={<StimulusSvg height={18} width={18} />} name={'Stimulus'} key={4} />
        <TechTag SVG={<SassSvg height={18} width={18} />} name={'Sass'} key={5} />
        <TechTag SVG={<StyledComponentsSVG height={18} width={18} />} name={'StyledComponents'} key={6} />
        <TechTag SVG={<BootstrapSvg height={18} width={18} />} name={'Bootstrap'} key={7} />
        <TechTag SVG={<FigmaSvg height={18} width={18} />} name={'Figma'} key={8} />
        </div>
    </div>
    <div className='tech-card'>
      <h5>Back-end</h5>
      <div className='tech-card-box'>
      <TechTag SVG={<ExpressSvg height={18} width={18} />} name={'Express'} key={16} />
      <TechTag SVG={<NodeSvg height={18} width={18} />} name={'Node'} key={17} />
      <TechTag SVG={<RubySvg height={18} width={18} />} name={'Ruby'} key={9} />
      <TechTag SVG={<PostgreSvg height={18} width={18} />} name={'PostgreSQL'} key={10} />
      <TechTag SVG={<RailsSvg height={18} width={18} />} name={'Rails'} key={11} />
      </div>
    </div>
    <div className='tech-card'>
      <h5>Projets, déploiement</h5>
      <div className='tech-card-box'>
      <TechTag SVG={<NotionSvg height={18} width={18} />} name={'Notion'} key={12} />
      <TechTag SVG={<SlackSvg height={18} width={18} />} name={'Slack'} key={13} />
      <TechTag SVG={<HerokuSvg height={18} width={18} />} name={'Heroku'} key={14} />
      <TechTag SVG={<GitSvg height={18} width={18} />} name={'Git'} key={15} />
      <TechTag SVG={<FirebaseSvg height={18} width={18} />} name={'Firebase'} key={18} />
      </div>
    </div>
    </div>

    </TechListStyle>
  )
};

export default TechList
