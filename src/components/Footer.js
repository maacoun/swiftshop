import React from "react";
import { Link } from "react-router-dom";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Twitter } from "react-feather";
import { Youtube } from "react-feather";

function Footer() {
    return (
        <div className="page-footer">
        <div className="footer-content-top">
            <div className="logo">
            <Link to="/">
                SWFTSHP
            </Link>
            </div>
            <div className="socials">
            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Facebook color="black" />
            </a>
            <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Instagram color="black" />
            </a>
            <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Twitter color="black" />
            </a>
            <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Youtube color="black" />
            </a>
            </div>
        </div>
        <div className="footer-content-bottom">
            <div className="footer-content-bottom-left">
            <p>© 2023 SWFTSHP</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            </div>
            <div className="footer-content-bottom-right">
                <p className="footer-text">Created with <span role="img" aria-label="love">❤️</span></p>
                <p className="footer-text">This project was created using React, ASP.NET Core, and SQL Server.</p>
                <p>© 2023 - <a href="https://github.com/maacoun" target="_blank" rel="noopener noreferrer">Vladimír Macoun</a></p>
            </div>
        </div>
        </div>
    );
    }

export default Footer;