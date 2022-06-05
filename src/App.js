import { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import HelloWorld from './routes/hw/index';
import ProfilePage from './routes/profile/index';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';
import { WhiteTheme, HudTheme } from './themes/theme';
import ProjectPage from './routes/Project';
import SettingsPage from './routes/SettingsPage';
import VerifyPage from './routes/VerifyPage';
import CreateProfile from './routes/CreateProfile/index';
import CreateProject from './routes/CreateProject/index';
import ExploorePage from './routes/hw/ExploorePage';
import Chat from './routes/Chats/index';
import ProtectedRoute from './store/protectedRoute'
import UnProtectedRoute from './store/unProtectedRoute'
import AuthContext from './store/auth-context';

function App() {
  const authContext = useContext(AuthContext);

  return (
    <ThemeProvider theme={HudTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={
            <UnProtectedRoute isLoggedIn={authContext.isLoggedIn}>
              <LoginPage />
            </UnProtectedRoute>
          }></Route>

          <Route path="/signup" exact element={
            <UnProtectedRoute isLoggedIn={authContext.isLoggedIn}>
              <SignupPage />
            </UnProtectedRoute>
          }>
          </Route>

          <Route path="/feed" exact element={
            <ProtectedRoute isLoggedIn={authContext.isLoggedIn}>
              <HelloWorld />
            </ProtectedRoute>
          }></Route>
          <Route path="/explore" exact element={
            <ProtectedRoute isLoggedIn={authContext.isLoggedIn}>

              <ExploorePage />
            </ProtectedRoute>}></Route>

          <Route path="/profile" element={<ProfilePage />}>
            <Route path="/profile/:tab" element={<ProfilePage />}></Route>
          </Route>

          <Route path="/project" element={<ProjectPage />}>
            <Route path="/project/:tab" element={<ProfilePage />}></Route>
          </Route>

          <Route path="/settings" element={
            <ProtectedRoute isLoggedIn={authContext.isLoggedIn}>
              <SettingsPage /></ProtectedRoute>} />
          <Route path="/create" element={<CreateProfile />}>
            <Route path="/create/:id" element={<CreateProfile />} />
          </Route>

          <Route path="/createProject" element={<CreateProject />}>
            <Route path="/createProject/:id" element={<CreateProject />} />
          </Route>

          <Route path="/chat" element={
            <ProtectedRoute isLoggedIn={authContext.isLoggedIn}>
              <Chat /></ProtectedRoute>}>
            <Route path="/chat/:id" element={<Chat />} />
          </Route>

          <Route path="/verify" element={
            <UnProtectedRoute isLoggedIn={authContext.isLoggedIn}>
              <VerifyPage />
            </UnProtectedRoute>

          } />
          {/* <Route path="/" exact element={<Navigate replace to="/tc" />} /> */}
          {/* <Route path="tc/*" element={<Home />} /> */}
        </Routes >
      </BrowserRouter >
    </ThemeProvider >
  );
}
//  make sure to put a * at the end of the parent route's path. Otherwise, the parent route won't match the URL when it is longer than the parent route's path, and your descendant <Routes> won't ever show up.
export default App;
