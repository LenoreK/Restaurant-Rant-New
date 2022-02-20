const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='../images/Cake.jpg' alt='chocolate cake' />
                <div>
                  Photo by <a href='https://www.pexels.com/@abhinavcoca'>Abhinav Goswami</a> on <a href='https://www.pexels.com/'>Pixels</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

module.exports = home