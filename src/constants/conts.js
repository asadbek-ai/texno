import { MdAddLocation } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BiUser } from "react-icons/bi";

export const btnData = [
  { id: 1, title: "Destination", icon: GoLocation, path: "/destination" },

  {
    id: 3,
    title: "Create-destination",
    icon: MdAddLocation,
    path: "/create-des",
  },
  {
    id: 4,
    title: "Users",
    icon: BiUser,
    path: "/user",
  },
];
