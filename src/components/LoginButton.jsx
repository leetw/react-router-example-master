import React from "react";

export default function LoginButton(probs) {
  console.log(probs);
  return (
    <div>
      <p>
        <button
          onClick={() => {
            console.log("clicked");
            setTimeout(() => {
              probs.history.push("/");
            }, 500);
          }}
        >
          Login
        </button>{" "}
      </p>
    </div>
  );
}

