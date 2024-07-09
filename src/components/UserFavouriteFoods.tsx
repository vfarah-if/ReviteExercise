import React from 'react'
// REMARKS: Had to give it a name <filename>.[module.css] or  <filename>.[module.scss] to use this
import styles from './demo-class.module.css'

type UserFavouriteFoodsProps = {
  favouriteFoods: Array<string> | null | undefined
}

export function UserFavouriteFoods({
  favouriteFoods,
}: UserFavouriteFoodsProps) {
  return (
    <section id="favourite-foods" className={styles['foodsTitle']}>
      <b>Favourite Foods:{!favouriteFoods && 'None given'}</b>
      <ul>
        {favouriteFoods &&
          favouriteFoods.map((favouriteFood, index) => (
            <li key={index}>{favouriteFood}</li>
          ))}
      </ul>
    </section>
  )
}
