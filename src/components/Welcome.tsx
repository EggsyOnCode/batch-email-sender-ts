import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Welcome: React.FC = () => {
  const {loginWithRedirect , logout} = useAuth0(undefined);


  return (
    <div className="bg-blue-950 flex justify-center items-center fixed inset-0">
      <div className="bg-white font-adobe flex-col justify-center items-center p-5">
        <h1 className="text-black text-center font-bold text-[30px]">
          Welcome to Batch Email Sender <br />
          <span className="text-green-900  font-semibold text-[19px]">
            Your Mobile Friendly Solution to sending multiple personalized
            emails productively!
          </span>
        </h1>

        <section className="CTA flex-col justify-center items-center">
          <h1 className="text-[18px] mt-10 text-red-600">
            Submit your email to get started
          </h1>
          <div className="flex justify-center items-center mt-6">
            <button className="p-3 mr-10 rounded-lg text-[20px] bg-green-500 w-[110px]" onClick={()=>loginWithRedirect()}>
              Login
            </button>
            <button className="p-3  rounded-lg text-[20px] bg-green-500 w-[110px]" onClick={()=>logout()}>
              Log Out!
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
