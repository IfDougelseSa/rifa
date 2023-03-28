import Numbers from "components/Numbers";
import "./styles.css";

const Card = () => {
  return (
    <>
      <table className="table table-numbers">
        <tr>
          <Numbers name="Jensen" num="1" hasNum={true} />
          <Numbers name="Jão" num="2" hasNum={true} />
          <Numbers name="Xepa" num="3" hasNum={true} />
          <Numbers name=" " num="4" hasNum={false} />
          <Numbers name="Leo" num="5" hasNum={true} />
          <Numbers name=" " num="6" hasNum={false} />
        </tr>
        <tr>
          <Numbers name="Leo" num="7" hasNum={true} />
          <Numbers name="Felipe" num="8" hasNum={true} />
          <Numbers name="Pimpão" num="9" hasNum={true} />
          <Numbers name="Leo" num="10" hasNum={true} />
          <Numbers name="Leo" num="11" hasNum={true} />
          <Numbers name="Monteiro" num="12" hasNum={true} />
        </tr>
        <tr>
          <Numbers name="May" num="13" hasNum={true} />
          <Numbers name="Leo" num="14" hasNum={true} />
          <Numbers name=" " num="15" hasNum={false} />
          <Numbers name=" " num="16" hasNum={false} />
          <Numbers name=" " num="17" hasNum={false} />
          <Numbers name=" " num="18" hasNum={false} />
        </tr>

        <tr>
          <Numbers name="Leo" num="19" hasNum={true} />
          <Numbers name="Bugs" num="20" hasNum={true} />
          <Numbers name="Pimpão" num="21" hasNum={true} />
          <Numbers name=" " num="22" hasNum={false} />
          <Numbers name=" " num="23" hasNum={false} />
          <Numbers name="Vev" num="24" hasNum={true} />
        </tr>
        <tr>
          <Numbers name=" " num="25" hasNum={false} />
          <Numbers name="Leo" num="26" hasNum={true} />
          <Numbers name="Tic" num="27" hasNum={true} />
          <Numbers name="Helo Ams" num="28" hasNum={true} />
          <Numbers name="Leo" num="29" hasNum={true} />
          <Numbers name="Leo" num="30" hasNum={true} />
        </tr>
        <tr>
          <Numbers name="Izumi" num="31" hasNum={true} />
          <Numbers name="Izumi" num="32" hasNum={true} />
          <Numbers name="Izumi" num="33" hasNum={true} />
          <Numbers name="Izumi" num="34" hasNum={true} />
          <Numbers name="Izumi" num="35" hasNum={true} />
          <Numbers name="Izumi" num="36" hasNum={true} />
        </tr>
        <tr>
          <Numbers name="Izumi" num="37" hasNum={true} />
          <Numbers name="Izumi" num="38" hasNum={true} />
          <Numbers name="Izumi" num="39" hasNum={true} />
          <Numbers name="Izumi" num="40" hasNum={true} />
          <Numbers name="Izumi" num="41" hasNum={true} />
          <Numbers name="Izumi" num="42" hasNum={true} />
        </tr>
        <tr>
          <Numbers name="Izumi" num="43" hasNum={true} />
          <Numbers name="Izumi" num="44" hasNum={true} />
          <Numbers name="Izumi" num="45" hasNum={true} />
          <Numbers name="Izumi" num="46" hasNum={true} />
          <Numbers name="" num="47" hasNum={false} />
          <Numbers name="" num="48" hasNum={false} />
        </tr>
        <tr>
          <Numbers name="Geobanna" num="49" hasNum={true} />
          <Numbers name="Leo" num="50" hasNum={true} />
          <Numbers name="" num="51" hasNum={false} />
          <Numbers name="" num="52" hasNum={false} />
          <Numbers name="" num="53" hasNum={false} />
          <Numbers name="" num="54" hasNum={false} />
        </tr>
        <tr>
          <Numbers name="" num="55" hasNum={false} />
          <Numbers name="Vev" num="56" hasNum={true} />
          <Numbers name="" num="57" hasNum={false} />
          <Numbers name="" num="58" hasNum={false} />
          <Numbers name="" num="59" hasNum={false} />
          <Numbers name="" num="60" hasNum={false} />
        </tr>
      </table>
    </>
  );
};

export default Card;
