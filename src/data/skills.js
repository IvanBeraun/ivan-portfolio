import html5Logo from '../assets/technologies/html5.png'
import css3Logo from '../assets/technologies/css3.png'
import javascriptLogo from '../assets/technologies/javascript.png'
import reactLogo from '../assets/technologies/react.png'
import javaLogo from '../assets/technologies/java.png'
import springBootLogo from '../assets/technologies/spring-boot.png'
import mysqlLogo from '../assets/technologies/mysql.png'
import pythonLogo from '../assets/technologies/python.png'
import bootstrapLogo from '../assets/technologies/bootstrap.png'
import gitLogo from '../assets/technologies/git.png'
import githubLogo from '../assets/technologies/github.png'
import vscodeLogo from '../assets/technologies/vscode.png'
import intellijLogo from '../assets/technologies/intellij-idea.png'

const skills = [
    {
        category: 'Frontend',
        icon: 'bi-window',
        technologies: [
            { name: 'HTML5', image: html5Logo },
            { name: 'CSS3', image: css3Logo },
            { name: 'JavaScript', image: javascriptLogo },
            { name: 'React', image: reactLogo },
            { name: 'Bootstrap', image: bootstrapLogo },
        ],
    },
    {
        category: 'Backend y lenguajes',
        icon: 'bi-server',
        technologies: [
            { name: 'Java', image: javaLogo },
            { name: 'Spring Boot', image: springBootLogo },
            { name: 'Python', image: pythonLogo },
        ],
    },
    {
        category: 'Bases de datos',
        icon: 'bi-database',
        technologies: [
            { name: 'MySQL', image: mysqlLogo },
        ],
    },
    {
        category: 'Herramientas',
        icon: 'bi-tools',
        technologies: [
            { name: 'Git', image: gitLogo },
            { name: 'GitHub', image: githubLogo },
            { name: 'VS Code', image: vscodeLogo },
            { name: 'IntelliJ IDEA', image: intellijLogo },
        ],
    },
]

export default skills