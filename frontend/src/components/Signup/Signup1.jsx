
const Signup1 = ({ name, setName, email, setEmail, password, setPassword }) => {
  return (
	<div className='signup-form-1'>
        <div> Name </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='login-input'
        />
        <div>Email</div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='login-input'
        />
        <div>Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login-input'
        />
      </div>
  )
}

export default Signup1