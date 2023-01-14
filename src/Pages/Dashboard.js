import Card from "../Components/Card"


const Dashboard = () => {
  return (
    <div className="dashboard-outer-container">  
        <h3 className='title'>Cars for rent</h3>
        <div className="dashboard-container">
            <div id="cardsHeader" className="header-card center">
                <p>Car Details</p>
                <p>Rent per day</p>
            </div>
            <div className="cards-container">
                <Card/>
                <Card/>

            </div>
        </div>
    </div>
  )
}

export default Dashboard