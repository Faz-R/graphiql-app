import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface Person {
  image: string;
  name: string;
}

const PersonCard = ({ image, name }: Person) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ maxHeight: "300px", height: "300px" }}
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
