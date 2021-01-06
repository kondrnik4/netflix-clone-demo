import React from "react";
import "./nav.css";

const Nav = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => window.removeEventListener("scroll");
    }, []);

    return (
        <div className={`navbar ${show && `navbar__black`}`}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                className="navbar__logo"
                alt="Netflix logo"
            />
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                className="navbar__avatar"
                alt="avatar"
            />
        </div>
    );
};

export default Nav;