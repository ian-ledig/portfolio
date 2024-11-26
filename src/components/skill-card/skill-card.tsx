import Image from "next/image";

const SkillCardComponent = ({ href, src, alt, width = 60 }) => {
    return (
        <a className="item" href={href}>
            <Image
                className="dark:invert"
                src={src}
                alt={alt}
                width={width}
                height={0}
                priority
            />
        </a>
    );
};

export default SkillCardComponent;