import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteSocialNetwork} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteButton = () => {
    deleteSocialNetwork(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <div className="new-container">
          <div className="time-part">
            <p className="time">{timeAccessed}</p>
          </div>
          <div className="logo">
            <img src={logoUrl} className="image" alt="domain logo" />
          </div>
          <div className="social-platform-name">
            <p className="logoName">{title}</p>
          </div>
          <div className="domain">
            <p className="titleUrl">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="delete-button"
            onClick={onDeleteButton}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
