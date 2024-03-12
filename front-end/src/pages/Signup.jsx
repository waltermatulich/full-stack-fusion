

function Signup(){
    return(
        <div>
            <h1>Sign Up</h1>
            <form>
        <label for="fname">First name:</label>
        <br />
        <input type="text" required id="fname" name="fname" />
        <br />
        <label for="emaills">Email:</label>
        <br />
        <input type="email" required id="email" name="emaills" />
        <label for='message'></label>
        <br/>
        <button type="submit">Submit</button>
      </form>
        </div>
    )
}
export default Signup