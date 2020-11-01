/* eslint-disable no-console */
import React, { useState } from "react";
import { SaveButton } from "../Buttons";
import {
  FormContainer,
  TextLabel,
  TextInput,
  TextAreaInput,
} from "../Forms/light-styles";
import { API, newPlayList } from "../../route/axios";

export default function CreatePlaylistForm() {
  // CreatePlaylist Values
  const [valuesCreatePlaylist, setValuesCreatePlaylist] = useState({
    name: "",
    description: "",
  });
  // function handleChange to CreatePlaylist
  const handleChangeCreatePlaylist = (event) => {
    setValuesCreatePlaylist({
      ...valuesCreatePlaylist,
      [event.target.name]: event.target.value,
    });
  };

  // Create a new PlayList whit axios
  const createNewPlayList = async () => {
    await API.post(newPlayList, valuesCreatePlaylist, {
      headers: { token: TOKEN },
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
      <h6>The playlist must have a title</h6>

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
      <h6>120 characters only</h6>

      <div className="SaveBtn">
        <SaveButton type="submit" />
      </div>
    </FormContainer>
  );
}
