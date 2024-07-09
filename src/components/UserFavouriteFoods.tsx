import React from 'react'

type UserFavouriteFoodsProps = { favouriteFoods: Array<string> | null | undefined }

export function UserFavouriteFoods({ favouriteFoods }: UserFavouriteFoodsProps) {
  return (
    <section id="favourite-foods">
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
