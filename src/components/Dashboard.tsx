import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useReducer } from "react";
import { reducer } from "../hooks/useReducer";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "../hooks/Redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface Email {
  id: number;
  to: string;
  subject: string;
  email: string;
}

const emails: Email[] = [{ id: 0, to: "", subject: "", email: "" }];

const Dashboard: React.FC = () => {
  const appkey = useAppSelector((state) => state.keySlice.value);
  const [count, setCount] = useState(1);
  const { logout, user } = useAuth0(undefined);
  const navigate = useNavigate();
  const goToConfig = () => navigate("/config");
  const [state, dispatch] = useReducer(reducer, { emails });

  // state handlers
  function handleCount(action: string) {
    if (action === "+") {
      setCount((prevState) => prevState + 1);
      dispatch({ type: "add", payload: { id: count } });
      console.log(count);
    } else if (action === "-") {
      setCount((prevState) => prevState - 1);
    }
  }

  function discardEmail(ID: number) {
    handleCount("-");
    dispatch({ type: "discard", payload: { id: ID } });
  }

  async function sendEmail(to: string, subject: string, content: string) {
    const req = { from: user?.email, to: to, subject: subject, email: content, key: appkey };
    const response = await axios.post("http://localhost:3000/sendEmail", req);
    if(response.status == 200){
      console.log("success");
      
    }else{
      console.log("failure!");
      
    }
  }

  return (
    <div className="min-h-screen w-screen bg-black flex-col items-center justify-center">
      <section className="navbar h-[45px] bg-blue-950 w-screen flex justify-center">
        <img src={user?.picture} alt={user?.name} className="mr-6" />
        <h1 className="text-[18px] text-white pt-3 mr-28">{`Welcome ${user?.name}`}</h1>
        <button
          className="bg-yellow-500 p-2 m-1 rounded-lg text-black text-center"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </section>

      <section className="counter pt-10 flex justify-center items-center hover:cursor-pointer">
        <h1
          className="text-[14px] text-white mr-6 hover:text-orange-300"
          onClick={() => {
            goToConfig();
          }}
        >
          <i>Learn How to Setup Email Sending feature?</i>
        </h1>
        <div
          className="bg-yellow-400 w-fit p-2 rounded-2xl"
          onClick={() => handleCount("+")}
        >
          <AddIcon>Hello</AddIcon>
          <h1>New Email</h1>
        </div>
      </section>
      <section className="pt-10 grid grid-cols-1 col-start-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
        {state.emails.map((obj, index) => {
          return (
            <div className="m-3 flex flex-col justify-center items-center bg-[#758C73] rounded-lg p-4">
              <input
                type="text"
                placeholder="To:"
                className="bg-white text-black mb-2 w-[350px] rounded-md"
                onChange={(e) => {
                  emails[index].to = e.target.value;
                }}
              />
              <input
                type="text"
                placeholder="Subject:"
                className="bg-white text-black mb-2 w-[350px] rounded-md"
                onChange={(e) => {
                  emails[index].subject = e.target.value;
                }}
              />
              <input
                placeholder="Message:"
                className="bg-white text-black h-[200px] w-[340px] md:w-[400px] lg:w-[450px] rounded-md"
                onChange={(e) => {
                  emails[index].email = e.target.value;
                }}
              />
              <div className="flex flex-row mt-2">
                <button
                  className="mr-40 bg-green-800 rounded-xl p-2"
                  onClick={() => sendEmail(obj.to, obj.subject, obj.email)}
                >
                  Send
                </button>
                <button
                  className="bg-red-700 rounded-xl p-2"
                  onClick={() => {
                    console.log(index, obj.id);
                    discardEmail(index);
                  }}
                >
                  Discard
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Dashboard;
