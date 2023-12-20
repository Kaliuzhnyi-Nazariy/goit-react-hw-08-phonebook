import { useDispatch } from 'react-redux';
import { InputStyled } from './Filter.styled';
import { addFilter } from 'redux/Contacts/fitlerSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.filter);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <p>Find contacts by name</p>
      <InputStyled
        onChange={e => dispatch(addFilter(e.target.value))}
      ></InputStyled>
    </div>
  );
};
