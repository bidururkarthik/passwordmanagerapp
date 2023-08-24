import {Component} from 'react'
import './Password.css'

class Password extends Component {
  render() {
    const {passwordlist, ondeletechange, showPassword} = this.props
    const {id, website, username, password} = passwordlist

    const ondelete = () => {
      ondeletechange(id)
    }

    return (
      <li className="list_container">
        <div className="password_history_list_container">
          <div className="user_first_capital_letter_container">
            {username[0].toUpperCase()}
          </div>
          <div>
            <p>{website}</p>
            {showPassword ? (
              <p>{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="start"
              />
            )}
          </div>
          <button type="button" className="delete_button" onClick={ondelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
              className="delete_image"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default Password
