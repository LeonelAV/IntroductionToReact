import React from 'react';
import Title from './Title'
import ChooseOptions from './ChooseOptions'
import VehicleTable from './VehicleTable'
import VehicleType from './VehicleType'


function App(){
  return (
  <div>
    <Title title="Welcome to React Transportation" description="The best place to buy vehicles online"/>
    <ChooseOptions options={["All", "Cars", "Trucks", "Convertibles"]} />
    <VehicleType type="Cars" />
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2013} model="A" price="$32000"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2011} model="B" price="$4400"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2016} model="B" price="$15500"/>
    <VehicleType type="Trucks"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2014} model="D" price="$18000"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2013} model="E" price="$5200"/>
    <VehicleType type="Convertibles"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2009} model="F" price="$2000"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2010} model="G" price="$6000"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2012} model="H" price="$12500"/>
    <VehicleTable columns={["Year", "Model", "Price", "Button"]} year={2017} model="M" price="$50000"/>
  </div>
)
}


export default App