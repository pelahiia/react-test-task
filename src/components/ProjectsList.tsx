import cardsData from '../cardsData.json';
import { ProjectCard } from './ProjectCard';

export const ProjectsList: React.FC = () => {
  return (
    <div className="projects-list">
      {cardsData.map((card) => (
        <ProjectCard
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  )
}