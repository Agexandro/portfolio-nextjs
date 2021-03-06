import style from '../styles/ProjectItem.module.css'
import HomeStyle from '../styles/Home.module.css'
import ProjectList from './ProjectList'
import Image from 'next/image'

const ProjectItem = ({ title, image, description, tools, demo, repo }) => {
    return (
        <div className={style.card}>
            <div className={style.image}>
                <Image src={image} 
                layout='fill'
                alt={title}
                blurDataURL="data:..." 
                placeholder='blur'/>
            </div>
            <section className={style.content}>
                <p className={style.cardTitle}>
                    {title}
                </p>
                <br />
                <p className={HomeStyle.text}>
                    {description}. Made with: {tools}
                </p>
                <div className={style.row}>
                    <a target='_blank' className={style.primaryButton} href={demo}>Demo</a>
                    <a target='_blank' className={style.secondaryButton} href={repo}>Code</a>
                </div>
            </section>
        </div>
    )
}

export default ProjectItem;