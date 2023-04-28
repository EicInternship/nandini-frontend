import React, { useState } from "react";

const PasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const regex = 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      setPasswordValid(false);
    } else {
      setPasswordError("");
      setPasswordValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordValid) {
      // submit the form
    } else {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      </div>
      <button type="submit" disabled={!passwordValid}>
        Signup
      </button>
    </form>
  );
};

export default PasswordValidation;
