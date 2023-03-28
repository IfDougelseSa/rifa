import Datetime from "components/Datetime";
import RandomNumber from "components/RandomNumber";

const Sweepstake = () => {
  const teste = RandomNumber();
  return (
    <>
      <div className="home-container bg-primary">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-6">
              <Datetime />
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sweepstake;
