import "./button.css";

const ButtonComponent = ({text, href}) => {
    return (
        <a className="button" href={href} target="_blank">
            {text}
        </a>
    );
};

export default ButtonComponent;