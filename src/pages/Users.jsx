import React from "react";
import { useSelector } from "react-redux";
const Users = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <table className=" border-[2px] collapse-collapse">
        <thead>
          <tr className="text-[10px] font-[600] sm:text-[12px] md:text-[15px] lg:text-[17px]">
            <td className=" w-[5%] text-center">№</td>
            <td className=" w-[35%]">Full name</td>
            <td className=" w-[35%]">Email</td>
            <td className=" w-[20%]"> Phone number</td>
            <td className=" w-[20%]">Tour name</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              className="text-[10px] font-[600] sm:text-[12px] md:text-[15px] lg:text-[17px]"
              key={index}
            >
              <td className=" w-[5%] text-center">{user.id}</td>
              <td className=" w-[35%]">{user.name}</td>
              <td className=" w-[35%]">{user.email}</td>
              <td className=" w-[20%]">{user.phoneNumber}</td>
              <td className=" w-[20%]">{user.tourName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
