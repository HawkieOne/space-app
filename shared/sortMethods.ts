    export const compareOldest = (a : any, b : any) => {
    if ( a.founded < b.founded ){
        return -1;
    }
    if ( a.founded > b.founded ){
        return 1;
    }
    return 0;
  }

  export const compareNewest = (a : any, b : any) => {
    if ( a.founded > b.founded ){
        return -1;
    }
    if ( a.founded < b.founded ){
        return 1;
    }
    return 0;
  }

  export const compareAZ = (a : any, b : any) => {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
  }

  export const compareZA = (a : any, b : any) => {
    if ( a.name > b.name ){
        return -1;
    }
    if ( a.name < b.name ){
        return 1;
    }
    return 0;
  }