import "./AuthForms.modules.css";

import { useForm } from "../../hooks/useForm";
import { login, register } from "../../handlers/auth";

export const AuthForms = ({ formName }) => {
  const handler = formName === "login" ? login : register;

  const { values, onChange, onSubmit } = useForm({
    handler,
    formName,
  });

  const formDetails = {
    login: [
      { label: "email", name: "email", type: "text", required: true },
      { label: "password", name: "password", type: "password", required: true },
    ],
    register: [
      { label: "email", name: "email", type: "text", required: true },
      { label: "password", name: "password", type: "password", required: true },
      {
        label: "confirm password",
        name: "confirm-password",
        type: "password",
        required: true,
      },
    ],
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form-heading">
        <h2>{formName}</h2>
      </div>
      <hr></hr>
      <div className="auth-form-body">
        <form onSubmit={onSubmit}>
          {formDetails[formName].map((e) => (
            <div className="input-field" key={e.name}>
              <label>{e.label}</label>
              <input
                type={e.type}
                name={e.name}
                value={values[e.name] || ""}
                onChange={onChange}
              />
            </div>
          ))}
          <button className="btn btn-orange animation-up">{formName}</button>
        </form>
      </div>
      <hr></hr>
      <div className="auth-form-footer">
        {formName === "login" ? (
          <p>
            Don't have an account? <span>Sign In</span>
          </p>
        ) : (
          <p>
            Already have an account? <span>Login In</span>
          </p>
        )}
      </div>
    </div>
  );
};
