/* eslint-disable no-console */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { SaveButton } from "../Buttons";
import {
  FormContainer,
  TextLabel,
  TextInput,
  TextAreaInput,
} from "../Forms/light-styles";
import { API, PlayList } from "../../route/axios";
import { Context } from "../../utils/Context";

export default function CreatePlaylistForm() {
  const { user } = useContext(Context);
  const history = useHistory();
  // CreatePlaylist Values
  const [valuesCreatePlaylist, setValuesCreatePlaylist] = useState({
    name: "",
    description: "",
  });
  // error messange
  const [error, setError] = useState(false);
  // function handleChange to CreatePlaylist
  const handleChangeCreatePlaylist = (event) => {
    setValuesCreatePlaylist({
      ...valuesCreatePlaylist,
      [event.target.name]: event.target.value,
    });
  };

  // Create a new PlayList whit axios
  const createNewPlayList = async () => {
    await API.post(PlayList, valuesCreatePlaylist, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setValuesCreatePlaylist({
          name: "",
          description: "",
        });
        setError(false);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function HandleSubmitCreatePlaylist
  const handleSubmitCreatePlaylist = (event) => {
    event.preventDefault();
    createNewPlayList();
  };

  return (
    <FormContainer onSubmit={handleSubmitCreatePlaylist}>
      <TextLabel htmlFor="playlistTitle">
        <h4>Title</h4>
      </TextLabel>
      <TextInput
        type="text"
        name="name"
        value={valuesCreatePlaylist.name}
        onChange={handleChangeCreatePlaylist}
      />
      {error ? <h6>The playlist must have a title</h6> : null}

      <TextLabel htmlFor="playlistDescription">
        <h4>Description</h4>
      </TextLabel>
      <TextAreaInput
        type="text"
        name="description"
        maxLength="120"
        value={valuesCreatePlaylist.description}
        onChange={handleChangeCreatePlaylist}
      />
      <small>120 characters only</small>

      <div className="SaveBtn">
        <SaveButton type="submit" />
      </div>
    </FormContainer>
  );
}
