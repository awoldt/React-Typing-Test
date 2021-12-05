import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; //allows react-bootstrap to work properly, applies to entire application

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
