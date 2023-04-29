import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { mul, add, reset } from '../../store/counterSlice';

const Welcome = () => {
  const dispatch = useAppDispatch();
  const number = useAppSelector((store) => store.counter.number);
  return (
    <>
      <h2>Welcome page content must be here</h2>
      <h3>redux store work example</h3>
      <div>Current number: {number}</div>
      <button type='button' onClick={() => dispatch(add(2))}>
        add
      </button>
      <button type='button' onClick={() => dispatch(mul(3))}>
        mul
      </button>
      <button type='button' onClick={() => dispatch(reset())}>
        reset
      </button>
    </>
  );
};
export default Welcome;
