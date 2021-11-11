import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid, Link } from "@mui/material";
import { Category } from "../utils/types";
import NextLink from "next/link";

const MainCategorySlide = ({ categoryData }: any) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{mt: 10}}>
            <Grid container spacing={0}>
        {categoryData.map((category: Category) => (
           <Grid item md={4} key={category.id} zeroMinWidth>
           <NextLink href={`/categories/${category.name}`} passHref>
         <Link>
           <Card sx={{ maxWidth: 345, margin: '10px', boxShadow: 3,backgroundColor: '#e7f7ff' }}>
             <CardMedia
               component="img"
               height="194"
               image={category.image}
               alt={category.name}
             />
             <CardContent sx={{padding: '10px !important'}}>
               <Typography variant="h6" color="text.secondary">
                 {category.name}
               </Typography>
             </CardContent>
           </Card>
           
         </Link>
         </NextLink>
         </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainCategorySlide;
