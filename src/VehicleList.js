const VehicleList = ({vehicles}) => {
    return ( 
        <div className="outside">
            {vehicles.map(vehicle => (
            <div className={vehicle.background} key={vehicle.id} >
              <div className="container">
                <div className="inner">
                  <img src={vehicle.icon} alt={vehicle.type} />
                  <h2>{vehicle.type}</h2>
                  <p>{vehicle.copy}</p>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
     );
}
 
export default VehicleList;