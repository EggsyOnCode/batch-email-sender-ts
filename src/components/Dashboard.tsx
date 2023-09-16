import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useReducer } from "react";
import { reducer } from "../hooks/useReducer";
import AddIcon from "@mui/icons-material/Add";

export interface Email {
  id: number;
  to: string;
  subject: string;
  email: string;
}

const emails: Email[] = [
  { id: 0, to: "", subject: "", email: "" },
  { id: 1, to: "", subject: "", email: "" },
];

const Dashboard: React.FC = () => {
  const [count, setCount] = useState(0);
  const { logout, user } = useAuth0(undefined);
  const [state, dispatch] = useReducer(reducer, { emails });

  // state handlers
  function handleCount(action: string) {
    if (action === "+") {
      setCount((prevState) => prevState + 1);
    } else if (action === "-") {
      setCount((prevState) => prevState - 1);
    }
  }
  return (
    <div className="min-h-screen w-screen bg-blue-950 flex-col items-center justify-center">
      <section className="navbar h-[45px] bg-black w-screen flex justify-around">
        <h1 className="text-[18px] text-white pt-3">{`Welcome ${user}`}</h1>
        <button
          className="bg-yellow-500 p-2 m-1 rounded-lg text-black text-center"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </section>

      <section className="counter pt-10 flex justify-center items-center hover:cursor-pointer">
        <div
          className="bg-yellow-400 w-fit p-2 rounded-2xl"
          onClick={() => handleCount("+")}
        >
          <AddIcon>Hello</AddIcon>
          <h1>New Email</h1>
        </div>
      </section>
      <section className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.emails.map((obj, index) => {
          return (
            <div className=" m-3 flex flex-col justify-center items-center bg-yellow-600 from-slate-500 to-yellow-400 rounded-lg p-4">
              <input
                type="text"
                placeholder="To:"
                className="bg-white text-black mb-2 w-[350px] rounded-md"
              />
              <input
                type="text"
                placeholder="Subject:"
                className="bg-white text-black mb-2 w-[350px] rounded-md"
              />
              <input
                placeholder="Message:"
                className="bg-white text-black h-[200px] w-[360px] md:w-[400px] lg:w-[450px] rounded-md"
              />
              <div className="flex flex-row mt-2">
                <button className="mr-40 bg-green-800 rounded-xl p-2">Send</button>
                <button className="bg-red-700 rounded-xl p-2">Discard</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Dashboard;
