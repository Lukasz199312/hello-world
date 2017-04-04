import { Router } from "express";
import * as express from "express";

export class IndexRouter {
     router : Router;

    constructor() {
        this.router = express.Router();
        this.create();
    }

    public create() {
        this.router.get('/', function(req, res, next) {
            res.render('index', { title: 'Express' });
    });
    
    }
}