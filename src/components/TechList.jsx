import ReactSvg from "./atoms/SVG/React";
import HtmlSvg from "./atoms/SVG/HtmlSvg";
import JavascriptSvg from "./atoms/SVG/JavaScriptSvg";
import RubySvg from "./atoms/SVG/RubySvg";

const TechList = (props) => {
  return (
    <ul>
      <li><HtmlSvg {...props}/></li>
      <li><JavascriptSvg {...props}/></li>
      <li><ReactSvg {...props}/></li>
      <li><RubySvg {...props}/></li>
    </ul>
  )
};

export default TechList
