
import './App.css'
import { restaurants } from './materials/mock'

function App() {

  return (
    <div className='restaurants'>
      {
        restaurants.map((item) => (
          <div className='restaurants__item' key={item.id}>

            <h2>{item.name}</h2>

            <h3>Меню</h3>
            <ul>
              {item.menu.map((item) => (
                <li key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>

            <h3>Отзывы</h3>
            <ul>
              {item.reviews.map((item) => (
                <li key={item.id}>
                  <h4>{item.user}</h4>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="devider"></div>
          </div>
        )
        )}
    </div>
  )
}

export default App
