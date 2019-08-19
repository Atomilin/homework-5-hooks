import React, {useReducer} from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

function reducer(state, action) {
    switch (action.type) {
      case "set_email":
        return {
          ...state,
          email: action.value
        };
      case "set_password":
        return {
          ...state,
          password: action.value
        };
      case "submit":
        return {
          ...state,
          success: state.email && state.password
        };
      default:
    }
  }

export const Form = () => {
    const [state, dispatch] = useReducer(reducer, {
        email: "",
        password: "",
        success: false
      });
    
      function handleInput(evt) {
        const {
          target: { name, value }
        } = evt;
    
        dispatch({
          type: `set_${name}`,
          value
        });
      }
    
      function handleClick() {
        dispatch({
          type: "submit"
        });
      }
    
      return (
        <div>
          <input
            data-testid="email-input"
            type="text"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={state.password}
            onChange={handleInput}
          />
          <button data-testid="submit" onClick={handleClick}>
            Submit
          </button>
          {state.success && <div data-testid="success-message">Вы вошли</div>}
        </div>
      );
    };
