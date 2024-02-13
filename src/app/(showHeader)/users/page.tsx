"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
const User = () => {
    const router = useRouter();
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        console.log(res);
        setUsersList(res.data.users);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="container-fluid page-wrapper">
      <div className="row ">
        {usersList.map((users: any, idx: number) => (
          <div className="col-md-4" key={idx}>
            <Card sx={{ maxWidth: 345}} className="card-wrapper">
              <CardMedia
                component="img"
                alt="green iguana"
                // height="140" // Set the desired height
                // width="100" // Set the desired width
                className="cardMediaImage"
                image={'static/images/generic_profile_image.webp'}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="title-tx">
                  {`${users.firstName} ${users.maidenName} ${users.lastName}`}
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className='viewBtn' onClick={()=>router.push(`/users/${users.id}`)}>View Profile</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
