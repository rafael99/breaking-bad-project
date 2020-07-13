import React from 'react';
import { dateEnToBr, itemStatus } from '../../helpers/FormatterHelper';

const CharacterItem = ({ item }) => {
  

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Ator:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Apelido:</strong> {item.nickname}
            </li>
            <li>
              <strong>Aniversário:</strong> {dateEnToBr(item.birthday)}
            </li>
            <li>
              <strong>Estado:</strong> {itemStatus(item.status)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
