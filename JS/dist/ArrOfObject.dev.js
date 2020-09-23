"use strict";

var mobile = [{
  name: "Iphone SE",
  bramd: "Apple",
  features: {
    os: "ios",
    mem: 3
  },
  accessories: ["charger", "headphones"]
}, {
  name: "Note 20 Ultra",
  bramd: "Samsung",
  features: {
    os: "android",
    mem: 6
  },
  accessories: ["WirelessCharger", "headphones"]
}, {
  name: "Surface",
  bramd: "Microsoft",
  features: {
    os: "windows",
    mem: 4
  },
  accessories: ["charger", "headphones"]
}, {
  name: "Xperia 1",
  bramd: "Sony",
  features: {
    os: "android",
    mem: 3
  },
  accessories: ["charger", "headphones"]
}];

for (var i in mobile) {
  console.log(mobile[i]);
}