//? import icons
import { BiSolidError } from "react-icons/bi";

const Error = ({ text, error }) => {
  console.log(error);
  return (
    <div className="error">
      <BiSolidError />
      <h3>There was a problem getting {text} !</h3>
      <br />
      <p>Guidance : Turn on VPN</p>
      <br />
      <p>Please send me a problem report.</p>
      <p>Email : mo.mahdi.ka@gmail.com</p>
      <p>Phone : +98 - 901 528 2320</p>
    </div>
  );
};

export default Error;
