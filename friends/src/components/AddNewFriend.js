import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

import { postData, getData } from '../store/actions';

export default function AddNewFriend() {
  const [newFriend, setNewFriend] = useState({});
  const dispatch = useDispatch();
  const isPosting = useSelector(state => state.isPosting);

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewFriend({ ...newFriend, id: Date.now() });
    dispatch(postData(newFriend));
  };

  useEffect(() => dispatch(getData()), [isPosting]);

  return (
    <div className='friend-form'>
      <h2>Add New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='...name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='age'
          placeholder='...age'
          onChange={handleChange}
        />
        <input
          type='text'
          name='email'
          placeholder='...email'
          onChange={handleChange}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
}