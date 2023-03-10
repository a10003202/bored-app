import React from "react";
import categories from '../data/categories'

export const CategoryStep = ({formData, setFormData}) => {

  const handleChangeCategory = event => {
    setFormData({...formData, type: event.target.value});
  };

  return (
    <div className="flex flex-row flex-wrap justify-between items-baseline">
      {
        categories.map(category => (
          <div className="flex items-center" key={category.key}>
            <input id={category.key} className="form-radio-indigo" type="radio" value={category.key} checked={formData.type === category.key} name="category" onChange={handleChangeCategory}/>
            <label htmlFor={category.key} className="ml-2 block text-sm font-medium text-gray-700">{category.name}</label>
          </div>
        ))
      }
    </div>
  )
}