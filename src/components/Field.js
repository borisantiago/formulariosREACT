const Field = ({ type, value, label, name }) => {
    return (
        <div className="ed-item form__item">
          <label htmlFor = { type }>
            { label }
            <input 
              type={ type }
              name={ name } 
              id={ type } 
              defaultValue={ value } 
              // onChange={changeData} 
            />
          </label>
        </div>
    )
}

export default Field