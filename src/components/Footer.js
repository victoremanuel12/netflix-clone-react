/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'


function Footer() {
  return(
    <footer className='footer'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png" alt="" />
        <span>Feito com muita dedicação pelo Programador em formação <strong>Victor Emanuel</strong></span>
       
        <div className="contacts">
            <a href="https://www.linkedin.com/in/victor-emanuel-004636228/" target="_blanck"><LinkedInIcon  fontSize="large"/></a>
            <a href="https://web.whatsapp.com/send?phone=5571988552607" target="_blank"><WhatsAppIcon  fontSize="large"/></a>
        </div>
    </footer>
  );
}

export default Footer;