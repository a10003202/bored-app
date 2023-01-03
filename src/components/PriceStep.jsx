import React from "react";

export const PriceStep = ({formData, setFormData}) => {

  const handleChangePrice = (event) => {
    setFormData({...formData, maxprice: event.target.value})
  };

  return (
    <div>
      <input
        type="text"
        id="price"
        name="price"
        onChange={handleChangePrice}
        value={formData.maxprice}
        autoComplete="off"
        className="form-input-indigo"
      />
    </div>
  )
}