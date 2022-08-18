const Select = ({ value, label, name }) => {
    return (
        <div className="ed-item form__item">
          <label htmlFor = { name }>
            { label }
            <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>
          </label>
        </div>
    )
}

export default Select