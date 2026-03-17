import Menu from "./components/menu"

export default function Home() {
  return (
    <div style={{margin: "30px"}}>
      <Menu/>
      <div style={{alignItems: "center", textAlign: "right"}}>
        <h1 style={{ fontSize: '400px', marginBottom: "0px"}}>hello.</h1>
        <p style={{ fontSize: '50px', marginTop: "0px"}}>Welcome to my personal site!</p>
      </div>
    </div>
  );
}
