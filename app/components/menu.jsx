import ActiveLink from './activeLink.tsx'

export default function Menu (){
    return (
        <header style={{flex: "row"}}>
            <ActiveLink
                linkText="HOME"
                linkSrc="../"
            />
            <ActiveLink
                linkText="EXPERIENCE"
                linkSrc="/experience"
            />
            <ActiveLink
                linkText="PROJECTS"
                linkSrc="/projects"
            />
            <ActiveLink
                linkText="ABOUT ME"
                linkSrc="./about"
            />
            <ActiveLink
                linkText="PICTURES"
                linkSrc="./pictures"
            />
      </header>
    );
}