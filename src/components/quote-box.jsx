import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Fade } from "@mui/material";

class Quote extends React.Component {
  render() {
    return (
      <Fade in={this.props.checked}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.props.background,
          }}
        >
          <Card sx={{ maxWidth: 700, p: 4, m: 4 }}>
            <CardContent>
              <div className="quote-text" id="text">
                <Typography
                  color={`${this.props.color}.dark`}
                  variant="h3"
                  gutterBottom
                  align="center"
                >
                  <FormatQuoteRoundedIcon sx={{ fontSize: 80 }} />
                  {this.props.quote}
                </Typography>
              </div>
              <div className="quote-author" id="author">
                <Typography
                  align="right"
                  color={`${this.props.color}.dark`}
                  variant="body1"
                >
                  - {this.props.author}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Grid container spacing={10}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color={this.props.color}
                    href="http://twitter.com/intent/tweet"
                    size="small"
                    target="_blank"
                  >
                    <TwitterIcon color="white" />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color={this.props.color}
                    size="small"
                    onClick={this.props.getQuote}
                  >
                    New quote
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Box>
      </Fade>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    author: state.author,
    color: state.color,
    background: state.background,
    checked: true,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuote: () => dispatch({ type: "NEW_QUOTE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
