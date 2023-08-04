import { Button, CheckBox } from '../components';

export default function CardItem({ car }) {
  const { img, brand, model, engine, transmission, power, cost, economy, VAT, payment } = car;

  return (
    <li className="card">
      <img className="card-img" src={img} alt="Car" width="270" />
      <div className="card-description_name">
        <h3 className="card-title">{brand}</h3>
        <p className="card-title_light">{model}</p>
        <CheckBox />
      </div>
      <p className="card-description_specifications">
        {engine}, {transmission}, {power} л.с.
      </p>

      <div className="card-price">
        <div className="card-price_item">
          <p className="card-price_desc">Стоимость автомобиля (от)</p>
          <p className="card-price_cost">{Number(cost).toLocaleString()} р.</p>
        </div>
        <div className="card-price_item">
          <p className="card-price_desc">Экономия по налогу на прибыль (до)</p>
          <p className="card-price_cost">{Number(economy).toLocaleString()} р.</p>
        </div>
        <div className="card-price_item">
          <p className="card-price_desc">НДС к возмещению из бюджета (до)</p>
          <p className="card-price_cost">{Number(VAT).toLocaleString()} р.</p>
        </div>
      </div>
      <div className="card-payment">
        <div>
          <p className="card-payment_desc">Ежемесячный платеж (от)</p>
          <p className="card-payment_cost">{Number(payment).toLocaleString()} p.</p>
        </div>
        <Button addClass={'button-card'}>Рассчитать график</Button>
      </div>
    </li>
  );
}
