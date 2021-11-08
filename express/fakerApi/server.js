const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const faker = require('faker');

class User {
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            'street': faker.address.streetName, 
            'city': faker.address.cityName(), 
            'state': faker.address.state(), 
            'zipCode': faker.address.zipCode(), 
            'country': faker.address.country()}
    }
}

app.get('/api/users/new', (req,res)=>{
    let newUser = new User()
    res.json({
        results: newUser
    })
})

app.get('/api/company/new', (req,res)=>{
    let newCompany = new Company()
    res.json({
        results: newCompany
    })
})

app.get('/api/users_and_company/new', (req,res)=>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({
        results: newUser, newCompany
    })
})






app.listen(port, ()=>console.log(`listening on port ${port}`));