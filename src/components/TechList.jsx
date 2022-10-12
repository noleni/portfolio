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

import styled from 'styled-components';

const TechListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;

  h4 {
    margin: 0 6px 0 0;
    padding-top: 8px;
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
      <TechTag SVG={<HtmlSvg height={18} width={18} />} name={'HTML'} key={1} />
      <TechTag SVG={<JavascriptSvg height={18} width={18} />} name={'JavaScript'} key={2} />
      <TechTag SVG={<ReactSvg height={18} width={18} />} name={'React'} key={3} />
      <TechTag SVG={<StimulusSvg height={18} width={18} />} name={'Stimulus'} key={4} />
      <TechTag SVG={<RubySvg height={18} width={18} />} name={'Ruby'} key={5} />
      <TechTag SVG={<RailsSvg height={18} width={18} />} name={'Rails'} key={6} />
      <TechTag SVG={<PostgreSvg height={18} width={18} />} name={'PostgreSQL'} key={7} />
      <TechTag SVG={<SassSvg height={18} width={18} />} name={'Sass'} key={8} />
      <TechTag SVG={<StyledComponentsSVG height={18} width={18} />} name={'StyledComponents'} key={9} />
      <TechTag SVG={<BootstrapSvg height={18} width={18} />} name={'Bootstrap'} key={10} />
      <TechTag SVG={<FigmaSvg height={18} width={18} />} name={'Figma'} key={11} />
      <TechTag SVG={<HerokuSvg height={18} width={18} />} name={'Heroku'} key={12} />
      <TechTag SVG={<GitSvg height={18} width={18} />} name={'Git'} key={13} />
    </TechListStyle>
  )
};

export default TechList
