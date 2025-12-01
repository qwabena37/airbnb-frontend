import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get("http://127.0.0.1:8000/properties/")
      .then(response => {
        setProperties(response.data.results); // DRF paginated response uses `results`
        setLoading(false);
      })
      .catch(err => {
        setError("Error fetching properties");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Available Properties</h1>
      {properties.length === 0 && <p>No properties found.</p>}
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>City: {property.city}</p>
            <p>Available: {property.available ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesList;
