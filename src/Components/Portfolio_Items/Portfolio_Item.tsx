import IMG1 from "../../assets/website-design-2.png";
import IMG2 from "../../assets/BotPFP.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio!",
    subtext: "My personal website repo!",
    github: "https://github.com/shaneTF/Portfolio-Website",
  },
  {
    id: 2,
    image: IMG2,
    title: "Warbot!",
    subtext: "You'll have to ask about this one as it's a private repo!",
    github: "https://github.com/shaneTF/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div>
        {data.map(({ id, image, title, subtext, github }) => {
          return (
            <article key={id}>
              <div>
                <img
                  className="object-scale-down h-[40rem] w-[40rem]"
                  src={image}
                  alt={title}
                />
              </div>
              <h3>{title}</h3>
              <small>{subtext}</small>
              <div>
                <a href={github} target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
