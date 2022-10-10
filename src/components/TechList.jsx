import TechTag from './atoms/TechTag/TechTag';
import ReactSvg from "./atoms/SVG/React";
import HtmlSvg from "./atoms/SVG/HtmlSvg";
import JavascriptSvg from "./atoms/SVG/JavaScriptSvg";
import RubySvg from "./atoms/SVG/RubySvg";
import RailsSvg from "./atoms/SVG/RailsSvg";
import HerokuSvg from "./atoms/SVG/HerokuSvg";
import FigmaSvg from "./atoms/SVG/FigmaSvg";
import SassSvg from "./atoms/SVG/SassSvg";
import StyledComponentsSVG from './atoms/SVG/StyledComponentsSVG';
import StimulusSvg from './atoms/SVG/StimulusSvg';
import BootstrapSvg from './atoms/SVG/BootstrapSvg';
import PostgreSvg from './atoms/SVG/PostgreSvg';
import GitSvg from './atoms/SVG/GitSvg';

import styled from 'styled-components';

const TechListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;

  h4 {
    margin: 0 6px 0 0;
    padding-top: 3px;
  }

@media(min-width: 764px) {
    height : fit-content;
    padding: 0 100px 0 40px;
    justify-content: start;
  }
`

const TechList = (props) => {

  return (

    <TechListStyle className='tech-list'>
      <h4>Technologies</h4>
      <TechTag SVG={<HtmlSvg height={18} width={18} />} name={'HTML'} />
      <TechTag SVG={<JavascriptSvg height={18} width={18} />} name={'JavaScript'} />
      <TechTag SVG={<ReactSvg height={18} width={18} />} name={'React'} />
      <TechTag SVG={<StimulusSvg height={18} width={18} />} name={'Stimulus'} />
      <TechTag SVG={<RubySvg height={18} width={18} />} name={'Ruby'} />
      <TechTag SVG={<RailsSvg height={18} width={18} />} name={'Rails'} />
      <TechTag SVG={<PostgreSvg height={18} width={18} />} name={'PostgreSQL'} />
      <TechTag SVG={<SassSvg height={18} width={18} />} name={'Sass'} />
      <TechTag SVG={<StyledComponentsSVG height={18} width={18} />} name={'StyledComponents'} />
      <TechTag SVG={<BootstrapSvg height={18} width={18} />} name={'Bootstrap'} />
      <TechTag SVG={<FigmaSvg height={18} width={18} />} name={'Figma'} />
      <TechTag SVG={<HerokuSvg height={18} width={18} />} name={'Heroku'} />
      <TechTag SVG={<GitSvg height={18} width={18} />} name={'Git'} />
    </TechListStyle>
  )
};

export default TechList
