import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { SiCplusplus, SiOpenai, SiNodedotjs, SiReact } from "react-icons/si";

const skills = [
  { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: "ChatGPT", icon: <SiOpenai size={40} color="#00A67E" /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#339933" /> },
  { name: "React.js", icon: <SiReact size={40} color="#61DAFB" /> },
];

export default function Skills() {
  return (
    <Box sx={{ textAlign: "center", mt: 14 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Skills
      </Typography>
      {/* Box for layout, using flex to align items */}
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3 }}>
        {skills.map((skill, index) => (
          <Card key={index} sx={{ width: 150, display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
            {/* Card Content */}
            <CardContent sx={{ textAlign: "center" }}>
              {skill.icon}
              <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "medium" }}>
                {skill.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
