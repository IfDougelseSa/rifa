import "./styles.css";
import DogsImg from "assets/images/dogs.png";
import Card from "components/Card";

const Home = () => {
  return (
    <>
      <div className="home-container bg-primary">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-6">
              <div className="text-container">
                <h3>Rifa do Zezé & Mel</h3>

                <p>
                  Oie, amigos. Cá estou com a rifa do Zé e da memeca. Paguei 500
                  reais dos 1700, minha dívida diminuiu pra 1200 rs. Como a mais
                  nova desempregada do sistema, venho oferecer a rifa da alegria
                  no valor de 10 reais cada número com prêmio de 100zao! O que
                  aconteceu foi o seguinte: eles tentaram pegar um porco espinho
                  e acabaram bem machucados (aliás, não recomendo a clínica da
                  Hermínia perto da Santa Casa). Quem puder ajudar, agradeço.
                </p>
                <p>Faltam 20 números!</p>
                <table className="table table-information">
                  <tr>
                    <th>Comprador</th>
                    <th>Números</th>
                    <th>% de ganhar</th>
                  </tr>
                  <tr>
                    <td>Jensen</td>
                    <td>1</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Jão</td>
                    <td>2</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Xepa</td>
                    <td>3</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Leo</td>
                    <td>5, 7, 10, 11, 15, 19, 26, 29, 30, 50 </td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>Felipe</td>
                    <td>8</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Pimpão</td>
                    <td>9, 21</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>Monteiro</td>
                    <td>12</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>May</td>
                    <td>13</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Bugs</td>
                    <td>20</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Vev</td>
                    <td>24, 56</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>Tic</td>
                    <td>27</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Helo Ams</td>
                    <td>28</td>
                    <td>2,5%</td>
                  </tr>
                  <tr>
                    <td>Izumi</td>
                    <td>31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Geobanna</td>
                    <td>49</td>
                    <td>2,5%</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src={DogsImg}
                  alt="Nome do produto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
