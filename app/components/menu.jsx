import ActiveLink from './activeLink.tsx'

export default function Menu (){
    return (
        <header style={{flex: "row", marginBottom: "30px"}}>
            <ActiveLink
                linkText="HOME"
                linkSrc="../"
                isMenu={true}
            />
            <ActiveLink
                linkText="EXPERIENCE"
                linkSrc="/experience"
                isMenu={true}
            />
            <ActiveLink
                linkText="PROJECTS"
                linkSrc="/projects"
                isMenu={true}
            />
            <ActiveLink
                linkText="ABOUT ME"
                linkSrc="./about"
                isMenu={true}
            />
            <ActiveLink
                linkText="GALLERY"
                linkSrc="./pictures"
                isMenu={true}
            />
      </header>
    );
}