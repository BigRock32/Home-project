
import './App.css'
import { restaurants } from './materials/mock'

function App() {

  return (
    <div className='restaurants'>
      {
        restaurants.map(({ id, name, menu, reviews }) => (
          <div className='restaurants__item' key={id}>

            <h2>{name}</h2>

            <h3>Меню</h3>
            <ul>
              {menu.map((dish) => (
                <li key={dish.id}>
                  {dish.name}
                </li>
              ))}
            </ul>

            <h3>Отзывы</h3>
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <h4>{review.user}</h4>
                  {review.text}
                </li>
              ))}
            </ul>

            <div className="divider" />
          </div>
        )
        )}
    </div>
  )
}

export default App
