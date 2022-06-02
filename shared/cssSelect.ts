export const customStyles = {
    menu: (provided : any, state : any) => ({
      ...provided,
      color: 'white',      
      backgroundColor: '#111827',
      padding: 10,
      borderRadius: '15px',
    }),
  
    control: (provided: any, { selectProps: {  }}) => ({
      ...provided,
      color: 'white',
      backgroundColor: "#111827",
    }),
  
    singleValue: (provided : any, state : any ) => ({
        ...provided,

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