import "./style.css";
import viceImage from "./assets/vice.jpg";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>MovieTime</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main>
        <section className="movie">

          <div className="poster">
            <img src={viceImage} alt="The Super Parental Guardians" />
          </div>

          <div className="movie-info">
            <p className="showing">NOW SHOWING</p>

            <h2>The Super Parental Guardians</h2>

            <p className="description">
              A Filipino comedy movie starring Vice Ganda.
              Enjoy a fun and entertaining movie experience
              with family and friends.
            </p>

            <p>
              <strong>Genre:</strong> Comedy
            </p>

            <p>
              <strong>Starring:</strong> Vice Ganda
            </p>

            <p>
              <strong>Language:</strong> Filipino
            </p>

            <button>Book Now</button>
          </div>

        </section>

        <section className="schedule">
          <h2>Today's Showtimes</h2>

          <div className="times">
            <button>10:00 AM</button>
            <button>1:00 PM</button>
            <button>4:00 PM</button>
            <button>7:00 PM</button>
            <button>9:30 PM</button>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 MovieTime</p>
      </footer>

    </div>
  );
}

export default App;