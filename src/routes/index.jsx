import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Activation from "../pages/Activation";
import Home from "../pages/Home";
import SignUpEntryData from "../pages/SignUpEntryData";
import Login from "../pages/Login";
import LoginForgotPassword from "../pages/LoginForgotPassword";
import PlaylistList from "../pages/PlaylistsList";
import Search from "../pages/Search";
import PlaylistContent from "../pages/PlaylistContent";
import SingUpPickAvatar from "../pages/SignUpPickAvatar";
import SignUpDemographics from "../pages/SignUpDemographics";
import ArtistProfile from "../pages/ArtistProfile";
import FullscreenPlayerPage from "../pages/FullscreenPlayer";
import Landing from "../pages/Landing";
import LoginRecoverPasswordSent from "../pages/LoginRecoverPasswordSent";
import Page404 from "../pages/Page404";
import Settings from "../pages/Settings";
import SettingsChangePassword from "../pages/SettingsChangePassword";
import FullscreenQueue from "../pages/FullScreenQueue";
import PlaylistEdit from "../pages/PlaylistEdit";
import PlaylistCreate from "../pages/PlaylistsCreate";
import SearchResults from "../pages/SearchResults";
import SettingSignOut from "../pages/SettingsSignOut";
import SettingsStats from "../pages/SettingsStats";
import MiniPlayerAndNavContainer from "../containers/MiniPlayerAndNavContainer";
import SignUpCheckEmail from "../pages/SignUpCheckEmail";

const Routes = () => {
  return (
    <BrowserRouter>
      <MiniPlayerAndNavContainer />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/activate" component={Activation} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/playlist" component={PlaylistList} />
        <Route exact path="/playlist/edit" component={PlaylistEdit} />
        <Route exact path="/playlist/create" component={PlaylistCreate} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/results" component={SearchResults} />
        <Route exact path="/playlist-content" component={PlaylistContent} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={LoginForgotPassword} />
        <Route
          exact
          path="/recover-password"
          component={LoginRecoverPasswordSent}
        />
        <Route exact path="/signup" component={SignUpEntryData} />
        <Route exact path="/signup/avatar" component={SingUpPickAvatar} />
        <Route
          exact
          path="/signup/demographic"
          component={SignUpDemographics}
        />
        <Route exact path="/signup/check" component={SignUpCheckEmail} />
        <Route exact path="/artist" component={ArtistProfile} />
        <Route exact path="/player" component={FullscreenPlayerPage} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/settings/stats" component={SettingsStats} />
        <Route exact path="/signout" component={SettingSignOut} />
        <Route
          exact
          path="/settings/change-password"
          component={SettingsChangePassword}
        />
        <Route exact path="/queue" component={FullscreenQueue} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
