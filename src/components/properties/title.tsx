import { ReactComponent as List } from 'assets/images/list.svg'
import { ReactComponent as Card } from 'assets/images/card.svg'
import './styles.scss'

const PropertyTitle = () => (
  <div className="property">
    <div className="property__title">
      Properties List
    </div>
    <div className="property__actions">
      <button>
        <List />
      </button>
      <button className="active">
        <Card />
      </button>
    </div>
  </div>
  
)

export default PropertyTitle
