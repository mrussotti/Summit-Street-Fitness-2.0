import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Summit Street Fitness</Link>
        <ul>
            <CustomLink to="/Beginner">Beginner</CustomLink>
            <CustomLink to="/Intermediate">Intermediate</CustomLink>
            <CustomLink to="/Advanced">Advanced</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}