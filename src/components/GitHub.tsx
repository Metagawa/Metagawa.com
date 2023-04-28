import React from "react";
import "./GitHub.css";

const GitHub: React.FC = () => {
  return (
    <section id="github" className="github">
      <h2>GitHub Portfolio</h2>
    <div className="project-type-wrapper">
        <div className="main-projects">
          <ul>
          <li>
            <a href="https://great-wave-games.com/" target="_blank" rel="noopener noreferrer">
              Great Wave Games
            </a>
          </li>
          <li>
            <a href="https://store.steampowered.com/app/2410050/Novus_Conquest/" target="_blank" rel="noopener noreferrer">
              Novus Conquest
            </a>
          </li>
        </ul>
      </div>
      <div className="hobby-projects">
        <h3>Hobby Projects</h3>
        <ul>
          <li>
            <a href="https://mohidoi.com/" target="_blank" rel="noopener noreferrer">
              Mohidoi
            </a>
          </li>
          <li>
            <a href="https://github.com/Metagawa/Steam-Deck-Themes" target="_blank" rel="noopener noreferrer">
              Steam Deck Themes
            </a>
          </li>
          <li>Electronic Hardware Restoration & Updated circuit boards for old consoles</li>
          <li>
            <a href="https://www.duolingo.com/profile/Metagawa" target="_blank" rel="noopener noreferrer">
              Learning Japanese
            </a>
          </li>
        </ul>
      </div>
      <div className="learning-interests">
        <h3>Learning About</h3>
        <ul>
          <li>Integration of AI Development Technologies</li>
          <li>Game and Software Translation practices</li>
        </ul>
        </div>
        </div>
      <div className="github-stats">
        <h3>GitHub Stats</h3>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Metagawa&theme=tokyonight"
          alt="Tom's GitHub Streak"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=Metagawa&show_icons=true&count_private=true&theme=tokyonight&include_all_commits=true&locale=en"
          alt="Tom's GitHub stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Metagawa&hide_progress=true&show_icons=true&count_private=true&theme=tokyonight&include_all_commits=true"
          alt="Tom's top programming languages"
        />
      </div>
    </section>
  );
};

export default GitHub;
