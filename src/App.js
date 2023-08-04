import { Header, CardList, Button } from './components';
import './scss/app.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <CardList />
      <Button addClass={'button-app'}>Загрузить еще</Button>
    </div>
  );
}

export default App;
