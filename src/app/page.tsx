import Image from "next/image";
import "./home.css";
import SkillCardComponent from '../components/skill-card/skill-card.tsx';
import ProjectCardComponent from '../components/project-card/project-card.tsx';

export default function Home() {
  return (
    <div>
      <div className="navigation">
        <div className="left">
          <div className="navigation-element">
            Home
          </div>
          <div className="navigation-element">
            Collaborations
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
        <div className="card">
          <div className="item">
            <Image
              className="dark:invert"
              src="/profile.png"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <div className="title mt-1">
              Ian LEDIG
            </div>
            <div className="chip mt-1">
              Open to work
            </div>
          </div>
        </div>
        <div className="item">
          <div className="title">
            Need a website ?
          </div>
        </div>
      </div>
      <div className="category">
        <div className="category-title">
          Collaborations
        </div>
        <div className="content">
          <a href="https://airfrance.fr/" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/airfrance.svg"
              alt="Air France logo"
              width={300}
              height={0}
              priority
            />
          </a>
          <a href="https://probtp.com/" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/probtp.png"
              alt="Pro BTP logo"
              width={150}
              height={0}
              priority
            />
          </a>
          <a href="https://cawe.com/" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/cawe.svg"
              alt="CAWE logo"
              width={150}
              height={0}
              priority
            />
          </a>
          <a href="https://moonflyff.fr/" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/moonflyff.png"
              alt="Moon Flyff logo"
              width={120}
              height={0}
              priority
            />
          </a>
          <a href="" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/forsakenkingdom.png"
              alt="Forsaken Kingdom logo"
              width={120}
              height={0}
              priority
            />
          </a>
        </div>
      </div>
      <div className="category">
        <div className="category-title">
          Knowledges
        </div>
        <div className="content">
          <div className="item">
            <SkillCardComponent
                href="https://angular.dev/"
                src="/skills/angular.svg"
                alt="Angular logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                href="https://react.dev/"
                src="/skills/react.svg"
                alt="React logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                href="https://python.org/"
                src="/skills/python.svg"
                alt="Python logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                href="https://java.com/"
                src="/skills/java.svg"
                alt="Java logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                href="https://spring.io/"
                src="/skills/spring.svg"
                alt="Spring logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                href=""
                src="/skills/cpp.svg"
                alt="C++ logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                href=""
                src="/skills/csharp.svg"
                alt="CSharp logo"
            />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="category-title">
          Projects
        </div>
        <div className="content">
          <div className="item">
            <ProjectCardComponent />
          </div>
          <div className="item">
            <ProjectCardComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
