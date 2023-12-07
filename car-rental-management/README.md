# Car rental Management App
The goal of this project is to create an admin page for a car rental company. The frontend is built with React and React query. The data and image store is handled by Supabase. 

### What are the core functionalities?
- Login with Admin credentials
- Add and archive cars.
- View Current and Past Reservations
- View Renters
-  Send and receive messages to/from Renters
-  View a dashboard for total revenue, available cars, and Total reservations.

### Demo
Please use the link below to view the deployed application. 
[Volonte](https://react-portfolio-seven-iota-74.vercel.app/)



## User Interface
### Pages

Login Page

![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/login-page.png)

Cars Page

![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/cars-page.png)

Renters Page

![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/renters-page.png)

Messages Page

![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/messages-page.png)

Dashboard Page

![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/dashboard-page.png)

### Forms

Add Car Form

![](https://github.com/juliet-karpah/react-portfolio/blob/main/assets/add-car-form.png)


## Code Samples

### Cars API Calls

```
import { supabase } from "../supabase";

async function getCars() {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("archived", false);

  if (error) {
    throw new Error(error);
  }
  return data;
}

async function getCount() {
  const { count } = supabase
    .from("countries")
    .select("*", { count: "exact", head: true });
  return count;
}

async function archiveCar(id) {
  const { data, error } = await supabase
    .from("cars")
    .update({ archived: true })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error);
  }

  return data;
}

async function addCar(data) {
  const { data: res, error } = await supabase
    .from("cars")
    .insert([
      {
        name: data["Name"],
        maxCapacity: parseInt(data["Capacity"]),
        type: data["Type"],
        model: data["Model"],
        price: parseInt(data["Price"]),
      },
    ])
    .select();
  if (error) {
    throw new Error("Could not create new car", error);
  }

  return res;
}

export { getCars, getCount, archiveCar, addCar };
```

