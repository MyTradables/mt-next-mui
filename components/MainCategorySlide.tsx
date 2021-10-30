import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const MainCategorySlide = ({ categoryData }: any) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={0} sx={{ m: 10 }}>
        {categoryData.map((category: any, id: number) => (
          <div key={id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="194"
                image={category.image}
                alt={category.title}
              />
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Grid>
    </Box>
  );
};

export default MainCategorySlide;
