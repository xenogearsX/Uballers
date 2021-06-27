import './Select.css'

const Select = option => {
  const handleChange = e => option.filter(e.target.value)
  return (
    <select className='select' onChange={handleChange}>
      <option value=''>Tous les terrains</option>
      <option value='public'>Terrains publics</option>
      <option value='private'>Terrains privés</option>
    </select>
  )
}

export default Select
