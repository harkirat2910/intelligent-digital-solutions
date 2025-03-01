import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ImgMediaCard() {

  const cards = [
    {
      id: 1,
      image: "/img/svg/noTextLogo.svg", // Ensure this file exists in /public/img/svg/
      title: "E-Hospital",
      text: "Simplify patient care through a digital platform with virtual consultations, electronic record management, and secure communication.",
      link: "https://www.e-hospital.ca/",
    },
    {
      id: 2,
      image: "/img/icons/chatbot.jpg", // Change this if the second product has a different image
      title: "Noor-Bot",
      text: "An AI-powered chatbot for instant healthcare support, providing 24/7 assistance for patients and healthcare professionals.",
      link:  "https://noor-bot.com/", // Change if Noor-Bot has a different website
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Our Products
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 2 }}>
        {cards.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={card.title} height="140" image={card.image} />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.text}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open(card.link, "_blank")}>
                Visit
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
