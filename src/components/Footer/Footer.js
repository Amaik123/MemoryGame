import React from "react";
import { FaGithub } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className='footer'>
            <span className="footer__icon"><FaGithub /></span> <a href="https://github.com/aakash/Memoriee" target="_blank" rel='noopener noreferrer'>aakash/Memoriee</a>
        </footer>
    );
};

export default Footer;
