import logo from "../assets/logo-tuhoc.png";
//import "./Header.css";
//import classes from "./Header.module.css";
import {styled} from "styled-components";

const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 20rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #902e0d;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #8b1717;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
    <StyleHeader>
      <img src={logo} alt="A canvas" />
      <h1>CSS trong React</h1>
      <h2>CSS trong React</h2>
      <p style = {{
        color: "#555",
        backgroundColor: "#f0f0f0",
      }}>Tìm hiểu về css trong react cho người mới.</p>
    </StyleHeader>
  );
}
