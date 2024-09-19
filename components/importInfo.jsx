import React from "react";
import axios from "axios";

export default async function fetchUsers() {
  let response = await axios.get("http://localhost:3202/api/users/fetch");
  return response.data;
}
