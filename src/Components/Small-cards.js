import './Small-cards.scss';
import { ReactComponent as IconMenu } from '../img/icon-ellipsis.svg';
import data from '../data.json';

function SmallCards({ time }) {
  const cards = data.map((obj, idx) => {
    return (
      <div className="small-cards" key={idx}>
        <div className="infos-container">
          <div className="info-container">
            <div className="title">
              <span>{obj.title}</span>
              <IconMenu />
            </div>
            <div className="statistic">
              <span className="hours">{obj.timeframes[time].current}hrs</span>
              <span className="last-week">
                last week - {obj.timeframes[time].previous}hrs
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{cards}</>;
}

export default SmallCards;
