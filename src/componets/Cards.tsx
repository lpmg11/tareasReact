import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards(props: any) {
  const { tarea } = props;

  let color = tarea.prioridad == "3" ?  "red" : tarea.prioridad == "2" ? "yellow": "green";

  return (
    <div className="card">
      <Card sx={{ maxWidth: "300px" }}  style={{borderTopColor:color , borderTopStyle:"solid", borderTopWidth:"5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tarea.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tarea.descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            ver más
          </Button>
          <Button size="small" color="primary">
            Editar
          </Button>
          <Button size="small" color="primary">
            Eliminar
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
