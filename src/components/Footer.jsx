import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;
`


const Footer = () => {
  return (
    <FooterStyle>
      <small>Désigné et développé par Marine Ramillon</small>
      <small>06 20 41 94 69</small>
    </FooterStyle>
  )
}

export default Footer;
