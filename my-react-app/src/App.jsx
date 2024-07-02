import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import Button from "./Button"
import Student from "./Student"
import UsergreetCondition from "./UserGreetCondition"
import Fruitlist from "./Fruitlist"

function App() {
    return(
      <>
          <Header />
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Button />
          <Student name="Cooper" age="26" isStudent={true}/>
          <Student name="Tom-Cruise" age={60} isStudent={true}/>
          <Student name="Wolverine" age={259} isStudent={false}/>
          <Student /> */}
          <UsergreetCondition isLoggedin={false} name="Cooper"/>
          <Fruitlist />
          <Footer/>
      </>
    )
}

export default App
