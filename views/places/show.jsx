const React = require('react')
const Def = require('../default')

function show (data) {
      let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      let rating = (
        <h3 className='inactive'>
          Not yet rated
        </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '⭐️'
        }
        rating = (
          <h3>
            {stars} stars
          </h3>
        )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
              <form method="POST" action="/places">
                <div className='form-group'>
                    <label for="author">Place Name</label>
                    <input type='text' className='form-control' id="author" name="author" required/>
                </div>
                <div className='form-group'>
                    <label For="content">Content</label>
                    <input type='textarea' className='form-control' id="content" name="content" />
                </div>
                <div class="rating">
                  <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" />
                  <label for="star5">☆</label>
                  <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" />
                  <label for="star4">☆</label>
                  <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" />
                  <label for="star3">☆</label>
                  <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" />
                  <label for="star2">☆</label>
                  <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" />
                  <label for="star1">☆</label>
                  <div class="clear"></div>
                </div>
                <div className='form-group'>
                    <label For="rant">Rant</label>
                    <input type='checkbox' className='form-control' id="rant" name="rant" />
                </div>
                <div>
                  <input type='submit' vlaue='Submit'></input>
                </div>
            <input className='btn btn-primary' type="submit" value="Add Place" />
            </form>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state}.</p>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>    
          </main>
        </Def>
    )
}

module.exports = show