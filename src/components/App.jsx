import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hook';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import {PrivateRoute} from './Routes/PrivatRoute';
import { refreshUser } from 'redux/auth/operations';

// const HomePage = lazy(() => import('Pages/Home/Home'));

const HomePage = lazy(() => import("pages/Home"))
const RegisterPage = lazy(() => import("pages/RegisterPage"))
const LoginPage = lazy(() => import("pages/LoginPage"))
const Contacts = lazy(() => import('pages/Contacts'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);


  
  return (
    isRefreshing ? (<b>Refresh User...</b>) :
      (<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
         
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>)
  );
};
