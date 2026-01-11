function userDataSubmit(req, res) {
  res.write(`
        <form acttion ="/submit" method = "post">
        <input type="text" placeholder="enter name" name="name"/>
        <input type="email" placeholder="enter email" name="email"/>
        <button>Submit</button>
        </form>
        
        `);
}

module.exports = userDataSubmit;
