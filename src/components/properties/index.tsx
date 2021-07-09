import PropertyCard from "./card"
import PropertyTitle from "./title"
import properties from 'data/properties.json'
import './styles.scss'

const Properties = () => {
  return (
    <>
      <PropertyTitle />
      <div className="properties__container">
        {properties.map(property => (
          <PropertyCard
            title={property.name}
            location={property.location}
            type={property.type}
            iro={property.iro}
            rentalYield={property.rentalYield}
            className={property.iro ? '': 'property__card--comming-soon'}
          />
        ))}
      </div>
    </>
  )
}

export default Properties
