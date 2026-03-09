import Image from "next/image";

export default function Welcome() {
  return (
    <div>
        <h1>Hello</h1>
        <h3>Welcome to my personal site!</h3>
        <p>My name is Hafsah Khan and I am currently a sophomore at UIC studying computer science.</p>
        <figure>
            <img src = "sunset59.jpeg" width = "400"/>
            <figcaption>Here's a picture I took at the train station I commute from!</figcaption>
        </figure>
    </div>
  );
}
