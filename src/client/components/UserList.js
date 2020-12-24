import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/index'

export default () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  console.log('user data', userData);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log('list user');
  }, [])
  return <div>
    this is a list user :
    {userData.map(item => <div>{item.name}</div>)}
  </div>
}