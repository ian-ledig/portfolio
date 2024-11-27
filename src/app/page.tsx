import Image from "next/image";
import "./home.css";
import RandomTextComponent from "../components/random-text/random-text.tsx";
import SkillCardComponent from '../components/skill-card/skill-card.tsx';
import ProjectCardComponent from '../components/project-card/project-card.tsx';

export default function Home() {
  return (
    <div>
      <div className="navigation">
        <div className="left">
          <a href="#home" className="navigation-element">
            Home
          </a>
          <a href="#collaborations" className="navigation-element">
            Collaborations
          </a>
          <a href="#specialization" className="navigation-element">
            Specialization
          </a>
          <a href="#projects" className="navigation-element">
            Projects
          </a>
          <a href="" className="navigation-element">
            CV
          </a>
        </div>
        <div className="navigation-element">
          Contact
        </div>
      </div>
      <div className="home" id="home">
        <div className="item">
          <Image
            className="dark:invert"
            src="/profile.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="title-1 text-white mt-1">
            Ian LEDIG
          </div>
          <div className="chip bg-green-400 mt-1">
            Open to work
          </div>
        </div>
        <div className="item home-text w-2/5">
          <div className="mr-2">Need a</div>
          <RandomTextComponent />
          <div>?</div>
        </div>
      </div>
      <div className="category" id="collaborations">
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
      <div className="category" id="specialization">
        <div className="category-title">
          Specialization
        </div>
        <div className="content">
          <div className="item">
            <SkillCardComponent
                title="Angular"
                color0="#DF145A"
                color1="#7A09F3"
                href="https://angular.dev/"
                src="/skills/angular.svg"
                alt="Angular logo"
                width={55}
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="React"
                color0="#61DAFB"
                color1="#61DAFB"
                href="https://react.dev/"
                src="/skills/react.svg"
                alt="React logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="Ionic"
                color0="#4E8EF7"
                color1="#4E8EF7"
                href="https://ionicframework.com/"
                src="/skills/ionic.svg"
                alt="Ionic logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="Electron"
                color0="#47848F"
                color1="#47848F"
                href="https://electronjs.org/"
                src="/skills/electron.svg"
                alt="Electron logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="Android"
                color0="#A4C439"
                color1="#A4C439"
                href="https://android.com/"
                src="/skills/android.svg"
                alt="Android logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="Apple"
                color0="#000000"
                color1="#000000"
                href="https://apple.com/"
                src="/skills/apple.svg"
                alt="Apple logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="Python"
                color0="#3A76A6"
                color1="#3A76A6"
                href="https://python.org/"
                src="/skills/python.svg"
                alt="Python logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="Java"
                color0="#0074BD"
                color1="#0074BD"
                href="https://java.com/"
                src="/skills/java.svg"
                alt="Java logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="Spring"
                color0="#77BC1F"
                color1="#77BC1F"
                href="https://spring.io/"
                src="/skills/spring.svg"
                alt="Spring logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="C++"
                color0="#659AD2"
                color1="#004482"
                href=""
                src="/skills/cpp.svg"
                alt="C++ logo"
            />
          </div>
          <div className="item">
            <SkillCardComponent
                title="C#"
                color0="#9B4F96"
                color1="#68217A"
                href=""
                src="/skills/csharp.svg"
                alt="CSharp logo"
            />
          </div>
        </div>
      </div>
      <div className="category" id="projects">
        <div className="category-title">
          Projects
        </div>
        <div className="content">
          <div className="item">
            <ProjectCardComponent 
              image="/projects/kanjitest.png"
              title="日本語 Vocabulary Test"
              description="Interactive app designed to help users to learn and memorize Japanese vocabulary."
              chips={[
                { label: "Electron", color: "bg-cyan-500" },
                { label: "Javascript", color: "bg-amber-300" },
                { label: "HTML", color: "bg-orange-500" },
                { label: "CSS", color: "bg-sky-600" }
              ]}
              github="https://github.com/ian-ledig/kanji-test"
            />
          </div>
          <div className="item">
            <ProjectCardComponent 
              image="/projects/kanjitest.png"
              title="teeessfsf"
              description="serserwsersdzrsfsefse"
              chips={[
                { label: "Electron", color: "bg-cyan-500" }
              ]}
              github=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
