import { FC } from 'react'
import { ReactComponent as House } from 'assets/images/house.svg'
import { ReactComponent as Marker } from 'assets/images/marker.svg'
import CardImg from 'assets/images/slider1.png'

interface PropertyCardProps {
  title: string;
  type: string;
  location: string;
  className: string;
  iro: boolean;
  rentalYield: string;
}
const PropertyCard: FC<PropertyCardProps> = ({ title, type, location, iro, rentalYield, className }) => (
  <div className={`property__card ${className}`}>
    {iro
      ? <div className="property__card__marker">{`Rental Yield ${rentalYield}`}</div>
      : <div className="property__card__blur">Coming Soon</div>
    }
    <img src={CardImg} alt="" className={`property__card__image ${iro ? '' : 'property__card__image--blur'}`} />
    <div className="property__card__body">
      <div className="property__card__title">
        <h3>{title}</h3>
      </div>
      <div className="property__card__info">
        <span><House /> {type}</span>
        <span><Marker /> {location}</span>
      </div>
      <div className="property__card__actions">
        <button className={`under-write ${iro ? '' : 'under-write--disabled'}`}>Underwrite IRO</button>
        <button className={`commit ${iro ? '' : 'commit--disabled'}`}>Commit to IRO</button>
      </div>
    </div>
  </div>
)

export default PropertyCard
