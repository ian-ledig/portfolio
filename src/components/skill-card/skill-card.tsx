import Image from "next/image";
import "./skill-card.css";

const SkillCardComponent = ({ title, color0, color1, href, src, alt, width = 60 }) => {
    return (
        <a href={href} target="_blank">
            <Image
                className="dark:invert"
                src={src}
                alt={alt}
                width={width}
                height={0}
                priority
            />
            <div
                className="skill-card-title"
                style={{ '--color0': color0, '--color1': color1 }}
            >
                {title}
            </div>
        </a>
    );
};

export default SkillCardComponent;