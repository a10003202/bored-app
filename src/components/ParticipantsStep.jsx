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
        className="text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  )
}