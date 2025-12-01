import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/properties/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ marginTop: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Properties
      </Typography>
      {properties.length === 0 ? (
        <Typography>No properties found.</Typography>
      ) : (
        <Grid container spacing={4}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    property.image ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={property.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {property.description}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Price: ${property.price}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Location: {property.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PropertiesPage;
