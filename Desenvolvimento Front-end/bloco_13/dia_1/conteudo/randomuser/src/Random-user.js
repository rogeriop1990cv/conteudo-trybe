import React from 'react'
import User from './User'

export default class Random extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: []
    }
  }

  shouldComponentUpdate(_, state) {
    const { user: {results} } = state;
    if(results){
      const [{dob: {age}}]  = results;
      if(age > 50) return false
    }
    return true
  }
  render() {
    const {loading, user} = this.state;
    return (
      <section>
        {loading ? this.loading() : <User user={ user } />}
      </section>
    )
  }

  loading = () => {
    return <span> Loading... </span>
  }

  requesRandomUser = () => {
    this.setState({ loading: true }, async () => {
      const request = await fetch('https://api.randomuser.me/')
      const user = await request.json();
      this.setState({ user: user, loading: false });
    })
  }
  componentDidMount() {
    this.requesRandomUser()
  }
}
