export const customStyles = {
    menu: (provided : any, state : any) => ({
      ...provided,
      color: 'white',      
      backgroundColor: '#111827',
      padding: 10,
      borderRadius: '15px',
      width: '150px',
    }),
  
    control: (provided: any, { selectProps: {  }}) => ({
      ...provided,
      color: '#fff',
      backgroundColor: "#111827",
      width: '150px'
    }),
  
    singleValue: (provided : any, state : any ) => ({
        ...provided,
        color: '#fff',
    }),

    dropdownIndicator: (provided : any, state : any ) => ({
        ...provided,
        color: 'white',
    }),

    input: (provided : any, state : any ) => ({
        ...provided,
        color: 'white',
    }),
  }