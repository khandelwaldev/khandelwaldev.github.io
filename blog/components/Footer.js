import { FaInstagram, FaYoutubeSquare, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  // Get the current year and day
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = weekdays[currentDate.getDay()];

  return (
        <>
        <div className="footer">
            <div className="social">
                <a href="https://instagram.com/_slyro" target="_blank" ><FaInstagram /></a>
                <a href="https://youtube.com/@SLYRO" target="_blank" ><FaYoutubeSquare /></a>
                <a href="https://github.com/khandelwaldev" target="_blank" ><FaGithub /></a>
                <a href="https://twitter.com/_slyro" target="_blank" ><FaTwitter /></a>
            </div>
            <br></br>
            <div className="copyright">
                <a href="/" className="link ul-effect copy">Dev Khandelwal &copy; {currentYear}</a>
                <span className="hide">
                <span>•</span>
                <a href="https://qod.shakiltech.com/" className="link ul-effect">Have a good {currentDay}!</a>
                <span>•</span>
                <a href="/contact" className="link ul-effect">Contact</a>
                </span>
            </div>
        </div>
        </>
    )
}