import { useEffect } from "react";
import Card from "../Components/Card"
import { useDispatch, useSelector} from "react-redux";
import { showAllListings } from "../features/dashboard/dashboardSlice";


const Dashboard = () => {

  const dispatch = useDispatch()
  const {allListings, isLoading} = useSelector((state)=> state.dashboard)

    useEffect(()=>{
        dispatch(showAllListings())
    }, [])    

  return (
    <div className="dashboard-outer-container">  
        <h3 className='title'>Cars for rent</h3>
        <div className="dashboard-container">
            <div id="cardsHeader" className="header-card center">
                <p>Car Details</p>
                <p>Rent per day</p>
            </div>
            <div className="cards-container">
              {
                  allListings.map((item)=>{
                      return <Card key={item._id} {...item}/>
                  })
              }
            </div>
        </div>
    </div>
  )
}

export default Dashboard