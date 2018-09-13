var express = require('express');
const bodyParser = require('body-parser');

var orderRouter = express.Router();
const db = require('../config/db.config');
const Order =  db.orders;

orderRouter.use(bodyParser.json());
orderRouter.route('/')
.get((req,res)=>{
    Order.findAll().then(order=>{
        res.json(order.sort(function(c1, c2){return c1.id - c2.id}));
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"err", details:err});
    });
});

module.exports = orderRouter