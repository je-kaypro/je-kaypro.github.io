import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, Button, IconButton, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
  header: {
    fontFamily: 'Sexy Beachy',
    fontSize: 48,
    color: 'cyan',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 0,
    padding: theme.spacing(3),
  },
  link: {
    width: '128px',
    height: '128px',
    padding: '10%',
    margin: theme.spacing(1),
    border: '4px solid white',
    borderRadius: '50%',
    textTransform: 'none',
  },

  icon: {
    fontSize: 60,
    color: 'cyan',
  },
  iconPlaceholder: {
    color: 'cyan',
  },
}));

const Online = ({ data: { online } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader classes={{ title: classes.header }} title="Find me online" />
      <CardContent className={classes.container}>
        <div>
          {
          online.map(({ app, link, Icon }, index) => {
            const reactKey = `${app}-link-${index}`;
            return (
              <Button
                variant="outlined"
                color="secondary"
                component="a"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                key={reactKey}
                className={classes.link}
              >
                <IconButton>
                  {
                    Icon
                      ? <Icon className={classes.icon} />
                      : <span className={classes.iconPlaceholder}>{app}</span>
                  }
                </IconButton>
              </Button>
            );
          })
        }
        </div>
      </CardContent>
    </Card>
  );
};

Online.propTypes = {
  data: PropTypes.shape({
    online: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Online;
