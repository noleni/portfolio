import './SideBarLinks.scss';
import Linkedin from './atoms/SVG/Linkedin';
import Github from './atoms/SVG/Github';

const SideBarLinks = () => {
  return (
    <div className='sidebar-links-container'>
      <ul className='sidebar-links-list'>
        <li>
          <a href={'https://www.linkedin.com/in/marine-ramillon'} target="_blank" rel="noreferrer">
            <Linkedin width={42} height={42} className='bump'/>
          </a>
        </li>
        <li>
          <a href={'https://github.com/noleni'} target="_blank" rel="noreferrer">
            <Github width={42} height={42} className='bump' />
          </a>
        </li>
      </ul>
    </div>
  )
};

export default SideBarLinks;
