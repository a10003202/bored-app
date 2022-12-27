import React from "react";

export const ActivityStep = ({activity, type, participants, price}) => {

  return (
    <div>
      <h1>{activity}</h1>
      <h2>Tipo: {type}</h2>
      <h2>Participantes: {participants}</h2>
      <h2>Presupuesto: {price}</h2>
    </div>
  )
}