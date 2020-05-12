
type  DialogType={
    id:number
    name:string
}

let initialState= [
{id: 1, name: "Friend1"},
{id: 2, name: "Friend2"},
{id: 3, name: "Friend3"},


] as Array<DialogType>;

 const sidebarReducer=(state=initialState,action:any)=>{





    return state;
    
}
export default sidebarReducer;