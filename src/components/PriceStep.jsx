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
        className="text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  )
}