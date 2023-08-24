/* eslint-disable no-unused-vars */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Password from './component/Password'

import './App.css'

class App extends Component {
  state = {
    passwordlist: [],
    website: '',
    username: '',
    password: '',
    showPassword: false,
    searchinput: '',
  }

  onwebsite = event => {
    this.setState({website: event.target.value})
  }

  onusername = event => {
    this.setState({username: event.target.value})
  }

  onpassword = event => {
    this.setState({password: event.target.value})
  }

  onchangeadd = event => {
    event.preventDefault()
    const {website, username, password, passwordlist} = this.state
    const newpassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState({
      passwordlist: [...passwordlist, newpassword],
      website: '',
      username: '',
      password: '',
    })
  }

  onchangedelete = id => {
    const {passwordlist} = this.state
    this.setState({passwordlist: passwordlist.filter(each => each.id !== id)})
  }

  togglePasswordsDisplay = () => {
    this.setState(prestate => ({showPassword: !prestate.showPassword}))
  }

  onchangesearch = event => {
    this.setState({searchinput: event.target.value})
  }

  getpasswordlist = () => {
    const {passwordlist, searchinput} = this.state
    const searchedResults = passwordlist.filter(each =>
      each.website.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return searchedResults
  }

  render() {
    const {
      website,
      username,
      password,
      passwordlist,
      showPassword,
      searchinput,
    } = this.state
    const searchedResults = this.getpasswordlist()

    return (
      <div className="bg_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />

        <div className="password-container">
          <form className="add_newPassword_container">
            <h1 className="add_new_password_heading">Add new Password</h1>

            <div className="search_input_container">
              <div className="searchimage_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="search_image"
                />
              </div>
              <input
                type="text"
                className="inputuser"
                placeholder="Enter Website"
                onChange={this.onwebsite}
                value={website}
              />
            </div>
            <br />

            <div className="search_input_container">
              <div className="searchimage_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="search_image"
                />
              </div>
              <input
                type="text"
                className="inputuser"
                placeholder="Enter Username"
                onChange={this.onusername}
                value={username}
              />
            </div>
            <br />

            <div className="search_input_container">
              <div className="searchimage_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="search_image"
                />
              </div>
              <input
                type="password"
                className="inputuser"
                placeholder="Enter Password"
                onChange={this.onpassword}
                value={password}
              />
            </div>

            <div className="add_container">
              <button
                type="submit"
                className="addbutton"
                onClick={this.onchangeadd}
                data-testid="delete"
              >
                add
              </button>
            </div>
          </form>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password_manager_image"
            />
          </div>
        </div>

        <div className="password-container_history">
          <div className="password-element-container">
            <div className="rectangle_your_password-div">
              <h1 className="your-password">Your Passwords</h1>
              <div className="rectangle-div">
                <p>{passwordlist.length}</p>
              </div>
            </div>

            <div className="search_container">
              <div className="searchimage_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search_image"
                />
              </div>

              <input
                type="search"
                className="inputuser"
                placeholder="Enter search"
                onChange={this.onchangesearch}
                value={searchinput}
              />
            </div>
          </div>
          <hr />

          <div className="checkbox_container">
            <input
              type="checkbox"
              onChange={this.togglePasswordsDisplay}
              value="checkbox"
            />
            <p className="show_password">Show passwords</p>
          </div>
          {searchedResults.length > 0 ? (
            <ul className="newpassword_history_container">
              {searchedResults.map(prestate => (
                <Password
                  passwordlist={prestate}
                  key={prestate.id}
                  ondeletechange={this.onchangedelete}
                  showPassword={showPassword}
                />
              ))}
            </ul>
          ) : (
            <>
              <div className="no_password_image_container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no_password_image"
                />
              </div>
              <p>No Passwords</p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default App
