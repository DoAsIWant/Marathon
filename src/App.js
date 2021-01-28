import Header from "./Components/Header"
import Layout from "./Components/Layout"
import Footer from "./Components/Footer"
import bg1 from "./images/bg1.jpg"
import bg2 from "./images/bg2.jpg";
import './App.css';

function App() {
  return (
    <>
    <Header title={"Head"} descr={"This is header"}></Header>
    <Layout id={"first"} title={"First Block"} descr={"this is the first block"} bgImg = {bg1} bgColor = {false}></Layout>
    <Layout id={"second"} title={"Second Block"} descr={"This is a Second Block"} bgImg = {false} bgColor = {"#1abc9c"}></Layout>
    <Layout id={"third"} title={"Third Block"} descr={"This is the third Block"} bgColor = {false} bgImg={bg2}></Layout>
    <Footer></Footer>
    </>
  );
}

export default App;
