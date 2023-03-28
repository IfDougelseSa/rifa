import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Numbers = (props: any) => {
  const hasNumber = (hasNum: boolean) => {
    if (hasNum === true) {
      return true;
    }
    return false;
  };
  return (
    <>
      <Tippy content={props.name}>
        <td className={hasNumber(props.hasNum) ? "has-number" : ""}>
          {props.num}
        </td>
      </Tippy>
    </>
  );
};

export default Numbers;
