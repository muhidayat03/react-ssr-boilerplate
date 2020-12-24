import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/index';


const loadData = (store) => {
  return store.dispatch(fetchUsers());
}

const UserListPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user); 
  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [])
  return <div>
    this is a list user :
    {userData.map((item, i) => <div key={i}>{item.name}</div>)}
  </div>
}

export default { loadData, component: UserListPage };