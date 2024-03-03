import { useContext } from "react";
import { PasswordsContext } from "./store";
import { MdDelete } from "react-icons/md";

function SavedPasswords(){
    const {passwords}=useContext(PasswordsContext)
    const {deleteP}=useContext(PasswordsContext);
    const handleDelete=(password)=>{
        deleteP(password);
    }

    return <div className="saved-passwords-container">
        <h1>Here, need face detection to show the saved passwords</h1>
        <ul className="list-group saved-passwords" >
  <li class="list-group-item active" aria-current="true">Saved passwords</li>
  {passwords.map((password)=><li class="list-group-item">{password} <MdDelete className="delete-icon" onClick={()=>{handleDelete(password)}}></MdDelete></li>)}
</ul>
    </div>
}
export default SavedPasswords;