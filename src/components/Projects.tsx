import { ProjectsList } from "./ProjectsList"

export const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects-title">Discover our work</div>
      <ProjectsList />
    </div>
  )
}