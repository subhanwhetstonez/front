"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Container,
  Paper,
  Skeleton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ButtonComp from "@/components/universal/button";
import { theme } from "@/components/theme";
import fetchUsers from "@/components/importInfo"; // Importing fetchUsers function
import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers(); // Call the fetch function
        setUsers(fetchedUsers); // Set the fetched data
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error(error);
        setError("Failed to fetch users");
        setLoading(false); // Stop loading on error
      }
    };

    getUsers(); // Trigger the data fetching
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{ height: "100vh" }}>
          <Box>
            <Typography variant="h2" textAlign={"center"} fontWeight={800}>
              HELLO WORLD!
            </Typography>
            <Typography variant="h6" textAlign={"justify"} fontWeight={100}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nobis aliquid, facere reiciendis quasi eveniet. Ipsa
              aliquam laborum dignissimos nulla iure eaque doloremque! Ab sequi
              minima commodi quia, quas placeat.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "32px" }}>
            <ButtonComp btnVarient={"contained"} btnTxt={"Hello"}></ButtonComp>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "32px" }}>
            {loading ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: "3rem", width: "30%" }}
              />
            ) : error ? (
              <p>{error}</p>
            ) : (
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    <li>{user.fullname}</li>
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
