import { motion } from "framer-motion";

import { User } from "../types/allTypes";
import { styled } from "@stitches/react";
import { UserDialog } from "../components/UserDialog";

interface CompanyListProps {
  companies: User[];
}

const Card = styled("div", {
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  overflow: "hidden",
});

const CardHeader = styled("div", {
  padding: "1rem",
  borderBottom: "1px solid #e5e7eb",
});

const Badge = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  padding: "0.25rem 0.5rem",
  borderRadius: "9999px",
  fontSize: "0.75rem",
  fontWeight: "500",
  backgroundColor: "#e5e7eb",
  color: "#374151",
  marginTop: "0.25rem",
});
export default function UserList({ companies }: CompanyListProps) {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {companies.map((company, index) => (
        <motion.div
          key={company.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="my-4"
          >
            <Card>
              <CardHeader>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                    <div>
                      <h2
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "600",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {company.name}
                      </h2>
                      <div className="flex space-x-4">
                        <Badge>isAcitve: {company.isActive?"active":"InAcitve"}</Badge>
                        <div className="sm:hidden block">
                          <UserDialog companyId={company.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <UserDialog companyId={company.id} />
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
