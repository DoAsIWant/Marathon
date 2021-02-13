import Header from "../../Components/Header"
import Layout from "../../Components/Layout"
import Footer from "../../Components/Footer"
import bg1 from "../../images/bg1.jpg"
import bg2 from "../../images/bg2.jpg";
import './style.module.css';
import PokemonCard from "../../Components/PokemonCard";
import MenuHeader from "../../Components/MenuHeader"


 const HomePage = () =>{

  return (
    <>
    <MenuHeader></MenuHeader>
    <Header title={"Head"} descr={"This is header"} ></Header>

    <Layout id={"first"} title={"First Block"} bgImg = {bg1} bgColor = {false}>
      <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
      </p>
    </Layout>

    <Layout id={"second"} title={"Second Block"} bgImg = {false} bgColor = {"#1abc9c"}>
      <div>
        <h2>Leys play game</h2>
      </div>
    </Layout>
    <Layout id={"third"} title={"Third Block"}  bgColor = {false} bgImg={bg2}></Layout>
    <Footer></Footer>
    </>
  );
}

export default HomePage;
