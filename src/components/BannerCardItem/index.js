// Write your code here.
import './index.css'

const CrardList = props => {
  const {bannerlist} = props
  const {headerText, descreption, className} = bannerlist

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{descreption}</p>
        <button className="show-more-btn" type="button">
          show more
        </button>
      </div>
    </li>
  )
}
export default CrardList
