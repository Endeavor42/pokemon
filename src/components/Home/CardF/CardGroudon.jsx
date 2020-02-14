import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function CardFade() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const styles = {
    width: "20%"
  };
  const format = {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <Card style={styles} className={classes.root}>
      <CardContent style={format}>
        <Typography
          className={classes.title}
          onClick={() => console.log(window.innerHeight)}
          color="textSecondary"
          gutterBottom
        >
          Legendary Pokemon
        </Typography>
        <Typography variant="h5" component="h2">
          Groudon
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Ground
        </Typography>
        <a href="http://pokemondb.net/pokedex/groudon">
          <img
            src="https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif"
            alt="Groudon"
          />
        </a>
        <Typography variant="body2" component="p">
          An immensely powerful Pokémon
          <br />
        </Typography>
      </CardContent>

      <CardActions style={format}>
        <Button onClick={() => console.log(window.innerHeight)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
