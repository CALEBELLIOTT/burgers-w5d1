


let fakeBurgersDb = {
  burgers: [
    {
      numberOfPatties: 2,
      bacon: true,
      cheese: 'american'
    },
    {
      numberOfPatties: 3,
      bacon: false,
      cheese: 'swiss'
    }
  ]


}

class BurgersService {
  postBurger(data) {
    fakeBurgersDb.burgers.push(data)
    return fakeBurgersDb.burgers
  }


  getBurgers() {
    return fakeBurgersDb.burgers
  }

  deleteBurger(patties) {
    fakeBurgersDb.burgers = fakeBurgersDb.burgers.filter(b => b.numberOfPatties != patties)
    return ("no more of that patty type")
  }

}


export const burgersService = new BurgersService()