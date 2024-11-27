import Image from "next/image";
import ButtonComponent from "../button/button.tsx";
import "./project-card.css";

const ProjectCardComponent = ({image, title, description, chips, github}) => {
    return (
        <div className="project-card">
            <div className="project-card-image">
                <Image 
                    src={image}
                    alt={`${title} showcase`}
                    layout="fill" 
                    objectFit="cover" 
                    objectPosition="top"
                />
            </div>
            <div className="project-card-chips">
                {chips.map((chip, index) => (
                    <div key={index} className={`chip ${chip.color}`}>
                        {chip.label}
                    </div>
                ))}
            </div>
            <div className="project-card-content">
                <div className="title-2">{title}</div>
                <div>{description}</div>
            </div>
            <div className="project-card-footer">
                {github && <ButtonComponent href={github} />}
            </div>
        </div>
    );
};

export default ProjectCardComponent;