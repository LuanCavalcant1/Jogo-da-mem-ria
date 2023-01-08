
import { Grid } from '../../components/Grid'
import { cards} from '../../data/cards'
import './styles.css'


export const App = () => {
 
  return (
    <div className="app">
     <Grid cards={cards}/>
    </div>
  )
}


