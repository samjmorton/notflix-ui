import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import {useEffectOnce} from '@utilities/useEffectOnce';
import {getUser} from '@redux/actions/getUserAction';

const codeStyle = {
  background: '#ebebeb',
  width: 400,
  padding: 10,
  border: '1px solid grey',
  marginBottom: 10,
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column' as 'column',
  marginTop: 200,
};

const ShowReduxState = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(getUser());
  });
  const state = useSelector((state) => state);

  return (
    <div style={containerStyle}>
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </div>
  );
};

export default ShowReduxState;
