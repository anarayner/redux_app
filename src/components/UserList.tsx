import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/actions-creators/users";
import {useActions} from '../hooks/useActions'

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state=> state.user)
    const {fetchUsers} = useActions()
    useEffect(()=>{
        fetchUsers()
    },[])
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user =>
                <div style={{fontSize: '20px'}}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;
