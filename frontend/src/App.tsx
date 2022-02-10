import 'App.scss';
import { ErrorComponent } from 'components/presentational/molecules/Error/ErrorComponent';

const data = [
  {
    errorMsg: '[ERROR] Date is required',
  },
  {
    errorMsg: '[ERROR] Date is required',
  },
  {
    errorMsg: '[ERROR] Date is required',
  },
];

export const App = () => (
  // {
  //   const [state, setState] = useState('');

  //   return (
  <>
    <div style={{ width: 350, margin: 20 }}>
      <ErrorComponent errors={data} />
    </div>
  </>
);
// };

export default App;
