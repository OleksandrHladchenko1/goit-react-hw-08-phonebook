import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from '../../redux/selector';
import * as reducers from '../../redux/reducers';
import s from './ContactList.module.css';

export default function ContactsList() {
  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const onDelete = (id) =>
    dispatch(reducers.deleteContact(id));

  return (
    <div>
      <ul className={s.list}>
                {contacts.map(({ id, name, number }) => (
                  <li key={id} className={s.list_item}>
                    <span className={s.name}>{name}</span>
                    <span className={s.number}>{number}</span>
                    <button type="button" id={id} onClick={() => onDelete(id)} className={s.button}>Delete</button>
                  </li>
                  
                )
                )}
      </ul>
    </div>)
}

