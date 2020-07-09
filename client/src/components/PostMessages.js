import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../actions/postMessage";
import {
  Grid,
  Paper,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import PostMessagesForm from "./PostMessagesFrom";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  btn: {
    margin: theme.spacing(1),
  },
}));

const PostMessages = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessagesForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {list.list.map((item, id) => (
              <Fragment key={id}>
                <ListItem>
                  <ListItemText>
                    <Typography variant="h5">{item.title}</Typography>
                    <div>{item.message}</div>
                    <div style={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.btn}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.btn}
                      >
                        Delete
                      </Button>
                    </div>
                  </ListItemText>
                </ListItem>
                <Divider compnent="li" />
              </Fragment>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PostMessages;
