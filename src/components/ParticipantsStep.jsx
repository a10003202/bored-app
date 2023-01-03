import React from "react";

export const ParticipantsStep = ({formData, setFormData}) => {

  const handleChangeParticipants = (event) => {
    setFormData({...formData, participants: event.target.value})
  };

  return (
    <div>
      <input
        type="text"
        id="participants"
        name="participants"
        onChange={handleChangeParticipants}
        value={formData.participants}
        autoComplete="off"
        className="form-input-indigo"
      />
    </div>
  )
}