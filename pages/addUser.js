import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../firebase/ firebaseConfig";
import { Header } from "./header";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
} from "@mui/material";
import Link from "next/link";

const dbInstance = collection(database, "users");

const AddUser = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "" && age !== "") {
      addDoc(dbInstance, {
        firstName: firstName,
        lastName: lastName,
        Age: age,
      });
      router.push("/accountPage");
    } else {
      console.log("Something went wrong...");
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <Box sx={{ py: 3 }}>
        <Link href="/accountPage">
          <Button size="large" sx={{ mr: 3 }} variant="outlined">
            Back
          </Button>
        </Link>
      </Box>
      <div>
        <Box
          sx={{
            backgroundColor: "background.default",
            minHeight: "100%",
            p: 3,
          }}
        >
          <Container maxWidth="sm">
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 400,
                  p: 4,
                }}
              >
                <h1 style={{ textAlign: "center" }}>Add New Data</h1>
                <Box
                  sx={{
                    flexGrow: 1,
                    mt: 3,
                  }}
                >
                  <form onSubmit={handleSave}>
                    <TextField
                      fullWidth
                      label="First Name"
                      margin="normal"
                      name="firstname"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      margin="normal"
                      name="lastname"
                      type="text"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Age"
                      margin="normal"
                      name="age"
                      type="text"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />

                    <Box sx={{ mt: 2 }}>
                      <Button
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Add
                      </Button>
                    </Box>
                  </form>
                </Box>
                <Divider sx={{ my: 3 }} />
              </CardContent>
            </Card>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default AddUser;
