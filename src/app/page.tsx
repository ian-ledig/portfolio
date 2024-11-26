import Image from "next/image";
import "./home.css";
import ProjectComponent from '../components/project-card/project-card.tsx';

export default function Home() {
  return (
    <div>
      <div className="navigation">
        <div className="left">
          <div className="navigation-element">
            Home
          </div>
          <div className="navigation-element">
            Knowledges
          </div>
          <div className="navigation-element">
            Projects
          </div>
          <div className="navigation-element">
            CV
          </div>
        </div>
        <div className="navigation-element">
          Contact
        </div>
      </div>
      <div className="home">
        <div className="item text-center">
          <Image
            className="dark:invert"
            src="/image/profile.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="mt-1">
            Ian LEDIG
          </div>
          <div>
            open to work
          </div>
        </div>
        <div className="item">
          <div>
            Ian's Portfolio
          </div>
        </div>
      </div>
      <div className="category">
        <div className="title">
          Knowledges
        </div>
        <div className="content">
          <a className="item" href="https://angular.dev/">
            <Image
                className="dark:invert"
                src="/skills/angular.svg"
                alt="Angular logo"
                width={60}
                height={0}
                priority
            />
          </a>
          <a className="item" href="https://react.dev/">
            <Image
                className="dark:invert"
                src="/skills/react.svg"
                alt="React logo"
                width={60}
                height={0}
                priority
            />
          </a>
          <a className="item" href="https://python.org/">
            <Image
                className="dark:invert"
                src="/skills/python.svg"
                alt="Python logo"
                width={60}
                height={0}
                priority
            />
          </a>
          <a className="item" href="https://java.com/">
            <Image
                className="dark:invert"
                src="/skills/java.svg"
                alt="Java logo"
                width={60}
                height={0}
                priority
            />
          </a>
          <a className="item" href="https://spring.io/">
            <Image
                className="dark:invert"
                src="/skills/spring.svg"
                alt="Spring logo"
                width={60}
                height={0}
                priority
            />
          </a>
          <a className="item" href="">
            <Image
                className="dark:invert"
                src="/skills/cpp.svg"
                alt="C++ logo"
                width={60}
                height={0}
                priority
            />
          </a>
          <a className="item" href="">
            <Image
                className="dark:invert"
                src="/skills/csharp.svg"
                alt="CSharp logo"
                width={60}
                height={0}
                priority
            />
          </a>
        </div>
      </div>
      <div className="category">
        <div className="title">
          Projects
        </div>
        <div className="content">
          <div className="item">
            <ProjectComponent />
          </div>
          <div className="item">
            <ProjectComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
