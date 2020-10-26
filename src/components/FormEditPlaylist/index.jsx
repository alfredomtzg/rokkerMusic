/* eslint-disable no-console */
import React, { useState } from "react";
import { CancelButton, TxtSaveButton, DeletePlaylistButton } from "../Buttons";
import { SmallFilledCard } from "../Cards";
import { FormContainer, TextInput, TextAreaInput } from "../Forms/light-styles";
import StyledEditPlaylistBox from "./style";

export default function EditPlaylistForm() {
  // EditPlaylist Values
  const [valuesEditPlaylist, setValuesEditPlaylist] = useState({
    playlistTitle: "",
    playlistDescription: "",
  });
  // function handleChange to EditPlaylist
  const handleChangeEditPlaylist = (event) => {
    setValuesEditPlaylist({
      ...valuesEditPlaylist,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitEditPlaylist
  const handleSubmitEditPlaylist = (event) => {
    event.preventDefault();
    console.log(valuesEditPlaylist);
  };

  return (
    <FormContainer onSubmit={handleSubmitEditPlaylist}>
      <StyledEditPlaylistBox>
        <div className="CancelSaveButtons">
          <CancelButton type="submit" />
          <TxtSaveButton type="submit" />
        </div>
        <div className="EditTitleAndDelete">
          <SmallFilledCard />
          <TextInput
            id="playlistTitle"
            name="playlistTitle"
            placeholder="My playlist"
            value={valuesEditPlaylist.playlistTitle}
            onChange={handleChangeEditPlaylist}
          />
          <DeletePlaylistButton />
        </div>
        <div className="PlaylistDescription">
          <TextAreaInput
            id="playlistDescription"
            type="text"
            name="playlistDescription"
            maxLength="120"
            placeholder="This is my current playlist description"
            value={valuesEditPlaylist.playlistDescription}
            onChange={handleChangeEditPlaylist}
          />
        </div>
      </StyledEditPlaylistBox>
    </FormContainer>
  );
}
