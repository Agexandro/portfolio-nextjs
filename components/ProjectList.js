import projects from '../public/projects.json'
import ProjectItem from './ProjectItem';
import style from '../styles/ProjectList.module.css'

const ProjectList = () => {
    return (
        <div className={style.grid}>
        {
            projects.map(project => (
                <ProjectItem 
                image={project.image} 
                title={project.title} 
                description={project.description}
                tools ={project.tools}
                demo={project.demo}
                repo={project.repo}/>
            ))
        }
        </div>
    )
}

export default ProjectList;