import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const Dashboard: React.FC = () => {
    const {logout} = useAuth0(undefined);
  return (
    <div>
      Dashboard
      <h1>Hello there!</h1>
      <button
        className="p-3  rounded-lg text-[20px] bg-green-500 w-[110px]"
        onClick={() => logout()}
      >
        Log Out!
      </button>
    </div>
  );
}

export default Dashboard