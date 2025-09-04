import { portfolio } from "../../data/data";
import PortfolioItem from "../portfolioItem/portfolioItem";
import Title from "../title/title";

const Portfolio = () => {
  return (
    <div id="projects" className="min-h-screen md:pt-20">
      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item, index) => {
            return (
              <PortfolioItem
                title={item.title}
                img={item.img}
                stack={item.stack}
                links={item.links}
                key={`project-${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
