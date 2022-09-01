import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { database } from "../firebase/ firebaseConfig";
import { Header } from "./header";
import { Box, Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Link from "next/link";

const dbInstance = collection(database, "users");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AccountPage = () => {
  const [userData, setUserData] = useState("");
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState("");
  const [value, setvalue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getNotes = async () => {
    const data = await getDocs(dbInstance);
    const getData = data.docs.map((doc) => doc);
    setUserData(getData);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleDelete = async (id) => {
    if (id !== "") {
      await deleteDoc(doc(database, "users", id));
      getNotes();
    } else {
      console.log("something went wrong...");
    }
  };
  const handleUpdateSave = async (e) => {
    e.preventDefault();
    const updation = doc(database, "users", updateData.id);
    await setDoc(updation, {
      firstName: firstName === "" ? updateData.data().firstName : firstName,
      lastName: lastName === "" ? updateData.data().lastName : lastName,
      Age: age === "" ? updateData.data().Age : age,
    });
    handleClose();
    getNotes();
  };

  const handleUpdate = async (data) => {
    if (data !== null) {
      setUpdateData(data);
      setvalue(data.data());
      handleOpen();
    } else {
      console.log("Oopss...");
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Firebase Data</h1>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleUpdateSave}>
              <TextField
                fullWidth
                // label="First Name"
                margin="normal"
                name="firstname"
                defaultValue={value?.firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                fullWidth
                // label="Last Name"
                margin="normal"
                name="lastname"
                type="text"
                defaultValue={value?.lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <TextField
                fullWidth
                // label="Age"
                margin="normal"
                name="age"
                type="text"
                defaultValue={value?.Age}
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
        </Modal>
      </div>
      <Box sx={{ py: 3 }}>
        <Link href="/addUser">
          <Button size="large" sx={{ mr: 3 }} variant="outlined">
            Add User
          </Button>
        </Link>
      </Box>
      {userData &&
        userData.map((data) => (
          <div key={data}>
            <hr />
            <p>FirstName: {data?.data()?.firstName}</p>
            <p>LastName: {data?.data()?.lastName}</p>
            <p>Age: {data?.data()?.Age}</p>
            <Button
              type="button"
              variant="contained"
              color="info"
              onClick={() => {
                handleUpdate(data);
              }}
            >
              Update
            </Button>
            &emsp;
            <Button
              type="button"
              variant="contained"
              color="error"
              onClick={() => {
                handleDelete(data.id);
              }}
            >
              Delete
            </Button>
            <hr />
          </div>
        ))}
      <div></div>
    </>
  );
};

export default AccountPage;
