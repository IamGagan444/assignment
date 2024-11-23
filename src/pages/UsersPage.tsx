
import { useEffect, useState } from "react";
import { User } from "../types/allTypes";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UserList from "./UserList";
export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchCompany = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://673736a9aafa2ef222330e54.mockapi.io/users`
      );
      setUsers(result.data);
      console.log(users);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  if (loading) {
    return <div className="text-4xl bg-white z-50 h-svh flex items-center justify-center ">loading...</div>;
  }
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-10">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        Users List
        </motion.h1>
        <motion.p
          className="text-center text-green-400  text-lg text-muted-foreground"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        Goto:<Link to={"/"}>Company page</Link>
        </motion.p>
       
        <div className="md:w-1/2 md:mx-auto mx-4 ">
          <UserList companies={users} />
        </div>
      </div>
    </main>
  );
}
