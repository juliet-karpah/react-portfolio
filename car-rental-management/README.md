# Restaurant Management App

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

