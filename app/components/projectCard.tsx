'use client'

import { useState } from "react";
import ImageCarousel from "./imgCarousel"
import ActiveLink from "./activeLink"
import Modal from "./Modal"

type images = {
    id: number;
    url: string;
};

type skills = {
    id: number;
    skill: string;
}

export interface project {
    id: number,
    title: string,
    snap: string,
    role: string,
    repo: string,
    link?: string,
    place: string,
    location: string,
    desc1?: string,
    desc2?: string,
    desc3?: string,
    images?: images[];
    skills: skills[]
};

export default function projectCard({ title, snap, role, repo, link, place, location, desc1, desc2, desc3, images, skills }:project){
    const [open, setOpen] = useState(false);
    return(
        <div>
            <div className="card">
                <div style={{alignItems: "center", backgroundColor: "transparent"}}><button onClick={() => setOpen(true)}>View Project: {snap}</button></div>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px", placeItems: "center"}}>
                    {skills && skills.map((proj) => (
                        <div className="skill" key={proj.id}>{proj.skill}</div>
                    ))}
                </div>
            </div>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <div style={{width: "75%", marginLeft: "100px"}}>{images? <ImageCarousel images={images} /> : ""}</div>
                <div style={{display: "flex", flex: "row", alignItems:"center"}}>
                    <div>
                        <h5 style={{marginBottom: "0px"}}>{title}</h5>
                        <p style={{whiteSpace: "pre"}}><b>{role}</b>    |    <ActiveLink linkText={"Github Repo"} linkSrc={repo} isMenu={false}/>    |    {link ? <>Check it out <ActiveLink linkText={"here!"} linkSrc={link} isMenu={false}/>     |</> : ""}     {place}    |    <i>{location}</i></p>
                        <p>{desc1 ? desc1 : ""}</p>
                        <p>{desc2 ? desc2 : ""}</p>
                        <p>{desc3 ? desc3 : ""}</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}