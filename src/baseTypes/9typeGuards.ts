//typeof
type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}


//in дозволяє перевірити наявність властивості в об'єкті

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type AdminOrEmployee = Admin | Employee;

function printDetails(obj: AdminOrEmployee) {
  console.log(`Name: ${obj.name}`);

  if ("privileges" in obj) {
    console.log(`Privileges: ${obj.privileges.join(", ")}`);
  }

  if ("startDate" in obj) {
    console.log(`Start Date: ${obj.startDate}`);
  }
}
//instanceof   оператор instanceof для роботи з класами, перевіряючи, чи є об'єкт екземпляром конкретного класу
class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

// Define your type

type Vehicle = Car | Truck;

// Create your instances

const carInstance = new Car();
const truckInstance = new Truck();

// Function to use vehicle

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(carInstance);
useVehicle(truckInstance);
//User-Defined Type Guards