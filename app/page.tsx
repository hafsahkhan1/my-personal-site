import Menu from "./components/menu"

export default function Home() {
  return (
    <div style={{margin: "30px"}}>
      <Menu/>
      <div style={{display: "flex", flex: "row", justifyContent: "space-between", margin:"30px"}}>
        <img src="homePage/angelWings.jpeg"/>
        <div style={{alignItems: "center", textAlign: "right"}}>
          <h1 style={{ fontSize: '315px', marginBottom: "0px"}}>hello.</h1>
          <p style={{ fontSize: '50px', marginTop: "0px"}}>Welcome to my personal site!</p>
        </div>
      </div>
    </div>
  );
}
