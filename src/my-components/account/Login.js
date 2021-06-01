import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Box,
  Typography,
  Checkbox,
  Card,
  CardContent,
  FormControl
} from '@material-ui/core';

import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import hero9 from '../../assets/images/hero-bg/hero-9.jpg';
import { connect } from "react-redux";
import { login } from "../../redux/actions";
import { useForm } from "react-hook-form";

import AccountCircle from '@material-ui/icons/AccountCircle';
import LoadingButton from '../common/LoadingButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Redirect } from "react-router-dom";
import { SuspenseLoading } from '../../Routes';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Login = (props) => {

  const { from } = (props.location.state) || {
    from: { pathname: '/', search: props.location.search }
  };

  const { register, handleSubmit, errors } = useForm();

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };

  const onSubmit = (data) => {
    const { username, password } = data;
    props.login(username, password);
  };

  if (props.auth.isAuthenticated) {
    return <Redirect to={from} />;
  }

  if (props.auth.isLoading) {
    return <SuspenseLoading />
  }

  return (
    <Fragment>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={5}
                      className="d-flex align-items-center">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-plum-plate min-vh-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + hero9 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
                          <div className="bg-composed-wrapper--content p-5">
                            <div className="text-white mt-3">
                              <h1 className="display-4 my-3 font-weight-bold">
                                {/*Why should you create an account?*/}
                              </h1>
                              <p className="font-size-md mb-0 text-white-50">
                                {/*A free hour, when our power of choice is*/}
                                {/*untrammelled and when nothing prevents.*/}
                              </p>
                              <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={8}
                      lg={7}
                      className="d-flex align-items-center">
                      <Container maxWidth="sm">
                        <h3 className="display-4 mb-2 font-weight-bold">
                          Login with your credentials
                        </h3>
                        <p className="font-size-lg mb-5 text-black-50">
                          You already have an account? Fill in the fields below to login into your existing dashboard.
                        </p>
                        <Card className="mx-0 bg-secondary mt-0 w-100 p-0 mb-4 border-0">
                          <CardContent className="p-3">
                            <div className="text-center text-black-50 mb-3">
                              <span>Login with your credentials</span>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="px-5">
                              <div className="mb-3">
                                <FormControl error={!!errors.username} className="w-100">
                                  <InputLabel htmlFor="input-with-icon-adornment">
                                    Username
                                  </InputLabel>
                                  <Input
                                    fullWidth
                                    name="username"
                                    inputRef={register({
                                      required: 'Ce champ est requis',
                                    })}
                                    error={!!errors.username}
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <AccountCircle />
                                      </InputAdornment>
                                    }
                                  />
                                  {errors.username &&
                                    <FormHelperText>{errors.username.message}</FormHelperText>
                                  }
                                </FormControl>
                              </div>
                              <div className="mb-3">
                                <FormControl error={!!errors.password} className="w-100">
                                  <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                  </InputLabel>
                                  <Input
                                    name="password"
                                    inputRef={register({
                                      required: 'Ce champ est requis',
                                    })}
                                    error={!!errors.password}
                                    id="standard-adornment-password"
                                    fullWidth
                                    type="password"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <LockTwoToneIcon />
                                      </InputAdornment>
                                    }
                                  />
                                  {errors.password &&
                                    <FormHelperText>{errors.password.message}</FormHelperText>
                                  }
                                </FormControl>
                              </div>
                              {/* <div className="w-100">
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={checked1}
                                      onChange={handleChange1}
                                      value="checked1"
                                      color="primary"
                                    />
                                  }
                                  label="Se souvenir de moi"
                                />
                              </div> */}
                              <div className="text-center">
                                {/*<Button*/}
                                {/*  color="primary"*/}
                                {/*  variant="contained"*/}
                                {/*  size="large"*/}
                                {/*  className="my-2">*/}
                                {/*  Sign in*/}
                                {/*</Button>*/}
                                <LoadingButton
                                  loading={props.auth.isSigning}
                                  variant="contained"
                                  title="Sign in"
                                  size="large"
                                  className="my-2" />
                              </div>
                            </form>
                          </CardContent>
                        </Card>
                      </Container>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Login.prototype = {
  auth: PropTypes.object,
  login: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { login })(Login);


