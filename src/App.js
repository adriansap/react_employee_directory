import React from "react";
import List from "./components/List";

const employees = [
  {
    id: 1,
    image: "http://www.placehold.it/150x150",
    name: "Suzy Gonzales",
    phone: "(839)-497-9833",
    email: "suzy.g@example.com",
    DOB: "01-19-1986"
  },
  {
    id: 1,
    image: "http://placehold.it/150x150",
    name: "Patty Smith",
    phone: "(839)-127-3333",
    email: "patty.s@example.com",
    DOB: "02-20-1986"
  },
  {
    id: 1,
    image: "http://placehold.it/150x150",
    name: "Ursula Gomez",
    phone: "(839)-444-4833",
    email: "ursula.g@example.com",
    DOB: "03-21-1986"
  },
  {
    id: 1,
    image: "http://placehold.it/150x150",
    name: "Joan Petty",
    phone: "(839)-417-2833",
    email: "joan.p@example.com",
    DOB: "04-22-1986"
  },
  {
    id: 1,
    image: "http://placehold.it/150x150",
    name: "Trisha Wall",
    phone: "(839)-797-0833",
    email: "trisha.w@example.com",
    DOB: "05-10-1986"
  }
 
];

function App() {
  return <List employees={employees} />;
}

export default App;
