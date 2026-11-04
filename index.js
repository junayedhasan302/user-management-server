import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    res.send('Users are comming soon;')
})
app.listen(PORT, ()=>{
    console.log(`Server is running from port ${PORT}`);
});


const users = [
    {id:1, name:'Junayed Hasan', email: 'junayed@email.com'},
    {id:2, name:'Habib', email: 'habib@email.com'},
    {id:3, name:'Saklayen', email: 'saklayen@email.com'},
    {id:4, name:'Morshed', email: 'morshed@email.com'},
]

app.get('/users',(req, res)=>{
    res.send(users);
})