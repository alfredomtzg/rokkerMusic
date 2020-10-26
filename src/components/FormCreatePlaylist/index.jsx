/* eslint-disable no-console */
import React, { useState } from "react";
import { SaveButton } from "../Buttons";
import {
  FormContainer,
  TextLabel,
  TextInput,
  TextAreaInput,
} from "../Forms/light-styles";

export default function CreatePlaylistForm() {
  // CreatePlaylist Values
  const [valuesCreatePlaylist, setValuesCreatePlaylist] = useState({
    playlistTitle: "",
    playlistDescription: "",
  });
  // function handleChange to CreatePlaylist
  const handleChangeCreatePlaylist = (event) => {
    setValuesCreatePlaylist({
      ...valuesCreatePlaylist,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitCreatePlaylist
  const handleSubmitCreatePlaylist = (event) => {
    event.preventDefault();
    console.log(valuesCreatePlaylist);
  };

  return (
    <FormContainer onSubmit={handleSubmitCreatePlaylist}>
      <TextLabel htmlFor="playlistTitle">
        <h4>Title</h4>
      </TextLabel>
      <TextInput
        id="playlistTitle"
        type="text"
        name="playlistTitle"
        value={valuesCreatePlaylist.playlistTitle}
        onChange={handleChangeCreatePlaylist}
      />
      <h6>The playlist must have a title</h6>

      <TextLabel htmlFor="playlistDescription">
        <h4>Description</h4>
      </TextLabel>
      <TextAreaInput
        id="playlistDescription"
        type="text"
        name="playlistDescription"
        maxLength="120"
        value={valuesCreatePlaylist.playlistDescription}
        onChange={handleChangeCreatePlaylist}
      />
      <h6>120 characters only</h6>

      <div className="SaveBtn">
        <SaveButton type="submit" />
      </div>
    </FormContainer>
  );
}
