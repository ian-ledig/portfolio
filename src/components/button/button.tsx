import "./button.css";

const ButtonComponent = ({href}) => {
    return (
        <a className="button" href={href} target="_blank">
            Check on Github
        </a>
    );
};

export default ButtonComponent;