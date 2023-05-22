import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #1877f2;
    color: #ffffff;
    border: 4px solid #1877f2;
    border-radius: 20px;
    gap: 10px;
  }

  .form__control {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form__label {
    width: 80px;
  }

  .form__input {
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: #1d1c64;
  }

  .form__button {
    margin-top: 5px;
    padding: 8px;
    width: 100px;
    background-color: #1d1c64;
    color: #ffffff;
    border-radius: 10px;
    border: 2px solid #ffffff;
    :disabled {
      background-color: #1877f2;
      color: #ffffff;
      cursor: auto;
    }
  }
`;

export default LoginFormStyled;
