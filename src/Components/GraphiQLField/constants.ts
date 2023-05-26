export const DEF_VALUE_REQUEST = `query char($page: Int, $filter: FilterCharacter){
  characters(page: $page, filter: $filter){
    results{
      id
      name
      type
    }    
  }
}`;