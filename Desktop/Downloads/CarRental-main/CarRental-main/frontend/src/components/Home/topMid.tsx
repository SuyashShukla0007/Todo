import Card from '../global/Card';
import './topMid.css'
import img from '../../assets/porsche.jpg'
const TopMid = () => {
  const cardData = [
    {
      name: "Bugatti Veyron",
      brand: "Bugatti",
      seats: 2,
      fuel: "Petrol",
      milage: 8,
      location: "Los Angeles, CA",
      priceBuy: 1500000,
      priceRent: 2000,
      carNo: "BUG1234",
      YearOfManufacture: 2015,
      description: "A luxury sports car with stunning performance and design.",
      owner: "John Doe",
      isRented: false,
      image: [img],
      Rating: {
        stars: 5,
        comment: "Amazing car, thrilling experience!"
      }
    },
    {
      name: "Ferrari LaFerrari",
      brand: "Ferrari",
      seats: 2,
      fuel: "Hybrid",
      milage: 10,
      location: "Miami, FL",
      priceBuy: 1400000,
      priceRent: 1500,
      carNo: "FER1234",
      YearOfManufacture: 2017,
      description: "A high-performance hybrid sports car with a sleek design.",
      owner: "Jane Smith",
      isRented: true,
      image: ["https://via.placeholder.com/300x200?text=Ferrari"],
      Rating: {
        stars: 4,
        comment: "Great car, but a bit pricey."
      }
    },
    {
      name: "Lamborghini Aventador",
      brand: "Lamborghini",
      seats: 2,
      fuel: "Petrol",
      milage: 6,
      location: "New York, NY",
      priceBuy: null,
      priceRent: 1800,
      carNo: "LAM1234",
      YearOfManufacture: 2018,
      description: "An iconic supercar known for its power and agility.",
      owner: "Robert Johnson",
      isRented: false,
      image: ["https://via.placeholder.com/300x200?text=Lamborghini"],
      Rating: {
        stars: 5,
        comment: "Incredible performance and design."
      }
    },
    {
      name: "McLaren P1",
      brand: "McLaren",
      seats: 2,
      fuel: "Hybrid",
      milage: 5,
      location: "San Francisco, CA",
      priceBuy: 1500000,
      priceRent: 2200,
      carNo: "MCL1234",
      YearOfManufacture: 2019,
      description: "A plug-in hybrid supercar with exceptional performance.",
      owner: "Alice Davis",
      isRented: false,
      image: ["https://via.placeholder.com/300x200?text=McLaren"],
      Rating: {
        stars: 5,
        comment: "Unmatched driving experience!"
      }
    },
    {
      name: "Porsche 911 Turbo",
      brand: "Porsche",
      seats: 4,
      fuel: "Petrol",
      milage: 12,
      location: "Chicago, IL",
      priceBuy: null,
      priceRent: 1200,
      carNo: "POR1234",
      YearOfManufacture: 2020,
      description: "A legendary sports car with unmatched driving dynamics.",
      owner: "Charlie Brown",
      isRented: true,
      image: ["https://via.placeholder.com/300x200?text=Porsche"],
      Rating: {
        stars: 4,
        comment: "Great car for city drives."
      }
    }
     
  ];

  return (
    <div className="card-list">
      {cardData.map((data, index) => (
        <Card
        key={index}
        image={data.image}
        name={data.name}
        brand={data.brand}
        seats={data.seats}
        fuel={data.fuel}
        milage={data.milage}
        location={data.location}
        priceBuy={data.priceBuy}
        priceRent={data.priceRent}
        carNo={data.carNo}
        YearOfManufacture={data.YearOfManufacture}
        description={data.description}
        owner={data.owner}
        isRented={data.isRented}
        Rating={data.Rating}
        />
      ))}
    </div>
  );
}

export default TopMid;
