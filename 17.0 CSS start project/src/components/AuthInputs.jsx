import {useState} from "react";
import {styled} from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  // color: #6b7280;
  //color: ${(props)=> (props.$invalid? "red" : "#6b7280")};
  color: ${({$invalid}) => ($invalid ? "red" : "#6b7280")};
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  //background-color: #d1d5db;
  background-color: ${({$invalid}) => ($invalid ? "yellow" : "#d1d5db")};
  //color: #04265c;
  color: ${({$invalid}) => ($invalid ? "red" : "#04265c")};
  //border: 1px solid transparent;
  border: 1px solid ${({$invalid}) => ($invalid ? "red" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

&:hover {
  background-color: #f0920e;
}
`;

export default function AuthInputs() {
  // State quản lý dữ liệu nhập vào và trạng thái đã submit hay chưa
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // Xử lý khi người dùng nhập dữ liệu
  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }
  // Xử lý khi người dùng bấm nút đăng nhập
  function handleLogin() {
    setSubmitted(true);
  }
  // Validation kiểm tra tính hợp lệ
  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email" 
            //style = {{backgroundColor: emailNotValid? "yellow":"red"}}
            // className={emailNotValid ? "$invalid" : undefined}
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            //style = {{backgroundColor: emailNotValid? "yellow":"red"}}
            // className={passwordNotValid ? "$invalid" : undefined}
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
