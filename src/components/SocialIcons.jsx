import React from "react";
import "../styles/socialicon.scss"

export default function SocialIcons() {
    const iconStyle = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#f9a8d4",
        color: "#fff",
        margin: "0 8px",
        transition: "all 0.3s ease",
        textDecoration: "none",
    };

    const iconHoverStyle = {
        backgroundColor: "#ec4899",
        transform: "scale(1.1)",
    };

    return (
        <div className="social-icons">
            <a
                href="https://github.com/LogicLord-Liu"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="GitHub"
            >
                <i className="fab fa-github"></i>
            </a>
            <a
                href="https://x.com/AstroNerd_AceL"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="Twitter"
            >
                <i className="fab fa-twitter"></i>
            </a>
            <a
                href="https://www.instagram.com/small_cat_lover/profilecard/?igsh=MXRiem5kcjk0b21laA=="
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="LinkedIn"
            >
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a
                href="https://www.youtube.com/@Vannik-9H"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="LinkedIn"
            >
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a
                href="https://t.me/VannikLorcan"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="LinkedIn"
            >
                <i class="fa-brands fa-telegram"></i>
            </a>
            <a
                href="https://stackoverflow.com/users/25453206/logiclord"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="LinkedIn"
            >
                <i class="fa-brands fa-stack-overflow"></i>
            </a>
            <a
                href="mailto:luc444175@gmail.com"
                className="icon"
                title="Email"
            >
                <i className="fas fa-envelope"></i>
            </a>
        </div>
    );
}
