import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/product.routes'

//morgan es un middeare

const app = express()

app.set('pkg',pkg);

app.use(morgan('dev'));

app.get('/', (req,res) =>{
    res.json({
        project: app.get('pkg').name,
        author: app.get('pkg').author,
        varsion: app.get('pkg').version

    });
})

app.use('/products', productsRoutes);

export default app;