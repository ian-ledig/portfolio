import Image from "next/image";
import "./home.css";
import RandomTextComponent from "../components/random-text/random-text.tsx";
import SkillCardComponent from '../components/skill-card/skill-card.tsx';
import ProjectCardComponent from '../components/project-card/project-card.tsx';

export default function Home() {
  return (
    <div>
      <div className="home" id="home">
        <div className="navigation-bar">
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
          </div>
          <a href="" className="navigation-element">
            Contact
          </a>
        </div>
        <div className="item">
          <Image
            className="dark:invert"
            src="/profile.png"
            alt="Next.js logo"
            width={250}
            height={38}
            priority
          />
          <div className="text-3xl font-bold text-white mt-1">
            Ian LEDIG
          </div>
          <div className="home-chip">
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
          <a href="https://airfrance.fr/" target="_blank" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/airfrance.svg"
              alt="Air France logo"
              width={300}
              height={0}
              priority
            />
          </a>
          <a href="https://probtp.com/" target="_blank" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/probtp.png"
              alt="Pro BTP logo"
              width={150}
              height={0}
              priority
            />
          </a>
          <a href="https://cawe.com/" target="_blank" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/cawe.svg"
              alt="CAWE logo"
              width={150}
              height={0}
              priority
            />
          </a>
          <a href="" target="_blank" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/forsakenkingdom.png"
              alt="Forsaken Kingdom logo"
              width={120}
              height={0}
              priority
            />
          </a>
          <a href="" target="_blank" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/alysiaonline.png"
              alt="Alysia Online logo"
              width={120}
              height={0}
              priority
            />
          </a>
          <a href="https://moonflyff.fr/" target="_blank" className="item">
            <Image
              className="dark:invert"
              src="/collaboration/moonflyff.png"
              alt="Moon Flyff logo"
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
          <div className="project-item">
            <ProjectCardComponent 
              image="/projects/airfrance.png"
              title="Airport Flight Consultation"
              description="Development of a flight, passenger, baggage consultation application for airport agents. Including architecture, development, testing, deployment and production release on the cloud."
              chips={[
                { label: "Angular", color: "bg-rose-400" },
                { label: "Java", color: "bg-cyan-200" },
                { label: "Spring", color: "bg-green-400" },
                { label: "SQL", color: "bg-neutral-100" },
                { label: "Azure", color: "bg-sky-500" },
              ]}
              links={[]}
            />
          </div>
          <div className="project-item">
            <ProjectCardComponent 
              image="/projects/moncompteretraite.png"
              title="French Retirement Application"
              description="Development of “Mon Compte Retraite” mobile application for iOS and Android, ensured communication security, production monitoring and designed batch processes."
              chips={[
                { label: "Angular", color: "bg-rose-400" },
                { label: "Ionic", color: "bg-sky-300" },
                { label: "Java", color: "bg-cyan-200" },
                { label: "Spring", color: "bg-green-400" },
                { label: "SQL", color: "bg-neutral-100" },
              ]}
              links={[
                { label:"IOS", href:"https://apps.apple.com/fr/app/mon-compte-retraite/id1176066236" },
                { label:"Android", href:"https://play.google.com/store/apps/details?id=fr.agircarrco.smartretraite" },
              ]}
            />
          </div>
          <div className="project-item">
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
              links={[
                { label:"Github", href:"https://github.com/ian-ledig/kanji-test" },
              ]}
            />
          </div>
          <div className="project-item">
            <ProjectCardComponent 
              image="/projects/cawe.png"
              title="CAWE Stock Traceability"
              description="Development of a stock traceability mobile application for Android platforms."
              chips={[
                { label: "C#", color: "bg-fuchsia-100" },
                { label: "Xamarin", color: "bg-sky-300" },
                { label: "SQL", color: "bg-neutral-100" },
              ]}
              links={[]}
            />
          </div>
          <div className="project-item">
            <ProjectCardComponent 
              image="/projects/alysiaonline.png"
              title="MMORPG Alysia Online"
              description="Modernizing a older open-source multiplayer game by incorporating current industry gameplay standards, mechanics and optimized the codebase to align with contemporary user expectations and performance benchmarks."
              chips={[
                { label: "C++", color: "bg-cyan-500" },
                { label: "SQL", color: "bg-neutral-100" },
              ]}
              links={[]}
            />
          </div>
        </div>
        <div className="content">
          <div className="project-item">
            <ProjectCardComponent 
              image="/projects/dynamx.png"
              title="3D Model converter"
              description="Contains two programs that allow converting Toolbox .java models designed for Minecraft Flan's mod to work with the DynamX mod."
              chips={[
                { label: "Python", color: "bg-yellow-400" },
                { label: "Java", color: "bg-cyan-200" },
              ]}
              links={[
                { label:"Github", href:"https://github.com/ian-ledig/FlanToDynamX" },
              ]}
            />
          </div>
          <div className="project-item">
            <ProjectCardComponent 
              image="/projects/archeroes.png"
              title="Serious Archeology Game"
              description="Archeroes is a serious game designed to introduce players to the basics and principles of archaeology."
              chips={[
                { label: "Java", color: "bg-cyan-200" },
                { label: "JavaFX", color: "bg-sky-300" },
              ]}
              links={[
                { label:"Github", href:"https://github.com/ian-ledig/ekip-serious-game-archeros" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
